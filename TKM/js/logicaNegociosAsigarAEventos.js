//Inicio Lista Lugares
function getListaLugares() {
  var aListaLugares = [];
  var peticion = $.ajax({
    url: "services/almacenar_lista.php",
    type: "get",
    data: {


      //aqui se ponen los parametros que se envian al php
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aListaLugares = respuesta;

    },
    error: function(request, error) {
      aListaLugares = [];
    }
  });
  return aListaLugares;
}
//FIN Lista Lugares

//Inicio Lista Patrocinadores
function getListaPatrocinadores() {
  var aListaPatrocinadores = [];
  var peticion = $.ajax({
    url: "services/pa_listar_patrocinador.php",
    type: "get",
    data: {


      //aqui se ponen los parametros que se envian al php
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aListaPatrocinadores = respuesta;

    },
    error: function(request, error) {
      aListaPatrocinadores = [];
    }
  });
  return aListaPatrocinadores;
}
//FIN lista Patrocinadores

//INICIO lista Organizaciones
function getListaOrganizaciones() {
  var aListaOrganizacion = [];
  var peticion = $.ajax({
    url: "services/almacenar_listaOrg.php",
    type: "get",
    data: {


      //aqui se ponen los parametros que se envian al php
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aListaOrganizacion = respuesta;

    },
    error: function(request, error) {
      aListaOrganizacion = [];
    }
  });
  return aListaOrganizacion;
}
//FIN lista Organizaciones

//INICIO lista Alumnos
function getListaAlumnos() {
  var aListaAlumnos = [];
  var peticion = $.ajax({
    url: "services/pa_listar_alumno.php",
    type: "get",
    data: {


      //aqui se ponen los parametros que se envian al php
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aListaAlumnos = respuesta;

    },
    error: function(request, error) {
      aListaAlumnos = [];
    }
  });
  return aListaAlumnos;
}
//FIN lista Alumnos

//INICIO DATOS POR ID ALUMNO
function getDatosAlumnoPorId(pId) {
  var aDatosAlumno = [];
  var peticion = $.ajax({
    url: "services/pa_datos_alumno_por_id.php",
    type: "get",
    data: {
      'id': pId
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aDatosAlumno = respuesta;

    },
    error: function(request, error) {
      aDatosAlumno = [];
    }
  });
  return aDatosAlumno;
}
//FIN DATOS POR ID ALUMNO

//INICIO DATOS POR ID PATROCINADOR
function getDatosPatrocinadorPorId(pId) {
  var aDatosPatrocinador = [];
  var peticion = $.ajax({
    url: "services/pa_datos_patrocinador_por_id.php",
    type: "get",
    data: {
      'id': pId
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aDatosPatrocinador = respuesta;

    },
    error: function(request, error) {
      aDatosPatrocinador = [];
    }
  });
  return aDatosPatrocinador;
}
//FIN DATOS POR ID PATROCINADOR

//INICIO DATOS POR ID ORGANIZACION
function getDatosOrganizacionPorId(pId) {
  var aDatosOrganizacion = [];
  var peticion = $.ajax({
    url: "services/pa_datos_organizacion_por_id.php",
    type: "get",
    data: {
      'id': pId
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aDatosOrganizacion = respuesta;

    },
    error: function(request, error) {
      aDatosOrganizacion = [];
    }
  });
  return aDatosOrganizacion;
}
//FIN DATOS POR ID ORGANIZACION

//INICIO DATOS POR ID LUGAR
function getDatosLugarPorId(pId) {
  var aDatosLugar = [];
  var peticion = $.ajax({
    url: "services/pa_datos_lugar_por_id.php",
    type: "get",
    data: {
      'id': pId
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aDatosLugar = respuesta;

    },
    error: function(request, error) {
      aDatosLugar = [];
    }
  });
  return aDatosLugar;
}
//FIN DATOS POR ID LUGAR

//INICIO VALDIAR EN BD ALUMNOS
function getIdAlumnosXTorneo(pId) {
  var aIdsAlumno = [];
  var peticion = $.ajax({
    url: "services/pa_listar_id_alumnos_por_torneo.php",
    type: "get",
    data: {
      'id': pId
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aIdsAlumno = respuesta;

    },
    error: function(request, error) {
      aIdsAlumno = [];
    }
  });
  return aIdsAlumno;
}
//FIN VALIDAR EN BD ALUMNOS

//INICIO INGRESAR ALUMNOS EN BD
function asignarAlumnoTorneo(pidAlumno, pIdTorneo) {
  var peticion = $.ajax({
    url: "services/pa_asignar_alumno_torneo.php",
    type: "post",
    data: {
      'pid_torneo': pIdTorneo,
      'pid_alumno': pidAlumno
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

    },
    error: function(request, error) {}
  });
}
//FIN INGRESAR ALUMNOS EN BD

