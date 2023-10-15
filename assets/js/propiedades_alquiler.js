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
    }, {
        nombre: 'Arriendo departamento en la playa',
        src: 'https://departamento.mercadolibre.cl/MLC-2009809244-departamento-padre-rene-pienovi-id-100922-_JM#position=17&search_layout=grid&type=item&tracking_id=4306163d-c24d-40bc-a23e-d1455c1fcd54',
        descripcion: 'Arriendo departamento centrico.',
        ubicacion: 'Padre Rene Pienovi, Agua Santa, Viña Del Mar,',
        bathroom: 3,
        habitaciones: 2,
        costo: 500000,
        smoke: false,
        pets: true
    },

];

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
}

let rowAlquiler = containerAlquiler.querySelector('.row');

document.addEventListener('DOMContentLoaded', () => {
    showCard(3);
});

showCard = (cantidad) => {
    propiedadesAlquiler.forEach((sale, index) => {
        if (index > cantidad - 1) { return }
        rowAlquiler.innerHTML += cardTemplateWithCol(sale);
    });
}