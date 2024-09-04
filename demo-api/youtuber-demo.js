//express 모듈 셋팅
const express = require('express')
const app = express()

app.listen(1020)

//REST API 설계
app.get('/youtubers', (req, res) => {
    res.json({
        message : "redwine supernova"
    })
})

app.get('/youtuber/:id', function(req, res) {
    let id = req.params.id
    id = parseInt(id)
    const youtuber = db.get(id)

    if (youtuber === undefined) {
        res.json({
            message : "유튜버 정보를 찾을 수 없습니다."
        })
    } else {
        res.json(youtuber)
    }
})

app.use(express.json()) //http외 모듈인 미들웨어 중 json 설정
app.post('/youtuber', (req, res) => {
    console.log(req.body)
    //db에 저장(set)해줘야 해요
    db.set(id++, req.body) //json 형태로도 들어가나? 객체 말고? yes

    res.json({
        message: `${db.get(id-1).channelTitle}님, 유튜브 채널 개설을 축하드려요!`
    })
})


//데이터 셋팅
let youtuber1 = {
    channelTitle : "heavytalker",
    subscriber : "59.7만명",
    videos : "957개"
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

let db = new Map()
var id = 1

db.set(id++, youtuber1)
db.set(id++, youtuber2)
db.set(id++, youtuber3)