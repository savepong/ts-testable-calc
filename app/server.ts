import * as Express from 'express'
import Config from './config'

const app = Express()
const port = Config.port

app.get('/', (req, res) => res.send('Hello world'))

if (Config.NODE_ENV !== 'TEST')  {
  app.listen(port, () => console.log(`App listen to port ${Config.port}`))
}

export default app
