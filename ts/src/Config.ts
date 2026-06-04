
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://image.pollinations.ai',

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      image_transformation: {
      },

    }
  }


  entity = {
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
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ],
                "query": [
                  {
                    "example": false,
                    "kind": "query",
                    "name": "enhance",
                    "orig": "enhance",
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "height",
                    "orig": "height",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "image",
                    "orig": "image",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": "kontext",
                    "kind": "query",
                    "name": "model",
                    "orig": "model",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "nologo",
                    "orig": "nologo",
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "seed",
                    "orig": "seed",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "width",
                    "orig": "width",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/prompt/{prompt}",
              "parts": [
                "prompt",
                "{prompt}"
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
                  "width"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": [
          [
            "prompt"
          ]
        ]
      }
    }
  }
}


const config = new Config()

export {
  config
}

