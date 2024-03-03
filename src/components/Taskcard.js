import React from "react";
import Tasklist from './Tasklist';
import './taskCard.css';
export default function Taskcard({task, setTask}) {
  function handledelete(id){

      setTask(task.filter((item)=>(
          item.id !== id
      )))

  }
  return (
      <div className="Taskcard">
           
           {task.map((item)=>(
            <Tasklist key ={item.id} id={item.id} name={item.name} status={item.status} handledelete={()=>handledelete(item.id)}/>
           ))}

      </div>
  );
}
