import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Layout from './Components/Layout';
import Login from "./Components/Login";

function RoutesApp() {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}/>
          <Route path="/login" element={<Login />} />

          {/* <Route path="*" element={<Erro />} /> */}
        </Routes>
      </BrowserRouter>
    )
  }

export default RoutesApp;