# frozen_string_literal: true

# Typed models for the ImageTransformation SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# ImageTransformation entity data model.
class ImageTransformation
end

# Request payload for ImageTransformation#load.
#
# @!attribute [rw] prompt
#   @return [String]
#
# @!attribute [rw] enhance
#   @return [Boolean, nil]
#
# @!attribute [rw] height
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] nologo
#   @return [Boolean, nil]
#
# @!attribute [rw] seed
#   @return [Integer, nil]
#
# @!attribute [rw] width
#   @return [Integer, nil]
ImageTransformationLoadMatch = Struct.new(
  :prompt,
  :enhance,
  :height,
  :image,
  :model,
  :nologo,
  :seed,
  :width,
  keyword_init: true
)

