import { Context } from './Context';
declare class ImageTransformationError extends Error {
    isImageTransformationError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { ImageTransformationError };
