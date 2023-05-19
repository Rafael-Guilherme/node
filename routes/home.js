const path = require('path')

const express = require('express')

const rootDir = require('../util/path')

const router = express.Router()

router.use('/', (req, res, next) => {
    console.log('In another the middleware!')
    res.sendFile(path.join(rootDir, 'views', 'home.html'))
})

module.exports = router