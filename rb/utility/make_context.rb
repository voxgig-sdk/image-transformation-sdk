# ImageTransformation SDK utility: make_context
require_relative '../core/context'
module ImageTransformationUtilities
  MakeContext = ->(ctxmap, basectx) {
    ImageTransformationContext.new(ctxmap, basectx)
  }
end
