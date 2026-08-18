# ImageTransformation SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
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
            "input": "data",
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
                    },
                  ],
                  "query": [
                    {
                      "example": False,
                      "kind": "query",
                      "name": "enhance",
                      "orig": "enhance",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "height",
                      "orig": "height",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "image",
                      "orig": "image",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "kontext",
                      "kind": "query",
                      "name": "model",
                      "orig": "model",
                      "type": "`$STRING`",
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "nologo",
                      "orig": "nologo",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "seed",
                      "orig": "seed",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "width",
                      "orig": "width",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
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
