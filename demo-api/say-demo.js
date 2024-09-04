const express = require('express')
const app = express()

app.get('/hello', function(req, res) {
    res.json({
        say: 'hi there!'
    })
})

app.get('/bye', function(req, res) {
    res.send('goodbye romiwaves')
})

app.get('/nice2meetu', function(req, res) {
    res.send('It is really nice to meet you romiwaves')
})

app.listen(3000)