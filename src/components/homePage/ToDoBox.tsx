import React from 'react';
import Card from './card';
import CardData from '../../interfaces/cardData';


interface ToDoBoxProps {
    title?: string;
    data: CardData[];
}

const ToDoBox = ({ title = "Done", data=[] }: ToDoBoxProps) => {
    return (
        <div className="rounded-lg w-1/3 bg-[#F5F5F5] px-5">
            <div className={`border-b-[3px] flex py-3 flex-row justify-between  border-[#5030E5]`}>
                <div><div className='w-[10px] h-[10px] rounded-full inline-block bg-[#5030E5] mr-2'></div>{title}</div>
                <button className="hover:bg-[#5130e572] duration-200 text-[#5030E5] px-2 bg-[#5130e542] rounded-lg">+</button>
            </div>
            <div className='flex flex-col py-3 gap-y-2'>
                {data.length === 0 ? 
                    <div>No data</div> : 
                    data.map((cardData) => <Card data={cardData} />
                )}
            </div>
        </div>
    );
}

    export default ToDoBox;