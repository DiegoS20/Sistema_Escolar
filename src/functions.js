function loadFile(containerId, fileName, callback) {
    $.ajax({
        type: "GET",
        url: `../app/views/${fileName}`,
        dataType: "html",
        success: response => {
            const container = document.getElementById(containerId);
            container.innerHTML = response;
            if (typeof callback === 'function') {
                callback();
            }
        },
        error: reason => {
            Swal.fire({
                icon: 'warning',
                title: `Error ${reason.status}`,
                text: 'Algo anda mal :( no podemos cargar la página deseada en estos momentos, ponte en contacto con soporte si el problema persiste.'
            });
        }
    });
}
