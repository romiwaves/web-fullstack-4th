const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json()) //req로 날아오는 body값을 json으로 읽어볼 수 있음

app.post('/test', (req, res) => {
  //post가 날아오며 body에 숨겨져서 온 데이터를 화면에 뿌려보기
  //1) body에 어떻게 데이터가 숨겨져서 들어오나? -> postman에서 확인 가능
  res.json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})