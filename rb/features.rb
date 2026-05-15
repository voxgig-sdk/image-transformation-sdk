# ImageTransformation SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ImageTransformationFeatures
  def self.make_feature(name)
    case name
    when "base"
      ImageTransformationBaseFeature.new
    when "test"
      ImageTransformationTestFeature.new
    else
      ImageTransformationBaseFeature.new
    end
  end
end
