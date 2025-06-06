function abrirModal(nombreBoton) {
    const modal = document.getElementById('modal-taxi');
    modal.style.display = 'block';
    modal.setAttribute('data-nombre-boton', nombreBoton);
}
function abrirModalPatrulla(nombreBoton) {
    const modal = document.getElementById('modal-patrulla');
    modal.style.display = 'block';
    modal.setAttribute('data-nombre-boton', nombreBoton);
}

function cerrarModal() {
    const modal = document.getElementById('modal-taxi');
    modal.style.display = 'none';
    modal.removeAttribute('data-nombre-boton');
}
function cerrarModalPatrulla() {
    const modal = document.getElementById('modal-patrulla');
    modal.style.display = 'none';
    modal.removeAttribute('data-nombre-boton');
}


function redirigirWhatsApp(numero, event) {
    event.preventDefault();
    const form = event.target.closest('form');
    const formData = new FormData(form);
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        }
    })
    .then(response => {
        if (response.ok) {
            window.location.href = `https://wa.me/+57${numero}`;
        } else {
            console.error('Error al enviar el formulario');
        }
    })
    .catch(error => {
        console.error('Error al enviar el formulario:', error);
    });
}
