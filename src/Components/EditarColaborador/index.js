import * as React from 'react';
import { useEffect, useState } from 'react';
import styles from './EditarColaborador.module.css';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Container, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Layout from '../Layout';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VISIBLE_FIELDS = ['nome', 'função', 'email', 'telefone', 'admissão', 'ações'];

export default function Colaboradores() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/usuario/listar');

        if (!response.ok) throw new Error('Erro ao buscar os dados.');

        const data = await response.json();
        
        let users = []
        data.map((item) => {

          const date = new Date(item.createdAt)

          const dia = date.getDate().toString().padStart(2, '0'); 
          const mes = (date.getMonth() + 1).toString().padStart(2, '0');
          const ano = date.getFullYear();

          const dataFormatada = `${dia}/${mes}/${ano}`;

          users.push({
            id: item.id,
            nome: item.nome + " " + item.sobrenome,
            função: item.funcao,
            email: item.email,
            telefone: item.celular,
            admissão: dataFormatada
          })
        })

        setRows(users);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteUser = async(user) => {
    console.log(user)
    try{
      const response = await fetch(`http://localhost:3001/usuario/delete/${user}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Erro ao deletar o usuário.');

      setRows(rows.filter(user => user.id === user !== user.id));
      toast.success('Usuário deletado com sucesso.')
    }catch (error){
      toast.error(error)
    }
  }

  const handleEditUser =async(user) => {}

  return (
    <>
      <Layout />
      <Container maxWidth="xl">
        <Typography className={styles.typography}>Colaboradores</Typography>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <DataGrid
            rows={rows}
            columns={VISIBLE_FIELDS.map(field => ({
              field,
              headerName: field.charAt(0).toUpperCase() + field.slice(1),
              flex: 100,
              renderCell: (params) => {
                if (params.field === 'ações') {
                  return (
                    <>
                      <Button variant="contained" color="error" style={{ marginRight: '5px', height:'25px', width:'25px' }} onClick={() => handleDeleteUser(params.row.id)}><DeleteIcon /></Button>
                      <Button variant="contained" style={{ marginLeft: '5px', background:'#c7c7c7', height:'25px', width:'25px' }} onClick={() => handleEditUser(params.row.id)}><EditIcon /></Button>
                    </>
                  );
                }
                return params.value;
              }
            }))}
            components={{ Toolbar: GridToolbar }}
            pageSize={10}
          />
        )}
      </Container>
    </>
  );
}
