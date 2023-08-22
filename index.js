const ingles = $("#en");
const esp = $("#es");

ingles.click(function () {
  ingles.addClass("active");
  esp.removeClass("active");
  $("h1").text("Hello!, I´m Irene");
  $("#encabezado").html(
    "Graduated in Audiovisual Communication,</br> Web Development and knitter."
  );
  $("#portfolio").text("Click here to view my portfolio");

  $("#presentacion").text(
    "Web developer by vocation. Self-taught, self-demanding and constant. My previous professional experience has allowed me to refine my ability to organize and prioritize tasks, as well as stress management. I like teamwork and dealing with all kinds of people. I consider myself a creative and curious person with a great capacity to adapt to new environments or technologies."
  );

  $("#experiencia .titulo").text("Professional experience");

  $("#expFront p").text(
    "During this period I deepened my knowledge of JavaScript, CSS and HTML, and acquired many other skills such as Git, Docker, FireBase, Jest and Cypress."
  );
  $("#expFront .fecha").text("March 2023 - August 2023.");

  $("#expdesarrollo h3").text("On line store developer");
  $("#expdesarrollo .fecha").text("December 2013 - April 2022");
  $("#expdesarrollo p").text(
    "Creation, development, customization and operation of the online store. This work was done with Wordpress and Woocommerce."
  );

  $("#exprealizacion h3").text("Tv director");
  $("#exprealizacion p").text(
    "From February 2012 to January 2014 I was in the Public Society of Radio and Television of Extremadura as a television director. Above all I did the news and morning shows."
  );

  $("#expproduccion h3").text("Tv production assistant");
  $("#expproduccion p").text(
    "From September 2008 to January 2012. In these years I was working intermittently in tasks related to television broadcasts. I started as a camera operator, soon I became a Production Assistant. I also performed administration and management tasks for the company."
  );

  $(".iconoder").animate({ width: "20%" });
  $(".iconoizq").animate({ width: "20%" });

  $("#habilidades h2").text("Skills");
  $("#ing").text("Intermediate English");

  $("#formacion h2").text("Studies");

  $("#formacion1 p").text("March 2023 - April 2023");

  $("#formacion2 p").text("March 2022 - Currently");
  $("#formacion3 h3").text("Bachelor's Degree in Audiovisual Communication");
  $("#formacion4 h3").text("Community Manager Course");
  $("#formacion4 p").text("October 2011 - December 2011");

  $("#formacion5 h3").text("Intermediate English Diploma");

  $("h3")[7].textContent = "Contact me:";
});

esp.click(function () {
  location.reload(true);
});
