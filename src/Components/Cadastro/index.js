import React, { useState, useEffect } from "react";
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import styles from './Cadastro.module.css';
import Layout from '../Layout'
import { Button, Container, Divider, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import axios from "axios";

function Cadastro () {
    const estados = ['SP'];
    const cidades = ['São José do Rio Preto', 'Bady Bassitt'];
    const [endereco, setEndereco] = useState({})

    const {handleSubmit, control, setValue  } = useForm();
    const onSubmit = (data) => console.log(data)

    const buscarEndereco  = async (cep) => {
    try {
        console.log(cep)
        const response = await axios.get(`https://viacep.com.br/ws/${cep.replace('-', '').trim()}/json/`);
        const { data } = response;
        console.log(data)
        setEndereco(data);
        setValue('logradouro', data.logradouro);
        setValue('bairro', data.bairro);
        setValue('cidade', data.localidade);
        setValue('estado', data.uf);
        } catch (error) {
        console.error('Erro ao buscar endereço:', error);
        }
    }

    useEffect(() => {
        if (endereco.cep) {
          setValue('logradouro', endereco.logradouro);
          setValue('bairro', endereco.bairro);
          setValue('cidade', endereco.localidade);
          setValue('estado', endereco.uf);
        }
    }, [endereco, setValue]);

    return (
        <><Layout />
        <form className={styles.formRegister} onSubmit={handleSubmit(onSubmit)}>
            <Container maxWidth="lg">
                <Typography padding={0} margin={0}>Dados Pessoais</Typography>
                <Divider />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Controller
                           
                            name="nome"
                            control={control}
                            rules={{
                                required: 'Este campo é obrigatório',
                            }}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    className={styles.w100}
                                    label="Nome"
                                    id="nome"
                                    margin="normal"
                                    {...field}
                                    maxWidth="100%"
                                />
                            )} 
                        />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Controller
                                name="sobrenome"
                                control={control}
                                rules={{
                                    required: 'Este campo é obrigatório',
                                }}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        className={styles.w100}
                                        label="Sobrenome"
                                        id="sobrenome"
                                        margin="normal"
                                        {...field} 
                                    />
                                )} 
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: 'Este campo é obrigatório',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Digite um e-mail válido'
                                    }
                                }}
                                defaultValue=""
                                render={({ field, fieldState  }) => (
                                    <TextField
                                        className={styles.w100}
                                        label="E-mail"
                                        id="email"
                                        margin="normal"
                                        error={!!fieldState.error}
                                        helperText={fieldState.error && fieldState.error.message}
                                        {...field} 
                                    />
                                )} 
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Controller
                                name="telefone"
                                control={control}
                                rules={{
                                    required: 'Este campo é obrigatório',
                                }}
                                defaultValue=""
                                render={({ field, fieldState }) => (
                                    <InputMask
                                    mask="(99) 9999-9999"
                                    value={field.value}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    >
                                    {(inputProps) => (
                                        <TextField
                                        className={styles.w100}
                                        label="Telefone"
                                        id="telefone"
                                        margin="normal"
                                        error={!!fieldState.error}
                                        helperText={fieldState.error && fieldState.error.message}
                                        {...inputProps}
                                        />
                                    )}
                                    </InputMask>
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Controller
                                name="celular"
                                control={control}
                                rules={{
                                    required: 'Este campo é obrigatório',
                                }}
                                defaultValue=""
                                render={({ field, fieldState }) => (
                                    <InputMask
                                    mask="(99) 99999-9999"
                                    value={field.value}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    >
                                    {(inputProps) => (
                                        <TextField
                                        className={styles.w100}
                                        label="Celular"
                                        id="celular"
                                        margin="normal"
                                        error={!!fieldState.error}
                                        helperText={fieldState.error && fieldState.error.message}
                                        {...inputProps}
                                        />
                                    )}
                                    </InputMask>
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Controller
                                name="dataNascimento"
                                control={control}
                                rules={{
                                    required: 'Este campo é obrigatório',
                                }}
                                defaultValue=""
                                render={({ field, fieldState }) => (
                                    <InputMask
                                    mask="99/99/9999"
                                    value={field.value}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    >
                                    {(inputProps) => (
                                        <TextField
                                        className={styles.w100}
                                        label="Data de Nascimento"
                                        id="dataNascimento"
                                        margin="normal"
                                        error={!!fieldState.error}
                                        helperText={fieldState.error && fieldState.error.message}
                                        {...inputProps}
                                        />
                                    )}
                                    </InputMask>
                                )}
                            />
                        </Grid>
                    </Grid>
            </Container>
            <Container maxWidth="lg">
                <Typography padding={0} margin={0}>Endereço</Typography>
                <Divider />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <Controller
                            name="cep"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <InputMask
                                    mask="99999-999"
                                    value={field.value}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        buscarEndereco(e.target.value);
                                      }}
                                >
                                    {(inputProps) => (
                                        <TextField
                                            label="CEP"
                                            margin="normal"
                                            {...inputProps}
                                        />
                                    )}
                                </InputMask>
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Controller
                            name="logradouro"
                            control={control}
                            rules={{
                                required: 'Este campo é obrigatório',
                            }}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    className={styles.w100}
                                    label="Rua/AV"
                                    id="logradouro"
                                    margin="normal"
                                    {...field} 
                                />
                            )} 
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Controller
                            name="bairro"
                            control={control}
                            rules={{
                                required: 'Este campo é obrigatório',
                            }}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    className={styles.w100}
                                    label="Bairro"
                                    id="bairro"
                                    margin="normal"
                                    {...field} 
                                />
                            )} 
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Controller
                            name="numero"
                            control={control}
                            rules={{
                                required: 'Este campo é obrigatório',
                                maxLength: {
                                    value: 6,
                                    message: 'Número deve ter no máximo 6 caracteres',
                                },
                                pattern: {
                                    value: /^\d+$/,
                                    message: 'Digite apenas números',
                                },
                            }}
                            defaultValue=""
                            render={({ field, fieldState }) => (
                                <TextField
                                    className={styles.w100}
                                    label="Número"
                                    id="numero"
                                    margin="normal"
                                    error={!!fieldState.error}
                                    helperText={fieldState.error && fieldState.error.message}
                                    {...field}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl sx={{ m: 2, margin: "normal", marginTop: '15px' }} fullWidth>
                            <InputLabel id="demo-simple-select-helper-label">Estado</InputLabel>
                            <Controller
                            name="estado"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Select
                                {...field}
                                labelId="demo-simple-select-helper-label"
                                id="estado"
                                label="Estado"
                                fullWidth
                                >
                                {estados.map((estado) => (
                                    <MenuItem key={estado} value={estado}>{estado}</MenuItem>
                                ))}
                                </Select>
                            )}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl sx={{ m: 2, margin: "normal", marginTop: '15px' }} fullWidth>
                            <InputLabel id="demo-simple-select-helper-label">Cidade</InputLabel>
                            <Controller
                            name="cidade"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Select
                                {...field}
                                labelId="demo-simple-select-helper-label"
                                id="cidade"
                                label="Cidade"
                                fullWidth
                                >
                                {cidades.map((cidade) => (
                                    <MenuItem key={cidade} value={cidade}>{cidade}</MenuItem>
                                ))}
                                </Select>
                            )}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Container> 
            <Container maxWidth="lg">
                <Typography padding={0} margin={0}>Profissional</Typography>
                <Divider />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="funcao"
                            control={control}
                            rules={{
                                required: 'Este campo é obrigatório',
                            }}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    className={styles.w100}
                                    label="Função"
                                    id="funcao"
                                    margin="normal"
                                    {...field} 
                                />
                            )} 
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="usuario"
                            control={control}
                            rules={{
                                required: 'Este campo é obrigatório',
                            }}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    className={styles.w100}
                                    label="Usuário"
                                    id="usuario"
                                    margin="normal"
                                    {...field} 
                                />
                            )} 
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="senha"
                            control={control}
                            rules={{
                                required: 'Este campo é obrigatório',
                                minLength: {
                                value: 8,
                                message: 'A senha deve ter no mínimo 8 caracteres',
                                },
                                pattern: {
                                value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])\S+$/,
                                message: 'A senha deve conter pelo menos 1 letra maiúscula, 1 número e 1 caractere especial',
                                },
                            }}
                            defaultValue=""
                            render={({ field, fieldState }) => (
                                <TextField
                                    className={styles.w100}
                                    label="Senha"
                                    id="senha"
                                    type="password"
                                    margin="normal"
                                    error={!!fieldState.error}
                                    helperText={fieldState.error && fieldState.error.message}
                                    {...field} 
                                />
                            )} 
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="confirmarSenha"
                            control={control}
                            rules={{
                                required: 'Este campo é obrigatório',
                                minLength: {
                                value: 8,
                                message: 'A senha deve ter no mínimo 8 caracteres',
                                },
                                pattern: {
                                value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])\S+$/,
                                message: 'A senha deve conter pelo menos 1 letra maiúscula, 1 número e 1 caractere especial',
                                },
                            }}
                            defaultValue=""
                            render={({ field, fieldState }) => (
                                <TextField
                                    className={styles.w100}
                                    label="Confirmar Senha"
                                    id="confirmarSenha"
                                    type="password"
                                    margin="normal"
                                    error={!!fieldState.error}
                                    helperText={fieldState.error && fieldState.error.message}
                                    {...field}
                                />
                            )} 
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={styles.w100}
                        >
                            Cadastrar
                        </Button>
                    </Grid>
                </Grid>
            </Container> 
        </form></>
    )
}

export default Cadastro;
