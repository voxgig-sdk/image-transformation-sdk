package = "voxgig-sdk-image-transformation"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/image-transformation-sdk.git"
}
description = {
  summary = "ImageTransformation SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["image-transformation_sdk"] = "image-transformation_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
