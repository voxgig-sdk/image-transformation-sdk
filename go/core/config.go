package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "ImageTransformation",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://image.pollinations.ai",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"image_transformation": map[string]any{},
			},
		},
		"entity": map[string]any{
			"image_transformation": map[string]any{
				"fields": []any{},
				"name": "image_transformation",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "transform this image",
											"kind": "param",
											"name": "prompt",
											"orig": "prompt",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "enhance",
											"orig": "enhance",
											"reqd": false,
											"type": "`$BOOLEAN`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "height",
											"orig": "height",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "image",
											"orig": "image",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "kontext",
											"kind": "query",
											"name": "model",
											"orig": "model",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "nologo",
											"orig": "nologo",
											"reqd": false,
											"type": "`$BOOLEAN`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "seed",
											"orig": "seed",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "width",
											"orig": "width",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/prompt/{prompt}",
								"parts": []any{
									"prompt",
									"{prompt}",
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"prompt",
						},
					},
				},
			},
		},
	}
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
