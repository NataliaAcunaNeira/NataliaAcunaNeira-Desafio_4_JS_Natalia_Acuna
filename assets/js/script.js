const propiedadesAlquiler = [
    {
        nombre: 'Arriendo habitación con baño privado',
        src: 'https://inmueble.mercadolibre.cl/MLC-1827452822-habitacion-con-bano-privado-_JM#position=10&search_layout=grid&type=item&tracking_id=26157156-3928-4813-bddc-d1b578482680',
        descripcion: 'Se arrienda habitación con baño en privado. Servicios incluidos.',
        ubicacion: 'San pascual 141',
        bathroom: 1,
        habitaciones: 1,
        costo: 250000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Departamento visitas de negocios',
        src: 'https://departamento.mercadolibre.cl/MLC-1781296244-departamento-deluxe-nuevo-con-2d-2b-_JM#position=2&search_layout=grid&type=item&tracking_id=b6cfa97e-5b53-40ed-987c-96ef9b978e72',
        descripcion: 'Departamento exclusivo, cercano al centro de negocios de Santiago',
        ubicacion: 'Avenida Apoquindo 4000',
        bathroom: 1,
        habitaciones: 1,
        costo: 1200000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Arriendo casa en Las Condes',
        src: 'https://casa.mercadolibre.cl/MLC-2017340656-casa-de-3d-4b-180-mts2-exclusivo-condominio-del-ano-2022-_JM#position=6&search_layout=grid&type=item&tracking_id=d81fe820-660d-43a0-948a-1a5177f3d85d',
        descripcion: 'Casa en exclusivo condominio.',
        ubicacion: 'Lo Fontecilla, Estoril, Las Condes',
        bathroom: 3,
        habitaciones: 5,
        costo: 2500000,
        smoke: true,
        pets: true
    },

];

const propiedadesVenta = [
    {
        nombre: 'Departamento centrico',
        src:
            'https://departamento.mercadolibre.cl/MLC-1231737405-departamento-por-dia-santiago-metro-la-moneda-santa-lucia-_JM#position=14&search_layout=grid&type=item&tracking_id=1aa7458f-7793-43c2-855c-e3c9ac433bb8',
        descripcion: 'Cercana a metro y comercios',
        ubicacion: 'San Ignacio De Loyola 824',
        bathroom: 1,
        habitaciones: 1,
        costo: 90000000,

    },
    {
        nombre: 'Cabaña en Chillán',
        src: 'https://inmueble.mercadolibre.cl/MLC-1786206416-shangrila-bosque-nativo-hermosas-cabanas-_JM#position=7&search_layout=grid&type=item&tracking_id=bc977464-dd8a-4c45-b440-de69b31a3fba',
        descripcion: 'Cercana al centro de sky nevados de Chillán',
        ubicacion: 'Km 100, Pinto',
        bathroom: 2,
        habitaciones: 4,
        costo: 250000000,

    },
    {
        nombre: 'Casa familiar en Las Condes',
        src:
            'https://casa.mercadolibre.cl/MLC-1430886759-remodelada-barrio-estadio-espanol-vma-verbo-divino-_JM#position=21&search_layout=grid&type=item&tracking_id=90bdbdbc-f88e-49ee-8730-2613d128e30b',
        descripcion: 'Casa en el mejor barrio de las condes',
        ubicacion: 'Plaza Paraguay 300',
        bathroom: 3,
        habitaciones: 5,
        costo: 560000000,

    },
];

const containerVenta = document.getElementById('venta');
const containerAlquiler = document.getElementById('alquiler');

const cardTemplateWithCol = (sale) => {
    return `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img
            src="${sale.src}"
            class="card-img-top"
            alt="${sale.nombre}"
          />
          <div class="card-body">
            <h5 class="card-title">
              ${sale.nombre}
            </h5>
            <p class="card-text">
              ${sale.descripcion}
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i> ${sale.ubicacion}
            </p>
            <p>
              bathroom: 1,<i class="fas fa-bed"></i> ${sale.habitaciones} |
              <i class="fas fa-bath"></i> ${sale.bathroom}
            </p>
            <p>
              <i class="fas fa-dollar-sign"></i>${sale.costo}
            </p>
            <p class=${sale.smoke ? 'text-success' : 'text-danger'}>
              <i class="${sale.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i>
              ${sale.smoke ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${sale.pets ? 'text-success' : 'text-danger'}">
              <i class="${sale.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i>
              ${sale.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
          </div>
        </div>
      </div>
    `;
};

let rowVenta;
let rowAlquiler;

if (containerVenta) {
    rowVenta = containerVenta.querySelector('.row');
}

if (containerAlquiler) {
    rowAlquiler = containerAlquiler.querySelector('.row');
}

const showCard = (arr, container, cantidad) => {
    arr.forEach((propiedad, index) => {
        if (index >= cantidad) {
            return;
        }
        container.innerHTML += cardTemplateWithCol(propiedad);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const containerVenta = document.getElementById('venta');
    const containerAlquiler = document.getElementById('alquiler');
    const rowVenta = containerVenta.querySelector('.row');
    const rowAlquiler = containerAlquiler.querySelector('.row');

    if (containerVenta) {
        showCard(propiedadesVenta, rowVenta, 3);
    }

    if (containerAlquiler) {
        showCard(propiedadesAlquiler, rowAlquiler, 3);
    }
});




