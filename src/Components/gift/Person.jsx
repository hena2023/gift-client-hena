import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function Person() {
  const [Name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const [searchParams] = useSearchParams();
  sessionStorage.setItem("apptoken", searchParams.get("token"));
  localStorage.setItem("currentUid", searchParams.get("user"));

  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      const user = await fetch("/api/people");
      const response = await user.json();
      setPeople(response);
    }
    getUser();
  }, []);

  console.log(people);

  function handleNavigate(name, date,id) {
    console.log(name,date)
    navigate('/editperson', { state : {name: `${name}`, date: `${date}`, id: `${id}` }});
  }
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center">
        {people.map((person, index) => {
          return (
            <div className="card w-96 bg-base-100 shadow-xl" key={index}>
              <div className="card-body">
                <h2 className="card-title">{person.name}</h2>
                <h2 className="card-title">Date:{person.dob}</h2>

                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={()=>{handleNavigate(person.name, person.dob, person._id)}}
                  >
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>

                  <NavLink to="/gift">
                    {" "}
                    <button className="btn btn-primary">
                      <i class="fa-solid fa-gift"></i>
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
