$(document).ready(() => {

    var showError = msg => {
        $("#error-msg").text(msg);

        $(".modal").modal('show');
    }

    $(".devour").click(function (e) {
        
        var id = $(this).data("id");
        var customer = $(`input[data-id='${id}']`).val().trim();

        $.ajax("/api/burgers", {
            method: "PUT",
            data: { id: id, customer: customer }
        }).then(() => {
            location.reload();
        }).catch(err => {
            showError(err.responseText);
        });
    });

    $("#btnNewBurger").click(function (e) {
        
        var name = $("#burger-name").val().trim();

        $.ajax("/api/burgers", {
            method: "POST",
            data: { name: name}
        }).then(() => {
            location.reload();
        }).catch(err => {
            showError(err.responseText);
        });
    });
});