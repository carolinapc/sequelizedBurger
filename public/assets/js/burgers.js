$(document).ready(() => {
    $(".devour").click(function (e) {
        
        var id = $(this).data("id");
        var customer = $(`input[data-id='${id}']`).val().trim();

        $.ajax("/api/burgers", {
            method: "PUT",
            data: { id: id, customer: customer }
        }).then(() => {
            location.reload();
        });
    });
});