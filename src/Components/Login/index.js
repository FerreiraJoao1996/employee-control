import React, {useEffect} from "react";
import { useForm, Controller } from 'react-hook-form';
import { Container, TextField, Button } from '@mui/material';
import { useNavigate  } from 'react-router-dom';
import styles from './Login.module.css';


function Login () {
    const redirect = useNavigate ()
    const { handleSubmit, control } = useForm();
    const onSubmit = (data) => {
    }

    const loginButton = () => {
        redirect('/');
    };

    useEffect(() => {
        document.body.classList.add(styles.bodyLogin);
        return () => {
            document.body.classList.remove(styles.bodyLogin);
        };
    }, []);

    return (
        <Container className={styles.containerLogin} id="containerForm">
            <h1 className={styles.tituloLogin}>Entrar</h1>
            <p className={styles.subtituloLogin}>Digite seu e-mail e senha abaixo</p>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
                                className={styles.inputEmail}
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
                                className={styles.inputSenha}
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
                    className={styles.buttonStyles}
                    onClick={loginButton}
                    >
                    
                    Login
                </Button>
            </form>
        </Container>
    )
}

export default Login;
