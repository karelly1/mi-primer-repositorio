// Validación del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    
    // Validar nombre
    const name = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (name.value.trim() === '') {
        nameError.textContent = 'Por favor ingresa tu nombre';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }
    
    // Validar email
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'Por favor ingresa tu correo electrónico';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Por favor ingresa un correo válido';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }
    
    // Validar teléfono (opcional pero con formato si se ingresa)
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phone-error');
    const phoneRegex = /^[0-9+\- ]+$/;
    if (phone.value.trim() !== '' && !phoneRegex.test(phone.value)) {
        phoneError.textContent = 'Por favor ingresa un teléfono válido';
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phoneError.style.display = 'none';
    }
    
    // Validar asunto
    const subject = document.getElementById('subject');
    const subjectError = document.getElementById('subject-error');
    if (!subject.value) {
        subjectError.textContent = 'Por favor selecciona un asunto';
        subjectError.style.display = 'block';
        isValid = false;
    } else {
        subjectError.style.display = 'none';
    }
    
    // Validar mensaje
    const message = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    if (message.value.trim() === '') {
        messageError.textContent = 'Por favor ingresa tu mensaje';
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }
    
    // Validar términos
    const terms = document.getElementById('terms');
    const termsError = document.getElementById('terms-error');
    if (!terms.checked) {
        termsError.textContent = 'Debes aceptar los términos y condiciones';
        termsError.style.display = 'block';
        isValid = false;
    } else {
        termsError.style.display = 'none';
    }
    
    // Si todo es válido, enviar formulario
    if (isValid) {
        // Aquí iría la lógica para enviar el formulario
        alert('Formulario enviado con éxito!');
        this.reset();
    }
});

// Mejorar experiencia en móviles
document.querySelectorAll('input, select, textarea').forEach(element => {
    element.addEventListener('focus', function() {
        // Desplazar ligeramente hacia arriba en móviles para que el teclado no tape el campo
        if (window.innerWidth < 768) {
            window.scrollTo({
                top: this.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Polyfill para :focus-visible en navegadores que no lo soportan
(function() {
    const supportsFocusVisible = CSS.supports('selector(:focus-visible)');
    if (!supportsFocusVisible) {
        document.addEventListener('focus', addFocusClass, true);
        document.addEventListener('blur', removeFocusClass, true);
    }
    
    function addFocusClass(e) {
        if (e.target.matches('button, input, select, textarea, a[href], [tabindex]')) {
            e.target.classList.add('focus-visible-polyfill');
        }
    }
    
    function removeFocusClass(e) {
        e.target.classList.remove('focus-visible-polyfill');
    }
})();