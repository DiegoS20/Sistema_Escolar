<?php require_once('app/models/Conexion.php'); ?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | Sistema escolar</title>
    <link rel="stylesheet" href="app/css/main.css">
    <link rel="stylesheet" href="app/css/login.css">
    <link rel="stylesheet" href="app/css/bootstrapmaterial.min.css">
</head>

<body>
    <main>
        <div class="bg"></div>
        <div class="container">
            <div class="login">
                <div class="head-icon"><i class="fas fa-user-circle"></i></div>
                <p class="login-text">Inicia sesión</p>
                <form action="">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Correo electrónico</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Escribe tu email aquí" required autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Escribe tu contraseña aquí" required>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Recordarme en este equipo</label>
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Ingresar</button>
                </form>
            </div>
        </div>
    </main>
    <script src="app/js/jquery.min.js"></script>
    <script src="app/js/popper.min.js"></script>
    <script src="app/js/bootstrapmaterial.min.js"></script>
    <script src="app/js/sweetalert2.min.js"></script>
    <script src="app/js/fontawesome.min.js"></script>
    <script>
        $(document).ready(function() {
            $('body').bootstrapMaterialDesign();
        });
    </script>
</body>

</html>