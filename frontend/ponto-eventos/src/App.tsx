import { ThemeProvider } from "@mui/material";
import "./App.css";
import Home from "./view/home/home";
import { theme } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListagemEvento from "./view/evento/listagem-evento";
import AppBarComponent from "./components/appbar/appbar";
import ListagemInstituicao from "./view/instituicao/listagem-instituicao";
import CadastroEvento from "./view/evento/cadastro-evento";
import CadastroInstituicao from "./view/instituicao/cadastro-instituicao";

/**
 * View do app
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppBarComponent title="Ponto Eventos" />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/listagem-evento" index element={<ListagemEvento />} />
          <Route path="/cadastro-evento/:id" index element={<CadastroEvento />} />
          <Route path="/listagem-instituicao" index element={<ListagemInstituicao />} />
          <Route path="/cadastro-instituicao/:id" index element={<CadastroInstituicao />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
