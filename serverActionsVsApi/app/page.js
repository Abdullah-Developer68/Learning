"use client";
// in here use client is written for the event handler to work
// import fs from "fs/promises";
import { useRef } from "react";
import submitAction from "@actions/form";

export default function Home() {
  // event handlers can only be used in client components
  const handleClick = async () => {
    let data = {
      name: "Harry",
      role: "Coder",
    };
    let a = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    let res = await a.json();
    console.log(res);
  };
  let ref = useRef();
  // const submitAction = async (e) => {
  //   // this can not be used in a client component. Still, to use it
  //   //  such components define these in seperate files and import them
  //   //  here. or if this code is written in a client component here and
  //   //  use server is not used then it will run in the client side but it
  //   //  will not have features of the backend capibilites of next.js
  //   "use server"; // This directive makes this function execute on the server side,
  //   // giving access to backend capabilities like fs, databases, etc.
  //   console.log(e.get("name"), e.get("role"));
  //   fs.writeFile("harry.txt", `Name: ${e.get("name")}, Role: ${e.get("role")}`);
  // };
  return (
    <div>
      <h1 className="text-xl font-bold">Welcome to the Next.js API Example</h1>
      {/* in next.js event handlers can not be used in server componets hence useClient is mandatory */}
      <button
        onClick={handleClick}
        className="bg-gray-700 mt-10 ml-20 cursor-pointer p-2 rounded-md"
      >
        {" "}
        Click me
      </button>
      <form
        // action={submitAction}
        ref={ref}
        action={(e) => {
          submitAction(e);
          // ref.current.reset();
        }}
        className="mt-10 ml-20 flex flex-col justify-center items-center gap-2 bg-gray-700 p-10 rounded-2xl w-fit"
      >
        <label htmlFor="name">Name:</label>
        {/* id -> used by htmlFor to identify the html element this improves
         accessibility. Name is used to set the name of the payload that
          is sent to the server*/}
        <input
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          className="text-white bg-black p-2 rounded-md"
        />
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          placeholder="Role"
          name="role"
          id="role"
          className="text-white bg-black p-2 rounded-md"
        />
        <button
          type="submit"
          className="p-4 rounded-md bg-black cursor-pointer w-fit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
