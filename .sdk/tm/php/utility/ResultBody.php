<?php
declare(strict_types=1);

// ImageTransformation SDK utility: result_body

class ImageTransformationResultBody
{
    public static function call(ImageTransformationContext $ctx): ?ImageTransformationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
