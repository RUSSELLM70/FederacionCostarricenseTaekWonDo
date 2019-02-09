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
function getIdAlumnosXExhibicion(pId) {
  var aIdsAlumno = [];
  var peticion = $.ajax({
    url: "services/pa_listar_id_alumnos_por_exhibicion.php",
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
function asignarAlumnoExhibicion(pidAlumno, pIdExhibicion) {
  var peticion = $.ajax({
    url: "services/pa_asignar_alumno_exhibicion.php",
    type: "post",
    data: {
      'pid_exhibicion': pIdExhibicion,
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
function eliminarAlumnoEnBD(pIdAlumno, pIdExhibicion) {
  var peticion = $.ajax({
    url: "services/pa_eliminar_alumno_exhibicion.php",
    type: "post",
    data: {
      'pid_exhibicion': pIdExhibicion,
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
function getIdLugarXExhibicion(pId) {
  var aIdLugar = [];
  var peticion = $.ajax({
    url: "services/pa_listar_id_lugar_por_exhibicion.php",
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
function asignarLugarExhibicion(pIdLugar, pIdExhibicion) {
  var peticion = $.ajax({
    url: "services/pa_asignar_lugar_exhibicion.php",
    type: "post",
    data: {
      'pid_exhibicion': pIdExhibicion,
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
function eliminarLugarEnBD(pIdLugar, pIdExhibicion) {
  var peticion = $.ajax({
    url: "services/pa_eliminar_lugar_exhibicion.php",
    type: "post",
    data: {
      'pid_exhibicion': pIdExhibicion,
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
function getIdOrganizacionXExhibicion(pId) {
  var aIdOrganizacion = [];
  var peticion = $.ajax({
    url: "services/pa_listar_id_organizacion_por_exhibicion.php",
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
function asignarOrganizacionExhibicion(pIdOrganizacion, pIdExhibicion) {
  var peticion = $.ajax({
    url: "services/pa_asignar_organizacion_exhibicion.php",
    type: "post",
    data: {
      'pid_exhibicion': pIdExhibicion,
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
function eliminarOrganizacionEnBD(pIdOrganizacion, pIdExhibicion) {
  var peticion = $.ajax({
    url: "services/pa_eliminar_organizacion_exhibicion.php",
    type: "post",
    data: {
      'pid_exhibicion': pIdExhibicion,
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
function getIdPatrocinadoresXExhibicion(pId) {
  var aIdsPatrocinadores = [];
  var peticion = $.ajax({
    url: "services/pa_listar_id_patrocinadores_por_exhibicion.php",
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
function asignarPatrocinadorExhibicion(pIdPatrocinador, pIdExhibicion) {
  var peticion = $.ajax({
    url: "services/pa_asignar_patrocinador_exhibicion.php",
    type: "post",
    data: {
      'pid_exhibicion': pIdExhibicion,
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
function eliminarPatrocinadorEnBD(pIdPatrocinador, pIdExhibicion) {
  var peticion = $.ajax({
    url: "services/pa_eliminar_patrocinador_exhibicion.php",
    type: "post",
    data: {
      'pid_exhibicion': pIdExhibicion,
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