import { app } from './app'

const PORT = Bun.env.PORT || 3000
app.listen(PORT)

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
