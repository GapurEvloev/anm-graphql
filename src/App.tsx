import React from 'react';
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/Layouts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<Home/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
