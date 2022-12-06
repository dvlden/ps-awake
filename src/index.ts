import { handleRequest } from './request'

export interface Env {
  IFY: KVNamespace
}

export default {
  async scheduled(
    _: ScheduledController,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<void> {
    const endpoint = await env.IFY.get('endpoint')
    const token = await env.IFY.get('token')

    ctx.waitUntil(handleRequest(endpoint!, token!))
  },
}
