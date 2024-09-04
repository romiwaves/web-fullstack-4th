const express = require('express')
const app = express()

let youtuber1 = {
    channelTitle : "롬이세요",
    subscriber : "600만명",
    videos : "900개"
}

let youtuber2 = {
    channelTitle : "로미인디요",
    subscriber : "102만명",
    videos : "5992개"
}

let youtuber3 = {
    channelTitle : "romiwaves",
    subscriber : "39만명",
    videos : "8개"
}

app.get('/:nickname', function(req, res) {

    const {nickname} = req.params

    if (nickname == "romromrom") {
        res.json(youtuber1)
    } else if (nickname == "itsromi") {
        res.json(youtuber2)
    } else if (nickname == "romiwaves") {
        res.json(youtuber3)
    } else {
        res.json({
            message : "채널에 등록되지 않은 유튜버입니다."
        })
    } //예외 처리
})


app.listen(3000)