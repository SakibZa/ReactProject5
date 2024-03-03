import React from 'react';
import './addTask.css';
import { useState , useRef} from 'react';
export default function AddTask({task , setTask}) {

    // const [taskValue , setTaskValue] = useState("");
    const [progress , setProgress] = useState(false);
     
    const taskRef = useRef(""); 
    //  const handlechange = (event)=>{
         
    //     setTaskValue(event.target.value);
    //  }

     const handleReset = ()=>{
     
        taskRef.current.value = "";
     }

     const handleSubmit = (event) =>{
          
        let progressValue = progress==="true";
        event.preventDefault()
        console.log(progressValue);
        const taskObj = {
            id : Math.floor(Math.random()*1000),
            name : taskRef.current.value,
            status : progressValue
        }
        setTask([...task, taskObj])
        handleReset();
     }
  return (
    <div className='addTask'>
        <form onSubmit={handleSubmit} >
            <label htmlFor="addName">AddName:</label>
            <input type="text" id='addName' placeholder='AddName' autoComplete='off' name='addName' ref={taskRef}/>
            <select name="status" id="status"  onChange={(event) => setProgress(event.target.value)} value={progress}>

                <option value="true">complete</option>
                <option value="false">incomplete</option>
            </select>
            <button type='submit'>Add Task</button>
            <button id="reset" onClick={handleReset} type = "reset">reset</button>
        </form>
    </div>
  )
}
