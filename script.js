document.addEventListener('DOMContentLoaded', function () {
    cargarArchivos('practicas_roger', 'lista_roger');
    cargarArchivos('practicas_roberto', 'lista_roberto');
    cargarArchivos('practicas_labs', 'lista_labs');
  });
  
  function cargarArchivos(carpeta, listaId) {
    const lista = document.getElementById(listaId);
    const detalles = document.querySelector(`#${listaId}`).parentNode;
  
    fetch(`${carpeta}/index.json`)
      .then(response => response.json())
      .then(data => {
        data.archivos.forEach(archivo => {
          const listItem = document.createElement('li');
          const link = document.createElement('a');
          link.href = `${carpeta}/${archivo}`;
          link.textContent = archivo;
          //link.setAttribute('download', ''); // Añadir el atributo download
          listItem.appendChild(link);
          lista.appendChild(listItem);
        });
      })
      .catch(error => console.error('Error al cargar archivos:', error));
  
    // Añadir un evento de clic para alternar la apertura y el cierre del detalle
    detalles.addEventListener('click', function () {
      detalles.open = !detalles.open;
    });
  }

  function toggleLista(listaId) {
    const lista = document.getElementById(listaId);
    lista.classList.toggle('visible');
  }