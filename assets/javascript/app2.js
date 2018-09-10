$(document).ready(function (){

    console.log("hkljljljk");

    var empezar = $("<button id='start' class ='start'>").val("eee ");
    empezar.text("CLICK TO START");
    $(".info").html(empezar);


    var tiempo =25;
    //al hacer click en el botón empezar
    $("#start").on("click", function(event) {
        //quito el botón de empezar
        empezar.remove();
        setInterval(outgame, 1000);
        setTimeout(gameover, 5000);
        
    });

    function outgame(){
        tiempo --;
        $(".info").text(tiempo);


        if (tiempo ==20){
            clearInterval(".info");
        }
    };

    

    function gameover(){
        
        $(".info").text("YOU DIDN'T PLAY! *GAME OVER*");
    };



});