document.addEventListener('DOMContentLoaded', (event) => {
    // Seleccionamos los paths del SVG en lugar de areas
    const paths = document.querySelectorAll('#mapa path');
    const estadoTitle = document.querySelector('#estado h3');
    const AcosoUsu1Element = document.querySelector('#AcosoUsu1');
    const HomAcoso2Element = document.querySelector('#HomAcoso2');
    const MujAcoso3Element = document.querySelector('#MujAcoso3');
    const HomEdad4Element = document.querySelector('#HomEdad4');
    const MujEdad5Element = document.querySelector('#MujEdad5');
    const PerEstBasi6Element = document.querySelector('#PerEstBasi6');
    const PerEstMed7Element = document.querySelector('#PerEstMed7');
    const PerEstSup8Element = document.querySelector('#PerEstSup8');
    const IdentidadFake9 = document.querySelector('#IdentidadFake9');
    const MsjOfens10 = document.querySelector('#MsjOfens10');
    const DescAgresor11 = document.querySelector('#DescAgresor11');
    const ConoAgresor12 = document.querySelector('#ConoAgresor12');
    const telefono = document.querySelector('#telefono');
    const numTelefono = document.querySelector('#linked');
    // Despues de esta linea se deben de agregar los datos del estado

    const estadosData = {
        'CiudadMexico': {
            nombre: 'Ciudad de México',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 17.6%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 16.8%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 18.4%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 24.2%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 23.4%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 22.8%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 29.7%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 47.5%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 31.8%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 31.1%',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 69.8%',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 20.5%',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'CDMX.png',
            hombres: 16.8,
            mujeres: 18.4
        },
        'Sinaloa': {
            nombre: 'Sinaloa',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 17.6%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 15.7%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 19.3%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 21.3%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 31.2%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 31.3%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 29.5%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 38.5%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 30.7%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 38.1%',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 48.6%',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 37.7%',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'Sinaloa.png',
            hombres: 15.7,
            mujeres: 19.3
        },
        'Potosi': {
            nombre: 'San Luis Potosí',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 20.3%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 19.3%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 21.2%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 15.9%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 28.2%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 40%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 26.5%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 33.1%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 33.2%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 27.9%',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 59.7%',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 25.7%',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'SanLuis.png',
            hombres: 19.3,
            mujeres: 21.2,
        },
        'Quintana': {
            nombre: 'Quintana Roo',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 24.5%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 26.1%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 22.8%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 22.8%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 27.2%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 34.7%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 31.9%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 30.7%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 36.2%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 27.6%',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 73%',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 17.2%',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'QuintanaRoo.png',
            hombres: 26.1,
            mujeres: 22.8
        },
        'Oaxaca': {
            nombre: 'Oaxaca',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 25.5%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 28.2%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 23.3%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 31.2%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 26.3%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 37.5%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 31.7%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 30.6%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 37.8%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 34.8%',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 63.1%',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 20.2%',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'Oaxaca.png',
            hombres: 28.2,
            mujeres: 23.3
        },
        'Puebla': {
            nombre: 'Puebla',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 25.0%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 23.1%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 26.6%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 31.5%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 32.9%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 36.2%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 30.6%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 32.8%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 42.9%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 35.5%',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 60.9%',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 23.7%',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'Puebla.png',
            hombres: 23.1,
            mujeres: 26.6
        },
        'Queretaro': {
            nombre: 'Querétaro',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 20.6%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 19.4%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 21.7%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 20.7%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 27.1%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 28.1%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 30.8%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 32.7%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 35.7%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 31.5%',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 65.8%',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 22.7%',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'Queretaro.png',
            hombres: 19.4,
            mujeres: 21.7
        },
        'Tlaxcala': {
            nombre: 'Tlaxcala',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 20.3%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 17.9%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 22.5%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 19.0%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 31.6%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 41.6%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 31.5%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 26.7%',
            IdentidadFake9: 'Contacto mediante identidades falsas: 41.1%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 33.6%',
            DescAgresor11: 'Victimas que desconocian a su agresor: 59.4%',
            ConoAgresor12: 'Victimas que conocian a su agresor: 20.0%',
            telefono: 'Si sufriste algun tipo de ciberacoso llame al siguiente numero: 088',
            imagen: 'Tlaxcala.png',
            hombres: 17.9,
            mujeres: 22.5
        },
        'Veracruz': {
            nombre: 'Veracruz',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 20.2%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 27.1%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 24.5%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 28.5%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 30.3%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 41.5%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 31.7%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 33.1%',
            IdentidadFake9: 'Contacto mediante identidades falsas: 46.3%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 30.2%',
            DescAgresor11: 'Victimas que desconocian a su agresor: 60.2%',
            ConoAgresor12: 'Victimas que conocian a su agresor: 22.3%',
            telefono: 'Si sufriste algun tipo de ciberacoso llame al siguiente numero: 088',
            imagen: 'Veracruz.png',
            hombres: 27.1,
            mujeres: 24.5
        },
        'Yucatan': {
            nombre: 'Yucatán',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 20.7%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 21.0%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 20.5%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 23.1%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 23.9%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 35.5%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 31.9%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 32.6%',
            IdentidadFake9: 'Contacto mediante identidades falsas: 31.7%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 34.0%',
            DescAgresor11: 'Victimas que desconocian a su agresor: 60.4%',
            ConoAgresor12: 'Victimas que conocian a su agresor: 25.4%',
            telefono: 'Si sufriste algun tipo de ciberacoso llame al siguiente numero: 088',
            imagen: 'Yucatan.png',
            hombres: 21,
            mujeres: 20.5
        },
        'Zacatecas': {
            nombre: 'Zacatecas',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 20.7%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 20.0%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 21.3%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 25.1%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 31.6%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 43.4%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 20.6%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 35.5%',
            IdentidadFake9: 'Contacto mediante identidades falsas: 36.9%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 30.8%',
            DescAgresor11: 'Victimas que desconocian a su agresor: 56.3%',
            ConoAgresor12: 'Victimas que conocian a su agresor: 23.0%',
            telefono: 'Si sufriste algun tipo de ciberacoso llame al siguiente numero: 088',
            imagen: 'Zacatecas.png',
            hombres: 20,
            mujeres: 21.3
        },
        'Morelos': {
            nombre: 'Morelos',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 21.2%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 19.2%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 23.0%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 22.6%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufieron ciberacoso: 33.8%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 38.9%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso:  30.6%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 30.0%',
            IdentidadFake9: 'Contacto mediante identidades falsas: 37.5%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 29.3%',
            DescAgresor11: 'Victimas que desconocian a su agresor: 65.6%',
            ConoAgresor12: 'Victimas que conocian a su agresor: 23.3%',
            telefono: 'Si sufriste algun tipo de ciberacoso llame al siguiente numero: 089',
            imagen: 'Morelos.png',
            hombres: 19.2,
            mujeres: 23
        },
        'Nayarit': {
            nombre: 'Nayarit',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 20.3%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 21.1%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 19.5%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 28.0%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 34.4%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 33.6%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 29.1%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 36.4%',
            IdentidadFake9: 'Contacto mediante identidades falsas:  28.6%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 37.6%',
            DescAgresor11: 'Victimas que desconocian a su agresor: 61.2%',
            ConoAgresor12: 'Victimas que conocian a su agresor: 23.5%',
            telefono: 'Si sufriste algun tipo de ciberacoso llame al siguiente numero: 089',
            imagen: 'Nayarit.png',
            hombres: 21.1,
            mujeres: 19.5
        },
        'NuevoLeon': {
            nombre: 'Nuevo Leon',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 21.0%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 18.9%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 23.2%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 13.5%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 34.5%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso:  33.8%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 27.8%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 37.9%',
            IdentidadFake9: 'Contacto mediante identidades falsas: 31.6%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 33.2%',
            DescAgresor11: 'Victimas que desconocian a su agresor: 69.8%',
            ConoAgresor12: 'Victimas que conocian a su agresor: 17.8%',
            telefono: 'Si sufriste algun tipo de ciberacoso llame al siguiente numero: 089',
            imagen: 'Nuevoleon.png',
            hombres: 18.9,
            mujeres: 23.2
        },
        'Coahuila': {
            nombre: 'Coahuila',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 19.6',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 20.4%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 18.9%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 32.8%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 28.5%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 37.7%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 31.4%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 29.9%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 33.7%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 36.2%',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 51.4%',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 30%',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'Coahuila.png',
            hombres: 20.4,
            mujeres: 18.9
        },
        'Colima': {
            nombre: 'Colima',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 24.2%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 22.5%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 25.7%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 22.6%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 39.4%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 36.9%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 30.5%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 31.1%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 30.6%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 33.9%',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 57.5%',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 24.6%',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'Colima.png',
            hombres: 22.5,
            mujeres: 25.7
        },
        'Guerrero': {
            nombre: 'Guerrero',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 26.8%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 34.5 % ',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 36.7 % ',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 12% ',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 22.2 %',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 22.2 %',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 27.5% ',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 30.1 %',
            IdentidadFake9: 'Contactados mediante identidades falsas: 20.9% ',
            MsjOfens10: 'Mensajes ofensivos recibidos: 30.8 % ',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 41.8% ',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 28.9%, ',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'Guerrero.png',
            hombres: 34.5,
            mujeres: 36.7
        },
        'Guanajuato': {
            nombre: 'Guanajuato',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 24%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 19.4%.',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 19.8% ',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 18.7',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 24.8',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 27.5% ',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 27.5% ',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 30.8%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 21.7 % ',
            MsjOfens10: 'Mensajes ofensivos recibidos: 26.0 %',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 50.8%',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 10%',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'Guanajuato.png',
            hombres: 19.4,
            mujeres: 19.8
        },
        'Durango': {
            nombre: 'Durango',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 28.8%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 28,8.',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 33.0%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 26.3% ',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 41.3% ',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 28.1%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 25% ',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 15% ',
            IdentidadFake9: 'Contactados mediante identidades falsas: 33.3 %',
            MsjOfens10: 'Mensajes ofensivos recibidos: 26.0 %',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 65.8%',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 22%',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'Durango.png',
            hombres: 28.8,
            mujeres: 33
        },
        'Aguascalientes': {
            nombre: 'Aguascalientes',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 18%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 14.7%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 21%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 19.5%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 23.4%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 26.0%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 30.4%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 32.1%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 33.1%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 30.2%',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 61.5%',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 24.5%',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'Aguascalientes.png',
            hombres: 14.7,
            mujeres: 21,
            numTelefono:'WhatsApp'
        },
        'BajaCN': {
            nombre: 'Baja California Norte',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 17.8%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 44.0%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 56.0%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 21.4%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 28.3%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 40.1%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 30.9%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 28.5%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 33.5%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 35.2%',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 64.7%',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 23.1%',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'BajaCalifornia.png',
            hombres: 44.0,
            mujeres: 56.0
        },
        'BajaCS': {
            nombre: 'Baja California Sur',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 19.1%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 43.7%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 56.3%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 22.0%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 26.7%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 39.5%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 31.0%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 29.1%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 32.9%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 34.8%',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 63.5%',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 22.9%',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'BajaCaliforniaSur.png',
            hombres: 43.7,
            mujeres: 56.3
        },
        'Sonora': {
            nombre: 'Sonora',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 22.8%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 19.6%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 23.2%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 22.6%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 24.8%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 39.5%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 30.5%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 27.9%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 35.8%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 31.1%',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 62.3%',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 23.7%',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'Sonora.png',
            hombres: 19.6,
            mujeres: 23.2
        },
        'Tabasco': {
            nombre: 'Tabasco',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 23.0%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 22.0%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 24.5%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 26.3%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 33.8%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 40.1%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 29.1%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 27.3%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 37.5%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 30.7%',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 60.1%',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 22.8%',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'Tabasco.png',
            hombres: 22.0,
            mujeres: 24.5
        },
        'Tamaulipas': {
            nombre: 'Tamaulipas',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 20.3%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 19.6%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 22.8%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 20.7%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 27.2%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 36.9%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 29.5%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 26.7%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 34.3%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 30.8%',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 59.5%',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 24.4%',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'Tamaulipas.png',
            hombres: 19.6,
            mujeres: 22.8
        },
        'Hidalgo': {
            nombre: 'Hidalgo',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 21.0%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 21.5% ',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 20.6% ',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 20.4% ',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 31.2%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 40.1%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 32.0% ',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 27.9%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 33.1% ',
            MsjOfens10: 'Mensajes ofensivos recibidos: 27.8% ',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 67.3% ',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 20.6%, ',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'Hidalgo.png',
            hombres: 21.5,
            mujeres: 20.6
        },
        'Jalisco': {
            nombre: 'Jalisco',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 22.1%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 20.5% ',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 23.7% ',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 26.8% ',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 38.5%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 42.9%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 31.8% ',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 24.7%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 30.6% ',
            MsjOfens10: 'Mensajes ofensivos recibidos: 36.9% ',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 61.4% ',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 24.6%, ',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'Jalisco.png',
            hombres: 20.5,
            mujeres: 23.7
        },
        'EstadoM': {
            nombre: 'Estado de Mexico',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 19.5%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 18.1% ',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 20.7% ',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 21.3% ',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 30.9%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 39.5%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 30.0% ',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 29.7%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 40.1% ',
            MsjOfens10: 'Mensajes ofensivos recibidos: 36.0% ',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 62.6% ',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 24.6%, ',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'estado.png',
            hombres: 18.1,
            mujeres: 20.7
        },
        'Michoacan': {
            nombre: 'Michoacan',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 22.3%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 21.8% ',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 22.8% ',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 26.4% ',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 20.4%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 43.1%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 25.5% ',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 30.5%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 34.8% ',
            MsjOfens10: 'Mensajes ofensivos recibidos: 33.1% ',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 56.2% ',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 23.0%, ',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'Michoacan.png',
            hombres: 21.8,
            mujeres: 22.8
        },
        'Campeche': {
            nombre: 'Campeche',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 21.4%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 22.0%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 20.9%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 20.5%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 30.9%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 40.2%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 31.6%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 27.1%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 36.7%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 30.9%',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 62.9%',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 21.8%',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 089',
            imagen: 'Campeche.png',
            hombres: 22.0,
            mujeres: 20.9
        },
        'Chiapas': {
            nombre: 'Chiapas',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 20.2%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 19.6%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 20.6%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 18.6%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 21.7%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 39.9%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 34.1%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 25.1%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 34.2%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 27.9%',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 67.5%',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 16.4%',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 088',
            imagen: 'Chiapas.png',
            hombres: 19.6,
            mujeres: 20.6
        },
        'Chihuahua': {
            nombre: 'Chihuahua',
            AcosoUsu1: 'Usuarios de internet que sufrieron ciberacoso: 19.6%',
            HomAcoso2: 'Hombres que sufrieron ciberacoso: 18.1%',
            MujAcoso3: 'Mujeres que sufrieron ciberacoso: 21.1%',
            HomEdad4: 'Hombres entre 12 y 19 años que sufrieron ciberacoso: 17.3%',
            MujEdad5: 'Mujeres entre 12 y 19 años que sufrieron ciberacoso: 31.0%',
            PerEstBasi6: 'Personas con estudios básicos que sufrieron ciberacoso: 45.1%',
            PerEstMed7: 'Personas con estudios medio superior que sufrieron ciberacoso: 31.0%',
            PerEstSup8: 'Personas con estudios superiores que sufrieron ciberacoso: 22.7%',
            IdentidadFake9: 'Contactados mediante identidades falsas: 41.6%',
            MsjOfens10: 'Mensajes ofensivos recibidos: 28.7%',
            DescAgresor11: 'Víctimas que desconocían a su agresor: 60.3%',
            ConoAgresor12: 'Víctimas que conocían a su agresor: 25.2%',
            telefono: 'Si sufriste algún tipo de ciberacoso, llama al siguiente número: 6144427300 extensión 3214',
            imagen: 'Chihuahua.png',
            hombres: 18.1,
            mujeres: 21.1
        }

        // Añade datos para los demás estados aquí
    };

    function updateChart(hombres, mujeres) {
        chart.data.datasets[0].data = [hombres, mujeres];
        chart.update();  // Actualiza la gráfica
    }



    let estadoSeleccionado = null;
    const colorHover = '#3B729F';
    const colorSeleccionado = '#4FA1B8';
    const colorNormal = '#88A4BC';

    const updateInfo = (elemento) => {
        const estado = elemento.getAttribute('data-state');
        const data = estadosData[estado];
        if (data) {
            estadoTitle.textContent = data.nombre;
            AcosoUsu1Element.textContent = data.AcosoUsu1;
            HomAcoso2Element.textContent = data.HomAcoso2;
            MujAcoso3Element.textContent = data.MujAcoso3;
            HomEdad4Element.textContent = data.HomEdad4;
            MujEdad5Element.textContent = data.MujEdad5;
            PerEstBasi6Element.textContent = data.PerEstBasi6;
            PerEstMed7Element.textContent = data.PerEstMed7;
            PerEstSup8Element.textContent = data.PerEstSup8;
            IdentidadFake9.textContent = data.IdentidadFake9;
            MsjOfens10.textContent = data.MsjOfens10;
            DescAgresor11.textContent = data.DescAgresor11;
            ConoAgresor12.textContent = data.ConoAgresor12;
            telefono.textContent = data.telefono;
            numTelefono.textContent = data.numTelefono;
            
            const imagenElement = document.getElementById('imagen');
            if (imagenElement) {
                imagenElement.src = data.imagen;
            }
            const numTel =document.getElementById('linked');
            if(numTel){
                numTel.href='https://wa.me/524493462341?text=Hola,%20buen%20día.%20Me%20gustaría%20recibir%20información%20detallada%20sobre%20el%20ciberacoso,%20específicamente%20sobre%20los%20tipos%20de%20acoso%20que%20pueden%20ser%20denunciables%20y%20el%20procedimiento%20a%20seguir%20en%20estos%20casos.%20Agradezco%20de%20antemano%20su%20atención%20y%20orientación.';
                numTelefono.textContent=data.numTelefono;
            }
            updateChart(data.hombres, data.mujeres);
        }
    };

    paths.forEach(path => {
        // Eventos para cada path (estado)
        path.addEventListener('mouseover', () => {
            if (!estadoSeleccionado || estadoSeleccionado !== path) {
                path.style.fill = colorHover;
            }
            if (!estadoSeleccionado) {
                updateInfo(path);
            }
        });

        path.addEventListener('mouseout', () => {
            if (!estadoSeleccionado || estadoSeleccionado !== path) {
                path.style.fill = colorNormal;
            }
        });

        path.addEventListener('click', () => {
            if (estadoSeleccionado === path) {
                path.style.fill = colorNormal;
                estadoSeleccionado = null;
                return;
            }

            if (estadoSeleccionado) {
                estadoSeleccionado.style.fill = colorNormal;
            }

            estadoSeleccionado = path;
            path.style.fill = colorSeleccionado;
            updateInfo(path);
        });
    });

});