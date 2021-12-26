import React, { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {

  

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Study for Midterm',
        day: 'Dec. 23rd at 1:30 pm',
        reminder: true,
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
        reminder: true,
    },
])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter( (task) => task.id !== id))
  }



  return (
    <div className="container">
      <Header title='Task Tracker' />
      < Tasks  tasks={tasks}  onDelete={deleteTask}/>
    </div>
  );
}

export default App;
