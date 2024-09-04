const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({
    say : 'hi there romiwaves!',
  })
})

let nodejsbook = {
	title: "Node.js를 공부해보자.",
	price: 20000,
	description: "이 책 좋음. 왜? 로미가 지음."
}

app.get('/products/1', function(req, res) {
    res.json(nodejsbook)
})

app.listen(3000)