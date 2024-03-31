import deleteTask from "../db/functions/deleteTasks.js";


const deleteTaskController = async (req,res)=>{
    const {id} = req.body;
    const result = await deleteTask(id);
    if(result){
        console.log('Task deleted!');
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({status: 200, message : 'Task deleted!'}));
    }
    else{
        console.error('Error deleting task!');
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({status: 500, message : 'Error deleting task! or Task not found'}));
    }
    return res.end();
}

export default deleteTaskController;