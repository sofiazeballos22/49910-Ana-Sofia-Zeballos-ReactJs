import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemsListContainer/ItemsListContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/productos/:categoryId" element={ <ItemListContainer /> } />
        <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />

        <Route path="/not-found" element={ <h2>Not found</h2> }/>
        <Route path="*" element={ <Navigate to={"/not-found"}/> }/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
