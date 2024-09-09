//express 모듈 세팅
const express = require('express')
const app = express()
app.use(express.json())
app.listen(9999)

//로그인
app.post('/login', (req, res) => {
    const {userId, pwd} = req.body

    db.forEach((user, id) => {
        if (user.userId === userId) {

            if (user.pwd === pwd) {
                res.status(201).json({
                    message : `${user.name}님, 성공적으로 로그인 되었습니다.`
                })
            } else {
                res.status(404).json({
                    message : "비밀번호가 일치하지 않습니다. 다시 시도하세요."
                })
            }
        } else {
            res.status(404).json({
                message : "회원 정보를 찾을 수 없습니다. 다시 시도하세요."
            })
        }
    })
})

//회원가입
app.post('/join', (req, res) => {
    const userId = req.body.userId
    const pwd = req.body.pwd
    const name = req.body.name

    console.log(req.body)
    
    if (userId && pwd && name) {
        db.set(id++, req.body)
        res.status(201).json({
            message : `${db.get(id-1).name}님, 회원 가입이 완료되었습니다. 로그인 화면으로 이동합니다.`
        })
    } else {
        res.status(400).json({
            message : "아이디와 비밀번호, 이름을 정확히 입력해 주세요."
        })
    }
})

//라우팅
/*
app
    .route('/users/:id')
    .get((req, res) => {
        //콜백함수 넣어주기
        let {id} = req.params
        id = parseInt(id)
        const user = db.get(id)

        if (user) {
            res.status(200).json({
                userID : user.userId,
                name : user.name
            })
        } else {
            res.status(404).json({
                message : "회원 정보를 찾을 수 없습니다. 다시 시도하세요."
            })
        }
    })
    .delete((req, res) => {
        let {id} = req.params
        id = parseInt(id)
        const user = db.get(id)
    
        if (user == undefined) {
            res.status(404).json({
                message : "회원 정보가 존재하지 않습니다. 다시 시도하세요."
            })
        } else {
            db.delete(id)
            res.status(200).json({
                message : `${user.name}님, 회원 탈퇴가 완료되었습니다. 메인 페이지로 이동합니다. 다음에 다시 만나요!`
            })
        }
    })
*/


//회원 개별 조회
app.get('/users/:id', (req, res) => {
    let {id} = req.params
    id = parseInt(id)
    const user = db.get(id)

    if (user) {
        res.status(200).json({
            userID : user.userId,
            name : user.name
        })
    } else {
        res.status(404).json({
            message : "회원 정보를 찾을 수 없습니다. 다시 시도하세요."
        })
    }
})

//회원 개별 탈퇴
app.delete('/users/:id', (req, res) => {
    let {id} = req.params
    id = parseInt(id)
    const user = db.get(id)

    if (user == undefined) {
        res.status(404).json({
            message : "회원 정보가 존재하지 않습니다. 다시 시도하세요."
        })
    } else {
        db.delete(id)
        res.status(200).json({
            message : `${user.name}님, 회원 탈퇴가 완료되었습니다. 메인 페이지로 이동합니다. 다음에 다시 만나요!`
        })
    }
})

//회원정보 데이터베이스
let db = new Map()
var id = 1