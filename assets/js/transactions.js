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