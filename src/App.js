import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import Taskcard from './components/Taskcard';
import { useState } from 'react';
function App() {
  const [task, setTask] = useState([
    { id: 5252, name: "sakib", status: true },
    { id: 5875, name: "zaidi", status: false },
    { id: 6587, name: "deeba", status: true },
    { id: 1110, name: "AskariZaidi", status: false },
  ]);
  return (
    <div className="App">
        <Header/>
        <AddTask task={task} setTask = {setTask}/>
        <Taskcard task={task} setTask={setTask}/>
        <Footer/>
    </div>
  );
}

export default App;
