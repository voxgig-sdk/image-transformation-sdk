# ImageTransformation SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ImageTransformationFeatures
  def self.make_feature(name)
    case name
    when "base"
      ImageTransformationBaseFeature.new
    when "ratelimit"
      ImageTransformationRatelimitFeature.new
    when "retry"
      ImageTransformationRetryFeature.new
    when "test"
      ImageTransformationTestFeature.new
    when "timeout"
      ImageTransformationTimeoutFeature.new
    else
      ImageTransformationBaseFeature.new
    end
  end
end
