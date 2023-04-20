import React from "react";

import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import AddPerson from "./Components/gift/AddPerson";
import Person from "./Components/gift/Person";
import Gift from "./Components/gift/Gift";
import EditPerson from "./Components/gift/EditPerson";
import GiftView from "./Components/gift/GiftView";
import EditGift from "./Components/gift/EditGift";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/addperson" element={<AddPerson />} />
        <Route exact path="/editperson" element={<EditPerson />} />

        <Route exact path="/person" element={<Person />} />
        <Route exact path="/gift" element={<GiftView />} />
        <Route exact path="/addgift" element={<Gift />} />
        <Route exact path="/editgift" element={<EditGift />} />



      </Routes>
    </>
  );
}

export default App;
