import {
  Grid,
  CssBaseline,
  Button,
  Switch,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import TextFieldComponent from "../../components/text-field/text-field";
import CardComponent from "../../components/card/card";
import { useFormik } from "formik";
import * as yup from "yup";
import EventoModel from "../../model/evento";
import { useEffect, useState } from "react";
import { SwalError, SwalLoading, SwalSucess } from "../../components/swal/swal";
import EventoAPI from "./../../resources/evento";
import InstituicaoAPI from "./../../resources/instituicao";
import { useNavigate, useParams } from "react-router-dom";
import "./evento.css";
import DatePickerComponent from "../../components/date-picker/date-picker";
import AutoCompleteComponente from "../../components/autocomplete/autocomplete";
import InstituicaoModel from "../../model/instituicao";
import moment from "moment";
import dayjs from "dayjs";

export default function CadastroEavento() {
  const eventoAPI = new EventoAPI();
  const instituicaoAPI = new InstituicaoAPI();
  const [instituicaoList, setInstituicaoList] = useState<InstituicaoModel[]>(
    []
  );
  const [ativo, setAtivo] = useState<boolean>(false);
  const [dataInicial, setDataInicial] = useState<any>();
  const [dataFinal, setDataFinal] = useState<any>();
  let history = useNavigate();
  let { id } = useParams();

  const [initialValues, setInitialValues] = useState<EventoModel>({
    name: "",
    ativo: false,
    dataInicial: dataInicial,
    dataFinal: dataFinal,
    instituicao: null,
  });

  useEffect(() => {
    findAllInstituicao();
    if (id === "novo") return;

    findEventoById();
  }, []);

  /**
   * Busca todas as intituições
   */
  function findAllInstituicao() {
    instituicaoAPI.findAll().then((result) => {
      setInstituicaoList(result.data);
    });
  }

  /**
   * Busca o evento pelo id em caso de editar
   */
  function findEventoById() {
    eventoAPI.findById(id || "").then((result: any) => {
      const dataAux = result.data;
      setInitialValues(dataAux);
      setDataInicial(dayjs(dataAux.dataInicial))
      setDataFinal(dayjs(dataAux.dataFinal))
      setAtivo(dataAux.ativo);

      setFieldValue("name", dataAux.name);
      setFieldValue("dataInicial", dataAux.dataInicial);
      setFieldValue("dataFinal", dataAux.dataFinal);
      setFieldValue("ativo", dataAux.ativo);
      setFieldValue("instituicao", dataAux.instituicao);
    });
  }

  const { values, touched, errors, handleChange, handleSubmit, setFieldValue } =
    useFormik<EventoModel>({
      initialValues,
      validationSchema: yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        dataInicial: yup.string().required("Campo obrigatório"),
        dataFinal: yup.string().required("Campo obrigatório"),
        instituicao: yup.object().required("Campo obrigatório"),
      }),

      onSubmit: () => createOrUpdate(),
    });

  return (
    <div className="background-card">
      <CssBaseline />
      <CardComponent title="Evento">
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

            <Grid item xs={12} className="date-picker">
              <DatePickerComponent
                title="Data Inicial"
                onChange={(e) => {
                  console.log(e)
                  setDataInicial(e);
                  setFieldValue("dataInicial", e);
                  dataFinal && validaSituacao(e, dataFinal);
                }}
                maxDate={dataFinal || undefined}
                value={dataInicial}
                error={errors.dataInicial && dataInicial == null ? true : false}
                helperText={
                  errors.dataInicial && dataInicial == null
                    ? errors.dataInicial
                    : ""
                }
              />

              <DatePickerComponent
                title="Data Final"
                onChange={(e) => {
                  setDataFinal(e);
                  dataInicial && validaSituacao(dataInicial, e);
                  setFieldValue("dataFinal", e);
                }}
                minDate={dataInicial || undefined}
                value={dataFinal}
                error={errors.dataFinal && dataFinal == null ? true : false}
                helperText={
                  errors.dataFinal && dataFinal == null ? errors.dataFinal : ""
                }
              />

              <FormGroup style={{ marginTop: 15 }}>
                <FormControlLabel
                  control={<Switch checked={ativo} />}
                  label="Ativo"
                  disabled={true}
                />
              </FormGroup>
            </Grid>

            <Grid item xs={12} style={{ height: 80 }}>
              <AutoCompleteComponente
                id="instituicao"
                title="Instituição"
                onChange={(event: any, newValue: string | null) =>
                  setFieldValue("instituicao", newValue)
                }
                value={values.instituicao}
                error={errors.instituicao && touched.instituicao ? true : false}
                helperText={
                  errors.instituicao && touched.instituicao
                    ? errors.instituicao
                    : ""
                }
                selectList={instituicaoList}
              />
            </Grid>

            <div className="button">
              <Button
                onClick={() => history("/listagem-evento")}
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
   * Verifica as datas para alterar situação
   */
  function validaSituacao(
    dataInicialAux: Date | number | string,
    dataFinalAux: Date | number | string
  ) {
    if (!dataInicialAux && !dataFinalAux) return;

    const today = moment().hour(0).minute(0).second(0).millisecond(0);

    const ativoAux: boolean =
      moment(new Date(dataInicialAux)).isSameOrBefore(moment()) &&
      moment(new Date(dataFinalAux)).isSameOrAfter(today);

    setAtivo(ativoAux);
  }

  /**
   * Envia a requisição para o backend e edita ou cadastra um novo
   * @param values model de instituição
   */
  function createOrUpdate() {
    SwalLoading();
    if (dataInicial && dataFinal) {
      values.dataInicial = moment(new Date(dataInicial)).format("YYYY-MM-DD");
      values.dataFinal = moment(new Date(dataFinal)).format("YYYY-MM-DD");
    }

    if (id === "novo") {
      eventoAPI
        .create(values)
        .then(() => {
          SwalSucess();
          history("/listagem-evento");
        })
        .catch(() => SwalError());
    } else {
      values.id = initialValues.id;
      eventoAPI
        .update(values)
        .then(() => {
          SwalSucess();
          history("/listagem-evento");
        })
        .catch(() => SwalError());
    }
  }
}
