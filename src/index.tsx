import Swal from 'sweetalert2';

export const confirmationDeleteReturn = async (title = 'Exclusão', msg = "Deseja excluir este registro?") => {
  let res = false;
  await Swal.fire({
    title : title,
    text : msg,
    icon : 'warning',
    showCancelButton : true,
    confirmButtonColor : '#3085d6',
    cancelButtonColor : '#d33',
    cancelButtonText : "Não!",
    confirmButtonText : "Sim!"
  }).then((result) => {
    if (result.value) {
      res = true
    } 
  });
  return res;
}
export const success = (msg : string, title = 'Sucesso') => {
  Swal.fire({
    icon: 'success',
    title: title,
    text: msg,
  });
}
export const error = (msg : string, title = 'Erro') => {
  Swal.fire({
    icon: 'error',
    title: title,
    text: msg,
  });
}
export const info = (msg : string, title = 'Aviso') => {
  Swal.fire({
    icon: 'info',
    title: title,
    text: msg,
  });
}
export const confirmationReturn = async (title = "", msg = "") => {
  let res = false;
  await Swal.fire({
    title : title,
    text : msg,
    icon : 'info',
    showCancelButton : true,
    confirmButtonColor : '#3085d6',
    cancelButtonColor : '#d33',
    cancelButtonText : "Não!",
    confirmButtonText : "Sim!"
  }).then((result) => {
    if (result.value) {
      res = true
    } 
  });
  return res;
}