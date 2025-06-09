import { useState, useEffect } from "react";

import { Topbar } from "./components/Topbar";
import { ToDosList } from "./components/ToDosList";
import { AddToDo } from "./components/AddToDo";

const App = (props) => {
  let [taskCount, setTaskCount] = useState(0);
  let [tasks, setTasks] = useState([]);

  const addToTasks = (task) => {
    console.log(`New task to add: ${task}`);
    setTasks([tasks, task]);
    setTaskCount(taskCount + 1);
    
    console.log(tasks);
  }


  return (
    <>
      <div className="my-2 mx-auto p-2 grid grid-flow-row-dense gap-3">
        <Topbar count={taskCount}></Topbar>
        <ToDosList></ToDosList>
        <AddToDo clicked={addToTasks}></AddToDo>
      </div>
    </>
  );
}

export { App }
