import React, { useState } from 'react';

const Card = ({element,index,newval,deleteTodo,addEdit,setEdit}) => {
    const [selected,setSelected] = useState('')
      return (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-3 p-3">
            <div className='card p-3'>
             <p>Name: {element.title}</p>
             <p>Description: {element.description}</p>
             <div className='d-flex'>
              <p>Status:</p> 
              &nbsp;
              <select value={element.completed&&'completed'} onChange={(e)=>{setSelected(e.target.value);newval(element.id,e.target.value)}} className={element.completed===true?'border-0 w-75 bg-success  rounded-1':'border-0 w-75 bg-danger  rounded-1'}>
                   <option value='notcompleted' className='bg-danger '>Not completed</option>
                   <option value='completed' className='bg-success '>Completed</option>  
              </select>
             </div>
             <div className='w-100 text-end mt-3'>
              <button onClick={()=>{addEdit(element.id);setEdit(true)}} className='btn btn-outline-success mx-2 px-4 py-1'>Edit</button>
              <button onClick={()=>deleteTodo(element.id)} className='btn btn-outline-danger me-2 px-4 py-1'>Delete</button>
             </div>
             </div>
          </div>
      );
  };

export default Card;