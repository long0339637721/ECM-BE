const express = require("express")
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const route = require('./src/routes/index.route')
const bodyParser = require('body-parser')

// import * as cors from 'cors'
// import route from "./src/routes/index.route"

const port = 5000
const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.json({ 'message': 'ok' });
})

route(app)

app.listen(port, () => {
  console.log("App listenning at " + port)
}) 