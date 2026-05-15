
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ImageTransformationSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ImageTransformationSDK.test()
    equal(null !== testsdk, true)
  })

})
