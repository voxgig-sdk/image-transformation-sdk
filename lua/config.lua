-- ImageTransformation SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "ImageTransformation",
      slug = "image-transformation",
      version = "0.0.1",
      target = "lua",
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
            ["input"] = "data",
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
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "enhance",
                      ["orig"] = "enhance",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "height",
                      ["orig"] = "height",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "image",
                      ["orig"] = "image",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "kontext",
                      ["kind"] = "query",
                      ["name"] = "model",
                      ["orig"] = "model",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "nologo",
                      ["orig"] = "nologo",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "seed",
                      ["orig"] = "seed",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "width",
                      ["orig"] = "width",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
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
              },
            },
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
