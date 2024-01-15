import Swal from "sweetalert2";

/**
 * Pop-up de sucesso
 */
function SwalSucess() {
  Swal.fire({
    title: "Sucesso",
    text: "Salvo com sucesso",
    icon: "success",
    confirmButtonText: "Ok",
  });
}

/**
 * Pop-up de erro
 */
function SwalError() {
  Swal.fire({
    title: "Ocorreu um erro ao salvar",
    text: "Tente novamente",
    icon: "error",
    confirmButtonText: "Ok",
  });
}

/**
 * Pop-up de opções
 */
function SwalOptions(title: string) {
  return Swal.fire({
    title: title,
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    cancelButtonText: `Cancelar`,
  });
}

/**
 * Pop-up com carregando
 */
function SwalLoading() {
  Swal.showLoading();
}

/**
 * Fechar pop-up
 */
function SwalClose() {
  Swal.close();
}

export { SwalSucess, SwalError, SwalLoading, SwalOptions, SwalClose };
