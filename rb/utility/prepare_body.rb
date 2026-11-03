# ImageTransformation SDK utility: prepare_body
require_relative 'media'
module ImageTransformationUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return ImageTransformationUtilities.raw_body(ctx.reqdata) if ImageTransformationUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
