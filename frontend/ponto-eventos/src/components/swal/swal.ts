import Swal from "sweetalert2";

function SwalSucess() {
  Swal.fire({
    title: "Sucesso",
    text: "Salvo com sucesso",
    icon: "success",
    confirmButtonText: "Ok",
  });
}

function SwalErrorLoading() {
    Swal.fire({
      title: "Ocorreu um erro ao buscar dados",
      text: "Recarregue a pagina",
      icon: "error",
      confirmButtonText: "Ok",
    });
  }

function SwalError() {
  Swal.fire({
    title: "Ocorreu um erro ao salvar",
    text: "Tente novamente",
    icon: "error",
    confirmButtonText: "Ok",
  });
}

function SwalOptions(title: string) {
  return Swal.fire({
    title: title,
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    cancelButtonText: `Cancelar`,
  });
}

function SwalLoading() {
  Swal.showLoading();
}

function SwalClose() {
  Swal.close();
}

export { SwalSucess, SwalError, SwalLoading, SwalOptions, SwalErrorLoading, SwalClose };
