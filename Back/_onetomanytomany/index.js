const express = require('express')
const app = express()
const { connectToDatabase } = require('./util/db')
const { PORT } = require('./util/config')

const firstRouter = require('./controllers/first')
const secondRouter = require('./controllers/second')
const thirdRouter = require('./controllers/third')
const fourthRouter = require('./controllers/fourth')

app.use(express.json())

app.use('/api/first', firstRouter)
app.use('/api/second', secondRouter)
app.use('/api/third', thirdRouter)
app.use('/api/fourth', fourthRouter)

const start = async () =>{
  await connectToDatabase()
  app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
  })
}

start()