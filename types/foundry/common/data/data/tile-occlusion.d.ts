declare module foundry {
    module data {
        /**
         * An embedded data object which defines the properties of a light source animation
         * @property mode     The occlusion mode from CONST.TILE_OCCLUSION_MODES
         * @property alpha    The occlusion alpha between 0 and 1
         * @property [radius] An optional radius of occlusion used for RADIAL mode
         */
        interface TileOcclusion {
            mode: TileOcclusionMode;
            alpha: number;
            radius?: number;
        }
    }
}
