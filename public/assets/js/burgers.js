$(document).ready(() => {
    $(".devour").click(function (e) {
        var id = $(this).data("id");
        console.log(id);
        $.ajax("/api/burgers", {
            method: "PUT",
            data: { id: id }
        }).then(() => {
            location.reload();
        });
    });
});