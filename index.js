import { Application } from 'https://deno.land/x/oak/mod.ts'
import { HOST, PORT } from './config.js'
import router from './routes.js'
import _404 from './controllers/404.js'
import errorHandler from './controllers/errorHandler.js'

const app = new Application()

app.use(errorHandler)
app.use(router.routes())
app.use(router.allowMethods())
app.use(_404)

console.log(`Listening on port: ${PORT}...`)

await app.listen(`${HOST}:${PORT}`)
