import  {BrowserRouter,Routes, Route} from 'react-router-dom'
import Header from "./Components/Header";
import Login from "./Components/Login";
import Home from "./Components/Home";


function RoutesApp() {
    return(
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={ <Home />}></Route>
                <Route path="/login" element={<Login />}></Route>

                {/* <Route path="*" element={<Erro />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;