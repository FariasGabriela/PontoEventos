import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ptBR } from "@mui/x-date-pickers/locales";
import "dayjs/locale/pt";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <LocalizationProvider
    dateAdapter={AdapterDayjs}
    adapterLocale="pt"
    localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
  >
    <App />
  </LocalizationProvider>
);

reportWebVitals();
