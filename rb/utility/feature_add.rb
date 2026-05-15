# ImageTransformation SDK utility: feature_add
module ImageTransformationUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
