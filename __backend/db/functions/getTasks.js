import client from '../client.js';

const getTasks = async () => {
    const query = `SELECT * FROM tasks`;
    try {
        const result = await client.query(query);
        return result.rows;
    }catch(err){
        console.error('Error executing query', err);
        return false;
    }
}
export default getTasks;