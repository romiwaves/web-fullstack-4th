const express = require('express')
const app = express()
app.listen(1234)

app.get('/:id',function(req, res) {
    let {id} = req.params
    id = parseInt(id)

    if (db.get(id) == undefined) {
        res.json({
            message : "없는 상품입니다."
        })
    } else {
        product = db.get(id)
        product.id = id

        res.json(product)
    }
})

let db = new Map()
//map을 데이터베이스 대신으로 사용할 것

let notebook = {
    productName : "Notebook",
    price : 200000
}

let cup = {
    productName : "Cup",
    price : 3000
}

let chair = {
    productName : "Chair",
    price : 100000
}

let poster = {
    productName : "Poster",
    price : 20000
}

db.set(1, notebook) //키로 벨류를 찾을 수 있는 한 쌍을 저장
db.set(2, cup)
db.set(3, chair)
db.set(4, poster)