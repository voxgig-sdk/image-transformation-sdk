"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
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
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map