import React from "react";
import { useState } from "react";
import { NavLink, useLocation ,useNavigate} from "react-router-dom";

export default function EditPerson(props) {
  const location = useLocation();
  const [Name, setName] = useState(location.state?.name);
  const [dob, setDOB] = useState(location.state?.date);
  const userid = location.state?.id;
  const ownerId = localStorage.getItem("currentUid");
  const navigate = useNavigate();
  
  async function deletePerson(){
    const response = await fetch(`/api/people/${userid}`,{
      method: 'DELETE',
      headers:{
        "Content-Type": "application/json",
      },
    })
    console.log(await response.json());
    navigate("/person")

  }
  async function updatePerson(){
    const response = await fetch(`/api/people/${userid}`,{
      method: 'PUT',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: Name, dob: dob, ownerId: ownerId ,gifts:[]})
    })
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
            Edit Someone
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
            <button class="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300" onClick={updatePerson}>
              <span class="relative">save</span>
            </button>
          </div>
          <div className="mt-3 px-3 py-2">
            <button class="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300" onClick={deletePerson}>
              <span class="relative">Delete</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
