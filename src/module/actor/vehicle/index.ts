import { ItemPF2e } from "@item/base";
import { ItemSourcePF2e } from "@item/data";
import { ActiveEffectPF2e } from "@module/active-effect";
import { UserPF2e } from "@module/user";
import { TokenDocumentPF2e } from "@scene";
import { ActorPF2e } from "../base";
import { TokenDimensions, VehicleData, VehicleDimensions, VehicleSource } from "./data";

export class VehiclePF2e extends ActorPF2e {
    static override get schema(): typeof VehicleData {
        return VehicleData;
    }

    get dimensions(): VehicleDimensions {
        return {
            length: this.data.data.details.space.long,
            width: this.data.data.details.space.wide,
            height: this.data.data.details.space.high,
        };
    }

    getTokenDimensions(dimensions: Omit<VehicleDimensions, "height"> = this.dimensions): TokenDimensions {
        return {
            width: Math.max(Math.round(dimensions.width / 5), 1),
            height: Math.max(Math.round(dimensions.length / 5), 1),
        };
    }

    /* Set the prototype token's dimensions according to the vehicle dimensions */
    prepareBaseData(): void {
        super.prepareBaseData();
        if (this.data.token.flags.pf2e.linkToActorSize) {
            const { width, height } = this.getTokenDimensions();
            this.data.token.width = width;
            this.data.token.height = height;
        }
    }

    override async createEmbeddedDocuments(
        embeddedName: "ActiveEffect" | "Item",
        data: PreCreate<foundry.data.ActiveEffectSource>[] | PreCreate<ItemSourcePF2e>[],
        context?: DocumentModificationContext
    ): Promise<ActiveEffectPF2e[] | ItemPF2e[]> {
        for (const datum of data) {
            if (!("type" in datum)) continue;
            if (
                !["weapon", "armor", "equipment", "consumable", "treasure", "backpack", "kit", "action"].includes(
                    datum.type ?? ""
                )
            ) {
                ui.notifications.error(game.i18n.localize("PF2E.vehicle.ItemTypeError"));
                return [];
            }
        }

        return super.createEmbeddedDocuments(embeddedName, data, context);
    }

    protected override async _preUpdate(
        data: DeepPartial<VehicleSource>,
        options: DocumentModificationContext,
        user: UserPF2e
    ): Promise<void> {
        await super._preUpdate(data, options, user);
        if (this.data.token.flags.pf2e.linkToActorSize) {
            const { space } = this.data.data.details;
            const spaceUpdates = {
                width: data.data?.details?.space?.wide ?? space.wide,
                length: data.data?.details?.space?.long ?? space.long,
            };
            const tokenDimensions = this.getTokenDimensions(spaceUpdates);
            mergeObject(data, { token: tokenDimensions });

            if (canvas.scene) {
                const updates = this.getActiveTokens()
                    .filter((token) => token.document.linkToActorSize)
                    .map((token) => ({ _id: token.id, ...tokenDimensions }));
                await TokenDocumentPF2e.updateDocuments(updates, { parent: canvas.scene });
            }
        }
    }
}

export interface VehiclePF2e {
    readonly data: VehicleData;

    createEmbeddedDocuments(
        embeddedName: "ActiveEffect",
        data: PreCreate<foundry.data.ActiveEffectSource>[],
        context?: DocumentModificationContext
    ): Promise<ActiveEffectPF2e[]>;
    createEmbeddedDocuments(
        embeddedName: "Item",
        data: PreCreate<ItemSourcePF2e>[],
        context?: DocumentModificationContext
    ): Promise<ItemPF2e[]>;
    createEmbeddedDocuments(
        embeddedName: "ActiveEffect" | "Item",
        data: PreCreate<foundry.data.ActiveEffectSource>[] | PreCreate<ItemSourcePF2e>[],
        context?: DocumentModificationContext
    ): Promise<ActiveEffectPF2e[] | ItemPF2e[]>;
}
