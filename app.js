const express = require('express')
const app = express()
const PORT = 3030
const bodyParser = require('body-parser')
const bd = require('./bd/1-999.json')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.get('/', (req, res) => {
  const { q } = req.query
  if (!q) {
    return res.send(bd)
  }
  const foundPoems = bd.filter(item => item.fields.text.includes(q))
  res.send(foundPoems)
})


app.listen(PORT, _ => {
  console.log(`listening to ${PORT}`)
})
