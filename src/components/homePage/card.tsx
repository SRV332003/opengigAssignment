import Button from '@mui/material/Button';
import { Modal } from '@mui/material';
import React from 'react';
import { deleteTask, updateStatus } from '../httpd';



const Card = ({data = { id:0, title: "Brainstorming", description: "Brainstorming for the project", priority:"Low" , status: "1", date: "2021-10-10T10:00:00"}}) => {
    
    const [show, setShow] = React.useState(false);

    const updateHandler = ( status :string) => {
        console.log(data.id);
        console.log(status);

        updateStatus(data.id, status).then((data) => {
            console.log(data);
            setShow(false);
            window.location.reload();
        });
        
    }

    const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        deleteTask(data.id).then((data) => {
            console.log(data);
            setShow(false);
            window.location.reload();
        });
        
    }


    return (
        <div className="rounded-lg bg-white p-5">
            <div className='flex flex-row justify-between'>
                <div className='p-1 w-min text-[#D58D49] rounded-sm bg-[#d58d4949] text-xs'> Low</div>
                <button onClick={()=>{setShow(true);}} className='font-bold cursor-pointer rounded-sm px-3 duration-300'>•••</button>
            </div>
               
               <div className="text-lg font-[600] font-[Inter]">{data.title}</div>
               <div className="text-xs text-[#787486] font-[Inter]">{data.description}</div>

               <Modal
                open={show}
                onClose={()=>{setShow(false);}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                 >
                    <div className='fixed w-1/2 translate-x-[-50%] translate-y-[-50%] text-center top-[50vh] left-[50vw]  bg-white rounded-lg p-5'>
                        <Button color='error' variant="contained" onClick={deleteHandler}>Delete</Button><br/>
                        {data.status != "done"? <div className='pt-2'>
                            Mark as: 
                            {data.status != "onprogress"?
                            <Button style={{margin: "0px 5px"}} color='primary' variant="contained" onClick={()=>{updateHandler("onprogress")}}>On Progress</Button>  
                            :
                            <>  </>}
                            <Button style={{margin: "0px 5px"}}  color='success' variant="contained" onClick={()=>{updateHandler("done")}}>Mark Done</Button><br/>
                        </div>:<></>}
                    </div>
                </Modal>
        </div>
    );
    }

    export default Card;