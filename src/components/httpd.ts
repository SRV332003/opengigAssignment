import axios from 'axios';

const base =   "http://localhost:3000";

const getTasks = async () => {
    const response = await axios.get(base+'/getTasks');
    return response.data;
}

const addTask = async (title:string ,description:string ) => {

    const response = await axios.post(base+'/addTask', {
        title,
        description
    });
    return response.data;
}

const deleteTask = async (id:string) => {
    const response = await axios.post(base+'/deleteTask', {
        id
    });
    return response.data;
}

const updateStatus = async (id:string, status:string) => {
    const response = await axios.post(base+'/updateTask', {
        id,
        status
    });
    return response.data;
}

export { getTasks, addTask, deleteTask, updateStatus };