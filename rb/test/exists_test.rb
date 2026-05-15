# ImageTransformation SDK exists test

require "minitest/autorun"
require_relative "../ImageTransformation_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ImageTransformationSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
