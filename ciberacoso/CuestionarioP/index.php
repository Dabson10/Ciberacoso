<?php
$servidor = "localhost";
$usuario = "root";
$clave = "Dabson12";
$baseDatos = "encuestas";

$enlace = mysqli_connect($servidor, $usuario, $clave, $baseDatos);

if (!$enlace) {
    die("Error en la conexión a la base de datos: " . mysqli_connect_error());
}

$id_encuestado = null;

// Registro de usuario
if (isset($_POST['registro'])) {
    $correo = $_POST['correo'];
    $carrera = $_POST['carrera'];
    $cuatrim = $_POST['cuatri'];
    $edad = $_POST['edad'];

    $comparar = "SELECT correo FROM encuestados WHERE correo='$correo';";
    $ejecutar = mysqli_query($enlace, $comparar);

    if ($ejecutar) {
        if (mysqli_num_rows($ejecutar) > 0) {
            echo "<script>alert('Ya tienes un correo registrado');</script>";
        } else {
            $insertar = "INSERT INTO encuestados(correo, carrera, cuatri, edad) VALUES('$correo', '$carrera', '$cuatrim', '$edad');";
            if ($enlace->query($insertar)) {
                $id_encuestado = $enlace->insert_id;
                echo "<script>alert('Su ID es: $id_encuestado');</script>";
            } else {
                die("Error al registrar usuario: " . $enlace->error);
            }
        }
    } else {
        die("Error al verificar el correo: " . $enlace->error);
    }
}

// Guardado de respuestas
if (isset($_POST['enviar_respuestas']) && isset($id_encuestado)) {
    for ($i = 1; $i <= 16; $i++) {
        if (isset($_POST["respuesta_$i"])) {
            $id_pregunta = $i;
            $respuesta = $_POST["respuesta_$i"];

            // Guardar respuesta en tabla `respuestas`
            $guardar_respuesta = "INSERT INTO respuestas (id_encuestado, id_pregunta, respuesta) 
                                  VALUES ($id_encuestado, $id_pregunta, '$respuesta');";

            if ($enlace->query($guardar_respuesta)) {
                // Actualizar el contador de la tabla `preguntas`
                $actualizar_respuesta = "UPDATE preguntas 
                                         SET cant_resp = cant_resp + 1 
                                         WHERE id_preguntas = $id_pregunta 
                                         AND respuesta = '$respuesta';";

                if (!$enlace->query($actualizar_respuesta)) {
                    echo "<script>alert('Error al actualizar contador: {$enlace->error}');</script>";
                }
            } else {
                echo "<script>alert('Error al guardar la respuesta: {$enlace->error}');</script>";
            }
        }
    }

    echo "<script>alert('Respuestas guardadas y contadores actualizados correctamente');</script>";
} else if (isset($_POST['enviar_respuestas'])) {
    echo "<script>alert('Error: No se encontró un ID de encuestado válido');</script>";
}

mysqli_close($enlace);
?>



<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Fuentes de texto -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style1.css">
    <link rel="icon" href="votacion.png">
    <title>Cuestionario Ética</title>
    
</head>

