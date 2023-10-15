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
    {
        nombre: 'Departamento Viña del Mar',
        src:
            'https://departamento.mercadolibre.cl/MLC-1379798655-vista-urbana-_JM#position=9&search_layout=grid&type=item&tracking_id=3950eda4-9b7b-46bf-b771-c7f8bbfeeacf',
        descripcion: 'Nuevo proyecto inmobiliario frente al mar',
        ubicacion: 'Av. Perú 100',
        bathroom: 1,
        habitaciones: 1,
        costo: 140000000,

    },

];
const containerVenta = document.getElementById('venta');

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
          

        </div>
      </div>
    </div>
    `;
}

let rowVenta = containerVenta.querySelector('.row');

document.addEventListener('DOMContentLoaded', () => {
    showCard(3);
});

showCard = (cantidad) => {
    propiedadesVenta.forEach((sale, index) => {
        if (index > cantidad - 1) { return }
        rowVenta.innerHTML += cardTemplateWithCol(sale);
    });
}