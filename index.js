window.document.getElementById("myForm").addEventListener("submit", function(event) {
    const nom = window.document.getElementById("nom").value;
    const email = window.document.getElementById("email").value;
    const cin = window.document.getElementById("cin").value;
    const nm = window.document.getElementById("nm").value;
    const message = window.document.getElementById("message").value;

    // Validation for the name (not empty and minimum 8 characters)
    if (!isValidName(nom)) {
        alert("Le nom ne doit pas être vide et doit contenir au moins 8 caractères.");
        event.preventDefault();
        return;
    }

    // Validation for email (not empty)
    if (!isValidEmail(email)) {
        alert("L'email ne doit pas être vide.");
        event.preventDefault();
        return;
    }

    // Validation for CIN (not empty and minimum 8 characters)
    if (!isValidCIN(cin)) {
        alert("Le CIN ne doit pas être vide et doit contenir au moins 8 caractères.");
        event.preventDefault();
        return;
    }

    // Validation for NM (not empty and minimum 8 characters)
    if (!isValidNM(nm)) {
        alert("Le NM ne doit pas être vide et doit contenir au moins 8 caractères.");
        event.preventDefault();
        return;
    }

    // Validation for message length (not more than 2000 characters)
    if (!isValidMessageLength(message)) {
        alert("Le message ne doit pas dépasser 2000 caractères.");
        event.preventDefault();
        return;
    }
});

function isValidName(name) {
    if (name.trim() === '' || name.length < 8) {
        
        return false;
    }

    for (var i = 0; i < name.length; i++) {
        if (isNaN(parseInt(name[i]))) {
            continue;
        } else {
            return false;
        }
    }

    return true;
}

function isValidEmail(email) {
    return email.trim() !== '';
}

function isValidCIN(cin) {
    return cin.trim() !== '' && cin.length == 8;
}

function isValidNM(nm) {
    return nm.trim() !== '' && nm.length >= 8;
}

function isValidMessageLength(message) {
    return message.length <= 2000;
}
