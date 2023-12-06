const propiedadesEnVenta = [
    {
        nombre: '...',
        src: '...',
        descripcion: '...',
        ubicacion: '...',
        habitaciones: 4,
        costo: 250000,
        smoke: false,
        pets: true
    },
    {
        nombre: '....',
        src: '.....',
        descripcion: '....',
        ubicacion: '.....',
        habitaciones: 2,
        costo: 150000,
        smoke: true,
        pets: false
    },
    {
        nombre: '.....',
        src: '.....',
        descripcion: '.....',
        ubicacion: '.........',
        habitaciones: 5,
        costo: 350000,
        smoke: false,
        pets: true
    },
    {
        nombre: '....',
        src: '....',
        descripcion: '......',
        ubicacion: '......',
        habitaciones: 3,
        costo: 200000,
        smoke: true,
        pets: true
    }
];


function renderLimitado(propiedades, containerId, limite) {
    const container = document.getElementById(containerId);

    for (let i = 0; i < Math.min(limite, propiedades.length); i++) {
        const propiedad = propiedades[i];
        const propiedadElement = document.createElement('div');

        let mensajeFumar = propiedad.smoke ? 'Permitido fumar' : 'Prohibido fumar';
        let mensajeMascotas = propiedad.pets ? 'Se permiten mascotas' : 'No se permiten mascotas';

        propiedadElement.innerHTML = `
            <h3>${propiedad.nombre}</h3>
            <p>${propiedad.descripcion}</p>
            <p>Costo: $${propiedad.costo}</p>
            <p>${mensajeFumar}</p>
            <p>${mensajeMascotas}</p>
        `;

        container.appendChild(propiedadElement);
    }
}
function mostrarAlertaNoFumar() {
    alert('Esta propiedad tiene la política de no permitir fumar.');
}

function renderProp(propiedades, containerId) {
    const container = document.getElementById(containerId);

    propiedades.forEach(propiedad => {
        const propiedadElement = document.createElement('div');

        let mensajeFumar = propiedad.smoke ? 'Permitido fumar' : 'Prohibido fumar';
        let mensajeMascotas = propiedad.pets ? 'Se permiten mascotas' : 'No se permiten mascotas';

        propiedadElement.innerHTML = `
            <h3>${propiedad.nombre}</h3>
            <p>${propiedad.descripcion}</p>
            <p>Costo: $${propiedad.costo}</p>
            <p>${mensajeFumar}</p>
            <p>${mensajeMascotas}</p>
        `;

        container.appendChild(propiedadElement);
        
        if (!propiedad.smoke) {
            alert('Esta propiedad tiene la política de no permitir fumar.');
        }
    });
}

// Llamadas iniciales para renderizar propiedades en venta y alquiler
renderLimitado(propiedadesEnVenta, 'ventaContainer', 3);
renderLimitado(propiedadesEnAlquiler, 'alquilerContainer', 3);

propiedadesEnAlquiler.forEach(propiedad => {
    if (!propiedad.smoke) {
        mostrarAlertaNoFumar();
    }
});
