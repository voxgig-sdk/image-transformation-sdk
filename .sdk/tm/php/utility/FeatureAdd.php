<?php
declare(strict_types=1);

// ImageTransformation SDK utility: feature_add

class ImageTransformationFeatureAdd
{
    public static function call(ImageTransformationContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
