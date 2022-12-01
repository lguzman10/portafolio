<?php 

    $conectar = @mysqli_connect('localhost', 'root', '', 'prueba');

        $nombre=$_POST['name'];
        $correo=$_POST['mail'];
        $telefono=$_POST['phone'];
        $seleccion=$_POST['selection'];
        $cantidad = $_POST["cantidad"];

        $consulta = "INSERT INTO datos VALUES('$nombre', '$correo', '$telefono', '$seleccion', '$cantidad')";

        $resultado = mysqli_query($conectar, $consulta);

        if(!$resultado){
            echo"Error en la linea de sql";
        }
        else
        {
            //echo"Datos guardaos correctamente<br>
            //<a href='index.html'>Volver</a>";           
            ?>
            <?php
            include('../home.html');
        }
            

?>
