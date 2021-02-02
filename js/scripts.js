$(function () {
    $(".carousel").carousel( {interval:2000, pause: "false"} );
    $("#carouselButton").on("click", function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

//  $('[data-toggle="tooltip"]').tooltip() This comment out breaks my 'Find a trail' tooltip... but it is just for practice anyway
});