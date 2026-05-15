-- ImageTransformation SDK error

local ImageTransformationError = {}
ImageTransformationError.__index = ImageTransformationError


function ImageTransformationError.new(code, msg, ctx)
  local self = setmetatable({}, ImageTransformationError)
  self.is_sdk_error = true
  self.sdk = "ImageTransformation"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ImageTransformationError:error()
  return self.msg
end


function ImageTransformationError:__tostring()
  return self.msg
end


return ImageTransformationError
