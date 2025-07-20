"use client";
import React, { useState } from "react";

const page = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [mainTasks, setMainTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTasks([...mainTasks, { task, description }]);
    console.log(description);
    setTask("");
    setDescription("");
  };

  const deleteHandler = (i) => {
    let copytasks = [...mainTasks];
    copytasks.splice(i, 1);
    setMainTasks(copytasks);
  };

  let renderTask = <h2>No task available</h2>;

  if (mainTasks.length > 0) {
    renderTask = mainTasks.map((t, i) => {
      return (
        <li className="flex items-center justify-between" key={i}>
          <div className="flex justify-between p-5 m-5 w-2/3" key={i}>
            <h5 className="text-2xl font-semibold">{t.task}</h5>
            <h6 className="text-lg font-semibold">{t.description}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 text-white rounded p-2 m-5 "
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h2 className="bg-black text-white p-5 text-5xl text-center font-semibold">
        Ankit's Todo list
      </h2>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl p-2 m-5 border-2 border-black rounded"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input
          type="text"
          className="text-2xl p-2 m-5 border-2 border-black rounded"
          placeholder="Set description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="bg-black text-white p-2 m-5 rounded">Add</button>
      </form>

      <hr />

      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
