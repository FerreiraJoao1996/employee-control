import * as React from 'react';
import { useEffect, useState } from 'react';
import styles from './EditarColaborador.module.css';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Container, Typography } from '@mui/material';
import Layout from '../Layout';

const VISIBLE_FIELDS = ['nome', 'função', 'email', 'telefone', 'admissão'];

export default function InitialFilters() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const createFakeData = () => {
      const fakeData = [];
      for (let i = 0; i < 10; i++) {
        fakeData.push({
          id: i + 1,
          nome: `Colaborador ${i + 1}`,
          função: Math.random() > 0.5 ? 'Desenvolvedor' : 'Designer',
          email: `colaborador${i + 1}@empresa.com`,
          telefone: `(11) 9${Math.floor(Math.random() * 1000000000)
            .toString()
            .padStart(9, '0')}`,
          admissão: new Date(
            2022,
            Math.floor(Math.random() * 12),
            Math.floor(Math.random() * 28) + 1
          ).toISOString(),
        });
      }
      return fakeData;
    };

    const fakeData = createFakeData();
    setRows(fakeData);
    setLoading(false);
  }, []);

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
            }))}
            components={{ Toolbar: GridToolbar }}
            pageSize={10}
            // checkboxSelection
            // disableRowSelectionOnClick
          />
        )}
      </Container>
    </>
  );
}