//INICIO ELIMINAR ALUMNO NO SELECCIONADO
function eliminarAlumnoEnBD(pIdAlumno, pIdTorneo) {
  var peticion = $.ajax({
    url: "services/pa_eliminar_alumno_torneo.php",
    type: "post",
    data: {
      'pid_torneo': pIdTorneo,
      'pid_alumno': pIdAlumno
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

    },
    error: function(request, error) {}
  });
}
//FIN ELIMINAR ALUMNO NO SELECCIONADO


//INICIO VALDIAR EN BD LUGAR
function getIdLugarXTorneo(pId) {
  var aIdLugar = [];
  var peticion = $.ajax({
    url: "services/pa_listar_id_lugar_por_torneo.php",
    type: "get",
    data: {
      'id': pId
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aIdLugar = respuesta;

    },
    error: function(request, error) {
      aIdLugar = [];
    }
  });
  return aIdLugar;
}
//FIN VALIDAR EN BD LUGAR

//INICIO INGRESAR LUGAR EN BD
function asignarLugarTorneo(pIdLugar, pIdTorneo) {
  var peticion = $.ajax({
    url: "services/pa_asignar_lugar_torneo.php",
    type: "post",
    data: {
      'pid_torneo': pIdTorneo,
      'pid_alumno': pIdLugar
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

    },
    error: function(request, error) {}
  });
}
//FIN INGRESAR LUGAR EN BD

//INICIO ELIMINAR LUGAR NO SELECCIONADO
function eliminarLugarEnBD(pIdLugar, pIdTorneo) {
  var peticion = $.ajax({
    url: "services/pa_eliminar_lugar_torneo.php",
    type: "post",
    data: {
      'pid_torneo': pIdTorneo,
      'pid_alumno': pIdLugar
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

    },
    error: function(request, error) {}
  });
}
//FIN ELIMINAR LUGAR NO SELECCIONADO

//INICIO VALDIAR EN BD ORGANIZACION
function getIdOrganizacionXTorneo(pId) {
  var aIdOrganizacion = [];
  var peticion = $.ajax({
    url: "services/pa_listar_id_organizacion_por_torneo.php",
    type: "get",
    data: {
      'id': pId
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aIdOrganizacion = respuesta;

    },
    error: function(request, error) {
      aIdOrganizacion = [];
    }
  });
  return aIdOrganizacion;
}
//FIN VALIDAR EN BD ORGANIZACION

//INICIO INGRESAR ORGANIZACION EN BD
function asignarOrganizacionTorneo(pIdOrganizacion, pIdTorneo) {
  var peticion = $.ajax({
    url: "services/pa_asignar_organizacion_torneo.php",
    type: "post",
    data: {
      'pid_torneo': pIdTorneo,
      'pid_alumno': pIdOrganizacion
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

    },
    error: function(request, error) {}
  });
}
//FIN INGRESAR ORGANIZACION EN BD

//INICIO ELIMINAR ORGANIZACION NO SELECCIONADO
function eliminarOrganizacionEnBD(pIdOrganizacion, pIdTorneo) {
  var peticion = $.ajax({
    url: "services/pa_eliminar_organizacion_torneo.php",
    type: "post",
    data: {
      'pid_torneo': pIdTorneo,
      'pid_alumno': pIdOrganizacion
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

    },
    error: function(request, error) {}
  });
}
//FIN ELIMINAR ORGANIZACION NO SELECCIONADO

//INICIO VALDIAR EN BD PATROCINADOR
function getIdPatrocinadoresXTorneo(pId) {
  var aIdsPatrocinadores = [];
  var peticion = $.ajax({
    url: "services/pa_listar_id_patrocinadores_por_torneo.php",
    type: "get",
    data: {
      'id': pId
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aIdsPatrocinadores = respuesta;

    },
    error: function(request, error) {
      aIdsPatrocinadores = [];
    }
  });
  return aIdsPatrocinadores;
}
//FIN VALIDAR EN BD PATROCINADOR

//INICIO INGRESAR PATROCINADOR EN BD
function asignarPatrocinadorTorneo(pIdPatrocinador, pIdTorneo) {
  var peticion = $.ajax({
    url: "services/pa_asignar_patrocinador_torneo.php",
    type: "post",
    data: {
      'pid_torneo': pIdTorneo,
      'pid_alumno': pIdPatrocinador
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

    },
    error: function(request, error) {}
  });
}
//FIN INGRESAR PATROCINADOR EN BD

//INICIO ELIMINAR PATROCINADOR NO SELECCIONADO
function eliminarPatrocinadorEnBD(pIdPatrocinador, pIdTorneo) {
  var peticion = $.ajax({
    url: "services/pa_eliminar_patrocinador_torneo.php",
    type: "post",
    data: {
      'pid_torneo': pIdTorneo,
      'pid_alumno': pIdPatrocinador
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

    },
    error: function(request, error) {}
  });
}
//FIN ELIMINAR PATROCINADOR NO SELECCIONADO
