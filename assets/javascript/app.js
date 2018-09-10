$(document).ready(function (){

    


   



    var empezar = $("<button id='start' class ='start'>").val("eee ");
    empezar.text("CLICK TO START");
    $(".info").html(empezar);

    //el contador de tiempo empieza en este número
    var tiempo = 10;

    //cantidad de respuestas, solo para usarlo en un loop como
    //tope
    var le = ["a","b", "c"];

    //array de preguntas
    var todaspreguntas = ["Which of these statements is not true of human eyelashes?",
    "Ayanna Williams has been growing her nails for more than 20 years. Their combined total length is closest to the height of:"
    
    ]

    //array de respuestas
    var todasrespuestas = {
        pre1: [
          {
            re1: "Eyelashes are 3% water",
            re2: "Eyelashes have tiny mites living in them",
            re3: "Eyelashes help you concentrate when you frown"
          }],
          pre2: [
            {
              re1: "A four-storey town house (20 m; 66 ft)",
              re2: "A giraffe (5.8 m; 19 ft)",
              re3:"The Mount Rushmore noses (6 m; 20 ft)"
            }]  
      };



    
    //variable para generar ids diferentes en un loop más abajo
    var idrespuestas= 0;

    //al hacer click en el botón empezar
    $("#start").on("click", function(event) {
        //quito el botón de empezar
        empezar.remove();
        //hago un párrafo donde aparecerá el tiempo (remaining)
        var aquieltiempo = $("<p id ='primertexto' class='texto'>");
        $(aquieltiempo).appendTo(".info");
        // le estoy poniendo el tiempo de 1 seg para que ejecute outgame
        //esto se hace con la función generica setInterval
        //recuerda que al meterlo en el click el set interval funciona como un loop
        // a cada segundo ejecuta el outgame
        interValid = setInterval(outgame, 1000);
        
        //espacio donde pondré las pregunas
        var pregunta = $("<p id ='pregunta' class='texto'>");
        $(pregunta).appendTo(".info");
        $("#pregunta").text("QUESTIONS");


        //muestro la primer pregunta 
        $("#pregunta").text(todaspreguntas[1]);
        

        //espacio donde pondré las respuestas
        //hice un loop para generar un id por cada respuesta y asi identificarlas
        for (var i = 0; i < le.length; i++){
            //voy a hacer un id diferente para cada respuesta y asi identificarlas
            idrespuestas++;
            var respuestas = $("<ul><li id="+idrespuestas+">");
            //muestro las respuestas en el div correspondiente
            $(respuestas).appendTo(".info");    
        }

        //muestro el primer set de respuestas luego luego
        $("#1").text(todasrespuestas.pre2[0].re1);
        $("#2").text(todasrespuestas.pre2[0].re2);
        $("#3").text(todasrespuestas.pre2[0].re3);
        
        runpreguntas();
        
        
    });




    var scoregeneral= 0;
    var socoregeneralb=0;

    //esta es la función para dar el juego por terminado si se acaba el tiempo de espera 
    function outgame(){
        //decrezco el tiempo y lo voy mostrando
        tiempo --;
        //en el id que hice arriba le voy a aparecer mi tiempo
        $("#primertexto").text(tiempo);
        
        
        


       



        // dar por terminado el juego si no da clic en nada, 
        //es decir, se acabó el tiempo
        if (tiempo == 2){
            $("#primertexto").text("GAME OVER YOU DIDN'T PLAY!");
            clearInterval(interValid);
        }

        
    };
    

     //voy a ejecutar algo al hacer clic en la respuestas
     //voy a avanzar una pregunta en el scoregeneral, 
     //cada que responda,
     //para así manipular en cual pregunta estoy
    function runpreguntas(){
        socoregeneralb++;
        console.log("ya vas en la dos");
        
        //si ya hice la primer pregunta entonces el scoregeneralb sera 2 y asì sucesivo
        if (socoregeneralb==2){
            //aqui reinicio el reloj en 10
            tiempo=10;
            //quito la foto
            $(".foto").remove();
            //muestro la segunda pregunta 
            $("#pregunta").text(todaspreguntas[0]);
            //muestro el segundo set de respuestas 
            $("#1").text(todasrespuestas.pre1[0].re1);
            $("#2").text(todasrespuestas.pre1[0].re2);
            $("#3").text(todasrespuestas.pre1[0].re3);
        }


        $("li").on("click", function() {
            scoregeneral ++;
            console.log("este es el scoregeneral"+scoregeneral);
            //aqui abajo obtengo el valor del id de lo clickeado
            var seleccionjugador = $("ul").find(this).attr("id");
            console.log(seleccionjugador);
            //aqui estoy diciendo, el scoregeneral es la pregunta
            //por lo que si en la primer pregunta, responde la primer respuesta,
            //(la respuesta correcta es seleccionjugador)
            if ((seleccionjugador == 1) && (scoregeneral == 1)){
                console.log("aqui hay error");
                $("#pregunta").html("CORRECT ANSWER!");
                $("li").empty();
                var fotografia = $("<div>").attr("class","foto");
                $("#info").append(fotografia);
                //después de tres segundos volver a correr esta funcion y asi
                //pasar a la siguiente pregunta
                setTimeout(runpreguntas,3000);
            }

            if  (scoregeneral==2) {
                console.log("ya vas en la dos adentro");
                
            }
            
            
            // si no le atina a la respuesta (aqui deberìa de ser un else solamente pero no agarra:/)
            if ((seleccionjugador!=1)&&(scoregeneral=1)) {
                console.log("aqui es si no");
                $("#pregunta").html("NOPE!");
                $("li").empty();
                var fotografia = $("<div>").attr("class","foto");
                $("#info").append(fotografia);
                setTimeout(runpreguntas,3000);
            }

    //aqui voy a hacer if's para pasar de pregunta en pregunta
    //   if (scoregeneral==1){
        //muestro la segunda pregunta
     //     $("#primertexto").text("ya le picaste");
     //   clearInterval(interValid);
    //                }

    
        });    
    }
        
        
    



});