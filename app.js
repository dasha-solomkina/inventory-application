const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const path = require('path')
const assetsPath = path.join(__dirname, 'public')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(assetsPath))

app.use('/', indexRouter)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
