import  {BrowserRouter,Routes, Route} from 'react-router-dom'
import Header from "./Components/Header";
import Login from "./Components/Login";
import Index from "./Components/Index";


function RoutesApp() {
    return(
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={ <Index />}></Route>
                <Route path="/login" element={<Login />}></Route>

                {/* <Route path="*" element={<Erro />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;