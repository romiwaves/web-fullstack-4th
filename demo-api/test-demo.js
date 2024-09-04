const express = require('express')
const app = express()

app.get('/test', function(req, res) {
    res.json({
        say :'TEST SUCCESS'
    })
})

app.get('/test/1', function(req, res) {
    res.json({
        say: 'ONE!!'
    })
})


app.listen(3000)
