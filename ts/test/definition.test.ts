import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "image_transformation",
    "accessor": "ImageTransformation",
    "op": "load",
    "method": "GET",
    "path": "/prompt/{prompt}",
    "args": [
      {
        "name": "prompt",
        "wire": "prompt",
        "value": "transform this image"
      }
    ],
    "select": {
      "enhance": "v1",
      "height": "v1",
      "image": "v1",
      "model": "kontext",
      "nologo": "v1",
      "seed": "v1",
      "width": "v1"
    },
    "headers": [],
    "query": [
      "model",
      "image",
      "width",
      "height",
      "seed",
      "nologo",
      "enhance"
    ],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
