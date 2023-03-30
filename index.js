const express = require('express')
const app = express()
const port = 3000
let xxx = 'Hello World'
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// 返回json数据
app.get('/json', (req, res) => {
  res.json({
    name: xxx,
    age: 18
  })
})
// 接受参数
app.get('/user/:id', (req, res) => {
   xxx = req.params.id
   res.status(200).send({
    name: xxx,
    age: 18
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
