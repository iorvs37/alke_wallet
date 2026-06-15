let balance = 150000;

$("#btnDeposit").click(function(){

    let amount = Number($("#amount").val());

    balance += amount;

    localStorage.setItem("balance", balance);

    alert("Depósito realizado");

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