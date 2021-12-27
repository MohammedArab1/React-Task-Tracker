import React, { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {

  

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Study for Midterm',
        day: 'Dec. 23rd at 1:30 pm',
        reminder: false,
    },
    {
        id: 2,
        text: 'Buy Groceries',
        day: 'Dec. 23rd at 5:00 pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'Go to gym',
        day: 'Dec. 25th at  8:30 am',
        reminder: false,
    },
])


  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks( [...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter( (task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header title='Task Tracker' />
      <AddTask  onAdd={addTask}/>
      {tasks.length > 0 ?
      <Tasks  tasks={tasks}  onDelete={deleteTask} onToggle={toggleReminder}/>
      : 'No Tasks Found'}
    </div>
  );
}

export default App;
