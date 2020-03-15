<?php
require_once '../models/Conexion.php';

$email = $_POST['email'] ?? false;
$password = $_POST['password'] ?? false;
$remember = $_POST['remember'] ?? false;

if (!$email || !$password) {
    exit("Error");
}

$user_info = $conexion->select('users', ['email' => $email]);
if (!$user_info || !count($user_info)) {
    exit("Credenciales incorrectas");
}
$role = $conexion->select("roles", [
    "id_role" => $user_info[0]['id_role'],
]);
if (!$role) {
    exit("Error");
}

$hash = $user_info[0]['password'];
$password = $conexion->prepareVariableToPreparedQuery($password);
if (password_verify($password, $hash)) {
    $conexion->initSession([
        "id" => $user_info[0]['id_user'],
        "name" => $user_info[0]['full_name'],
        "email" => $user_info[0]['email'],
    ]);
    exit("user verified:" . $role[0]['role_name']);
}
exit("Credenciales incorrectas");
