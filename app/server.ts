import * as Express from 'express'
import Config from './config'
import * as BodyParser from 'body-parser'
import * as Fs from 'fs'
import * as Multer from 'multer'

const upload = Multer()

const app = Express()
app.use(BodyParser.json())
const port = Config.port

app.get('/', (req, res) => res.send('Hello world'))
app.post('/upload', upload.single('photo'), (req, res) => {
  Fs.writeFileSync('/tmp/this_is_the_file.png', req.file.buffer)
  res.send('Succeed')
})

if (Config.NODE_ENV !== 'TEST') {
  app.listen(port, () => console.log(`App listen to port ${Config.port}`))
}

export default app
