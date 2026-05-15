<?php
declare(strict_types=1);

// ImageTransformation SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ImageTransformationMakeContext
{
    public static function call(array $ctxmap, ?ImageTransformationContext $basectx): ImageTransformationContext
    {
        return new ImageTransformationContext($ctxmap, $basectx);
    }
}
