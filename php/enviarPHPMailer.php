<?php

require_once ('./includes/_config.php');
require_once ('./class/_comprobaciones.php');

$comprobacion = new clase_comprobaciones;


if(isset($_POST)){
    
    /* recoger datos y comprobar */
    $destino="nicolas.dps@gmail.com";
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];

    // comprobamos los valores recogidos 
    if($comprobacion->comprobarvacio($nombre)){
        header("location:../index.html?fallo1#hitocontacto");
        die;  // salimos del php
    }

    // limpiamos de texto malicioso
    $comprobacion->filtrarValorlight($nombre);

    /*  validaciones de correo */
    if($comprobacion->comprobarvacio($email)){
        header("location:../index.html?fallo2#hitocontacto");
        die;  // salimos del php
    }

    // limpiamos de codigo malicioso
    $comprobacion->filtrarvalorlight($email);
    // validamos email
    if(!$comprobacion->validar_email($email)){
        header("location:../index.html?fallo3#hitocontacto");
        die;  // salimos del php
    }

    // validaciones del telefono
    if($comprobacion->comprobarvacio($telefono)){
        header("location:../index.html?fallo5#hitocontacto");
        die;  // salimos del php
    }

    // comprobaciones del mensaje
    if($comprobacion->comprobarvacio($mensaje)){
        header("location:../index.html?fallo6#hitocontacto");
        die;  // salimos del php
    }

    // limpiamos
    $comprobacion->filtrarvalorlight($mensaje);

    // fin comprobaciones PHP


    /* datos que recogemos de su cliente */
    /* ip */
    $ip = $_SERVER['REMOTE_ADDR'];

    /* datos que recogemos deL sistema */
    /* fecha */
    $datetime = date("Y-m-d H:i:s");

    /* mensaje concatenado para enviar por correo */
    $contenido = "Fecha de envio: ".$datetime."\nIP: ".$ip."\nNombre: ".$nombre."\nCorreo".$email."\nTelefono: ".$telefono."\nMensaje: ".$mensaje;

    $cabecera = 'From: info@webda.eus'."\r\n".'Reply-To: info@webda.eus'."\r\n" ;
    'X-Mailer PHP/'.phpversion();

    /* enviar  correo de confirmacion */    
        
    $correoEmisor = "info@webda.eus";
    $nombreEmisor = "Webda - Alumno";
    $destinatario = $email;
    $nombreDestinatario = $nombre;
    $asunto = "Consulta realizada en la web";
    $cuerpo = $contenido;

    include "./includes/_configPhpMailer.php";
    

    /* redirgir  a gracias.html y salir de aqui*/
    header("location:../index.html?enviado=correo enviado por PhpMailer!");


}

?>