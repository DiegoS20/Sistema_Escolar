<?php
require_once '../../models/Conexion.php';
$sql = 'SELECT * FROM users INNER JOIN roles ON users.id_role = roles.id_role WHERE roles.role_name = "student"';
$students = $conexion->makeQuery($sql);
?>
<link rel="stylesheet" href="../app/css/bootstrap.min.css">
<table class="table">
    <thead class="thead-dark">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Grado - Sección</th>
            <th scope="col">Correo</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($students as $student) : ?>
            <tr>
                <th scope="row"><?php echo $student['id_user']; ?></th>
                <td><?php echo $student['full_name']; ?></td>
                <td><?php echo "2019"; ?></td>
                <td>@<?php echo $student['email']; ?></td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>