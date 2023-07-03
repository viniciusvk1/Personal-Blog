import Navbar from './assets/components/estaticos/navbar/Navbar';
import Footer from './assets/components/estaticos/footer/Footer';
import Login from './paginas/login/Login'
import Home from './paginas/home/Home';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListaPostagem from './assets/components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './assets/components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './assets/components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './assets/components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './assets/components/temas/deletarTema/DeletarTema';
import ListaTema from './assets/components/temas/listatema/ListaTema';
import {Provider} from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer/>
      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes> // Antigo Switch
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/posts" element={<ListaPostagem />} />
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

