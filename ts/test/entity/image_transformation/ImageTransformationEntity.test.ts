

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ImageTransformationSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ImageTransformationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IMAGE_TRANSFORMATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('IMAGE_TRANSFORMATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ImageTransformationSDK.test()
    const ent = testsdk.ImageTransformation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IMAGE_TRANSFORMATION_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'image_transformation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"image_transformation","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"transform this image","kind":"param","name":"prompt","orig":"prompt","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":false,"kind":"query","name":"enhance","orig":"enhance","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"kind":"query","name":"height","orig":"height","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"image","orig":"image","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":"kontext","kind":"query","name":"model","orig":"model","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":false,"kind":"query","name":"nologo","orig":"nologo","reqd":false,"type":"`$BOOLEAN`","index$":4},{"active":true,"kind":"query","name":"seed","orig":"seed","reqd":false,"type":"`$INTEGER`","index$":5},{"active":true,"kind":"query","name":"width","orig":"width","reqd":false,"type":"`$INTEGER`","index$":6}]},"contract":{"id":"GET /prompt/{prompt}","json":"{\"operationId\":\"transformImage\",\"parameters\":[{\"description\":\"Text prompt describing the desired image transformation (e.g., 'transform this image', 'apply vintage filter', 'resize to 800x600')\",\"example\":\"transform this image\",\"in\":\"path\",\"name\":\"prompt\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The AI model to use for image transformation\",\"example\":\"kontext\",\"in\":\"query\",\"name\":\"model\",\"required\":false,\"schema\":{\"default\":\"kontext\",\"enum\":[\"kontext\"],\"type\":\"string\"}},{\"description\":\"URL or reference to the source image to be transformed\",\"in\":\"query\",\"name\":\"image\",\"required\":false,\"schema\":{\"format\":\"uri\",\"type\":\"string\"}},{\"description\":\"Desired width of the output image in pixels\",\"in\":\"query\",\"name\":\"width\",\"required\":false,\"schema\":{\"maximum\":4096,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Desired height of the output image in pixels\",\"in\":\"query\",\"name\":\"height\",\"required\":false,\"schema\":{\"maximum\":4096,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Random seed for reproducible transformations\",\"in\":\"query\",\"name\":\"seed\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Remove logo from the generated image\",\"in\":\"query\",\"name\":\"nologo\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Apply enhancement to the image quality\",\"in\":\"query\",\"name\":\"enhance\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"image/jpeg\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"image/png\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"image/webp\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}}},\"description\":\"Successfully transformed image\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Invalid prompt or image parameter\",\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Source image not found\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Image not found\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Rate limit exceeded\",\"type\":\"string\"},\"retry_after\":{\"description\":\"Seconds until rate limit resets\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Too many requests - Rate limit exceeded\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"An error occurred processing your request\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/prompt/{prompt}","segments":[{"lit":"prompt"},{"var":"prompt"}],"select":{"exist":["enhance","height","image","model","nologo","prompt","seed","width"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["prompt"]]},"key$":"image_transformation","name__orig":"image_transformation","Name":"ImageTransformation","name_":"image_transformation","name-":"image-transformation","NAME":"IMAGE_TRANSFORMATION","index$":0}, {"active":true,"entity":"image_transformation","key$":"BasicImageTransformationFlow","kind":"basic","name":"BasicImageTransformationFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"image_transformation_ref01","srcdatavar":"image_transformation_ref01_data","suffix":"_dt0"},"match":{"id":"image_transformation01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-image_transformation_ref01"}}],"index$":0}]}, 'ImageTransformation')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let image_transformation_ref01_data = Object.values(setup.data.existing.image_transformation)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const image_transformation_ref01_ent = client.ImageTransformation()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/image_transformation/ImageTransformationTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ImageTransformationSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['image_transformation01','image_transformation02','image_transformation03','prompt01','prompt02','prompt03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IMAGE_TRANSFORMATION_TEST_IMAGE_TRANSFORMATION_ENTID': idmap,
    'IMAGE_TRANSFORMATION_TEST_LIVE': 'FALSE',
    'IMAGE_TRANSFORMATION_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IMAGE_TRANSFORMATION_TEST_IMAGE_TRANSFORMATION_ENTID']

  const live = 'TRUE' === env.IMAGE_TRANSFORMATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IMAGE_TRANSFORMATION_TEST_IMAGE_TRANSFORMATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ImageTransformationSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.IMAGE_TRANSFORMATION_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
