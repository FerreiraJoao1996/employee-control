import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Layout from './Components/Layout';
import Login from "./Components/Login";
import Erro from './Components/Erro';
import Cadastro from './Components/Cadastro';

function RoutesApp() {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          <Route path="*" element={<Erro/>} />
        </Routes>
      </BrowserRouter>
    )
  }

export default RoutesApp;