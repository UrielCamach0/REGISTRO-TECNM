document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const birthDate = document.getElementById('birthDate').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    // Validar que todos los campos esten llenos
    if (!fullName || !email || !birthDate || !password || !confirmPassword) {
        errorMessage.textContent = 'Por favor, completa todos los campos.';
        return;
    }

    // Validar contraseña (minimo 8 caracteres, al menos un numero y una letra)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        errorMessage.textContent = 'La contraseña debe tener al menos 8 caracteres, incluyendo letras y numeros.';
        return;
    }

    // Validar que ambas contraseñas coincidan
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Las contraseñas no coinciden.';
        return;
    }

    errorMessage.textContent = ''; // Limpiar mensajes de error
    alert('El registro de alumno se ha enviado correctamente.');

    this.reset(); //Limpiar formulario despues de ser enviado
});
