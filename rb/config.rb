# ImageTransformation SDK configuration

module ImageTransformationConfig
  def self.make_config
    {
      "main" => {
        "name" => "ImageTransformation",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://image.pollinations.ai",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "image_transformation" => {},
        },
      },
      "entity" => {
        "image_transformation" => {
          "fields" => [],
          "name" => "image_transformation",
          "op" => {
            "load" => {
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "transform this image",
                        "kind" => "param",
                        "name" => "prompt",
                        "orig" => "prompt",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                    "query" => [
                      {
                        "example" => false,
                        "kind" => "query",
                        "name" => "enhance",
                        "orig" => "enhance",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "height",
                        "orig" => "height",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "image",
                        "orig" => "image",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "example" => "kontext",
                        "kind" => "query",
                        "name" => "model",
                        "orig" => "model",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "example" => false,
                        "kind" => "query",
                        "name" => "nologo",
                        "orig" => "nologo",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "seed",
                        "orig" => "seed",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "width",
                        "orig" => "width",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/prompt/{prompt}",
                  "parts" => [
                    "prompt",
                    "{prompt}",
                  ],
                  "select" => {
                    "exist" => [
                      "enhance",
                      "height",
                      "image",
                      "model",
                      "nologo",
                      "prompt",
                      "seed",
                      "width",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "prompt",
              ],
            ],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ImageTransformationFeatures.make_feature(name)
  end
end
