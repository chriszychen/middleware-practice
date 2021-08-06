const express = require('express')
const dayjs = require('dayjs')
const app = express()
const port = 3000

// 記錄request進入時間和回傳response時間並計算request-response cycle花費時間
app.use((req, res, next) => {
  const reqTimestamp = Date.now()
  next()
  const resTimestamp = Date.now()
  console.log(`${dayjs(reqTimestamp).format('YYYY-MM-DD HH:mm:ss')} | ${req.method} from ${req.originalUrl} | total time: ${resTimestamp - reqTimestamp}ms`)
})

app.get('/', (req, res, next) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res, next) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res, next) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res, next) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
