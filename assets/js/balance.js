$(document).ready(function() {
    var balance = 0;

    function updateBalance() {
        $('#balance').text(balance.toFixed(0));
    }

    $('#depositBtn').click(function() {
        var amount = parseInt($('#amount').val());
        if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalance();
        $('#amount').val('');
        alert('Depósito realizado!');
        } else {
        alert('Monto invalido. Por favor ingrese un número positivo.');
        }
    });

    $('#withdrawBtn').click(function() {
        var amount = parseInt($('#amount').val());
        if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
        $('#amount').val('');
        alert('Retiro exitoso!');
        } else {
        alert('Cantidad no válida. Ingrese un número válido dentro de su saldo.');
        }
    });
});

// depositos

var saldo = Number(localStorage.getItem('walletSaldo')) || 0;
$('#balance').text('$' + saldo);

var saldoActual = Number(localStorage.getItem('walletSaldo')) || 0;

$('#btnDepositar').click(function() {
    var monto = Number($('#inputDeposito').val());

    if (monto > 0) {
        saldoActual = saldoActual + monto;
        localStorage.setItem('walletSaldo', saldoActual);
        
        $('#alertMensaje').text('¡Depósito exitoso! Nuevo saldo: $' + saldoActual).removeAttr('hidden'); 
        $('#inputDeposito').val('');
    } else {
        alert('Por favor, ingresa un monto válido.');
    }
});

// extra

$('#btnLogout').click(function() {
    localStorage.clear();
    window.location.href = "login.html";
});

// Efectos visuales
// Fade in
$(".card").hide().fadeIn(1000);

// Hover en tarjetas
$(".card").hover(

    function(){
        $(this).addClass("shadow-lg");
    },

    function(){
        $(this).removeClass("shadow-lg");
    }

);

// Mensaje de éxito
$("#successMessage")
.fadeIn()
.delay(2000)
.fadeOut();