"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageTransformationError = void 0;
class ImageTransformationError extends Error {
    isImageTransformationError = true;
    sdk = 'ImageTransformation';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.ImageTransformationError = ImageTransformationError;
//# sourceMappingURL=ImageTransformationError.js.map