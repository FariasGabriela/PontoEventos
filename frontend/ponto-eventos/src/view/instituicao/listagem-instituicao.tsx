import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "./instituicao.css";
import { Button, Stack } from "@mui/material";
import InstituicaoAPI from "./../../resources/instituicao";
import { useEffect, useState } from "react";
import InstituicaoModel from "../../model/instituicao";
import { useNavigate } from "react-router-dom";
import selectTipoList from "./utils/TipoInstituicaoModel";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Nome",
    width: 350,
    editable: true,
  },
  {
    field: "tipo",
    valueGetter: (params) => {
      const tipo = selectTipoList.find(
        (item) => item.sigla === params.row.tipo
      );
      if (tipo) return tipo.descricao;
      return "";
    },
    headerName: "Tipo",
    width: 150,
    editable: true,
  },
];

export default function ListagemInstituicao() {
  let history = useNavigate();
  const instituicaoAPI = new InstituicaoAPI();
  const [instituicaoList, setInstituicaoList] = useState<InstituicaoModel[]>(
    []
  );
  const [selected, setSelected] = useState<number | null>();

  useEffect(() => {
    instituicaoAPI.findAll().then((result) => setInstituicaoList(result.data));
  }, []);

  return (
    <div className="datagrid">
      <Button onClick={() => history("/")} variant="contained">
        Cancelar
      </Button>
      <div style={{ width: 30 }} />
      <Button
        onClick={() => history("/cadastro-instituicao/novo")}
        variant="contained"
      >
        Cadastrar
      </Button>
      <Button
        onClick={() => history(`/cadastro-instituicao/${selected}`)}
        variant="contained"
      >
        Editar
      </Button>
      <DataGrid
        rows={instituicaoList}
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
