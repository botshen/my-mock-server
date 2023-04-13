const express = require('express')
const app = express()
const port = 8080
let xxx = 'Hello World'

app.get('/vue-admin-template/menu/list', (req, res) => {
  console.log(`${req} ${port}`)

  res.json({
    data: [
      {
        path: '/form'
      },
      {
        path: '/tree'
      },
      {
        path: '/flow'
      },
      {
        path: '/example',
        children: [
          {
            path: 'tree'
          },
          {
            path: 'table'
          },
          {
            path: 'treetest'
          }
        ]
      }
    ]
  })
})
// 返回json数据
app.get('/shenxin/list', (req, res) => {
  console.log(`${req} ${port}`)

  res.json({
    name: xxx,
    age: 188888888
  })
})
app.post('/xxxx', (req, res) => {
  console.log(`${req} ${port}`)

  res.json({
    name: xxx,
    age: 188888888
  })
})
// 接受参数
app.get('/user/:id', (req, res) => {
  xxx = req.params.id
  res.status(200).send({
    name: xxx,
    age: 18333
  })
})

app.post('/shenxin/post', (req, res) => {
  console.log(`${req} ${port}`)
  res.json({
    name: xxx,
    age: 18000
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
