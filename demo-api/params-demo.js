const express = require('express')
const app = express()

app.get('/products/:n', function(req, res) {
    //-> products/__ 빈칸에 오는 값을 n이라는 변수에 담아줘!
    res.json({
        num : parseInt(req.params.n)
    })
})

/*
app.get('/:nickname', function(req, res) {

    const param = req.params

    res.json({
        channel: param.nickname
    })
})
*/

app.get('/watch', function(req, res) {
    const {v, t} = req.query
    res.json({
        영상코드: v,
        타임라인: t
    })
})

app.listen(3000)