import React, { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import Container from './components/Container';
import Header from './components/Header';
import InputTask from './components/InputTask';
import TaskContent from './components/TaskContent';

function App() {
  
  // Pasar las tareas a localstorage
  let initialTask = JSON.parse(localStorage.getItem("tasks"));

  if(!initialTask)
  {
    initialTask = [];
  }

  const [tasks, setTasks] = useState(initialTask);

  useEffect(() => {
    if(initialTask)
    {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    else
    {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  }, [initialTask, tasks])

  const createTask = (task) => {
    setTasks([
      ...tasks,
      task
    ])
  }

  const deleteTask = (id) => {
    const currentTask = tasks.filter((task) => task.idTask !== id);
    setTasks(currentTask);
    
  }

  return (
      <Container>
        <Header />
        <InputTask createTask={createTask} />
        <TaskContent tasks={tasks} deleteTask={deleteTask} />
      </Container>
  );
}

export default App;
