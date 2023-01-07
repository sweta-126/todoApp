import { useState } from 'react';
import './App.css';
import List from './List';

function App() {

  const [tasks, setTasks] = useState("");
  const [lists, setLists] = useState([]);
  const [complete, setComplete] = useState([]);
  

  function changeHandler(e){
    setTasks(e.target.value);
  }

  function clickHandler(){
    setLists((olditem)=>{
      return [...olditem , tasks];
    });
    setTasks("");
  }

  function itemDelete(id){
    setLists((olditem)=>{
      return olditem.filter((ele, index)=>{
        return index !== id;
      });
    })
  }

  function itemComplete(id){
    setLists((olditem)=>{
      return olditem.filter((ele, index)=>{
        return index !== id;
      });
    });
    setComplete((old)=>{
      return [...old,lists.filter((ele, index)=>{
        if(index === id)
        return ele;
      })]
    });
  }
  console.log(complete);
 
  return (
    <>
      <h1 className='heading'>Hey User !</h1>
      <div className="App">
        <input type='text' className='input' placeholder='Add tasks...' value={tasks} onChange={changeHandler} />
        <button className='button'onClick={clickHandler}>Add Task</button>
      </div>
      <ol>
      <h3>Pending Tasks {">"}</h3>
        {lists.map((todo, ind)=>{
          return (<List key={ind} id={ind}  text={todo} select={itemDelete} selection={itemComplete} />);
        })}
      </ol>
      <ol className='complete'>
      <h3>Completed Tasks  {">"}</h3>
      {complete.map((todo, ind)=>{
          return (<List key={ind} id={ind}  text={todo}  />);
        })}
       </ol>
    </>
  );
}

export default App;

