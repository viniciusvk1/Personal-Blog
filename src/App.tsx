import React from 'react';
import Navbar from './components/static/navBar/Navbar';
import Footer from './components/static/footer/Footer';
import Home from './pages/home/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import ListaTema from './components/tema/listatema/ListaTema';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/tema/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/tema/deletarTema/DeletarTema';
import store from './store/store';
import { Provider } from 'react-redux';



function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '65vh' }}>
        <Routes> // Antigo Switch
          <Route path="/home" element={<Home />} />

          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />

          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          
          <Route path="/temas" element={<ListaTema />} />

          <Route path="/postagem" element={<ListaPostagem />} />

          <Route path="/formularioPostagem" element={<CadastroPost />} />

          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

          <Route path="/formularioTema" element={<CadastroTema />} />

          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
