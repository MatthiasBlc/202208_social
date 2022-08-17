import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";




import Header from "./components/Header";

const App = () => {

  return (
    <BrowserRouter>
          <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
