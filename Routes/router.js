

const express=require('express')

const userControllers=require('../controllers/userControllers')

const router=new express.Router()

router.post('/addtask',userControllers.addTask)

router.get('/get/alltasks',userControllers.getTasks)

router.delete('/delete/task/:id',userControllers.deleteTask)

router.put('/edit/task/:id',userControllers.editTask)

module.exports=router



