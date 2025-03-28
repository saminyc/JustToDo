"use client";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { Title, Description }]);
    setTitle("");
    setDescription("");
    console.log(mainTask);
  };
  const deleteHandler = (idx)=>{
    let copyTask = [...mainTask]
    copyTask.splice(idx)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, idx) => {
      return (
        <li key={idx} className="flex items-center justify-between">
          <div className="flex justify-between mb-5 w-2/3">
            <h3 className="text-xl font-semibold">{t.Title}</h3>
            <h4 className="text-lg font-medium">{t.Description}</h4>
          </div>
          <button onClick={()=>{deleteHandler(idx)}} className="bg-red-300 text-black px-2 py-2 m-5 rounded text-s font-bold">
            delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="text-5xl bg-black text-white p-5 font-bold flex justify-center items-center gap-6">
        <Image
          src="/JustToDoIcon.JPG" // Path relative to public/
          alt="Just To Do Logo"
          width={50} // Adjust width
          height={50} // Adjust height
          priority // Ensures it's loaded fast
        />
        JustToDo
      </h1>
      <form className="text-center mt-6 items-center" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Task"
          className="text-2xl border-4 font-bold m-5 px-4 py-2 text-center"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description..."
          className="text-2xl border-4 font-bold m-5 px-4 py-2 text-center"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button onClick={submitHandler} className="bg-black text-white px-4 py-3 m-5 rounded text-xl font-bold">
          Add Task
        </button>
      </form>
      <hr className="mt-6" />
      <div className="bg-slate-200 p-8">
        <ul className="text-center">{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
