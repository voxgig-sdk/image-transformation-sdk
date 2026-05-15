-- ProjectName SDK configuration

local function make_config()
  return {
    main = {
      name = "ImageTransformation",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://image.pollinations.ai",
      auth = {
        prefix = "Bearer",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["image_transformation"] = {},
      },
    },
    entity = {
      ["image_transformation"] = {
        ["fields"] = {},
        ["name"] = "image_transformation",
        ["op"] = {
          ["load"] = {
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "transform this image",
                      ["kind"] = "param",
                      ["name"] = "prompt",
                      ["orig"] = "prompt",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "enhance",
                      ["orig"] = "enhance",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "height",
                      ["orig"] = "height",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "image",
                      ["orig"] = "image",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = "kontext",
                      ["kind"] = "query",
                      ["name"] = "model",
                      ["orig"] = "model",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "nologo",
                      ["orig"] = "nologo",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "seed",
                      ["orig"] = "seed",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "width",
                      ["orig"] = "width",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                      ["active"] = true,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/prompt/{prompt}",
                ["parts"] = {
                  "prompt",
                  "{prompt}",
                },
                ["select"] = {
                  ["exist"] = {
                    "enhance",
                    "height",
                    "image",
                    "model",
                    "nologo",
                    "prompt",
                    "seed",
                    "width",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "prompt",
            },
          },
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
