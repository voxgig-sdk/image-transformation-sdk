# ImageTransformation SDK configuration


def make_config():
    return {
        "main": {
            "name": "ImageTransformation",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://image.pollinations.ai",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "image_transformation": {},
            },
        },
        "entity": {
      "image_transformation": {
        "fields": [],
        "name": "image_transformation",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": "transform this image",
                      "kind": "param",
                      "name": "prompt",
                      "orig": "prompt",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "example": False,
                      "kind": "query",
                      "name": "enhance",
                      "orig": "enhance",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "height",
                      "orig": "height",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "image",
                      "orig": "image",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "kontext",
                      "kind": "query",
                      "name": "model",
                      "orig": "model",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "nologo",
                      "orig": "nologo",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "seed",
                      "orig": "seed",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "width",
                      "orig": "width",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/prompt/{prompt}",
                "parts": [
                  "prompt",
                  "{prompt}",
                ],
                "select": {
                  "exist": [
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
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "prompt",
            ],
          ],
        },
      },
    },
    }
