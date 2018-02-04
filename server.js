const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const setupRoutes=require('./routes/routes');

const setupSessionStore=require('./boot/setupSessionStore')
const firebase = require('./boot/setupDB');
global.firebase=firebase;

app.prepare()
.then(() => {
  const server = express()

  server.use(bodyParser.json())
  setupSessionStore(server);

  server.use((req, res, next) => {
    req.firebaseServer = global.firebase;
    next()
  })

  setupRoutes(server,handle);

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
