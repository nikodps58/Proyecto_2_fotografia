<?php
ini_set('display_erros',1);

/* recoger datos y comprobar */
$destino="nicolas.dps@gmail.com";
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$telefono = $_POST["telefono"];

/* datos que recogemos de su cliente */
/* ip */
$ip = $_SERVER['REMOTE_ADDR'];

/* datos que recogemos deL sistema */
/* fecha */
$datetime = date("Y-m-d H:i:s");

/* mensaje concatenado para enviar por correo */
$contenido = "Fecha de envio:".$datetime."\nIP: ".$ip."\nombre: ".$nombre."\nCorreo".$correo."\ntelefono: ".$telefono."\nmensaje: ".$mensaje;

$cabecera = "From: info@webda.eus" . "\r\n" . 'Reply-To: info@webda.eus' . "\r\n" ;

/* enviar  correo de confirmacion */
mail($destino,"consulta de la web",$contenido,$cabecera); /* correo que recibo yo */

mail($correo,"Hemos recibido tu consulta",$contenido,$cabecera); /* correo que recibe el cliente */

/* redirgir  a gracias.html y salir de aqui*/
header("location:../index.html?enviado=correo enviado!");
?>