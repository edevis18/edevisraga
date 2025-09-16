// Bloquear el clic derecho
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    }, false);

    // Bloquear las teclas F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U y Ctrl+Shift+C
    document.addEventListener('keydown', function(e) {
        // Bloquear F12
        if (e.keyCode == 123) {
            e.preventDefault();
        }
        // Bloquear Ctrl+Shift+I (tecla I)
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
            e.preventDefault();
        }
        // Bloquear Ctrl+Shift+J (tecla J)
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            e.preventDefault();
        }
        // Bloquear Ctrl+U
        if (e.ctrlKey && e.keyCode == 85) {
            e.preventDefault();
        }
        // Bloquear Ctrl+Shift+C (tecla C)
        if (e.ctrlKey && e.shiftKey && e.keyCode == 67) {
            e.preventDefault();
        }
    }, false);

