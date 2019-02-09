function agregarAlumno(pAlumnoaNuevo) {
  var peticion = $.ajax({
    url: 'services/pa_registrar_alumno.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pacademia': pAlumnoaNuevo.sAcademia,
      'pprofesor': pAlumnoaNuevo.sProfesor,
      'pnombre': pAlumnoaNuevo.sNombre,
      'papellido1': pAlumnoaNuevo.sPApellido,
      'papellido2': pAlumnoaNuevo.sSApellido,
      'pcorreo': pAlumnoaNuevo.sCorreoElectronico,
      'pcedula': pAlumnoaNuevo.sCedula,
      'ptelefono': pAlumnoaNuevo.sTelefono,
      'pedad': pAlumnoaNuevo.sEdad,
      'pgenero': pAlumnoaNuevo.sGenero,
      'pfecha_nacimiento': pAlumnoaNuevo.sFN,
      'ppeso': pAlumnoaNuevo.sPeso,
      'paltura': pAlumnoaNuevo.sAltura,
      'pgrado': pAlumnoaNuevo.sGrado,
      'pcategoria_edad': pAlumnoaNuevo.sCategoriaEdad,
      'pcategoria_peso': pAlumnoaNuevo.sCategoriaPeso,
      'ptorneos_participados': pAlumnoaNuevo.sCTP,
      'ptorneos_ganados': pAlumnoaNuevo.sCTG,
      'pexhibiciones_participadas': pAlumnoaNuevo.sCEP,
      'pdireccion': pAlumnoaNuevo.sDireccion
    },
    success: function(respuesta) {
      alertify.success("Su registro se a realizado exitosamente")
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);

    }
  });
}

function actualizarAlumnos(pDatosAlumno) {
  var peticion = $.ajax({
    url: 'services/pa_modicar_alumno.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pacademia': pDatosAlumno.sAcademia,
      'pprofesor': pDatosAlumno.sProfesor,
      'pnombre': pDatosAlumno.sNombre,
      'papellido1': pDatosAlumno.sPpellido,
      'papellido2': pDatosAlumno.sSpellido,
      'pcorreo': pDatosAlumno.sCorreo,
      'pcedula': pDatosAlumno.sCedula,
      'ptelefono': pDatosAlumno.sTelefono,
      'pedad': pDatosAlumno.sEdad,
      'pgenero': pDatosAlumno.sGenero,
      'pfecha_nacimiento': pDatosAlumno.sFN,
      'ppeso': pDatosAlumno.sPeso,
      'paltura': pDatosAlumno.sAltura,
      'pgrado': pDatosAlumno.sGrado,
      'pcategoria_edad': pDatosAlumno.sCategoriaEdad,
      'pcategoria_peso': pDatosAlumno.sCategoriaPeso,
      'ptorneos_participados': pDatosAlumno.sCTP,
      'ptorneos_ganados': pDatosAlumno.sCTG,
      'pexhibiciones_participadas': pDatosAlumno.sCEP,
      'pdireccion': pDatosAlumno.sDireccion,
      'pid': pDatosAlumno.id_alumno
    },
    success: function(respuesta) {
      alertify.success("Su modificacion se a realizado exitosamente")
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);

    }
  });
}

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

function getListaAlumnosAproximacion(psFiltro) {
  var aListaAlumnos = [];
  var peticion = $.ajax({
    url: "services/pa_filtrar_aproximacion_alumno.php",
    type: "get",
    data: {
      'filtro': psFiltro
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

function getDatosAlumnoPorId(pid) {
  var aListaAlumnos = [];
  var peticion = $.ajax({
    url: "services/pa_datos_alumno_por_id.php",
    type: "get",
    data: {
      'id': pid
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

function activar(pId) {
  //alertify.success("Profesor activado exitosamente")
  var peticion = $.ajax({
    url: "services/pa_activar_alumno.php",
    type: "post",
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pid': pId
    },

    success: //function(respuesta){
      alertify.success("Alumno activado exitosamente"),
    //},
    error: function(request, error) {}
  });
}

function desactivar(pId) {
  var peticion = $.ajax({
    url: "services/pa_desactivar_alumno.php",
    type: "post",
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pid': pId
    },

    success: //function(respuesta){
      alertify.success("Alumno desactivado exitosamente"),
    //},
    error: function(request, error) {}
  });
}

function getListarAcademias() {
  var aListaAcademias = [];
  var peticion = $.ajax({
    url: "services/listarAcademia.php",
    type: "get",
    data: {
      //aqui se ponen los parametros que se envian al php
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {
      aListaAcademias = respuesta;

    },
    error: function(request, error) {
      aListaAcademias = [];
    }
  });
  return aListaAcademias;
}

function getListaProfesores() {
  var aListaProfesores = [];
  var peticion = $.ajax({
    url: "services/pa_listar_profesores.php",
    type: "get",
    data: {
      //aqui se ponen los parametros que se envian al php
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aListaProfesores = respuesta;

    },
    error: function(request, error) {
      aListaProfesores = [];
    }
  });
  return aListaProfesores;
}