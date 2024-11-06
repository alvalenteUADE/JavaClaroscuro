$(document).ready(function() {   
    $("#modoClaro").click(function() {
        $("body").removeClass("dark-mode").addClass("light-mode"); 
    });


    $("#modoOscuro").click(function() {
        $("body").removeClass("light-mode").addClass("dark-mode"); 
    });
});
