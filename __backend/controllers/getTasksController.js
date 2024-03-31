import getTasks from "../db/functions/getTasks.js";


const sortTasks = (tasks) => {
    const todoTasks = tasks.filter(task => task.status === 'todo');
    const onProgressTasks = tasks.filter(task => task.status === 'onprogress');
    const doneTasks = tasks.filter(task => task.status === 'done');
    return {
        "todo": todoTasks,
        "onprogress": onProgressTasks,
        "done": doneTasks
    }
}


const getTasksController = async (req, res) => {
    const query = `SELECT * FROM tasks`;
    const result = await getTasks();
    if(result){
        
        console.log('Tasks fetched!');
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({status: 200, tasks : sortTasks(result)}));
    }
    else{
        console.error('Error fetching tasks!');
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({status: 500, message : 'Error fetching tasks!'}));
    }
    return res.end();
}
export default getTasksController;