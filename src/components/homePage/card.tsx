import React from 'react';



const Card = ({data = {title: "Brainstorming", description: "Brainstorming for the project", priority:"Low" , status: "1", date: "2021-10-10T10:00:00"}}) => {
    return (
        <div className="rounded-lg bg-white p-5">
            <div className='flex flex-row justify-between'>
                <div className='p-1 w-min text-[#D58D49] rounded-sm bg-[#d58d4949] text-xs'> {data.priority}</div>
                <button className='font-bold cursor-pointer rounded-sm px-3 duration-300'>•••</button>
            </div>
               
               <div className="text-lg font-[600] font-[Inter]">{data.title}</div>
               <div className="text-xs text-[#787486] font-[Inter]">{data.description}</div>
        </div>
    );
    }

    export default Card;