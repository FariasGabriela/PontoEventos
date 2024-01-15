import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "./instituicao.css";
import { Button, Stack } from "@mui/material";
import InstituicaoAPI from "./../../resources/instituicao";
import { useEffect, useState } from "react";
import InstituicaoModel from "../../model/instituicao";
import { useNavigate } from "react-router-dom";
import selectTipoList from "./utils/TipoInstituicaoModel";
import CardComponent from "../../components/card/card";

/**
 * Colunas da grid de insituição
 */
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

/**
 * Listagem de instituição
 */
export default function ListagemInstituicao() {
  let history = useNavigate();
  const instituicaoAPI = new InstituicaoAPI();
  const [instituicaoList, setInstituicaoList] = useState<InstituicaoModel[]>(
    []
  );
  const [selected, setSelected] = useState<number | null>();

  useEffect(() => {
    instituicaoAPI.findAll().then((result) => setInstituicaoList(result.data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="background-card">
      <CardComponent title="Instituição">
        <div className="overflow">
          <div className="card-buttons">
            <Button onClick={() => history("/")} variant="contained">
              Voltar
            </Button>
            <div style={{ width: 30 }} />
            <Button
              onClick={() => history("/cadastro-instituicao/novo")}
              variant="contained"
            >
              Cadastrar
            </Button>
            <div style={{ width: 30 }} />
            <Button
              onClick={() => history(`/cadastro-instituicao/${selected}`)}
              variant="contained"
              disabled={!selected}
            >
              Editar
            </Button>
          </div>
          <div className="datagrid">
            <DataGrid
              rows={instituicaoList}
              columns={columns}
              hideFooterPagination={true}
              onRowSelectionModelChange={(rowSelectionModel: any) => {
                setSelected(rowSelectionModel[0] || null);
              }}
              hideFooterSelectedRowCount={true}
              slots={{
                noRowsOverlay: () => (
                  <Stack
                    height="100%"
                    alignItems="center"
                    justifyContent="center"
                  >
                    Não há cadastros
                  </Stack>
                ),
              }}
            />
          </div>
        </div>
      </CardComponent>
    </div>
  );
}
