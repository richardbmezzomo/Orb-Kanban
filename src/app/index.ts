import { openapi } from '@elysiajs/openapi'
import { Elysia } from 'elysia'
import { z } from 'zod'
import { betterAuthPlugin, OpenAPI } from '@/app/plugins/better-auth'

export const app = new Elysia({ name: 'orb-api' })
	.use(
		openapi({
			documentation: {
				components: await OpenAPI.components,
				paths: await OpenAPI.getPaths(),
			},
			mapJsonSchema: {
				zod: z.toJSONSchema,
			},
		}),
	)
	.use(betterAuthPlugin)