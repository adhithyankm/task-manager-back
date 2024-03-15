const users =require('../modals/userSchema')

exports.addTask=async(req,res)=>{
    
    req.file 
    const{task,info,email,name}=req.body
    
    try{
        const preuser=await users.findOne({email})
        
        if(preuser){
            res.status(406).json("user already exisit")
        }else{
            const newUser=new users({
                task,info,email,name
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch{
        res.status(401).json("Error"+err)
    }
    console.log('insde add task');
}
exports.getTasks=async(req,res)=>{

    try {
        
        const allTasks=await users.find({})
        res.status(200).json(allTasks)
    } catch (err) {
        res.status(401).json(err)
    }
}

exports.deleteTask=async(req,res)=>{
    const{id}=req.params

    try {
        const removeData=await users.findByIdAndDelete({_id:id})
        res.status(200).json(removeData)
    } catch (err) {
        res.status(401).json(err)
    }
}

exports.editTask=async(req,res)=>{
    const {id}=req.params

    const{task,info,email,name}=req.body

    try{
        const updateTask=await users.findByIdAndUpdate({_id:id},{
            task,info,email,name
        },{new:true})

        await updateTask.save()
        res.status(200).json(updateTask)
    }
    catch(err){
        res.status(401).json(err)
    }

}