import * as balance from "./acrobatics/balance.ts";
import * as maneuverInFlight from "./acrobatics/maneuver-in-flight.ts";
import * as squeeze from "./acrobatics/squeeze.ts";
import * as tumbleThrough from "./acrobatics/tumble-through.ts";
import { arcaneSlam } from "./ancestry/automaton/arcane-slam.ts";
import { climb } from "./athletics/climb.ts";
import { disarm } from "./athletics/disarm.ts";
import { forceOpen } from "./athletics/force-open.ts";
import { grapple } from "./athletics/grapple.ts";
import { highJump } from "./athletics/high-jump.ts";
import { longJump } from "./athletics/long-jump.ts";
import { shove } from "./athletics/shove.ts";
import { swim } from "./athletics/swim.ts";
import * as trip from "./athletics/trip.ts";
import { whirlingThrow } from "./athletics/whirling-throw.ts";
import { crawl } from "./basic/crawl.ts";
import { delay } from "./basic/delay.ts";
import { dropProne } from "./basic/drop-prone.ts";
import { escape } from "./basic/escape.ts";
import { interact } from "./basic/interact.ts";
import { leap } from "./basic/leap.ts";
import { ready } from "./basic/ready.ts";
import { release } from "./basic/release.ts";
import { seek } from "./basic/seek.ts";
import { senseMotive } from "./basic/sense-motive.ts";
import { stand } from "./basic/stand.ts";
import { step } from "./basic/step.ts";
import { stride } from "./basic/stride.ts";
import { takeCover } from "./basic/take-cover.ts";
import { tamper } from "./class/inventor/tamper.ts";
import { craft, repair } from "./crafting/index.ts";
import { createADiversion } from "./deception/create-a-diversion.ts";
import { feint } from "./deception/feint.ts";
import { impersonate } from "./deception/impersonate.ts";
import { lie } from "./deception/lie.ts";
import { bonMot } from "./diplomacy/bon-mot.ts";
import { gatherInformation } from "./diplomacy/gather-information.ts";
import { makeAnImpression } from "./diplomacy/make-an-impression.ts";
import { request } from "./diplomacy/request.ts";
import { avoidNotice } from "./exploration/avoid-notice.ts";
import { senseDirection } from "./exploration/sense-direction.ts";
import { track } from "./exploration/track.ts";
import { decipherWriting } from "./general/decipher-writing.ts";
import { subsist } from "./general/subsist.ts";
import { coerce } from "./intimidation/coerce.ts";
import { demoralize } from "./intimidation/demoralize.ts";
import { administerFirstAid } from "./medicine/administer-first-aid.ts";
import { treatDisease } from "./medicine/treat-disease.ts";
import { treatPoison } from "./medicine/treat-poison.ts";
import { commandAnAnimal } from "./nature/command-an-animal.ts";
import { perform } from "./performance/perform.ts";
import { createForgery } from "./society/create-forgery.ts";
import { concealAnObject } from "./stealth/conceal-an-object.ts";
import * as hide from "./stealth/hide.ts";
import * as sneak from "./stealth/sneak.ts";
import { palmAnObject } from "./thievery/palm-an-object.ts";
import { disableDevice } from "./thievery/disable-device.ts";
import { pickALock } from "./thievery/pick-a-lock.ts";
import { steal } from "./thievery/steal.ts";
import { Action } from "@actor/actions/index.ts";
export { ActionMacroHelpers } from "./helpers.ts";
export type { ActionDefaultOptions, SkillActionOptions } from "./types.ts";

export const ActionMacros = {
    // Basic
    escape,
    seek,
    senseMotive,

    // Ancestry
    arcaneSlam,

    // Class
    tamper,

    // Exploration
    avoidNotice,
    senseDirection,
    track,

    // Acrobatics
    balance: balance.legacy,
    maneuverInFlight: maneuverInFlight.legacy,
    squeeze: squeeze.legacy,
    tumbleThrough: tumbleThrough.legacy,

    // Athletics
    climb,
    disarm,
    forceOpen,
    grapple,
    highJump,
    longJump,
    shove,
    swim,
    trip: trip.legacy,
    whirlingThrow,

    // Crafting
    craft,
    repair,

    // Deception
    createADiversion,
    feint,
    impersonate,
    lie,

    // Diplomacy
    bonMot,
    gatherInformation,
    makeAnImpression,
    request,

    // General Skill Actions
    decipherWriting,
    subsist,

    // Intimidation
    coerce,
    demoralize,

    // Medicine
    administerFirstAid,
    treatDisease,
    treatPoison,

    // Nature
    commandAnAnimal,

    // Performance
    perform,

    // Society
    createForgery,

    // Stealth
    concealAnObject,
    hide: hide.legacy,
    sneak: sneak.legacy,

    // Thievery
    palmAnObject,
    disableDevice,
    pickALock,
    steal,
};

export const SystemActions: Action[] = [
    balance.action,
    crawl,
    delay,
    dropProne,
    hide.action,
    interact,
    leap,
    maneuverInFlight.action,
    ready,
    release,
    sneak.action,
    squeeze.action,
    stand,
    step,
    stride,
    takeCover,
    trip.action,
    tumbleThrough.action,
];
