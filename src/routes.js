import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Layout from './Components/Layout';
import Login from "./Components/Login";
import Erro from './Components/Erro';
import Cadastro from './Components/Cadastro';
import EditarColaborador from './Components/EditarColaborador';

function RoutesApp() {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/listar" element={<EditarColaborador />} />

          <Route path="*" element={<Erro/>} />
        </Routes>
      </BrowserRouter>
    )
  }

export default RoutesApp;