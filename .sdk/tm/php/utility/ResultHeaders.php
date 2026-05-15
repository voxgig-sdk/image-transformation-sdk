<?php
declare(strict_types=1);

// ImageTransformation SDK utility: result_headers

class ImageTransformationResultHeaders
{
    public static function call(ImageTransformationContext $ctx): ?ImageTransformationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
