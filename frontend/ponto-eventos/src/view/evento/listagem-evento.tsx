import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "./evento.css";
import { Button, Stack } from "@mui/material";
import EventoAPI from "./../../resources/evento";
import { useEffect, useState } from "react";
import EventoModel from "../../model/evento";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Nome",
    width: 350,
    editable: true,
  },
  {
    field: "dataInicial",
    valueGetter: (params) => {
      return moment(params.row.dataInicial).format('DD/MM/YY');
    },
    headerName: "Data inicial",
    width: 150,
    editable: true,
  },
  {
    field: "dataFinal",
    valueGetter: (params) => {
      return moment(params.row.dataFinal).format('DD/MM/YY');
    },
    headerName: "Data final",
    width: 150,
    editable: true,
  },
  {
    field: "ativo",
    valueGetter: (params) => {
      return params.row.ativo ? 'Ativo' : 'Inativo';
    },
    headerName: "Situação",
    width: 150,
    editable: true,
  },
  {
    field: "instituicao",
    valueGetter: (params) => {
      return params.row.instituicao.name;
    },
    headerName: "Situação",
    width: 150,
    editable: true,
  },
];

/**
 * Listagem de evento
 */
export default function ListagemEvento() {
  let history = useNavigate();
  const eventoAPI = new EventoAPI();
  const [eventoList, setEventoList] = useState<EventoModel[]>(
    []
  );
  const [selected, setSelected] = useState<number | null>();

  useEffect(() => {
    eventoAPI.findAll().then((result) => setEventoList(result.data));
  }, []);

  return (
    <div className="datagrid">
      <Button onClick={() => history("/")} variant="contained">
        Cancelar
      </Button>
      <div style={{ width: 30 }} />
      <Button
        onClick={() => history("/cadastro-evento/novo")}
        variant="contained"
      >
        Cadastrar
      </Button>
      <Button
        onClick={() => history(`/cadastro-evento/${selected}`)}
        variant="contained"
      >
        Editar
      </Button>
      <DataGrid
        rows={eventoList}
        columns={columns}
        hideFooterPagination={true}
        onRowSelectionModelChange={(rowSelectionModel: any) => {
          setSelected(rowSelectionModel[0] || null);
        }}
        slots={{
          noRowsOverlay: () => (
            <Stack height="100%" alignItems="center" justifyContent="center">
              Não há cadastros
            </Stack>
          ),
        }}
      />
    </div>
  );
}
