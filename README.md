# ImageTransformation SDK

Transform an image by URL through Pollinations' AI image pipeline using a GET request

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Image Transformation API

The Image Transformation API is part of [Pollinations.ai](https://pollinations.ai)'s open image generation service, exposed at `https://image.pollinations.ai`. It accepts a source image and a model selection, then returns a transformed image — useful for filtering, resizing, or running style-transfer-style operations over an existing picture.

What you get from the API:

- A single GET-style image endpoint that takes a `model` parameter and an `image` URL parameter.
- Output is returned directly as image bytes, suitable for embedding in `<img>` tags or saving to disk.
- CORS is enabled, so the endpoint can be called from browser-side code.

Operationally the service is unauthenticated and free to use, but it is community-run and reliability has historically been uneven — at the time of writing the [freepublicapis.com listing](https://freepublicapis.com/image-transformation-api) reports a degraded health score, so treat responses defensively and have a fallback path.

## Try it

**TypeScript**
```bash
npm install image-transformation
```

**Python**
```bash
pip install image-transformation-sdk
```

**PHP**
```bash
composer require voxgig/image-transformation-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/image-transformation-sdk/go
```

**Ruby**
```bash
gem install image-transformation-sdk
```

**Lua**
```bash
luarocks install image-transformation-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { ImageTransformationSDK } from 'image-transformation'

const client = new ImageTransformationSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o image-transformation-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "image-transformation": {
      "command": "/abs/path/to/image-transformation-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **ImageTransformation** |  | `/prompt/{prompt}` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from imagetransformation_sdk import ImageTransformationSDK

client = ImageTransformationSDK({})


# Load a specific imagetransformation
imagetransformation, err = client.ImageTransformation(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'imagetransformation_sdk.php';

$client = new ImageTransformationSDK([]);


// Load a specific imagetransformation
[$imagetransformation, $err] = $client->ImageTransformation(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/image-transformation-sdk/go"

client := sdk.NewImageTransformationSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "ImageTransformation_sdk"

client = ImageTransformationSDK.new({})


# Load a specific imagetransformation
imagetransformation, err = client.ImageTransformation(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("image-transformation_sdk")

local client = sdk.new({})


-- Load a specific imagetransformation
local imagetransformation, err = client:ImageTransformation(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = ImageTransformationSDK.test()
const result = await client.ImageTransformation().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = ImageTransformationSDK.test(None, None)
result, err = client.ImageTransformation(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = ImageTransformationSDK::test(null, null);
[$result, $err] = $client->ImageTransformation(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.ImageTransformation(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = ImageTransformationSDK.test(nil, nil)
result, err = client.ImageTransformation(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:ImageTransformation(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Image Transformation API

- Upstream: [https://image.pollinations.ai](https://image.pollinations.ai)
- API docs: [https://image.pollinations.ai/prompt/transform%20this%20image](https://image.pollinations.ai/prompt/transform%20this%20image)

---

Generated from the Image Transformation API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
