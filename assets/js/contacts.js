$("#btnAddContact").click(function(){

    let contact = $("#newContact").val();

    $("#contactList").append(
        `<li>${contact}</li>`
    );

});