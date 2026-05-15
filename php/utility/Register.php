<?php
declare(strict_types=1);

// ImageTransformation SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

ImageTransformationUtility::setRegistrar(function (ImageTransformationUtility $u): void {
    $u->clean = [ImageTransformationClean::class, 'call'];
    $u->done = [ImageTransformationDone::class, 'call'];
    $u->make_error = [ImageTransformationMakeError::class, 'call'];
    $u->feature_add = [ImageTransformationFeatureAdd::class, 'call'];
    $u->feature_hook = [ImageTransformationFeatureHook::class, 'call'];
    $u->feature_init = [ImageTransformationFeatureInit::class, 'call'];
    $u->fetcher = [ImageTransformationFetcher::class, 'call'];
    $u->make_fetch_def = [ImageTransformationMakeFetchDef::class, 'call'];
    $u->make_context = [ImageTransformationMakeContext::class, 'call'];
    $u->make_options = [ImageTransformationMakeOptions::class, 'call'];
    $u->make_request = [ImageTransformationMakeRequest::class, 'call'];
    $u->make_response = [ImageTransformationMakeResponse::class, 'call'];
    $u->make_result = [ImageTransformationMakeResult::class, 'call'];
    $u->make_point = [ImageTransformationMakePoint::class, 'call'];
    $u->make_spec = [ImageTransformationMakeSpec::class, 'call'];
    $u->make_url = [ImageTransformationMakeUrl::class, 'call'];
    $u->param = [ImageTransformationParam::class, 'call'];
    $u->prepare_auth = [ImageTransformationPrepareAuth::class, 'call'];
    $u->prepare_body = [ImageTransformationPrepareBody::class, 'call'];
    $u->prepare_headers = [ImageTransformationPrepareHeaders::class, 'call'];
    $u->prepare_method = [ImageTransformationPrepareMethod::class, 'call'];
    $u->prepare_params = [ImageTransformationPrepareParams::class, 'call'];
    $u->prepare_path = [ImageTransformationPreparePath::class, 'call'];
    $u->prepare_query = [ImageTransformationPrepareQuery::class, 'call'];
    $u->result_basic = [ImageTransformationResultBasic::class, 'call'];
    $u->result_body = [ImageTransformationResultBody::class, 'call'];
    $u->result_headers = [ImageTransformationResultHeaders::class, 'call'];
    $u->transform_request = [ImageTransformationTransformRequest::class, 'call'];
    $u->transform_response = [ImageTransformationTransformResponse::class, 'call'];
});
