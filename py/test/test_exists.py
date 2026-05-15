# ProjectName SDK exists test

import pytest
from imagetransformation_sdk import ImageTransformationSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ImageTransformationSDK.test(None, None)
        assert testsdk is not None
