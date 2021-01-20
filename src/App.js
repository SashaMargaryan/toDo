import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';  

function App() {
  const [showAddtask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(
    [
      {id: 1,
        text: 'Food 1',
        day: 'Fod 2th at 1:50pm',
        reminder: false
      },
      {id: 2,
        text: 'Food 2',
        day: 'Fod 9th at 3:30pm',
        reminder: false
      },
      {id: 3,
        text: 'Food 3',
        day: 'Fod 3th at 4:20pm',
        reminder: false
      },
    ]
  );
    //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter( (task) => task.id !== id))
  };

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
        task.id === id ? {...task, reminder: !task.reminder} : task
      
    ))
  };

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) +1
    const newTask = {id, ...task };
    setTasks([...tasks, newTask])
  }
  
  return (
    <div className="container">
        <Header onAdd={() => 
            setShowAddTask(!showAddtask)}
            showAdd={showAddtask} 
        />
        {showAddtask && <AddTask onAdd={addTask} />}

        {tasks.length > 0 ? 
          (<Tasks tasks={tasks} 
              onDelete={deleteTask}
              onToggle={toggleReminder}
          
          />) : "No Task"}
      
    </div>
  );
}



export default App;
