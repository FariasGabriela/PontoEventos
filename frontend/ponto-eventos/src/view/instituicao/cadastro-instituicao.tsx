import { Grid, CssBaseline, Button } from "@mui/material";
import "./instituicao.css";
import SelectComponent from "../../components/select/select";
import TextFieldComponent from "../../components/text-field/text-field";
import CardComponent from "../../components/card/card";
import { useFormik } from "formik";
import * as yup from "yup";
import InstituicaoModel from "../../model/instituicao";
import { useEffect, useState } from "react";
import { SwalError, SwalLoading, SwalSucess } from "../../components/swal/swal";
import InstituicaoAPI from "./../../resources/instituicao";
import { useNavigate, useParams } from "react-router-dom";
import selectTipoList from "./utils/TipoInstituicaoModel";

/**
 * Tela de cadastro de instituição
 */
export default function CadastroInstituicao() {
  const instituicaoAPI = new InstituicaoAPI();
  let history = useNavigate();
  let { id } = useParams();

  const [initialValues, setInitialValues] = useState<InstituicaoModel>({
    id: null,
    name: "",
    tipo: "",
  });

  useEffect(() => {
    if (id === "novo") return;

    instituicaoAPI.findById(id || "").then((result: any) => {
      setInitialValues(result.data);
      setFieldValue("name", result.data.name);
      const tipo = selectTipoList.find(
        (item) => item.sigla === result.data.tipo
      );
      setFieldValue("tipo", tipo?.sigla);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { values, touched, errors, handleChange, handleSubmit, setFieldValue } =
    useFormik<InstituicaoModel>({
      initialValues,
      validationSchema: yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        tipo: yup.string().required("Campo obrigatório"),
      }),

      onSubmit: (values) => createOrUpdate(values),
    });

  return (
    <div className="background-card">
      <CssBaseline />
      <CardComponent title="Instituição">
        <div style={{ marginTop: 30 }}>
          <Grid container spacing={5}>
            <Grid item xs={12} style={{ height: 80 }}>
              <TextFieldComponent
                id="name"
                title="Nome"
                onChange={handleChange}
                value={values.name}
                error={errors.name && touched.name ? true : false}
                helperText={errors.name && touched.name ? errors.name : ""}
              />
            </Grid>
            <Grid item xs={12} style={{ height: 80 }}>
              <SelectComponent
                id="tipo"
                title="Tipo *"
                value={values.tipo}
                onChange={(e) => setFieldValue("tipo", e.target.value)}
                selectList={selectTipoList}
                error={errors.name && touched.name ? true : false}
                helperText={errors.name && touched.name ? errors.name : ""}
              />
            </Grid>

            <div className="button">
              <Button
                onClick={() => history("/listagem-instituicao")}
                variant="contained"
              >
                Cancelar
              </Button>
              <div style={{ width: 30 }} />
              <Button onClick={() => handleSubmit()} variant="contained">
                Salvar
              </Button>
            </div>
          </Grid>
        </div>
      </CardComponent>
    </div>
  );

  /**
   * Envia a requisição para o backend e edita ou cadastra um novo
   * @param values model de instituição
   */
  function createOrUpdate(values: InstituicaoModel) {
    SwalLoading();

    if (id === "novo") {
      instituicaoAPI
        .create(values)
        .then(() => {
          SwalSucess();
          history("/listagem-instituicao");
        })
        .catch(() => SwalError());
    } else {
      values.id = initialValues.id;
      instituicaoAPI
        .update(values)
        .then(() => {
          SwalSucess();
          history("/listagem-instituicao");
        })
        .catch(() => SwalError());
    }
  }
}
