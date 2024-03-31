import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors';

import client from './db/client.js';
import addTaskController from './controllers/addTaskController.js';
import getTasksController from './controllers/getTasksController.js';
import modifyStatusController from './controllers/modifyTaskController.js';
import deleteTaskController from './controllers/deleteTaskController.js';

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());



app.post('/addTask', addTaskController);
app.post('/deleteTask', deleteTaskController);  
app.post('/modifyStatus', modifyStatusController);
app.get('/getTasks', getTasksController);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

client.connect()
    .then(() => { 
        console.log('Connected to PostgreSQL database!');
    }) 
    .catch((err) => { 
        console.error('Error connecting to the database:', err); 
    });
