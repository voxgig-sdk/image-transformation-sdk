# ImageTransformation SDK feature factory

from imagetransformation_sdk.feature.base_feature import ImageTransformationBaseFeature
from imagetransformation_sdk.feature.test_feature import ImageTransformationTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ImageTransformationBaseFeature(),
        "test": lambda: ImageTransformationTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
