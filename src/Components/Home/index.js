import React, {useEffect} from "react";
import styles from './Home.module.css';
import { Container} from '@mui/material';

function Home () {

    useEffect(() => {
        document.body.classList.add(styles.bodyHome);
        return () => {
            document.body.classList.remove(styles.bodyHome);
        };
    }, []);

    return (
        <Container id="containerLogin">
            {/* <h1>Home</h1> */}
        </Container>
    )
}


export default Home;