document.addEventListener("DOMContentLoaded", function() {
    const formularioContacto = document.getElementById("formulario-contacto");

    formularioContacto.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor completa todos los campos del formulario.");
            return;
        }

        // Aquí puedes enviar los datos del formulario mediante AJAX
        console.log("Nombre:", nombre);
        console.log("Email:", email);
        console.log("Mensaje:", mensaje);

        // Simulando una respuesta exitosa (elimina esto en producción)
        alert("¡Formulario enviado correctamente!");
        formularioContacto.reset();
    });
});
