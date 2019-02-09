//VARIABLES GENERALES
//declaras fuera del ready de jquery
var nuevos_marcadores = [];
var marcadores_bd = [];
var mapa = null; //VARIABLE GENERAL PARA EL MAPA
//FUNCION PARA QUITAR MARCADORES DE MAPA
function limpiar_marcadores(lista) {
  for (i in lista) {
    //QUITAR MARCADOR DEL MAPA
    lista[i].setMap(null);
  }
}

function guadarLugar() {
  var f = $("#formulario");

  //VALIDAR CAMPO TITULO

  if (f.find("input[name='titulo']").val().trim() == "") {
    alertify.error("Falta título");
    return false;
  }
  // if (f.find("input[name='titulo']").val().trim() == "") {
  //
  // input[name='titulo'].classList.remove('error');
  //     alertify.error("Falta título");
  //     return false;
  // }

  //VALIDAR CAMPO CX
  if (f.find("input[name='cx']").val().trim() == "") {
    alertify.error("Falta Coordenada X");
    return false;
  }
  //VALIDAR CAMPO CY
  if (f.find("input[name='cy']").val().trim() == "") {
    alertify.error("Falta Coordenada Y");
    return false;
  }
  //FIN VALIDACIONES

  if (f.hasClass("busy")) {
    //Cuando se haga clic en el boton grabar
    //se le marcar� con una clase 'busy' indicando
    //que ya se ha presionado, y no permitir que se
    //realiCe la misma operaci�n hasta que esta termine
    //SI TIENE LA CLASE BUSY, YA NO HARA NADA
    return false;
  }
  //SI NO TIENE LA CLASE BUSY, SE LA PONDREMOS AHORA
  f.addClass("busy");
  //Y CUANDO QUITAR LA CLASE BUSY?
  //CUANDO SE TERMINE DE PROCESAR ESTA SOLICITUD
  //ES DECIR EN EL EVENTO COMPLETE

  var loader_grabar = $("#loader_grabar");
  $.ajax({
    type: "POST",
    url: "iajax.php",
    dataType: "JSON",
    data: f.serialize() + "&tipo=grabar",
    success: function(data) {
      if (data.estado == "ok") {
        loader_grabar.removeClass("label-warning").addClass("label-success")
          .text("Lugar guardado").delay(4000).slideUp();
        listar();
      } else {
        alertify.success(data.mensaje);
      }
    },
    beforeSend: function() {
      //Notificar al usuario mientras que se procesa su solicitud
      loader_grabar.removeClass("label-success").addClass("label label-warning")
        .text("Procesando...").slideDown();
    },
    complete: function() {
      //QUITAR LA CLASE BUSY
      f.removeClass("busy");
      f[0].reset();
      //[0] jquery trabaja con array de elementos javascript no
      //asi que se debe especificar cual elemento se har� reset
      //capricho de javascript
      //AHORA PERMITIR� OTRA VEZ QUE SE REALICE LA ACCION
      //Notificar que se ha terminado de procesar
    }
  });
  return false;


}
$(document).on("ready", function() {

  //VARIABLE DE FORMULARIO
  var formulario = $("#formulario");

  var punto = new google.maps.LatLng(9.927256828412128, -84.0896987915039);
  var config = {
    zoom: 12,
    center: punto,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  mapa = new google.maps.Map($("#mapa")[0], config);

  google.maps.event.addListener(mapa, "click", function(event) {
    var coordenadas = event.latLng.toString();

    coordenadas = coordenadas.replace("(", "");
    coordenadas = coordenadas.replace(")", "");

    var lista = coordenadas.split(",");

    var direccion = new google.maps.LatLng(lista[0], lista[1]);
    //PASAR LA INFORMACI�N AL FORMULARIO
    formulario.find("input[name='titulo']").focus();
    formulario.find("input[name='cx']").val(lista[0]);
    formulario.find("input[name='cy']").val(lista[1]);


    var marcador = new google.maps.Marker({
      //titulo:prompt("Titulo del marcador?"),
      position: direccion,
      map: mapa,
      animation: google.maps.Animation.DROP,
      draggable: false
    });
    //VIDEO 15
    $("#collapseOne").collapse('show');
    $("#collapseTwo").collapse('hide');
    //ALMACENAR UN MARCADOR EN EL ARRAY nuevos_marcadores
    nuevos_marcadores.push(marcador);

    google.maps.event.addListener(marcador, "click", function() {

    });

    //BORRAR MARCADORES NUEVOS
    limpiar_marcadores(nuevos_marcadores);
    marcador.setMap(mapa);
  });
  //INSTANCIAR EL FORMULARIO

  //BORRAR
  // $("#btn_borrar").on("click", function() {
  //   var f_eliminar = $("#formulario_eliminar");
  //   $.ajax({
  //     type: "POST",
  //     url: "iajax.php",
  //     data: "id=" + f_eliminar.find("input[name='id']").val() + "&tipo=borrar",
  //     dataType: "JSON",
  //     success: function(data) {
  //       if (data.estado == "ok") {
  //         limpiar_marcadores(nuevos_marcadores);
  //         alertify.success(data.mensaje);
  //         f_eliminar[0].reset();
  //         listar();
  //       } else {
  //         alertify.success(data.mensaje);
  //       }
  //     },
  //     beforeSend: function() {
  //
  //     },
  //     complete: function() {
  //
  //     }
  //   });
  // });
  //
  // //ACTUALIZAR
  // $("#btn_actualizar").on("click", function() {
  //   var f_eliminar = $("#formulario_eliminar");
  //   $.ajax({
  //     type: "POST",
  //     url: "iajax.php",
  //     data: f_eliminar.serialize() + "&tipo=actualizar",
  //     dataType: "JSON",
  //     success: function(data) {
  //       if (data.estado == "ok") {
  //         limpiar_marcadores(nuevos_marcadores);
  //         alertify.success(data.mensaje);
  //         f_eliminar[0].reset();
  //         listar();
  //       } else {
  //         alertify.success(data.mensaje);
  //       }
  //     },
  //     beforeSend: function() {
  //
  //     },
  //     complete: function() {
  //
  //     }
  //   });
  // });

  //BUSCAR
  $("#btn_buscar").on("click", function() {
    var palabra_buscar = $("#palabra_buscar").val();
    var select_resultados = $("#select_resultados");
    $.ajax({
      type: "POST",
      dataType: "JSON",
      url: "iajax.php",
      data: "palabra_buscar=" + palabra_buscar + "&tipo=buscar",
      success: function(data) {
        if (data.estado == "ok") {
          $.each(data.mensaje, function(i, item) {
            $("<option data-cx='" + item.cx + "' data-cy='" + item.cy + "' value='" + item.IdPunto + "'>" + item.Titulo + "</option>")
              .appendTo(select_resultados);
          });
        }

      },
      beforeSend: function() {
        select_resultados.empty(); //limpiar ComboBox
      },
      complete: function() {

      }
    });
    return false;
  });

  //CENTRAR EL MARCADOR AL SELECCIONARLO
  $("#select_resultados").on("click, change", function() {
    //PEQUEÑA VALIDACION
    if ($(this).children().length < 1) {
      return false; //NO HACER NADA, AL NO TENER ITEMS
    }
    var cx = $("#select_resultados option:selected").data("cx");
    var cy = $("#select_resultados option:selected").data("cy");
    //Crear variable coordenada
    var myLatLng = new google.maps.LatLng(cx, cy);
    //VARIABLE MAPA
    mapa.setCenter(myLatLng);
  });


  //CARGAR PUNTOS AL TERMINAR DE CARGAR LA P�GINA
  listar(); //FUNCIONA, AHORA A GRAFICAR LOS PUNTOS EN EL MAPA
});
//FUERA DE READY DE JQUERY
//FUNCTION PARA RECUPERAR PUNTOS DE LA BD
function listar() {
  //ANTES DE LISTAR MARCADORES
  //SE DEBEN QUITAR LOS ANTERIORES DEL MAPA
  limpiar_marcadores(marcadores_bd);
  var f_eliminar = $("#formulario_eliminar");
  $.ajax({
    type: "POST",
    url: "iajax.php",
    dataType: "JSON",
    data: "&tipo=listar",
    success: function(data) {
      if (data.estado == "ok") {
        //alert("Hay puntos en la BD");
        $.each(data.mensaje, function(i, item) {
          //OBTENER LAS COORDENADAS DEL PUNTO
          var posi = new google.maps.LatLng(item.cx, item.cy); //bien
          //CARGAR LAS PROPIEDADES AL MARCADOR
          var marca = new google.maps.Marker({
            idMarcador: item.IdPunto,
            position: posi,
            titulo: item.Titulo,
            cx: item.cx,
            cy: item.cy
          });
          //AGREGAR EVENTO CLICK AL MARCADOR
          google.maps.event.addListener(marca, "click", function() {
            $("#collapseOne").collapse('hide');
            $("#collapseTwo").collapse('show');
            //alert("Hiciste click en "+marca.idMarcador + " - " + marca.titulo) ;
            //SOLO MOVER CUANDO SE MARQUE EL CHECKBOX DEL FORMULARIO
            if ($("#opc_edicion").prop("checked"))

            {
              //HACER UN MARCADOR DRAGGABLE
              marca.setOptions({
                draggable: true
              });

              google.maps.event.addListener(marca, 'dragend', function(event) {
                //AL FINAL DE MOVE EL MARCADOR
                //ESTE MISMO YA SE ACTUALIZA CON LAS NUEVAS COORDENADAS
                //alert(marca.position);
                var coordenadas = event.latLng.toString();
                coordenadas = coordenadas.replace("(", "");
                coordenadas = coordenadas.replace(")", "");
                var lista = coordenadas.split(",");
                f_eliminar.find("input[name='cx']").val(lista[0]);
                f_eliminar.find("input[name='cy']").val(lista[1]);
              });
            } else {

              f_eliminar.find("input[name='titulo']").val(marca.titulo);
              f_eliminar.find("input[name='cx']").val(marca.cx);
              f_eliminar.find("input[name='cy']").val(marca.cy);
              f_eliminar.find("input[name='id']").val(marca.idMarcador);
            }
            limpiar_marcadores(nuevos_marcadores);
          });
          //AGREGAR EL MARCADOR A LA VARIABLE MARCADORES_BD
          marcadores_bd.push(marca);
          //UBICAR EL MARCADOR EN EL MAPA
          marca.setMap(mapa);
        });
      } else {
        alertify.error("NO hay puntos en la BD");
      }
    },
    beforeSend: function() {

    },
    complete: function() {

    }
  });
}
//PLANTILLA AJAX
