$('#btnLogin').click(function() {
    //Sin jquery var email = document.getElementById('email').value;
    var email = $('#email').val();
    var pass = $('#password').val();
    
    if(email === 'admin@alke.cl' && pass === '12345') {
        window.location.href = 'menu.html';
    } else {
        alert('Datos incorrectos');
        $('#password').val(''); 
    }
});

$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();

        // Verificar las credenciales
        if (username === 'admin' && password === '12345') {
        // Credenciales válidas, redirigir a la pantalla de wallet
        window.location.href = 'wallet.html';
        } else {
        // Credenciales inválidas, mostrar mensaje de error
        alert('Usuario o contraseña invalido. Inténtalo de nuevo. username: admin. password: 12345.');
        }
    });
});

$("#btnLogin").click(function(){

    let email = $("#email").val();
    let password = $("#password").val();

    if(email === "" || password === ""){
        alert("Complete todos los campos");
        return;
    }

    window.location.href = "menu.html";

});