<?php
declare(strict_types=1);

// ImageTransformation SDK base feature

class ImageTransformationBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ImageTransformationContext $ctx, array $options): void {}
    public function PostConstruct(ImageTransformationContext $ctx): void {}
    public function PostConstructEntity(ImageTransformationContext $ctx): void {}
    public function SetData(ImageTransformationContext $ctx): void {}
    public function GetData(ImageTransformationContext $ctx): void {}
    public function GetMatch(ImageTransformationContext $ctx): void {}
    public function SetMatch(ImageTransformationContext $ctx): void {}
    public function PrePoint(ImageTransformationContext $ctx): void {}
    public function PreSpec(ImageTransformationContext $ctx): void {}
    public function PreRequest(ImageTransformationContext $ctx): void {}
    public function PreResponse(ImageTransformationContext $ctx): void {}
    public function PreResult(ImageTransformationContext $ctx): void {}
    public function PreDone(ImageTransformationContext $ctx): void {}
    public function PreUnexpected(ImageTransformationContext $ctx): void {}
}
