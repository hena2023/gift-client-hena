import React from "react";
import { NavLink,useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  async function handleLogout(){
    sessionStorage.removeItem("apptoken");
    localStorage.removeItem("currentUid");
    const response = await fetch("/auth/logout");
    console.log(await response.status);
    navigate("/")
  }
  return (
    <>
      <div>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl" onClick={handleLogout}>
              <i class="fa-solid fa-right-from-bracket"></i>
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/addperson">
                  <i class="fa-solid fa-plus"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
