import { ImageTransformationEntityBase } from '../ImageTransformationEntityBase';
import type { ImageTransformationSDK } from '../ImageTransformationSDK';
import type { Control } from '../types';
import type { ImageTransformation, ImageTransformationLoadMatch } from '../ImageTransformationTypes';
declare class ImageTransformationEntity extends ImageTransformationEntityBase<ImageTransformation> {
    constructor(client: ImageTransformationSDK, entopts: any);
    make(this: ImageTransformationEntity): ImageTransformationEntity;
    load(this: any, reqmatch?: ImageTransformationLoadMatch, ctrl?: Control): Promise<ImageTransformationEntity>;
}
export { ImageTransformationEntity };
