const express = require('express')
const app = express()
const { connectToDatabase } = require('./util/db')
const { PORT } = require('./util/config')

const firstRouter = require('./controllers/first')
const secondRouter = require('./controllers/second')
const thirdRouter = require('./controllers/third')

app.use(express.json())

app.use('/api/first', firstRouter)
app.use('/api/second', secondRouter)
app.use('/api/third', thirdRouter)

const start = async () =>{
  await connectToDatabase()
  app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
  })
}

start()