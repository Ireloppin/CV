

$("#en").click(function(){
    $("h1").text("Hello!, I´m Irene");
    $("#encabezado").html("Graduated in Audiovisual Communication,</br> Web Development and knitter.");

    $(".presentacion p").text("I´m outgoing and lover of learning new things. I love web development, I think it´s awesome. I am liable, hardworking and a fighter. I love challenges.");

    $(".bloque-experiencia .titulo").text("Professional experience");
    $("#expdesarrollo h3").text("On line store developer");
    $("#expdesarrollo p").text("Last 9 years I maked my own business with a partner and friend. In addition to all the tasks of a business, I developed the online store with Wordpress and Woocommerce. Thanks to this I discovered I love the world of web development and I am currently training to dedicate myself entirely to it.");
    $("#expdesarrollo a").text("See this job");

    $("#exprealizacion h3").text("Tv director");
    $("#exprealizacion p").text("From February 2012 to January 2014 I was in the Public Society of Radio and Television of Extremadura as a television director. Above all I did the news and morning shows.");

    $("#expproduccion h3").text("Tv production assistant");
    $("#expproduccion p").text("From September 2008 to January 2012. In these years I was working intermittently in tasks related to television broadcasts. I started as a camera operator, soon I became a Production Assistant. I also performed administration and management tasks for the company.");

    $(".iconoder").animate({width: "20%"});
    $(".iconoizq").animate({width: "20%"});

    $("#habilidades h2").text("Skills");
    $("#ing").text("Intermediate English");
    $("#webdi").text("Web design");


    $("#formacion h2").text("Studies");

    $("td")[1].textContent="Currently"
    $("td")[3].textContent="Communyty Manager Course"
    $("td")[4].textContent="October 2011 to December 2011"
    $("td")[6].textContent="Degree in Audiovisual Communication"
    $("td")[7].textContent="2003 to 2008"
    $("td")[9].textContent="Intermediate English Course"

    $("h3")[3].textContent="Contact me:"


})

$("#es").click(function(){
    location.reload(true);
    })

$(".bloque-experiencia .titulo").on("click",function(){
    $("#primer-bloque").slideToggle();
    $("#segundo-bloque").slideUp();
    $("#tercer-bloque").slideUp();
    $(".bloque-experiencia .titulo").animate({margin:"2% 10%"})
    $("#habilidades h2").animate({margin:"2% 20%"})
    $("#formacion h2").animate({margin:"2% 20%"})
    })

$("#habilidades h2").on("click",function(){
     $("#segundo-bloque").slideToggle();
     $("#primer-bloque").slideUp();
     $("#tercer-bloque").slideUp();
     $(".bloque-experiencia .titulo").animate({margin:"2% 20%"})
     $("#formacion h2").animate({margin:"2% 20%"})
     $("#habilidades h2").animate({margin:"2% 10%"})
      })

$("#formacion h2").on("click",function(){
    $("#tercer-bloque").slideToggle();
    $("#primer-bloque").slideUp();
    $("#segundo-bloque").slideUp();
    $(".bloque-experiencia .titulo").animate({margin:"2% 20%"})
    $("#habilidades h2").animate({margin:"2% 20%"})
    $("#formacion h2").animate({margin:"2% 10%"})
         })
    
   