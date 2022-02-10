
  

import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Todo from './Todo';


const TodoList=()=> {

  const[item,setItem]= useState("");
  const [newitem,setNewItem]=useState([]);


  const itemEvent=(event)=>{
    setItem(event.target.value);
  };

  const listofitem=()=>{
    setNewItem((prevValue)=>{
      return [...prevValue, item]
    });
    setItem(" ");
  }

  return (
    <>
    <div className='main_div'>
      <div className="center_div">
        <br />
        <h1>To Do list</h1>
        <br />
        <input 
        type="text"
         value={item} 
         name="text" 
         id="text" 
         placeholder="Add Your Todo Item" 
         onChange={itemEvent} />
        <Button className="btn" onClick={listofitem}>
        <AddCircleIcon />
        </Button> 

        <br />
        <ul>
          {
            newitem.map((val,index)=>{
              return <Todo key={index} text={val} />;
            })
          } 
          
        </ul>
        <br />
      </div>
      
    </div>
    </>
  )
}

export default TodoList


