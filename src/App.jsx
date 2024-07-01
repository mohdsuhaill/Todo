import React, { useState } from "react";
import Card from "./components/Card";
import Input from "./components/Input";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [data, setdata] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [edit, setEdit] = useState(false);
  const [Id, setId] = useState();
  const [val, setval] = useState("");

  const addTodo = (title, description) => {
    if (title.length !== 0 && description.length !== 0) {
      let task = {
        id: todo.length + 1,
        title: title,
        description: description,
        completed: false,
      };
      setval("");
      setTodo([...todo, task]);
    }
  };

  const addTask = (e) => {
    addTodo(title, description);
    setTitle("");
    setDescription("");
    console.log("added");
  };

  const newval = (id, value) => {
    const statusData = todo.filter((e) => id === e.id);
    if (value === "completed") {
      statusData[0].completed = true;
    } else if (value === "notcompleted") {
      statusData[0].completed = false;
    }
    console.log(todo);
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter((e) => e.id !== id));
    setdata(data.filter((e) => e.id !== id));
  };

  const addEdit = (id) => {
    const data = todo.filter((e) => e.id === id);
    setId(id);
    setTitle(data[0].title);
    setDescription(data[0].description);
  };

  const editTask = () => {
    const data = todo.filter((e) => e.id === Id);
    data[0].title = title;
    data[0].description = description;
    setTodo([...todo]);
    setTitle("");
    setDescription("");
    setEdit(false);
  };

  const filterData = (value) => {
    setval(value);
    if (value === "all") {
      setdata([...todo]);
    } else if (value === "completed") {
      setdata(todo.filter((e) => e.completed === true));
    } else if (value === "notcompleted") {
      setdata(todo.filter((e) => e.completed === false));
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-center ">My Todo</h1>
      <Input
        addTodo={addTodo}
        addTask={addTask}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        edit={edit}
        editTask={editTask}
      />
      <div className="w-100 d-flex justify-content-between">
        <h3 className="text-center">My Todo List</h3>
        <div className="d-flex align-items-center">
          <h3 className="mb-0">Status:&nbsp;</h3>
          <select
            onChange={(e) => filterData(e.target.value)}
            className="filter text-center h-100  border-0"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="notcompleted">Not Completed</option>
          </select>
        </div>
      </div>
      <div className="row ">
        {val === ""
          ? todo.map((element, index) => {
              return (
                <Card
                  key={index}
                  element={element}
                  index={element.id}
                  newval={newval}
                  deleteTodo={deleteTodo}
                  setEdit={setEdit}
                  addEdit={addEdit}
                />
              );
            })
          : data.map((element, index) => {
              return (
                <Card
                  key={index}
                  element={element}
                  index={element.id}
                  newval={newval}
                  deleteTodo={deleteTodo}
                  setEdit={setEdit}
                  addEdit={addEdit}
                />
              );
            })}
      </div>
    </div>
  );
};

export default App;
