import client from '../client.js';

const addTask = async (title, description, status) => {
    const date = new Date().toLocaleString();
    const query = `INSERT INTO tasks (title, description, status, date) VALUES ('${title}', '${description}', '${status}', '${date}')`;
    try {
        await client.query(query);
        return true;
    } catch (err) {
        console.error('Error executing query', err);
        return false;
    }
}

export default addTask;