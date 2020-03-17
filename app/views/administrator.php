<?php
    require_once '../models/Conexion.php';
    if (!$_SESSION['role'] || $_SESSION['role'] !== 'administrator') {
        header('Location: ../login');
        exit();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administrador | <?php echo $_SESSION['name']; ?></title>
    <?php include '../includes/general-css-files.php'; ?>
    <link rel="stylesheet" href="../app/css/sidebar.css">
    <link rel="stylesheet" href="../app/css/administrator.css">
</head>
<body>
    <?php include '../includes/header.php'; ?>
    <main>
        <div class="sidebar">
            <div class="sidebar-elements">
                <div class="sidebar-element dashboard focused">
                    <div class="side-icon">
                        <span><i class="fas fa-cubes"></i></span>
                    </div>
                    <div class="side-text">Tablero</div>
                </div>
                <div class="sidebar-element students">
                    <div class="side-icon">
                        <span><i class="fas fa-user-graduate"></i></span>
                    </div>
                    <div class="side-text">Alumnos</div>
                </div>
                <div class="sidebar-element teachers">
                    <div class="side-icon">
                        <span><i class="fas fa-chalkboard-teacher"></i></span>
                    </div>
                    <div class="side-text">Maestros</div>
                </div>
            </div>
        </div>
        <div class="content" id="content">
            <div class="user-personal-info">
                <div class="image">
                    <img src="../app/assets/images/unknown_user.jpg" alt="<?php echo $_SESSION['name']; ?>" title="<?php echo $_SESSION['name']; ?>">
                </div>
                <div class="info">
                    <h1 class="nombre"><?php echo $_SESSION['name']; ?></h1>
                    <br>
                    <div class="email"><span><i class="far fa-envelope"></i></span>&nbsp&nbsp&nbsp<span><?php echo $_SESSION['email']; ?></span></div>
                    <div class="role"><span><i class="far fa-address-card"></i></span>&nbsp&nbsp&nbsp<span><?php echo ucfirst($_SESSION['role']); ?></span></div>
                </div>
            </div>
            <div class="sections">
                <div class="sections-row">
                    <section class="dashboard-section students" data-href="students">
                        <div class="icon">
                            <span><i class="fas fa-users"></i></span>
                        </div>
                        <div class="title">Alumnos</div>
                    </section>
                    <section class="dashboard-section teachers" data-href="teachers">
                        <div class="icon">
                            <span><i class="fas fa-chalkboard-teacher"></i></span>
                        </div>
                        <div class="title">Maestros</div>
                    </section>
                    <section class="dashboard-section activities" data-href="activities">
                        <div class="icon">
                            <span><i class="fas fa-calendar-alt"></i></span>
                        </div>
                        <div class="title">Actividades</div>
                    </section>
                    <section class="dashboard-section ratings" data-href="rating">
                        <div class="icon">
                            <span><i class="fas fa-clipboard"></i></span>
                        </div>
                        <div class="title">Calificaciones</div>
                    </section>
                </div>
            </div>
        </div>
    </main>
    <?php include '../includes/general-js-files.php'; ?>
    <script src="../app/js/functions.js"></script>
    <script src="../app/js/administrator.js"></script>
</body>
</html>