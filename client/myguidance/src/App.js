import Headerbar from "./components/Headerbar";
import Menubar from "./components/Menubar";
import Middlebar from "./components/Middlebar";
import Testlist from "./components/Testlist";
import React, { useState } from "react";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("전체");

  return (
    <div className="App">
      <Headerbar />
      <Menubar />
      <Middlebar setSelectedMenu={setSelectedMenu} />
      <Testlist selectedMenu={selectedMenu} />
      {selectedMenu}
    </div>
  );
}

export default App;
