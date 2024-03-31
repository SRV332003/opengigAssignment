
import client from '../client.js';

const modifyStatus = async (id,status)=>{
    const query = `UPDATE tasks SET status = '${status}' WHERE id = ${id}`;
    try{
        await client.query(query);
        return true;
    }catch(err){
        console.error('Error executing query', err);
        return false;
    }
}

export default modifyStatus;