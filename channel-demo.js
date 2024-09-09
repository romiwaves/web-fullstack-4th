//express 모듈 세팅
const express = require('express')
const app = express()
app.use(express.json())
app.listen(9999)

//db 세팅
let db = new Map()
var id = 1

//route로 같은 url 묶어두기
//채널 개별 생성, 채널 전체 조회
app
    .route('/channels')
    .get((req, res) => { //전체 조회
        var channels = []

        db.forEach((value, key) => {
            channels.push(value)
        })
        if (db.size) {
            res.status(200).json(channels)
        } else {
            res.status(404).json({
                message : "등록된 채널이 존재하지 않습니다."
            })
        }
        
    }) 

    .post((req, res) => { //개별 생성
        if (req.body.channelTitle) {
            db.set(id++, req.body)

            res.status(201).json({
                messsage : `${db.get(id-1).channelTitle}님 채널 운영을 응원합니다!`
            })
        } else {
            res.status(400).json({
                message : "채널명이 입력되지 않았습니다."
            })
        }
        
    }) 

//채널 개별 수정, 채널 개별 삭제, 개별 조회
app
    .route('/channels/:id')
    .put((req, res) => { //채널 개별 수정
        let {id} = req.params
        id = parseInt(id)

        var channel = db.get(id)
        var oldTitle = channel.channelTitle
        if (channel) {
            var newTitle = req.body.channelTitle
            channel.channelTitle = newTitle
            db.set(id, channel)

            res.json({
                message : `채널명이 ${oldTitle}에서 ${newTitle}로 정상 수정되었습니다.`
            })
        } else {
            res.status(404).json({
                message : "채널 정보를 찾을 수 없습니다."
            })
        }
    }) 

    .delete((req, res) => { //개별 삭제
        let {id} = req.params
        id = parseInt(id)

        var channel = db.get(id)
        if (channel) {
            db.delete(id)
            res.status(200).json({
                message : `${channel.channelTitle} 채널이 성공적으로 삭제되었습니다.`
            })
        } else {
            res.status(404).json({
                message : "채널 정보를 찾을 수 없습니다."
            })
        }
    }) 

    .get((req, res) => { //개별 조회
        let {id} = req.params
        id = parseInt(id)

        var channel = db.get(id)
        if (channel) {
            res.status(200).json(channel)
        } else {
            res.status(404).json({
                message : "채널 정보를 찾을 수 없습니다."
            })
        }
    }) 