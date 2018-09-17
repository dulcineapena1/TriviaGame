$(document).ready(function (){

    var empezar = $("<button id='start' class ='start'>");
    empezar.text("CLICK TO START");
    $(".info").html(empezar);

    //el contador de tiempo empieza en este número
    var tiempo = 25;

    //cantidad de respuestas, solo para usarlo en un loop como
    //tope
    var le = ["a","b", "c"];

    //array de preguntas
    var todaspreguntas = ["2.-Which of these statements is not true of human eyelashes?",
    "1.-Ayanna Williams has been growing her nails for more than 20 years. Their combined total length is closest to the height of:",
    "3.-Mr Cherry holds a number of records, including one for the most apples bobbed in one minute. Which of the following kids TV shows does he star in?",
    "4.-Why did Jamie Roberts and Tom Koltun - the owners of crib manufacturer Kolcraft - make the largest pram/stroller?",
    "5.-Jackie Miley has the largest collection of teddy bears with an incredible total of 8,026. Which of the following statements is NOT true?"
    
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
            }], 
        pre3: [
            {
            re1: "Blue Peter",
            re2: "Officially Amazing",
            re3: "iCarly"
            }],
        pre4: [
            {
            re1: "Because they had a giant baby",
            re2: "So that adults can try out the pram before they buy the regular-sized one for their kids",
            re3: "To make their friends jealous"
            }],
        pre5: [
            {
            re1: "Jackie's collection is worth approximately £100,000 (€110,689, $130,013)",
            re2: "Jackie has more teddy bears than the number of people living in her hometown",
            re3: "Jackie keeps her collection in a house called -Teddy Bear Town-"
            }]       
      };



    
    //variable para generar ids diferentes en un loop más abajo
    var idrespuestas= 0;

    //al hacer click en el botón empezar
    $("#start").on("click", function() {
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


        //espacio donde pondré las respuestas
        //hice un loop para generar un id por cada respuesta y asi identificarlas
        for (var i = 0; i < le.length; i++){
            //voy a hacer un id diferente para cada respuesta y asi identificarlas
            idrespuestas++;
            var respuestas = $("<ul><li id="+idrespuestas+" class=lista>")
            
            //muestro las respuestas en el div correspondiente
            $(respuestas).appendTo(".info");    
        }

 
        
        
        runpreguntas();
    
        
        
        
    });

    


   
    var socoregeneralb=0;
    var pasarpreguntasinocontesta=0;

    //esta es la función para dar el juego por terminado si se acaba el tiempo de espera 
    function outgame(){
        //decrezco el tiempo y lo voy mostrando
        tiempo --;
        //en el id que hice arriba le voy a aparecer mi tiempo
        $("#primertexto").text(tiempo);

        if (tiempo == 5){
            pasarpreguntasinocontesta++;
            //aqui ejecuto la función de dar click en un id, sin darle click directamente
            //de forma que puedo correr los resultados de esa función sin haber dádole click
            $("li").click();
            runpreguntas();
        }

    };
    
    
    var aciertos=0;
    var incorrectas = 0;
    

    function runpreguntas(){
        socoregeneralb++;
    //----INICIO PARTE DE PANTALLA DE PREGUNTAS
        //si ya hice la primer pregunta entonces el scoregeneralb sera 2 y asì sucesivo
        if (socoregeneralb==1 ){
                //Inicio pregunta 1
                //muestro la primer pregunta 
                $("#pregunta").text(todaspreguntas[1]);
               //muestro el primer set de respuestas luego luego
               $("#1").text(todasrespuestas.pre2[0].re1);
               $("#2").text(todasrespuestas.pre2[0].re2);
               $("#3").text(todasrespuestas.pre2[0].re3);
        }

        
        //Inicio pregunta 2
        if (socoregeneralb==2 ){
            //aqui reinicio el reloj
            tiempo=25;
            //quito la foto
            $(".foto").remove();
            //muestro la segunda pregunta 
            $("#pregunta").text(todaspreguntas[0]);
            //muestro el segundo set de respuestas 
            $("#1").text(todasrespuestas.pre1[0].re1);
            $("#2").text(todasrespuestas.pre1[0].re2);
            $("#3").text(todasrespuestas.pre1[0].re3);

            $("li").show();
     
        }

        //Inicio pregunta 3
        if (socoregeneralb==3){
            //aqui reinicio el reloj
            tiempo=25;
            //quito la foto
            $(".foto2").remove();
            //muestro la segunda pregunta 
            $("#pregunta").text(todaspreguntas[2]);
            //muestro el segundo set de respuestas 
            $("#1").text(todasrespuestas.pre3[0].re1);
            $("#2").text(todasrespuestas.pre3[0].re2);
            $("#3").text(todasrespuestas.pre3[0].re3);

            $("li").show();
    
        }

        //Inicio pregunta 4
        if (socoregeneralb==4){
            //aqui reinicio el reloj
            tiempo=25;
            //quito la foto
            $(".foto3").remove();
            //muestro la segunda pregunta 
            $("#pregunta").text(todaspreguntas[3]);
            //muestro el segundo set de respuestas 
            $("#1").text(todasrespuestas.pre4[0].re1);
            $("#2").text(todasrespuestas.pre4[0].re2);
            $("#3").text(todasrespuestas.pre4[0].re3);

            $("li").show();
    
        }

        //Inicio pregunta 5
        if (socoregeneralb==5){
            //aqui reinicio el reloj
            tiempo=25;
            //quito la foto
            $(".foto4").remove();
            //muestro la segunda pregunta 
            $("#pregunta").text(todaspreguntas[4]);
            //muestro el segundo set de respuestas 
            $("#1").text(todasrespuestas.pre5[0].re1);
            $("#2").text(todasrespuestas.pre5[0].re2);
            $("#3").text(todasrespuestas.pre5[0].re3);

            $("li").show();
    
        }

        //pantalla final
        if (socoregeneralb==6){
            $(".foto5").remove();
            //muestro la segunda pregunta 
            $("#pregunta").text("GAME OVER");
            //muestro el segundo set de respuestas 
            $("#1").text("CORRECT ANSWERS" + "  " + aciertos);
             $("#2").text("INCORRECT ANSWERS"+ "  " + incorrectas );
            $("#3").text("UNANSWERED"+ "  " + pasarpreguntasinocontesta);
            $("li").show();
            clearInterval(interValid);
            $("#primertexto").remove();
            
            

        }

        
        
        $("li").on("click", function(event) {
            
            //aqui abajo obtengo el valor del id de lo clickeado
           // var seleccionjugador = $("ul").find(this).attr("id");
           var buscarelid=  event.target;
           var idclik =$(buscarelid).attr("id");
           console.log(idclik);
               //pregunta 1 
                if (socoregeneralb == 1 && idclik == 2  ){
                    aciertos ++;
                    
                    $("#pregunta").html("CORRECT ANSWER!");
                    $("li").empty();
                    var fotografia = $("<div>").attr("class","foto");
                    $("#info").append(fotografia);  
                    $("li").hide();
                }
                if (socoregeneralb == 1 && idclik != 2){
                    incorrectas++;
                    $("#pregunta").text("NOPE!" + "The correct answer is"+ (todasrespuestas.pre2[0].re2));
                    $("li").hide();
                    $("li").empty();
                    
                    var fotografia = $("<div>").attr("class","foto");
                    $("#info").append(fotografia);
                }
                
            

                //pregunta2
                if (socoregeneralb == 2 && idclik == 2  ){
                    aciertos++;
                  
                    
                    $("#pregunta").html("CORRECT ANSWER!");
                    $("li").empty();
                    var fotografia = $("<div>").attr("class","foto2");
                    $("#info").append(fotografia);  
                    $("li").hide();
                }
                if (socoregeneralb == 2 && idclik != 2){
                    incorrectas++;
                    $("#pregunta").text("NOPE!" + "The correct answer is"+ (todasrespuestas.pre1[0].re2));
                      
                    $("li").empty();
                    var fotografia = $("<div>").attr("class","foto2");
                    $("#info").append(fotografia);
                    $("li").hide();
                }
               
            

            
                //pregunta 3
                if (socoregeneralb == 3 && idclik == 3  ){
                    aciertos++;
                  
                   
                    $("#pregunta").html("CORRECT ANSWER!");
                    $("li").empty();
                    var fotografia = $("<div>").attr("class","foto3");
                    $("#info").append(fotografia); 
                    $("li").hide();
                    
                }
                if(socoregeneralb == 3 && idclik != 3){
                    incorrectas++;
                    $("#pregunta").text("NOPE!" + "The correct answer is"+ (todasrespuestas.pre3[0].re3));
                    $("li").empty();
                    var fotografia = $("<div>").attr("class","foto3");
                    $("#info").append(fotografia);
                    $("li").hide();
                }
                
            
          

            //pregunta 4
                if (socoregeneralb == 4 && idclik == 2  ){
                    aciertos++;
                    $("#pregunta").html("CORRECT ANSWER!");
                    $("li").empty();
                    var fotografia = $("<div>").attr("class","foto4");
                    $("#info").append(fotografia);
                    $("li").hide(); 
                    
                }
                if(socoregeneralb == 4 && idclik != 2){
                    incorrectas++;
                    $("#pregunta").text("NOPE!" + "The correct answer is"+ (todasrespuestas.pre4[0].re2));
                    $("li").empty();
                    var fotografia = $("<div>").attr("class","foto4");
                    $("#info").append(fotografia);
                    $("li").hide();
                }
                
            

                //pregunta 5
                if (socoregeneralb == 5 && idclik == 3  ){
                    aciertos++;
                    $("#pregunta").html("CORRECT ANSWER!");
                    $("li").empty();
                    var fotografia = $("<div>").attr("class","foto5");
                    $("#info").append(fotografia); 
                    $("li").hide();
                }
                if(socoregeneralb == 5 && idclik != 3){
                    incorrectas++;
                    $("#pregunta").text("NOPE!" + "The correct answer is"+ (todasrespuestas.pre5[0].re3));
                    $("li").empty();
                    var fotografia = $("<div>").attr("class","foto5");
                    $("#info").append(fotografia);
                    $("li").hide();
                }   
                
            setear().done(clerear());
            
            function setear (){
              variabletimeout = setTimeout(runpreguntas,5000);

            };
            //con esto evito que el settimeout se reproduzca muchas veces
            //ya que eso me estaba pasando al combinarlo con if
            function clerear(){
                clearTimeout(variabletimeout);
            }
        })

    
 
    }


 



});