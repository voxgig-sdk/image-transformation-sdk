# ImageTransformation SDK feature factory

from imagetransformation_sdk.feature.base_feature import ImageTransformationBaseFeature
from imagetransformation_sdk.feature.ratelimit_feature import ImageTransformationRatelimitFeature
from imagetransformation_sdk.feature.retry_feature import ImageTransformationRetryFeature
from imagetransformation_sdk.feature.test_feature import ImageTransformationTestFeature
from imagetransformation_sdk.feature.timeout_feature import ImageTransformationTimeoutFeature


_FEATURES = {
    "base": lambda: ImageTransformationBaseFeature(),
    "ratelimit": lambda: ImageTransformationRatelimitFeature(),
    "retry": lambda: ImageTransformationRetryFeature(),
    "test": lambda: ImageTransformationTestFeature(),
    "timeout": lambda: ImageTransformationTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
