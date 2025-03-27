"use client";
import { useState } from "react";

const page = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  return (
    <>
      <h1 className="text-5xl bg-black text-white p-5 font-bold text-center">
        JustToDo
      </h1>
      <form>
        <input
          type="text"
          placeholder="Task"
          className="text-2xl border-4 font-bold m-5 px-4 py-2 text-center"
          value={Title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description..."
          className="text-2xl border-4 font-bold m-5 px-4 py-2 text-center"
          value={Description}
          onChange={(e)=>setDescription(e.target.value)}
        />
        <button className="bg-black text-white px-4 py-3 m-5 rounded text-xl font-bold">
          Add Task
        </button>
      </form>
    </>
  );
};

export default page;
