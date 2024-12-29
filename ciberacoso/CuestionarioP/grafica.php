<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Fuentes de texto -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="votacion.png">
    <link rel="stylesheet" href="grafica.css">
    <title>Graficas</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js"></script>

</head>

<body>
    <!-- Cabecera -->
    <section id="cabecera">
        <header>
            <h2>Formulario</h2>
        </header>
        <nav>
            <a href="#">Gráficas</a>
            <a href="#">Reiniciar</a>
        </nav>
    </section>
    <section id="grafica">

        <div id="contenedorOpciones">
            <div id="cont1">


                <div class="tit">
                    <h3>Carreras</h3>
                    <span>Elije una carrera para ver el resultado de las encuestas </span>
                </div>
                <div id="carreras">

                    <div class="contenedorCarrera">
                        <div id="carrera">
                            <!--type="submit" name="registro" class="formBoton -->
                            <h4>Totas las carreras</h4>
                            <button type="submit" name="buscar" value="general 7" class="formBoton"> 
                                <span>7 Cuatrimestre</span>
                            </button>
                            <button type="submit" name="buscar" value="general 4" class="formBoton">
                                <span>4 Cuatrimestre</span>
                            </button>
                            <button type="submit" name="buscar" value="general 1" class="formBoton">
                                <span>1 Cuatrimenstre</span>
                            </button>
                        </div>
                        <div id="carrera">
                            <h4>Sistemas computacionales</h4>
                            <button type="submit" name="buscar" value="sistemas 7" class="formBoton">
                                <span>7 Cuatrimestre</span>
                            </button>
                            <button type="submit" name="buscar" value="sistemas 4" class="formBoton">
                                <span> 4 Cuatrimestre</span>
                            </button>
                            <button type="submit" name="buscar" value="sistemas 1" class="formBoton">
                                <span>1 Cuatrimenstre</span>
                            </button>
                        </div>
                        <div id="carrera">
                            <h4>Aquitectura</h4>
                            <button type="submit" name="buscar" value="arquitectura 7" class="formBoton">
                                <span>7 Cuatrimestre</span>
                            </button>
                            <button type="submit" name="buscar" value="arquitectura 4" class="formBoton">
                                <span> 4 Cuatrimestre</span>
                            </button>
                            <button type="submit" name="buscar" value="arquitectura" class="formBoton">
                                <span>1 Cuatrimenstre</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Graficas -->
        <div id="contenedorGrafica">
            <canvas id="MiGrafica"></canvas>
        </div>
    </section>
    <script src="grafica.js"></script>
</body>

</html>
<!-- 
* sistemas
 * arquitectura
 * criminalistica
 * derecho
 * administracion
 * diseño 
 * predagogia 
 * turismo
-->