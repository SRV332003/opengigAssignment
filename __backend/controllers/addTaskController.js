import addTask from '../db/functions/addTask.js';

const addTaskController = async (req,res)=>{

    const {title, description} = req.body;
    const date = new Date().toLocaleString();
    const status = 'todo';
    const result = await addTask(title, description, status, date);
    if(result){
        console.log('Task added!');
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({status: 200, message : 'Task added!'}));
    }
    else{
        console.error('Error adding task!');
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({status: 500, message : 'Error adding task!'}));
    }
    return res.end();
    
}

export default addTaskController;
