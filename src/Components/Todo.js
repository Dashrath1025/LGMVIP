import React, { useState } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Alert from './Alert';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function Todo(props) {
  const [line, setLine] = useState(false);
  const [alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
     setAlert({
       msg:message,
       type: type
     })
     setTimeout(() => {
       setAlert(null);
     }, 1500);
  }

  const cutIt = () => {
    setLine(true);
    showAlert("Todo Successfully Deleted","success");
  };

  const complete=()=>{
    showAlert("Good job! Todo Completed","success")
  }

  return (
    <>
      <div>
      <Alert alert={alert} className="alert"/>
      </div>
    <div className="todo_style">
      <span onClick={cutIt}>
        <DeleteForeverIcon className="deleteIcon" />
      </span>
      <span onClick={complete}>
         <CheckCircleOutlineIcon className="completeIcon" />
      </span>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
      </li>
      </div>

      
    
    </>
  );
}

export default Todo;
