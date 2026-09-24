"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'ImageTransformation',
        slug: "image-transformation",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://image.pollinations.ai",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            image_transformation: {},
        }
    };
    entity = {
        "image_transformation": {
            "fields": [],
            "name": "image_transformation",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/prompt/{prompt}",
                            "segments": [
                                {
                                    "lit": "prompt"
                                },
                                {
                                    "var": "prompt"
                                }
                            ],
                            "parts": [
                                "prompt",
                                "{prompt}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "prompt",
                                        "orig": "prompt",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "transform this image"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "enhance",
                                        "orig": "enhance",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "height",
                                        "orig": "height",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "image",
                                        "orig": "image",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "model",
                                        "orig": "model",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "kontext"
                                    },
                                    {
                                        "name": "nologo",
                                        "orig": "nologo",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "seed",
                                        "orig": "seed",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "width",
                                        "orig": "width",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "enhance",
                                    "height",
                                    "image",
                                    "model",
                                    "nologo",
                                    "prompt",
                                    "seed",
                                    "width"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map