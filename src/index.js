const express = require('express')
require('./db/mongoose')
const userRouter = require('../src/routers/user')
const taskRouter = require('../src/routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json()) //For Taking Value From Postman
app.use(userRouter)//For Using Router From Other File
app.use(taskRouter)

app.listen(port,()=>{
    console.log('Server Running On Port '+port)
})


