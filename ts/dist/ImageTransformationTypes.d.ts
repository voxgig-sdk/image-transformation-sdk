export interface ImageTransformation {
}
export interface ImageTransformationLoadMatch {
    prompt: string;
    enhance?: boolean;
    height?: number;
    image?: string;
    model?: string;
    nologo?: boolean;
    seed?: number;
    width?: number;
}
