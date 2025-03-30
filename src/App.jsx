import "./App.module.css";
import { Header } from "./Header";
import { HeaderWrapper } from "./HeaderWrapper";
import { ItemCard } from "./ItemCard";
import { ListHeader } from "./ListHeader";
import { Subheader } from "./Subheader";
import { ListContainer } from "./ListContainer";
import { ItemsList } from "./ItemsList";
import { taskList } from "./taskList";
import { TaskForm } from "./TaskForm";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(taskList);

  const handleAddTask = (newTask) => {
    taskList.push(newTask);
    setTasks([...taskList]); 
  };

  return (
    <div>
      <HeaderWrapper> 
        <Header title="TodoApp" />
        <Subheader subtitle="Todo List Manager" />
        <TaskForm onAddTask={handleAddTask} />
        <ListHeader content="Todo List" />
      </HeaderWrapper>
      <ListContainer>
        <ItemsList itemsList={tasks}/>
      </ListContainer>
    </div>
  ); 
}

export default App;