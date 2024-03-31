import { useEffect, useState } from "react";
import DoneBox from "../components/homePage/DoneBox";
import ProgressBox from "../components/homePage/ProgressBox";
import ToDoBox from "../components/homePage/ToDoBox";
import { getTasks } from "../components/httpd";
import CardData from "../interfaces/cardData";

interface Tasks {
    todo: CardData[];
    onprogress: CardData[];
    done: CardData[];
}


const Home = () => {
    
    const [tasks, setTasks] = useState({} as Tasks);

    useEffect (() => {

        getTasks().then((data) => {
            console.log(data);
            setTasks(data.tasks);
            }
        );
        

    },[]);

    return (
        <div className="p-10 flex flex-row gap-x-4 justify-between">
            <ToDoBox title="To Do" data={tasks["todo"]} />
            <ProgressBox title="On Progress" data={tasks["onprogress"]}/>
            <DoneBox title="Done" data={tasks["done"]}/>
        </div>
    );
    }

export default Home;
