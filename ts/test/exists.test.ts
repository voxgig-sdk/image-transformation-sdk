
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ImageTransformationSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ImageTransformationSDK.test()
    equal(testsdk instanceof ImageTransformationSDK, true,
      'ImageTransformationSDK.test() must return a client synchronously')
  })

})
