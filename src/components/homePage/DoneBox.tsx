import React from 'react';
import Card from './card';
import CardData from '../../interfaces/cardData';

interface DoneBoxProps {
    title?: string;
    data?: CardData[];
}

const DoneBox = ({title = "To Do",data=[]}: DoneBoxProps) => {
    
    return (
        <div className="rounded-lg w-1/3 bg-[#F5F5F5] px-5">
            <div className={`border-b-[3px] flex py-3 flex-row justify-between  border-[#8BC48A]`}> 
                <div><div className='w-[10px] h-[10px] rounded-full inline-block bg-[#8BC48A] mr-2'></div>{title}</div>
                <button className =  "hover:bg-[#8BC48A72] duration-200 text-[#8BC48A] px-2 bg-[#8BC48A42] rounded-lg">+</button>
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

    export default DoneBox;