import './App.css';
import Header from './components/Header';
import React from 'react';
import Tasks from './components/Tasks';
import {useState} from 'react'
import AddTask from './components/AddTask';

function App() {
  
  const [tasks, setTasks] = useState([
  {
      id: 1,
      text: 'Food Shopping',
      day: 'Feb 5th',
      reminder: false
  },
  {
      id: 2,
      text: 'Clothes Shopping',
      day: 'Feb 16th',
      reminder: true
  }
])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} 
      : task))
  }

  const addTask = (task) => {
    console.log(task)
  }

  return (
    <div className='container'>
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to show'}
    </div>
  );
}

// class App extends React.Component{
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
