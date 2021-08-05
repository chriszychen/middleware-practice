const express = require('express')
const moment = require('moment')
const app = express()
const port = 3000

app.use((req, res, next) => {
  const reqTimestamp = Date.now()
  res.locals.reqTimestamp = reqTimestamp
  next()
})

const printLog = (req, res) => {
  const { reqTimestamp } = res.locals
  const resTimestamp = Date.now()
  console.log(`${moment(reqTimestamp).format('YYYY-MM-DD HH:mm:ss')} | ${req.method} from ${req.originalUrl} | total time: ${resTimestamp - reqTimestamp}ms`)
  res.end()
}

app.get('/', (req, res, next) => {
  res.send('列出全部 Todo')
  next()
}, printLog)

app.get('/new', (req, res, next) => {
  res.send('新增 Todo 頁面')
  next()
}, printLog)

app.get('/:id', (req, res, next) => {
  res.send('顯示一筆 Todo')
  next()
}, printLog)

app.post('/', (req, res, next) => {
  res.send('新增一筆  Todo')
  next()
}, printLog)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
