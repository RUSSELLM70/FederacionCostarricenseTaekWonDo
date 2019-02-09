document.querySelector('#btnRegistrar').addEventListener('click', registrarAlumno);
verificarAlumno();
cargarAcademias();
cargarProfesores();


function registrarAlumno() {
  if (formularioValido()) {
    var aAlumno = {
      sAcademia: document.querySelector('#txtAcademia').value,
      sProfesor: document.querySelector('#txtProfesor').value,
      sNombre: document.querySelector('#txtNombre').value,
      sPApellido: document.querySelector('#txtPApellido').value,
      sSApellido: document.querySelector('#txtSApellido').value,
      sCorreoElectronico: document.querySelector('#txtCorreo').value,
      sCedula: document.querySelector('#txtCedula').value,
      sTelefono: document.querySelector('#txtTelefono').value,
      sEdad: document.querySelector('#txtEdad').value,
      sGenero: document.querySelector('#sltGenero').value,
      sFN: document.querySelector('#txtFecha').value,
      sPeso: document.querySelector('#txtPeso').value,
      sAltura: document.querySelector('#txtAltura').value,
      sGrado: document.querySelector('#sltGrado').value,
      sCategoriaEdad: document.querySelector('#sltCategoriaE').value,
      sCategoriaPeso: document.querySelector('#sltCategoriaP').value,
      sCTP: document.querySelector('#txtCTP').value,
      sCTG: document.querySelector('#txtCTG').value,
      sCEP: document.querySelector('#txtCEP').value,
      sDireccion: document.querySelector('#txtDireccion').value,
      nEstado: 1
    };
    agregarAlumno(aAlumno);
    limpiarCampos();
  } else {
    alertify.error("¡Se deben de llenar todos los campos o verificar los datos introducidos!");
  }
}

function cargarDatosModificarAlumnos(pDatosAlumno) {
  document.querySelector('#txtAcademia').value = pDatosAlumno.academia;
  document.querySelector('#txtProfesor').value = pDatosAlumno.profesor;
  document.querySelector('#txtNombre').value = pDatosAlumno.nombre;
  document.querySelector('#txtPApellido').value = pDatosAlumno.apellido1;
  document.querySelector('#txtSApellido').value = pDatosAlumno.apellido2;
  document.querySelector('#txtCorreo').value = pDatosAlumno.correo;
  document.querySelector('#txtCedula').value = pDatosAlumno.cedula;
  document.querySelector('#txtTelefono').value = pDatosAlumno.telefono;
  document.querySelector('#txtEdad').value = pDatosAlumno.edad;
  document.querySelector('#sltGenero').value = pDatosAlumno.genero;
  document.querySelector('#txtFecha').value = pDatosAlumno.fecha_nacimiento;
  document.querySelector('#txtPeso').value = pDatosAlumno.peso;
  document.querySelector('#txtAltura').value = pDatosAlumno.altura;
  document.querySelector('#sltGrado').value = pDatosAlumno.grado;
  document.querySelector('#sltCategoriaE').value = pDatosAlumno.categoria_edad;
  document.querySelector('#sltCategoriaP').value = pDatosAlumno.categoria_peso;
  document.querySelector('#txtCTP').value = pDatosAlumno.torneos_participados;
  document.querySelector('#txtCTG').value = pDatosAlumno.torneos_ganados;
  document.querySelector('#txtCEP').value = pDatosAlumno.exhibiciones_participadas;
  document.querySelector('#txtDireccion').value = pDatosAlumno.direccion;

  document.querySelector('#btnRegistrar').removeEventListener("click", registrarAlumno);
  document.querySelector('#btnRegistrar').addEventListener('click', modificarAlumno);
  var buttonRegistrar = document.querySelector('#btnRegistrar');

  var h2Titulo = document.querySelector('#h2Titulo');
  buttonRegistrar.value = "Modificar";
  h2Titulo.innerHTML = "Modificar alumno";
}

function modificarAlumno() {
  if (formularioValido()) {
    var aAlumno = {
      sAcademia: document.querySelector('#txtAcademia').value,
      sProfesor: document.querySelector('#txtProfesor').value,
      sNombre: document.querySelector('#txtNombre').value,
      sPpellido: document.querySelector('#txtPApellido').value,
      sSpellido: document.querySelector('#txtSApellido').value,
      sCorreo: document.querySelector('#txtCorreo').value,
      sCedula: document.querySelector('#txtCedula').value,
      sTelefono: document.querySelector('#txtTelefono').value,
      sEdad: document.querySelector('#txtEdad').value,
      sFN: document.querySelector('#txtFecha').value,
      sGenero: document.querySelector('#sltGenero').value,
      sPeso: document.querySelector('#txtPeso').value,
      sAltura: document.querySelector('#txtAltura').value,
      sGrado: document.querySelector('#sltGrado').value,
      sCategoriaEdad: document.querySelector('#sltCategoriaE').value,
      sCategoriaPeso: document.querySelector('#sltCategoriaP').value,
      sCTP: document.querySelector('#txtCTP').value,
      sCTG: document.querySelector('#txtCTG').value,
      sCEP: document.querySelector('#txtCEP').value,
      sDireccion: document.querySelector('#txtDireccion').value,
      id_alumno: getParameterByName('id')
    };
    document.querySelector('#btnRegistrar').removeEventListener("click", modificarAlumno);
    document.querySelector('#btnRegistrar').addEventListener('click', registrarAlumno);
    actualizarAlumnos(aAlumno);
    limpiarCampos();
  } else {
    alertify.error("¡Se deben de llenar todos los campos o verificar los datos introducidos!");
  }
}

