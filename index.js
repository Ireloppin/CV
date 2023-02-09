

$("#en").click(function(){
    $("h1").text("Hello!, I´m Irene");
    $("#encabezado").html("Graduated in Audiovisual Communication,</br> Web Development and knitter.");

    $(".presentacion p").text("Web developer by vocation. Self-taught, self-demanding and constant. My previous professional experience has allowed me to refine my ability to organize and prioritize tasks, as well as stress management. I like teamwork and dealing with all kinds of people. I consider myself a creative and curious person with a great capacity to adapt to new environments or technologies..");

    $(".bloque-experiencia .titulo").text("Professional experience");
    $("#expdesarrollo h3").text("On line store developer");
    $("#expdesarrollo p").text("During the last 9 years I have dedicated myself to creating my own business with a partner and friend. In addition to all the tasks typical of a business, I have dedicated myself to the creation, development, customization and operation of the online store. I have done this work with Wordpress and Woocommerce. Thanks to this I discovered I love the world of web development and I am currently training to dedicate myself to it entirely.");
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
    
   