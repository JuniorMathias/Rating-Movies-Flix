import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Erros from "./pages/Erros";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Favoritos from './pages/Favoritos';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/movie/:id" element={ <Movie/> } />
		<Route path="/favoritos" element={ <Favoritos/> } />

                <Route path="*" element={ <Erros/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
