//1 importing dotenv 

require('dotenv').config()

// 6 importing mongodb connection / after creating connection

require('./DB-connection/connection')

// 2

const express=require('express')

// 7  after creating routes 

const router=require('./Routes/router')


const cors=require('cors')

// 3 creating server

const taskapp=express()

// 4 using the server and cors

taskapp.use(cors())

taskapp.use(express.json())
taskapp.use(router)

// 8


// 5

const PORT =4000 || process.env.PORT

taskapp.listen(PORT,()=>{
    console.log(`taskapp running at port ${PORT}`);
})

// taskapp.post('/',(req,res)=>{
//     req.send('task manager')
// })
