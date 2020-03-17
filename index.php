<?php
    require_once 'app/models/Conexion.php';

    $to = isset($_SESSION['role']) ? "profile/" . $_SESSION['role'] : 'login';

    header("Location: $to");