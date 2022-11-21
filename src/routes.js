import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Erros from "./pages/Erros";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/Movie/:id" element={ <Movie/> } />

                <Route path="*" element={ <Erros/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;