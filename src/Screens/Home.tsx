import DoneBox from "../components/homePage/DoneBox";
import ProgressBox from "../components/homePage/ProgressBox";
import ToDoBox from "../components/homePage/ToDoBox";




const Home = () => {
    

    return (
        <div className="p-10 flex flex-row gap-x-4 justify-between">
            <ToDoBox title="To Do" color="#5030E5"/>
            <ProgressBox title="On Progress"/>
            <DoneBox title="Done"/>
        </div>
    );
    }

export default Home;
