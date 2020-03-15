let loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', e => {
    e.preventDefault();
    Swal.fire({
        title: "Verificando credenciales",
        onBeforeOpen: () => {
            Swal.showLoading();
            $.ajax({
                type: "POST",
                url: "app/controllers/LoginController.php",
                data: new FormData(loginForm),
                dataType: "text",
                processData: false,
                contentType: false,
                success: response => {
                    switch (response.toLowerCase()) {
                        case "error":
                            Swal.fire({
                                icon: 'warning',
                                title: "Error",
                                text: 'Algo mal ha sucedido. Inténtalo más tarde',
                                timer: 5000
                            });
                            break;
                        case "credenciales incorrectas":
                            Swal.fire({
                                icon: 'warning',
                                title: "Error",
                                text: 'Credenciales Incorrectas',
                                timer: 5000
                            });
                            break;
                        default:
                            Swal.fire({
                                icon: 'success',
                                title: "¡Estás dentro!",
                                text: 'Redireccionando...',
                                timer: 2500,
                                onClose: () => {
                                    const role = response.split(':')[1];
                                    location.href = `./profile/${role}`;
                                }
                            });
                            break;
                    }
                },
                error: () => {
                    Swal.fire({
                        icon: 'warning',
                        title: "Error",
                        text: 'Algo mal ha sucedido. Inténtalo más tarde',
                        timer: 5000
                    });
                }
            });
        }
    });
});