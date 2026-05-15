<?php
declare(strict_types=1);

// ImageTransformation SDK utility: prepare_body

class ImageTransformationPrepareBody
{
    public static function call(ImageTransformationContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
