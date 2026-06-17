$('.btn-enviar').click(function() {
    var nombreContacto = $(this).siblings('.contact-info').find('strong').text();
    var saldoActual = Number(localStorage.getItem('walletSaldo')) || 0;
    
    var montoTexto = prompt("¿Cuánto dinero deseas enviar a " + nombreContacto + "?");
    var montoAEnviar = Number(montoTexto);

    if (isNaN(montoAEnviar) || montoAEnviar <= 0) {
        alert('Monto inválido.');
        return; 
    }

    if (montoAEnviar > saldoActual) {
        alert('Saldo insuficiente. Tienes: $' + saldoActual);
        return; 
    }

    saldoActual = saldoActual - montoAEnviar;
    localStorage.setItem('walletSaldo', saldoActual);
    
    alert('Transferencia exitosa.');
    window.location.href = "menu.html";
});



$("#btnTransfer").click(function(){

    let amount = Number($("#transferAmount").val());

    balance -= amount;

    localStorage.setItem("balance", balance);

    alert("Transferencia realizada");

});





// Crear transacción
let transactions =
JSON.parse(localStorage.getItem("transactions")) || [];

transactions.push({

    type: "Depósito",
    amount: amount,
    date: new Date().toLocaleDateString()

});

localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
);


// Mostrar historial
let transactions =
JSON.parse(localStorage.getItem("transactions")) || [];

transactions.forEach(transaction => {

    $("#transactionsTable").append(`
        <tr>
            <td>${transaction.date}</td>
            <td>${transaction.type}</td>
            <td>$${transaction.amount}</td>
        </tr>
    `);

});