"use strict";

function loadFile(containerId, fileName, callback) {
  $.ajax({
    type: "GET",
    url: "../app/views/".concat(fileName),
    dataType: "html",
    success: function success(response) {
      var container = document.getElementById(containerId);
      container.innerHTML = response;

      if (typeof callback === 'function') {
        callback();
      }
    },
    error: function error(reason) {
      Swal.fire({
        icon: 'warning',
        title: "Error ".concat(reason.status),
        text: 'Algo anda mal :( no podemos cargar la página deseada en estos momentos, ponte en contacto con soporte si el problema persiste.'
      });
    }
  });
}