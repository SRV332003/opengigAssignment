import Card from './card';
import CardData from '../../interfaces/cardData';

interface ProgressBoxProps {
    title?: string;
    data?: CardData[];
}

const ProgressBox = ({title = "On Progress", data=[]}: ProgressBoxProps) => {
    return (
        <div className="rounded-lg w-1/3 bg-[#F5F5F5] px-5">
            <div className={`border-b-[3px] flex py-3 flex-row justify-between  border-[#FFA500]`}> 
                <div><div className='w-[10px] h-[10px] rounded-full inline-block bg-[#FFA500] mr-2'></div>{title}</div>
                <button className =  "hover:bg-[#FFA50072] duration-200 text-[#FFA500] px-2 bg-[#FFA50042] rounded-lg">+</button>
            </div>
            <div className='flex flex-col py-3 gap-y-2'>
            {data.length === 0 ? 
                    <>
                    <Card /> <Card /> <Card /> <Card /> <Card /> 
                    </>
                     
                     : 
                    data.map((cardData) => <Card data={cardData} />
                )}
            </div>
        </div>
    );
    }

    export default ProgressBox;