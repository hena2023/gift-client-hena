import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";

export default function AddPerson() {
  const [Name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const navigate = useNavigate();

  async function handleAddPerson() {
    const uid = localStorage.getItem("currentUid");
    const response = await fetch("/api/people", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: Name, dob: dob,ownerId : uid, gifts: [] }),
    });
    console.log(await response.json());
    navigate("/person")
  }
  return (
    <>
      <div>
        <div>
          <div>
            <div className="navbar bg-base-100">
              <div className="flex-1">
                <NavLink
                  to="/person"
                  className="btn btn-ghost normal-case text-xl"
                >
                  <i class="fa-solid fa-caret-left"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl r  lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-indigo-700 underline ">
            Add Someone
          </h1>
          <div className="items-center">
            <label>name</label>
            <div className="mt-3 px-3 py-2">
              <input
                type="text"
                placeholder="name"
                className="input w-full max-w-xs"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <label>DOB</label>
            <div className="mt-3 px-3 py-2">
              <input
                type="date"
                placeholder="DOB"
                className="input w-full max-w-xs"
                value={dob}
                onChange={(e) => setDOB(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-3 px-3 py-2">
            <button
              class="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              onClick={handleAddPerson}
            >
              <span class="relative">save</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
