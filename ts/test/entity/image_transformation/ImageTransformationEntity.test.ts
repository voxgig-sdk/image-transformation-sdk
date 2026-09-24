

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"image_transformation","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /prompt/{prompt}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"transform this image","k":"param","n":"prompt","or":"prompt","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":false,"k":"query","n":"enhance","or":"enhance","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"height","or":"height","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"image","or":"image","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"kontext","k":"query","n":"model","or":"model","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":false,"k":"query","n":"nologo","or":"nologo","r":false,"t":"`$BOOLEAN`","index$":4},{"a":true,"k":"query","n":"seed","or":"seed","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"query","n":"width","or":"width","r":false,"t":"`$INTEGER`","index$":6}]},"k":"http","m":"GET","o":"/prompt/{prompt}","q":{"exist":["enhance","height","image","model","nologo","prompt","seed","width"]},"r":{},"s":[{"lit":"prompt"},{"var":"prompt"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"image_transformation","name__orig":"image_transformation","Name":"ImageTransformation","name_":"image_transformation","name-":"image-transformation","NAME":"IMAGE_TRANSFORMATION","index$":0}, {"active":true,"entity":"image_transformation","key$":"BasicImageTransformationFlow","kind":"basic","name":"BasicImageTransformationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"image_transformation_ref01","srcdatavar":"image_transformation_ref01_data","suffix":"_dt0"},"m":{"id":"image_transformation01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-image_transformation_ref01"}}],"index$":0}]}, 'ImageTransformation', {"GET /prompt/{prompt}":{"protocol":"http","operationId":"transformImage","responses":{"200":{"description":"Successfully transformed image","content":{"image/png":{"schema":{"type":"string","format":"binary"}},"image/jpeg":{"schema":{"type":"string","format":"binary"}},"image/webp":{"schema":{"type":"string","format":"binary"}}}},"400":{"description":"Bad request - Invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"Invalid prompt or image parameter"},"message":{"type":"string"}}}}}},"404":{"description":"Image not found","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"Source image not found"}}}}}},"429":{"description":"Too many requests - Rate limit exceeded","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"Rate limit exceeded"},"retry_after":{"type":"integer","description":"Seconds until rate limit resets"}}}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"An error occurred processing your request"}}}}}}},"parameters":[{"name":"prompt","in":"path","description":"Text prompt describing the desired image transformation (e.g., 'transform this image', 'apply vintage filter', 'resize to 800x600')","required":true,"schema":{"type":"string"},"example":"transform this image","index$":0},{"name":"model","in":"query","description":"The AI model to use for image transformation","required":false,"schema":{"type":"string","enum":["kontext"],"default":"kontext"},"example":"kontext","index$":1},{"name":"image","in":"query","description":"URL or reference to the source image to be transformed","required":false,"schema":{"type":"string","format":"uri"},"index$":2},{"name":"width","in":"query","description":"Desired width of the output image in pixels","required":false,"schema":{"type":"integer","minimum":1,"maximum":4096},"index$":3},{"name":"height","in":"query","description":"Desired height of the output image in pixels","required":false,"schema":{"type":"integer","minimum":1,"maximum":4096},"index$":4},{"name":"seed","in":"query","description":"Random seed for reproducible transformations","required":false,"schema":{"type":"integer"},"index$":5},{"name":"nologo","in":"query","description":"Remove logo from the generated image","required":false,"schema":{"type":"boolean","default":false},"index$":6},{"name":"enhance","in":"query","description":"Apply enhancement to the image quality","required":false,"schema":{"type":"boolean","default":false},"index$":7}],"securitySource":"unspecified"}})
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
    ['image_transformation01','image_transformation02','image_transformation03'],
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
  
