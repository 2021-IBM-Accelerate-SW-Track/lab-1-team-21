import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import "./design.css";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

 
 
  
 

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: 0,
        value: task,
        isCompleted: false,
      };
      
      setTaskList([...tasklist, taskDetails]);
    }
  };


  const deletetask = (e, id) => {
    e.preventDefault();
    setTaskList(tasklist.filter((t) => t.id != id));
  };

  const taskCompleted = (e, id) => {
    e.preventDefault();
  
    const element = tasklist.findIndex((elem) => elem.id == id);

     
    const newTaskList = [...tasklist];

     
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };

    setTaskList(newTaskList);
  };

   

  const [checked, setChecked] = React.useState(true);

  const handleChangee = (event) => {
    setChecked(event.target.checked);
  };

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(25),
    },
  }));
  
   
    const classes = useStyles();

  return (
   
   
    <div className="todo">   
    
    <TextField id="filled-basic" size="small"  label="Write Tasks" variant="filled"  onChange={(e) => handleChange(e)} />
      
      <Button variant="contained"  size = "large"color="primary" onClick={AddTask}>
        Add Task!
      </Button>
     
      
      <br />
      {tasklist !== [] ? (
        
        <ul>
          {tasklist.map((t) => (
            <li className={t.isCompleted ? "crossText" : "listitem"}>
              
              {t.value}
              
              <Checkbox
              color="primary"
              classes={{root: 'custom-checkbox-root'}}
              
              inputProps={{ 'aria-label': 'secondary checkbox' }}
              />

 
           <div id='button'>
            <Button className="delete" onClick={(e) => deletetask(e, t.id)}
              variant="contained"
              color="secondary"
            >
              Delete
            </Button>
            </div>
 
            </li>
          ))}
        </ul>
      ) 
      : null}
    </div>
    
  );

  
}


export default TodoApp;
