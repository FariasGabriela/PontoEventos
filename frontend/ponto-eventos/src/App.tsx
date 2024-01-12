import { ThemeProvider } from "@mui/material";
import "./App.css";
import Home from "./view/home/home";
import { theme } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventoListagem from "./view/evento/evento-listagem";
import AppBarComponent from "./components/appbar/appbar";

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
          <Route path="/dashboard" index element={<EventoListagem />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
