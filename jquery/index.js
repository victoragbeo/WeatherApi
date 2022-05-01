// $("h1").css("color", "red"); // same as jQuery("h1").css("color", "red"); n docume.querySelector("h1");

$("h1").addClass("big-title"); 

// $("h1").text("bye"); //add text


$(document).keydown(function(event) {
    $("h1").text(event.key);
})

$("button").on("click", function() {
    $("h1").hide();
})