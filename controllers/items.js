const bd = require('../bd')

const getItems = (req, res) => {
  res.send(bd)
}

const sendItem = (req, res) => {
  const { name, desc } = req.body
  if (!name || !desc) {
    return res.status(400).send({
      error: '"name" and "desc" are needed'
    })
  }

  if (typeof name !== 'string' || typeof desc !== 'string') {
    return res.status(400).send({
      error: 'Not valid format for "name" or "desc"'
    })
  }

  res.send({
    "message": "item added successfully"
  })
}


module.exports = {
  getItems,
  sendItem
}