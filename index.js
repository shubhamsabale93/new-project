import express from 'express';
const app=express();
app.use(express.json());

const tasks=[];
app.get("/health",(req,res)=>{
    res.json({
        success:true,
        message:"Server is Healthy"
    })
})

app.post("/create-task",(req,res)=>{
    const{id,title,priority}=req.body;

    const newTask={
        "id":id,
        "title":title,
        "priority":priority

    }

    tasks.push(newTask);

    res.json({
        succsss:true,
        message:"Created the task",
        data: newTask
    })
})

app.get("/get-task",(req,res)=>{
    res.json({
        sucess:true,
        message:"Sucessfully Fetched the all tasks",
        data:tasks
    })
})


const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Server is running on localhost ${PORT}`);
})
