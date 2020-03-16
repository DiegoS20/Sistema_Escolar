<?php require_once '../models/Conexion.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administrador</title>
    <?php include '../includes/general-css-files.php'; ?>
    <link rel="stylesheet" href="../app/css/sidebar.css">
</head>
<body>
    <?php include '../includes/header.php'; ?>
    <main>
        <div class="sidebar">
            <div class="sidebar-elements">
                <div class="sidebar-element focused">
                    <div class="side-icon">
                        <span><i class="fas fa-cubes"></i></span>
                    </div>
                    <div class="side-text">Tablero</div>
                </div>
                <div class="sidebar-element">
                    <div class="side-icon">
                        <span><i class="fas fa-user-graduate"></i></span>
                    </div>
                    <div class="side-text">Alumnos</div>
                </div>
                <div class="sidebar-element">
                    <div class="side-icon">
                        <span><i class="fas fa-chalkboard-teacher"></i></span>
                    </div>
                    <div class="side-text">Maestros</div>
                </div>
            </div>
        </div>
        <div class="content">
            
        </div>
    </main>
    <?php include '../includes/general-js-files.php'; ?>
    <script src="../app/js/administrator.js"></script>
</body>
</html>