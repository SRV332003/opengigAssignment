import modifyStatus from "../db/functions/modifyTask.js";


const modifyController = async (req,res)=>{
    const {id, status} = req.body;
    const result = await modifyStatus(id,status);
    
    if(result){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({status: 200, message : 'Task status updated!'}));
    }
    else{
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({status: 500, message : 'Error updating task status!'}));
    }
     return res.send();
    

}

export default modifyController;