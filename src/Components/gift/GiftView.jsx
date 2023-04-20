import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function GiftView() {
  const [gifts, setGifts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getGifts() {
      const response = await fetch("/api/gifts");
      setGifts(await response.json());
    }
    getGifts();
  }, []);
  console.log(gifts);
  function handleEditGift(txt,store,url,id){
    navigate('/editgift', { state : {txt: `${txt}`, store: `${store}`, url: `${url}`, id:`${id}` }});

  }
  return (
    <>
      <div>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <NavLink
              to="/addperson"
              className="btn btn-ghost normal-case text-xl"
            >
              <i class="fa-solid fa-caret-left"></i>
            </NavLink>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/addgift">
                  <i class="fa-solid fa-plus"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {" "}
        <h2>Gifts Idea For Someone</h2>
      </div>
      <div>
        <div className="flex justify-center">
          {gifts.map((gift, index) => {
            return (
              <div className="card w-96 bg-base-100 shadow-xl" key={index}>
                <div className="card-body">
                  <h2 className="card-title">{gift.txt}</h2>
                  <h2 className="card-title">
                    store:{gift.store}
                  </h2>
                  <a className="card-title" href={gift.url} target="_blank">
                    url:<span className="text-blue-500 underline">{gift.url}</span>
                  </a>

                  <div className="card-actions justify-end">
                      <button className="btn btn-primary" onClick={()=>{handleEditGift(gift.txt,gift.store,gift.url,gift._id)}}>
                        <i class="fa-solid fa-pen-to-square"></i>
                      </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
