const bd = require('../bd')

const getPoems = (req, res) => {
  res.send(bd)
}


module.exports = {
  getPoems
}