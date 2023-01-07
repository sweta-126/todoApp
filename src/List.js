import React, { useState } from 'react';
import './App.css';

const List = (props) => {

  let date = new Date();
  let day=date.getDate();
  let month=date.getMonth()+1;
  let year=date.getFullYear();
  date= day + '/' + month + '/' + year ;

  return (
    <div className='card'>
      <li>{props.text}</li>
      {date}
      <div>
        <button className='button' onClick={()=>{
          props.select(props.id);
        }}>Delete</button>
        <button className='button' onClick={()=>{
          props.selection(props.id);
        }}>Completed</button>
      </div>
    </div>
  )
}

export default List
