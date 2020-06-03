import * as Express from 'express'
import Config from './config'
import * as BodyParser from 'body-parser'

const app = Express()
app.use(BodyParser.json())
const port = Config.port

app.get('/', (req, res) => res.send('Hello world'))

if (Config.NODE_ENV !== 'TEST')  {
  app.listen(port, () => console.log(`App listen to port ${Config.port}`))
}

export default app
