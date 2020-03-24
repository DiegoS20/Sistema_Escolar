<?php
    require_once '../../models/Conexion.php';
    if (!$_SESSION['role'] || $_SESSION['role'] !== 'administrator') {
        header('Location: ../login');
        exit();
    }
    $sql = 'SELECT * FROM users
            INNER JOIN roles ON users.id_role = roles.id_role
            INNER JOIN students ON users.id_user = students.id_user
            WHERE roles.role_name = "student"';
    $students = $conexion->makeQuery($sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administrador | <?php echo $_SESSION['name']; ?></title>
    <?php
        $_dir = $conexion->get_base_url() . 'profile/administrator';
        define('DIR', $_dir);
        include '../../includes/general-css-files.php';?>
    <link rel="stylesheet" href="../../app/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../app/css/administrator.css">
</head>
<body>
    <?php include '../../includes/admin/header.php'; ?>
    <main>
        <?php include '../../includes/admin/sidebar.php'; ?>
        <div class="content">
            
            <table class="table admin-students-table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Grado - Sección</th>
                    <th scope="col">Correo</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach($students as $student): ?>
                        <tr>
                            <th scope="row" class="id_student"><?php echo $student['id_student']; ?></th>
                            <td class="name"><?php echo $student['full_name']; ?></td>
                            <td class="grade__section">
                                <?php
                                    echo $student['grade'];
                                    if ($student['section']) {
                                        echo " - " . $student['section'];
                                    }
                                ?>
                            </td>
                            <td class="email"><?php echo $student['email']; ?></td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </main>
    
    <?php include '../../includes/general-js-files.php'; ?>
    <script src="../../app/js/admin.students.js"></script>
</body>
</html>