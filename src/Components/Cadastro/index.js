import React from "react";
import styles from './Cadastro.module.css';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

function Cadastro () {

   const {register, handleSubmit, control } = useForm();
   const onSubmit =(data) => console.log(data)

    return (
        <form className={styles.formRegister} onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="nome"
                control={control}
                rules={{ 
                    required: true,
                 }}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        
                        label="Nome"
                        id="nome"
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                name="sobrenome"
                control={control}
                rules={{ 
                    required: true,
                 }}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        
                        label="Sobrenome"
                        id="sobrenome"
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                name="funcao"
                control={control}
                rules={{ 
                    required: true,
                 }}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        
                        label="Função"
                        id="funcao"
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                name="email"
                control={control}
                rules={{ 
                    required: true,
                 }}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        
                        label="E-mail"
                        id="email"
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                name="telefone"
                control={control}
                rules={{ 
                    required: true,
                 }}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        
                        label="Telefone"
                        id="telefone"
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                name="celular"
                control={control}
                rules={{ 
                    required: true,
                 }}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        
                        label="Celular"
                        id="celular"
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                name="nascimento"
                control={control}
                rules={{ 
                    required: true,
                 }}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        
                        label="Data de Nascimento"
                        id="nascimento"
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                name="endereco"
                control={control}
                rules={{ 
                    required: true,
                 }}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        
                        label="Endereço"
                        id="endereco"
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                name="senha"
                control={control}
                rules={{ 
                    required: true,
                 }}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        
                        label="Senha"
                        id="senha"
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                name="confirmarSenha"
                control={control}
                rules={{ 
                    required: true,
                 }}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        
                        label="Confirmar Senha"
                        id="confirmarSenha"
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                >
                Cadastrar
            </Button>
        </form>
    )
}

export default Cadastro;
