import { unstable_dev } from 'wrangler'
import type { UnstableDevWorker } from 'wrangler'
import { describe, expect, it, beforeAll, afterAll } from 'vitest'

// TODO: Not a valid test, it will always pass
// unstable_dev() is undocumented yet
// https://github.com/cloudflare/workers-sdk/issues/1804
describe('Worker', () => {
  let worker: UnstableDevWorker

  beforeAll(async () => {
    worker = await unstable_dev('src/index.ts', {
      local: true,
      experimental: {
        disableExperimentalWarning: true,
        testScheduled: true,
      },
    })
  })

  afterAll(async () => {
    await worker.stop()
  })

  it('should successfully execute the worker', async () => {
    const result = await worker
      .fetch('/__scheduled?cron=*+*+*+*+*')
      .then((r) => r.text())

    expect(result).toMatch('Ran scheduled event')
  })
})
