import React from "react";
import { useForm, Controller } from 'react-hook-form';
import { Container, TextField, Button } from '@mui/material';
import { useNavigate  } from 'react-router-dom';
import './Login.css';


function Login () {
    const redirect = useNavigate ()
    const { handleSubmit, control } = useForm();
    const onSubmit = (data) => {
    }

    const loginButton = () => {
        redirect('/');
    };

    const buttonStyles = {
        fontWeight: 'bold',
        fontFamily: 'system-ui',
        fontSize: '1.05em',
        backgroundColor: 'rgba(6, 6, 58, 0.945)',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        marginTop: '15px',
      };

    return (
        <Container id="containerLogin">
            <h1>Entrar</h1>
            <p>Digite seu e-mail e senha abaixo</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: true }}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                fullWidth
                                label="E-mail"
                                id="email"
                                className="inputEmail"
                                margin="dense"
                                {...field}
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: true }}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                fullWidth
                                label="Senha"
                                id="password"
                                className="inputSenha"
                                margin="dense"
                                type="password"
                                {...field}
                            />
                        )}
                    />
                </div>
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary"
                    style={buttonStyles}
                    onClick={loginButton}
                    >
                    
                    Login
                </Button>
            </form>
        </Container>
    )
}

export default Login;
