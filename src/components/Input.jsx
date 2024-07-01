import React, { useState } from 'react';

const Input = ({addTask,title,description,setDescription,setTitle,edit,editTask}) => {

  
    return (
      <div className="row mt-5 mb-4 justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-2">
          <input
            className="title form-control"
            type="text"
            placeholder="Enter Your Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-2">
          <input
            className="description form-control"
            type="text"
            placeholder="Enter Your description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {edit?<button className="btn btn-success col-sm-4 col-md-3 col-lg-2 my-2" 
        onClick={()=>editTask()}>Edit Todo</button>:<button className="btn btn-outline-success col-sm-4 col-md-3 col-lg-2 my-2" 
        onClick={()=>addTask()}>Add Todo</button>}
       
      </div>
    );
  };

export default Input;