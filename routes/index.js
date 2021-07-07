const router = require('express').Router()
const { getItems, sendItem } = require('../controllers/items')
router.get('/', getItems)
router.post('/', sendItem)

module.exports = router