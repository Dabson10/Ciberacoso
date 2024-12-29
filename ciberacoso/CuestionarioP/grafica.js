
let miCanvas = document.getElementById("MiGrafica").getContext("2d");

var chart = new Chart(miCanvas, {
    type: "bar",
    data: {
        labels: ["Hombres", "Mujeres"],  // Estas serán las dos columnas
        datasets: [{
            label: "Ciberacoso por género",
            backgroundColor: ["rgb(75, 192, 192)", "rgb(255, 99, 132)"],  // Colores para hombres y mujeres
            borderColor: "#181C14",
            data: [5,3]  // Se actualizará dinámicamente desde `index.js`
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});
/** 
 * sistemas
 * arquitectura
 * criminalistica
 * derecho
 * administracion
 * diseño 
 * predagogia 
 * turismo
 * 
 * **/