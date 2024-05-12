import React from "react";
import "./App.css";
import { ModalProvider } from "./contex/ModalContex";
import { Toaster } from "react-hot-toast";
import AddUsers from "./component/modal/AddUserModal";
import Home from "./layout/Home";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <Toaster />
        <Navbar />
        
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </ModalProvider>
    </div>
  );
}

export default App;