function limpiarCampos() {
  document.querySelector('#txtAcademia').value = "";
  document.querySelector('#txtProfesor').value = "";
  document.querySelector('#txtNombre').value = "";
  document.querySelector('#txtPApellido').value = "";
  document.querySelector('#txtSApellido').value = "";
  document.querySelector('#txtCorreo').value = "";
  document.querySelector('#txtCedula').value = "";
  document.querySelector('#txtTelefono').value = "";
  document.querySelector('#txtEdad').value = "";
  document.querySelector('#txtFecha').value = "";
  document.querySelector('#sltGenero').value = "";
  document.querySelector('#txtPeso').value = "";
  document.querySelector('#txtAltura').value = "";
  document.querySelector('#sltGrado').value = "";
  document.querySelector('#sltCategoriaE').value = "";
  document.querySelector('#sltCategoriaP').value = "";
  document.querySelector('#txtCTP').value = "";
  document.querySelector('#txtCTG').value = "";
  document.querySelector('#txtCEP').value = "";
  document.querySelector('#txtDireccion').value = "";
}

function verificarAlumno() {
  var listaAlumnos = getListaAlumnos();
  var prueba = getParameterByName('id');
  for (var i = 0; i < listaAlumnos.length; i++) {
    if (listaAlumnos[i].id_alumno == prueba) {
      cargarDatosModificarAlumnos(listaAlumnos[i]);
      break;
    }
  }
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function isValidEmail(mail) {
  return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
}

function campoValido(campo) {
  if (campo.value) {
    campo.classList.remove('error');
    return true;
  } else {
    campo.classList.add('error');
    return false;
  }
}

function campoValido(campo) {
  if (campo.value) {
    campo.classList.remove('error');
    return true;
  } else {
    campo.classList.add('error');
    return false;
  }
}

function formularioValido() {
  var esValido = true;
  esValido = esValido & campoValido(document.querySelector('#txtAcademia'));
  esValido = esValido & campoValido(document.querySelector('#txtProfesor'));
  esValido = esValido & campoValido(document.querySelector('#txtNombre'));
  esValido = esValido & campoValido(document.querySelector('#txtPApellido'));
  esValido = esValido & campoValido(document.querySelector('#txtSApellido'));
  esValido = esValido & campoValido(document.querySelector('#txtCorreo'));
  esValido = esValido & campoValido(document.querySelector('#txtCedula'));
  esValido = esValido & campoValido(document.querySelector('#txtTelefono'));
  esValido = esValido & campoValido(document.querySelector('#txtEdad'));
  esValido = esValido & campoValido(document.querySelector('#sltGenero'));
  esValido = esValido & campoValido(document.querySelector('#txtFecha'));
  esValido = esValido & campoValido(document.querySelector('#txtPeso'));
  esValido = esValido & campoValido(document.querySelector('#txtAltura'));
  esValido = esValido & campoValido(document.querySelector('#sltGrado'));
  esValido = esValido & campoValido(document.querySelector('#sltCategoriaE'));
  esValido = esValido & campoValido(document.querySelector('#sltCategoriaP'));
  esValido = esValido & campoValido(document.querySelector('#txtCTP'));
  esValido = esValido & campoValido(document.querySelector('#txtCTG'));
  esValido = esValido & campoValido(document.querySelector('#txtCEP'));
  esValido = esValido & campoValido(document.querySelector('#txtDireccion'));

  return esValido;
}

// function error() {
//   alertify.error("¡Se deben de llenar todos los campos o Verificar los datos introducidos!");
//   return false;
// }
//
//
// function confirmar() {
//   //un confirm
//   alertify.confirm("<p>Aqu� confirmamos algo.<br><br><b>ENTER</b> y <b>ESC</b> corresponden a <b>Aceptar</b> o <b>Cancelar</b></p>", function(e) {
//     if (e) {
//       alertify.success("Has pulsado '" + alertify.labels.ok + "'");
//     } else {
//       alertify.error("Has pulsado '" + alertify.labels.cancel + "'");
//     }
//   });
//   return false
// }

function cargarAcademias() {
  var listaAcademias = getListarAcademias();
  var opcion = document.createElement("option");
  opcion.value = "";
  opcion.text = "Seleccione una Academia";
  txtAcademia.appendChild(opcion);
  for (var i = 0; i < listaAcademias.length; i++) { //Recorre las veces como cantidad de lugares exitan en el lcoalsotage
    var opcion = document.createElement("option");
    opcion.value = listaAcademias[i].id_academia;
    opcion.text = listaAcademias[i].nombre;
    // if (listaAcademias[i].id_academia == idAcademiaProfesor) {
    //   opcion.setAttribute("selected", "true");
    // }
    txtAcademia.appendChild(opcion); //Crea los option del selec con el nombre y codigo de los lugares previamente annadidos al localstorage
  }
}

function cargarProfesores() {
  var listaProfesores = getListaProfesores();
  var opcion = document.createElement("option");
  opcion.value = "";
  opcion.text = "Seleccione un profesor";
  txtProfesor.appendChild(opcion);
  for (var i = 0; i < listaProfesores.length; i++) { //Recorre las veces como cantidad de lugares exitan en el lcoalsotage
    var opcion = document.createElement("option");
    opcion.value = listaProfesores[i].id_profesor;
    opcion.text = listaProfesores[i].nombre1;
    // if (listaProfesores[i].id_academia == idAcademiaProfesor) {
    //   opcion.setAttribute("selected", "true");
    // }
    txtProfesor.appendChild(opcion); //Crea los option del selec con el nombre y codigo de los lugares previamente annadidos al localstorage
  }
}

