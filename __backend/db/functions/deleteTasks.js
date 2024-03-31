import client from "../client.js";


const deleteTask = async (id)=>{
    const query = `DELETE FROM tasks WHERE id = ${id}`;
    try{
        const res = await client.query(query);
        return res;
    }catch(err){
        console.error('Error executing query', err);
        return false;
    }
}

export default deleteTask;