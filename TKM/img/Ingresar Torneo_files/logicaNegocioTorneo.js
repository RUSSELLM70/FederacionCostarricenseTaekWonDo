var listaTorneo = [];

function agregarTorneo(pTorneoNuevo) {
  var listaTorneo = getListaTorneo();
  listaTorneo.push(pTorneoNuevo);
  localStorage.setItem('listaTorneoLS', JSON.stringify(listaTorneo));
}

function actualizarTorneo(pTorneoNuevo) {
  localStorage.removeItem('listaTorneoLS');
  localStorage.setItem('listaTorneoLS', JSON.stringify(pTorneoNuevo));
}

function getListaTorneo() {
  var listaTorneo = JSON.parse(localStorage.getItem('listaTorneoLS'));
  if (listaTorneo == null) {
    listaTorneo = [];
  }
  return listaTorneo;
}

function agregarDesactivarTorneo(pTorneoNuevo) {
  var listaTorneo = getListaDesactivarTorneo();
  listaTorneo.push(pTorneoNuevo);
  localStorage.setItem('listaTorneosDesactivadosLS', JSON.stringify(listaTorneo));
}

function getListaDesactivarTorneo() {
  var listaTorneo = JSON.parse(localStorage.getItem('listaTorneosDesactivadosLS'));
  if (listaTorneo == null) {
    listaTorneo = [];
  }
  return listaTorneo;
}

function actualizarDesactivarTorneos(pTorneoNuevo) {
  localStorage.removeItem('listaTorneosDesactivadosLS');
  localStorage.setItem('listaTorneosDesactivadosLS', JSON.stringify(pTorneoNuevo));
}

function agregarUsuario(pUsuarioNuevo) {
  var listaUsuarios = getListaUsuarios();
  listaUsuarios.push(pUsuarioNuevo);
  localStorage.setItem('listaUsuariosLS', JSON.stringify(listaUsuarios));
}

function getListaUsuarios() {
  var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLS'));
  if (listaUsuarios == null) {
    listaUsuarios = [];
  }
  return listaUsuarios;
}





















// function agregarTorneo(pTorneoNuevo){

//   var listaTorneo = obtenerListaTorneo();
//   listaTorneo.push(pTorneoNuevo);
//   localStorage.setItem('listaTorneoLS', JSON.stringify(listaTorneo));
// }

// function obtenerListaTorneo(){

//   var listaTorneo = JSON.parse(localStorage.getItem('listaTorneoLS'));
//   if(listaTorneo == null){
//     listaTorneo = [];
//   }

//   return listaTorneo;
// }


// // function obtenerListaPorEvento(){
// //   var listaEventos = JSON.parse(localStorage.getItem('listaEventosLS'));

// //   if(listaEventos == null){
// //     listaEventos = [];
// //   }
// //   return listaEventos;
// // }


// // function agregarEvento(pInfoEventos){
// //   var listaEvento = obtenerListaPorEvento();
// //   listaEvento.push(pInfoEventos);
// //   localStorage.setItem('listaEventosLS',JSON.stringify(listaEvento)); 
// // }