<body>
    <!-- Cabecera -->
    <section id="cabecera">
        <header>
            <h2>Formulario</h2>
        </header>
        <nav>
            <a href="grafica.php">Gráficas</a>
            <a href="#">Reiniciar</a>
        </nav>
    </section>
    <!-- Sección del login -->
    <section id="login">
        <div class="contenedorPreguntas">
            <h2 class="contenedorTitulo">Inicio de sesión</h2>
            
            <form action="#" name="ejemplo" class="contenedorForm" method="post">
                <input type="email" name="correo" placeholder="Ingrese su correo" class="formPreguntas" required>
                <input type="text" name="carrera" placeholder="Ingrese su carrera" class="formPreguntas" required>
                <input type="number" name="cuatri" placeholder="Ingrese su cuatrimestre" class="formPreguntas" required>
                <input type="number" name="edad" placeholder="Ingrese su edad" class="formPreguntas" required>
                
            
            
        </div>
    </section>

    <!-- Seccion para las preguntas -->
    
        <input type="hidden" name="id_encuestado" value="<?php echo $id_encuestado; ?>">
        <section id="preguntas">
            <div class="questions-wrapper">
                <!-- pregunta 1 -->
                <div class="question-container">
                    <h2 class="question-title">1.¿Consideras que los contenidos éticos en tu carrera son suficientes?
                    </h2>
                    <div class="survey-container">

                        <label>
                            <input required type="radio" name="respuesta_1" value="Totalmente de acuerdo">
                            Totalmente de acuerdo
                        </label>
                        <label>
                            <input type="radio" name="respuesta_1" value="De acuerdo">
                            De acuerdo
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_1" value="Ni de acuerdo ni en desacuerdo">
                            Ni de acuerdo ni en desacuerdo
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_1" value="En desacuerdo">
                            En desacuerdo
                        </label>

                    </div>
                    <div class="question-progress">
                        <span class="current-question">Pregunta 1</span>
                        <span class="total-questions">de 16</span>
                    </div>
                </div>
                <!--  -->
                <div class="question-container">
                    <h2 class="question-title">2.¿Crees que la ética debería tener mayor importancia en el plan de
                        estudios
                        universitario?</h2>
                    <div class="survey-container">
                        
                        <label>
                            <input required type="radio" name="respuesta_2" value="Totalmente de acuerdo">
                            Totalmente de acuerdo
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_2" value="De acuerdo">
                            De acuerdo
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_2" value="Ni de acuerdo ni en desacuerdo">
                            Ni de acuerdo ni en desacuerdo
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_2" value="En desacuerdo">
                            En desacuerdo
                        </label>
                        
                    </div>
                    <div class="question-progress">
                        <span class="current-question">Pregunta 2</span>
                        <span class="total-questions">de 16</span>
                    </div>
                </div>
                <!--  -->
                <div class="question-container">
                    <h2 class="question-title">3.¿Consideras que los estudiantes aplican los principios éticos fuera de
                        la
                        universidad?</h2>
                    <div class="survey-container">
                        <label>
                            <input required type="radio" name="respuesta_3" value="Totalmente de acuerdo">
                            Totalmente de acuerdo
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_3" value="De acuerdo">
                            De acuerdo
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_3" value="Ni de acuerdo ni en desacuerdo">
                            Ni de acuerdo ni en desacuerdo
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_3" value="En desacuerdo">
                            En desacuerdo
                        </label>
                        
                    </div>
                    <div class="question-progress">
                        <span class="current-question">Pregunta 3</span>
                        <span class="total-questions">de 16</span>
                    </div>
                </div>
                <!--  -->
                <div class="question-container">
                    <h2 class="question-title">4.¿Piensas que la ética es igual de importante que los conocimientos
                        técnicos
                        en la carrera?</h2>
                    <div class="survey-container">
                        <label>
                            <input required type="radio" name="respuesta_4" value="Totalmente de acuerdo">
                            Totalmente de acuerdo
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_4" value="De acuerdo">
                            De acuerdo
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_4" value="Ni de acuerdo ni en desacuerdo">
                            Ni de acuerdo ni en desacuerdo
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_4" value="En desacuerdo">
                            En desacuerdo
                        </label>
                    </div>
                    <div class="question-progress">
                        <span class="current-question">Pregunta 4</span>
                        <span class="total-questions">de 16</span>
                    </div>
                </div>
                <!--  -->
                <div class="question-container">
                    <h2 class="question-title">5. ¿Cuán probable crees que es que los problemas éticos impacten en el
                        éxito profesional de alguien?</h2>
                    <div class="survey-container">
                        <label>
                            <input required type="radio" name="respuesta_5" value="Muy probable">
                            Muy probable
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_5" value="Probable">
                            Probable
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_5" value="Poco probable">
                            Poco probable
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_5" value="Improbable">
                            Improbable
                        </label>
                    </div>
                    <div class="question-progress">
                        <span class="current-question">Pregunta 5</span>
                        <span class="total-questions">de 16</span>
                    </div>
                </div>

                <div class="question-container">
                    <h2 class="question-title">6. ¿Consideras que los cursos de ética han cambiado tus valores
                        personales?</h2>
                    <div class="survey-container">
                        <label>
                            <input required type="radio" name="respuesta_6" value="Mucho">
                            Mucho
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_6" value="Algo">
                            Algo
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_6" value="Poco">
                            Poco
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_6" value="Nada">
                            Nada
                        </label>
                    </div>
                    <div class="question-progress">
                        <span class="current-question">Pregunta 6</span>
                        <span class="total-questions">de 16</span>
                    </div>
                </div>

                <div class="question-container">
                    <h2 class="question-title">7. ¿Crees que es posible enseñar ética de forma efectiva en un entorno
                        académico?</h2>
                    <div class="survey-container">
                        <label>
                            <input required type="radio" name="respuesta_7" value="Totalmente de acuerdo">
                            Totalmente de acuerdo
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_7" value="De acuerdo">
                            De acuerdo
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_7" value="Ni de acuerdo ni en desacuerdo">
                            Ni de acuerdo ni en desacuerdo
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_7" value="En desacuerdo">
                            En desacuerdo
                        </label>
                    </div>
                    <div class="question-progress">
                        <span class="current-question">Pregunta 7</span>
                        <span class="total-questions">de 16</span>
                    </div>
                </div>
                <div class="question-container">
                    <h2 class="question-title">8. ¿Cómo influye la ética en tu percepción de la reputación de UTC?</h2>
                    <div class="survey-container">
                        <label>
                            <input required type="radio" name="respuesta_8" value="Muy alto">
                            Muy alto
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_8" value="Alto">
                            Alto
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_8" value="Moderado">
                            Moderado
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_8" value="Bajo">
                            Bajo
                        </label>
                    </div>
                    <div class="question-progress">
                        <span class="current-question">Pregunta 8</span>
                        <span class="total-questions">de 16</span>
                    </div>
                </div>

                <div class="question-container">
                    <h2 class="question-title">9. ¿Cómo calificarías la preparación ética de los docentes de UTC en
                        comparación con otras instituciones?</h2>
                    <div class="survey-container">
                        <label>
                            <input required type="radio" name="respuesta_9" value="Muy alto">
                            Muy alto
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_9" value="Alto">
                            Alto
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_9" value="Moderado">
                            Moderado
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_9" value="Bajo">
                            Bajo
                        </label>
                    </div>
                    <div class="question-progress">
                        <span class="current-question">Pregunta 9</span>
                        <span class="total-questions">de 16</span>
                    </div>
                </div>

                <div class="question-container">
                    <h2 class="question-title">10. ¿Cómo valorarías el interés de tus compañeros en temas de ética
                        profesional?</h2>
                    <div class="survey-container">
                        <label>
                            <input required type="radio" name="respuesta_10" value="Muy alto">
                            Muy alto
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_10" value="Alto">
                            Alto
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_10" value="Moderado">
                            Moderado
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_10" value="Bajo">
                            Bajo
                        </label>
                    </div>
                    <div class="question-progress">
                        <span class="current-question">Pregunta 10</span>
                        <span class="total-questions">de 16</span>
                    </div>
                </div>
                <div class="question-container">
                    <h2 class="question-title">11. ¿Has respetado los acuerdos de convivencia escritos en el reglamento?
                    </h2>
                    <div class="survey-container">
                        <label>
                            <input required type="radio" name="respuesta_11" value="Algunas veces">
                            Algunas veces
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_11" value="Sí">
                            Sí
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_11" value="No">
                            No
                        </label>
                        <label>
                            <input type="radio" required name="respuesta_11" value="No lo sé">
                            No lo sé
                        </label>
                    </div>
                    <div class="question-progress">
                        <span class="current-question">Pregunta 11</span>
                        <span class="total-questions">de 16</span>
                    </div>
                </div>

                <div class="question-container">
                    <h2 class="question-title">12. ¿Consideras importante la formación ética en la universidad para los
                        estudiantes?</h2>
                    <div class="survey-container">
                        <label>
                            <input type="radio" name="respuesta_12" value="Totalmente de acuerdo">
                            Totalmente de acuerdo
                        </label>
                        <label>
                            <input type="radio" required name="respuesta_12" value="De acuerdo">
                            De acuerdo
                        </label>
                        <label>
                            <input type="radio" required name="respuesta_12" value="Ni de acuerdo ni en desacuerdo">
                            Ni de acuerdo ni en desacuerdo
                        </label>
                        <label>
                            <input type="radio" required name="respuesta_12" value="En desacuerdo">
                            En desacuerdo
                        </label>
                    </div>
                    <div class="question-progress">
                        <span class="current-question">Pregunta 12</span>
                        <span class="total-questions">de 16</span>
                    </div>
                </div>

                <div class="question-container">
                    <h2 class="question-title">13. ¿Crees que los conocimientos éticos adquiridos en la universidad son
                        necesarios para el ejercicio profesional?</h2>
                    <div class="survey-container">
                        <label>
                            <input required type="radio" name="respuesta_13" value="Muy necesario">
                            Muy necesario
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_13" value="Necesario">
                            Necesario
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_13" value="Neutro">
                            Neutro
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_13" value="Poco necesario">
                            Poco necesario
                        </label>
                    </div>
                    <div class="question-progress">
                        <span class="current-question">Pregunta 13</span>
                        <span class="total-questions">de 16</span>
                    </div>
                </div>
                <div class="question-container">
                    <h2 class="question-title">14. ¿Piensas que la falta de formación ética puede llevar a prácticas
                        profesionales inadecuadas?</h2>
                    <div class="survey-container">
                        <label>
                            <input required type="radio" name="respuesta_14" value="Totalmente de acuerdo">
                            Totalmente de acuerdo
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_14" value="De acuerdo">
                            De acuerdo
                        </label>
                        <label>
                            <input type="radio" required name="respuesta_14" value="Ni de acuerdo ni en desacuerdo">
                            Ni de acuerdo ni en desacuerdo
                        </label>
                        <label>
                            <input type="radio" required name="respuesta_14" value="En desacuerdo">
                            En desacuerdo
                        </label>
                    </div>
                    <div class="question-progress">
                        <span class="current-question">Pregunta 14</span>
                        <span class="total-questions">de 16</span>
                    </div>
                </div>

                <div class="question-container">
                    <h2 class="question-title">15. ¿Crees que los conocimientos en ética ayudan a los estudiantes a
                        enfrentar mejor los dilemas profesionales?</h2>
                    <div class="survey-container">
                        <label>
                            <input type="radio" required name="respuesta_15" value="Totalmente de acuerdo">
                            Totalmente de acuerdo
                        </label>
                        <label>
                            <input type="radio" required name="respuesta_15" value="De acuerdo">
                            De acuerdo
                        </label>
                        <label>
                            <input type="radio" required name="respuesta_15" value="Ni de acuerdo ni en desacuerdo">
                            Ni de acuerdo ni en desacuerdo
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_15" value="En desacuerdo">
                            En desacuerdo
                        </label>
                    </div>
                    <div class="question-progress">
                        <span class="current-question">Pregunta 15</span>
                        <span class="total-questions">de 16</span>
                    </div>
                </div>

                <div class="question-container">
                    <h2 class="question-title">16. ¿Estás de acuerdo en que los temas éticos que se ven en la
                        universidad se aplican en el campo laboral?</h2>
                    <div class="survey-container">
                        <label>
                            <input required type="radio" name="respuesta_16" value="Totalmente de acuerdo">
                            Totalmente de acuerdo
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_16" value="De acuerdo">
                            De acuerdo
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_16" value="Ni de acuerdo ni en desacuerdo">
                            Ni de acuerdo ni en desacuerdo
                        </label>
                        <label>
                            <input required type="radio" name="respuesta_16" value="En desacuerdo">
                            En desacuerdo
                        </label>
                    </div>
                    <div class="question-progress">
                        <span class="current-question">Pregunta 16</span>
                        <span class="total-questions">de 16</span>
                    </div>
                    <button type="submit" name="registro" class="formBoton">Enviar respuestas</button>
                </div>
    </form>

    <!-- fin del question-wraper -->
    </div>

    </section>


</body>

</html>