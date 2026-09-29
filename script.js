/* ==========================================
   MENÚ PARA CELULARES
========================================== */

function abrirMenu() {

    const menu = document.getElementById("menu");

    if (menu) {
        menu.classList.toggle("abierto");
    }

}


/* ==========================================
   FILTRO DE AUTOS
========================================== */

function filtrarAutos(tipo, boton) {

    const autos = document.querySelectorAll(".auto-card");

    const botones = document.querySelectorAll(".filtro");


    botones.forEach(function(b) {

        b.classList.remove("activo");

    });


    boton.classList.add("activo");


    autos.forEach(function(auto) {

        const categoria = auto.dataset.tipo;


        if (tipo === "todos" || categoria === tipo) {

            auto.style.display = "block";

            auto.style.animation = "aparecer 0.5s ease";

        } else {

            auto.style.display = "none";

        }

    });

}


/* ==========================================
   INFORMACIÓN DE LOS AUTOS
========================================== */

const informacionAutos = {

    "Red Phantom": {

        descripcion:
        "El Red Phantom es un automóvil deportivo conceptual enfocado en el equilibrio entre potencia, velocidad y control. Su diseño utiliza líneas agresivas y una estética orientada al rendimiento."

    },


    "Scarlet X": {

        descripcion:
        "El Scarlet X representa un superauto conceptual de alto rendimiento. Combina tecnología, aerodinámica y una gran potencia para ofrecer una experiencia deportiva."

    },


    "Crimson GT": {

        descripcion:
        "El Crimson GT combina elementos clásicos con detalles modernos. Está pensado para quienes buscan un vehículo con personalidad y una estética inspirada en los grandes deportivos."

    },


    "Red Fury": {

        descripcion:
        "El Red Fury es el modelo más extremo de la colección conceptual. Su enfoque está en el rendimiento, la velocidad y una estética inspirada en los autos de competición."

    }

};


/* ==========================================
   MODAL
========================================== */

function mostrarDetalles(nombre) {

    const modal = document.getElementById("modal");

    const titulo = document.getElementById("modal-titulo");

    const texto = document.getElementById("modal-texto");


    if (!modal || !titulo || !texto) {
        return;
    }


    titulo.textContent = nombre;

    texto.textContent =
        informacionAutos[nombre].descripcion;


    modal.classList.add("mostrar");

}


function cerrarModal() {

    const modal = document.getElementById("modal");

    if (modal) {

        modal.classList.remove("mostrar");

    }

}


/* ==========================================
   CERRAR MODAL AL HACER CLIC AFUERA
========================================== */

const modal = document.getElementById("modal");

if (modal) {

    modal.addEventListener("click", function(event) {

        if (event.target === modal) {

            cerrarModal();

        }

    });

}


/* ==========================================
   DATOS PARA EL COMPARADOR
========================================== */

const autos = {

    phantom: {

        nombre: "Red Phantom",

        hp: 620,

        velocidad: 305,

        aceleracion: 3.1

    },


    scarlet: {

        nombre: "Scarlet X",

        hp: 780,

        velocidad: 340,

        aceleracion: 2.8

    },


    crimson: {

        nombre: "Crimson GT",

        hp: 450,

        velocidad: 270,

        aceleracion: 4.2

    },


    fury: {

        nombre: "Red Fury",

        hp: 850,

        velocidad: 350,

        aceleracion: 2.6

    }

};


/* ==========================================
   COMPARAR AUTOS
========================================== */

function compararAutos() {

    const selector1 =
        document.getElementById("auto1");

    const selector2 =
        document.getElementById("auto2");

    const resultado =
        document.getElementById("resultado");


    if (!selector1 || !selector2 || !resultado) {

        return;

    }


    const primero =
        autos[selector1.value];

    const segundo =
        autos[selector2.value];


    resultado.innerHTML = `

        <h2 class="comparacion-titulo">

            ${primero.nombre}

            <span>VS</span>

            ${segundo.nombre}

        </h2>


        <div class="comparacion-grid">


            <div class="comparacion-item">

                <i class="fa-solid fa-bolt"></i>

                <strong>
                    ${primero.hp} / ${segundo.hp}
                </strong>

                <span>
                    CABALLOS DE FUERZA
                </span>

            </div>


            <div class="comparacion-item">

                <i class="fa-solid fa-gauge-high"></i>

                <strong>
                    ${primero.velocidad} / ${segundo.velocidad}
                </strong>

                <span>
                    VELOCIDAD KM/H
                </span>

            </div>


            <div class="comparacion-item">

                <i class="fa-solid fa-stopwatch"></i>

                <strong>
                    ${primero.aceleracion} / ${segundo.aceleracion}
                </strong>

                <span>
                    0-100 KM/H
                </span>

            </div>


        </div>

    `;


    resultado.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


/* ==========================================
   QUIZ
========================================== */

function calcularQuiz() {

    const formulario =
        document.getElementById("formQuiz");

    const resultado =
        document.getElementById("resultadoQuiz");


    if (!formulario || !resultado) {

        return;

    }


    const respuestas =
        formulario.querySelectorAll(
            'input[type="radio"]:checked'
        );


    if (respuestas.length < 4) {

        resultado.innerHTML = `

            <i class="fa-solid fa-triangle-exclamation"></i>

            <h2>
                FALTAN RESPUESTAS
            </h2>

            <p>
                Responde las cuatro preguntas
                antes de ver tu resultado.
            </p>

        `;

        resultado.classList.add("mostrar");

        return;

    }


    let velocidad = 0;

    let diseño = 0;

    let clasico = 0;


    respuestas.forEach(function(respuesta) {

        if (respuesta.value === "velocidad") {

            velocidad++;

        }

        else if (respuesta.value === "diseño") {

            diseño++;

        }

        else if (respuesta.value === "clasico") {

            clasico++;

        }

    });


    let auto;

    let descripcion;


    if (
        velocidad >= diseño &&
        velocidad >= clasico
    ) {

        auto = "RED FURY";

        descripcion =
        "Tu resultado indica una preferencia por la velocidad, la potencia y la adrenalina. Un auto de estilo racing representa mejor tus respuestas.";

    }

    else if (
        diseño >= velocidad &&
        diseño >= clasico
    ) {

        auto = "SCARLET X";

        descripcion =
        "Tus respuestas muestran que te interesan especialmente el diseño, la tecnología y una apariencia moderna.";

    }

    else {

        auto = "CRIMSON GT";

        descripcion =
        "Tus respuestas muestran una preferencia por la elegancia, la personalidad y los diseños clásicos.";

    }


    resultado.innerHTML = `

        <i class="fa-solid fa-car-side"></i>

        <h2>
            TU AUTO ES: ${auto}
        </h2>

        <p>
            ${descripcion}
        </p>

    `;


    resultado.classList.add("mostrar");


    resultado.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


/* ==========================================
   TECLA ESC PARA CERRAR MODAL
========================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        cerrarModal();

    }

});