<?php
declare(strict_types=1);

// ImageTransformation SDK exists test

require_once __DIR__ . '/../imagetransformation_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = ImageTransformationSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
