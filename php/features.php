<?php
declare(strict_types=1);

// ImageTransformation SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ImageTransformationFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ImageTransformationBaseFeature();
            case "test":
                return new ImageTransformationTestFeature();
            default:
                return new ImageTransformationBaseFeature();
        }
    }
}
