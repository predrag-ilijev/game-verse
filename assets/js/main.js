!(function($) {
  "use strict";

  // Toggle nav menu
  $(document).on('click', '.nav-toggle', function(e) {
    $('.nav-menu').toggleClass('nav-menu-active');
    $('.nav-toggle').toggleClass('nav-toggle-active');
    $('.nav-toggle i').toggleClass('bx-x bx-menu');

  });

  // Toogle nav menu drop-down items
  $(document).on('click', '.nav-menu .drop-down > a', function(e) {
    e.preventDefault();
    $(this).next().slideToggle(300);
    $(this).parent().toggleClass('active');
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .active').removeClass('active');
          $(this).closest('li').addClass('active');
          $('.nav-menu').removeClass('nav-menu-active');
          $('.nav-toggle').removeClass('nav-toggle-active');
          $('.nav-toggle i').toggleClass('bx-x bx-menu');
        }
        return false;
      }
    }
  });
})(jQuery);

/// Moj JS

//Nav meni
var nizNavHref = ["#mainnews", "#agames", "#news", "#gallery", "#contact"];
var nizNavIme = ["Main news", "Upcoming games", "Latest stories","Wallpapers", "Contact Us"];

var ispis = `
  <li class="active"><a href="#header">Home</a></li>
`;

for(let i = 0; i < nizNavHref.length; i++){
  ispis += `
    <li><a href="${nizNavHref[i]}">${nizNavIme[i]}</a></li>
  `;
}
document.querySelector("#meniLista").innerHTML = ispis;

//Galerija
var nizSrc = ["assets/img/thumb/wallp1th.jpg", "assets/img/thumb/wallp2th.jpg", "assets/img/thumb/wallp3th.jpg", "assets/img/thumb/wallp4th.jpg", "assets/img/thumb/wallp5th.jpg", "assets/img/thumb/wallp6th.jpg", "assets/img/thumb/wallp7th.jpg", "assets/img/thumb/wallp8th.jpg"];
var nizHref = ["assets/img/wallp1.jpg", "assets/img/wallp2.jpg", "assets/img/wallp3.jpg", "assets/img/wallp4.jpg", "assets/img/wallp5.jpg", "assets/img/wallp6.jpg", "assets/img/wallp7.jpg", "assets/img/wallp8.jpg"];
var nizAlt = ["Wallpaper1", "Wallpaper2", "Wallpaper3", "Wallpaper4", "Wallpaper5", "Wallpaper6", "Wallpaper7", "Wallpaper8"];

var nizCapt = ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5", "Image 6", "Image 7", "Image 8", "Image 9", "Image 10"];

var ispis = "";

for(let i = 0; i < nizSrc.length; i++){
  ispis += `
    <div class="col-lg-4 col-md-6 col-12 darkbg2">
      <a href="${nizHref[i]}" data-caption="${nizCapt[i]}" class="d-block mb-4 h-100">
        <img src="${nizSrc[i]}" class="img-fluid" alt="${nizAlt[i]}">
      </a>
    </div>
  `;
}
document.querySelector("#slikeovde").innerHTML = ispis;

//Kartice
var nizIconSrc = ["assets/img/rev8.jpg", "assets/img/hinf.jpg", "assets/img/hman3.jpg"];
var nizIconAlt = ["Icon1", "Icon2", "Icon3"];
var nizNoviSrc = ["assets/img/rev8-1.jpg", "assets/img/hinf-1.jpg", "assets/img/hman3-1.jpg"];

var clanakTekst = ["Does this game even need an introduction? The Resident Evil franchise is one of if not the longest-standing horror gaming franchises in the world. And with the return to its survival-horror roots with the enormously successful Resident Evil 7: Biohazard, the eighth installment is bound to be as jaw-dropping, if not more, right? You’re absolutely correct!",
"If you’ve been eagerly anticipating the continuation of the Master Chief’s saga, your patience will soon be rewarded! Although the game was supposed to launch around the end of 2020, the release has been postponed to 2021. However, the anticipation for it hasn’t dwindled in the slightest! With all that in mind, eager fans can do nothing but save up and patiently wait for updates and more reveals.",
"This stealth-based third-person shooter focuses on using stealth and deception to take out prominent criminals worldwide. The developers behind the franchise, IO Interactive,  revealed that Agent 47’s contracts would take him to Dubai, England, and many more places this time around. They also noted that the players would be able to sync their maps and progress from the previous Hitman games with the latest installment!"];
var clanakNaslov = ["Resident Evil Village", "Halo Infinite", "Hitman 3"];

var ispis = "";

for(let i = 0; i < nizIconSrc.length; i++){
  ispis += `
    <div class="col-lg-4 col-md-12 d-flex align-items-stretch">
      <div class="card darkbg">
        <img src="${nizIconSrc[i]}" data-alt-src="${nizNoviSrc[i]}" class="card-img-top prom" alt="${nizIconAlt[i]}">
        <div class="card-body">
          <h5 class="card-title"><a href="">${clanakNaslov[i]}</a></h5>
          <p class="card-text"> ${clanakTekst[i]} </p>
        </div>
      </div>
    </div>
  `;
}
document.querySelector("#karticeovde").innerHTML = ispis;

//Novosti
var nizVestSrc = ["assets/img/thumbvest1.jpg", "assets/img/thumbvest2.jpg", "assets/img/thumbvest3.jpg", "assets/img/thumbvest4.jpg"];
var nizVestAlt = ["Vest1", "Vest2", "Vest3", "Vest4"];

var vestTekst = ["The Game Awards took place earlier today, and it spent several hours delivering not only awards, but also a host of new game announcements and updates on existing games.",
"Super Meat Boy Forever has been a long time coming, having been first announced in 2014. Now the tough-as-nails platformer has finally set a release date.",
"Epic already gives away free games every week, but starting next Thursday, you'll be able to snag a freebie every day, to celebrate the holidays.",
"Given these circumstances, it's easy to see why Animal Crossing became such an immediate, inescapable hit, particularly during the first half of the year."];
var vestNaslov = ["The Game Awards 2020 Announcements: All The Biggest News",
"Super Meat Boy Forever Gets Release Date, After Wait Seemed Like Forever",
"Epic Is Giving Away 15 Free Games For Christmas Starting Next week",
"Best Games Of 2020 – Animal Crossing: New Horizons"];

var ispis = "";

for(let i = 0; i < nizVestSrc.length; i++){
  ispis += `
    <div class="col-12 mt-4 testing2">
      <div class="row no-gutters db2 d-flex flex-sm-row overflow-hidden shadow-sm h-md-250 position-relative testing">
        <div class="col-auto d-sm-block d-flex align-items-center pt-3 pb-3 dnone">
          <img width="200" height ="250" class="img-fluid m-3 border border-secondary" src="${nizVestSrc[i]}" alt="${nizVestAlt[i]}"/>
        </div>
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-warning">Article</strong>
          <h4 class="mb-0 text-light">${vestNaslov[i]}</h4>
          <div class="mb-1 text-muted">Gameverse</div>
          <p class="card-text mb-auto">${vestTekst[i]}</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
      </div>
    </div>
  `;
}
document.querySelector("#vestiovde").innerHTML = ispis;

//Modal autor
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



///Moj jQuery

//Prikaz dugme
$(document).ready(function(){
  $('.spoiler').hide();
  $('<input type="button" class="revealer btn btn-outline-light btn-sm" value="Show more"/>').insertBefore('.spoiler');
  $('.revealer').click(function(){
    $(this).hide();
    $(this).next().slideToggle();
  });

  slajder();

  // Forma
  $("#tbImePrezime").blur(function(){
    var reImePrezime = /^[A-Z][a-z]{2,19}(\s[A-Z][a-z]{2,19})+$/;
    proveraRegEx(reImePrezime, "#tbImePrezime");
  })

  $("#tbEmail").blur(function(){
    var reEmail = /^[\w\.\-]+\@([a-z0-9]+\.)+[a-z]{2,3}$/;
    proveraRegEx(reEmail, "#tbEmail");
  })

  $("#tbMessage").blur(function(){
    var reMessage = /^[\w]+$/;
    proveraRegEx(reMessage, "#tbMessage");
  })

  function proveraRegEx(regEx, element){
    if ((element) == "#tbMessage") {
      var messageText = $("#tbMessage").val();
      var messageText2 = messageText.replace(/[\s]/mg, "");
      var messageText3 = messageText2.length;
      // console.log(messageText3);
      if ((messageText3 < 20) || (messageText3 > 200)) {
        $(element).addClass("wrong");
        $("#gr3").html("Enter at least 20 characters. <i>Max: 200.</i>");
        return false;
      } else {
        $(element).removeClass("wrong");
        // $(element).addClass("correct");
        return true;
      }
    }
    if((!$(element).val().match(regEx))){
        $(element).addClass("wrong");
        if ((element) == "#tbImePrezime") {
          $("#gr1").html("Example: <i>Tom Smith, Edward Hemingway...</i>");
        }
        if ((element) == "#tbEmail") {
          $("#gr2").html("Example: <i>tom@gmail.com, tom.smith@hotmail.com, etc...</i>");
        }
        return false;
    }
    else{
        $(element).removeClass("wrong");
        // $(element).addClass("correct");
        return true;
    }
  }

  //Forma submit
  $("#buttonSubmit").click(provera);
  function provera(){
    var nameField = $("#tbImePrezime");
    var emailField = $("#tbEmail");
    var messageField = $("#tbMessage");
    
    var namePattern = /^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{2,15})+$/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var messagePattern = /^[\w]+$/;

    var mistakes = 0;
    if(!proveraRegEx(namePattern, nameField)){
      mistakes++;
    }

    if(!proveraRegEx(emailPattern, emailField)){
      mistakes++;
    }
    if(!proveraRegEx(messagePattern, messageField)){
      mistakes++;
    }
    if(mistakes == 0){
        $("#confirmation").html("<p class='alert alert-success'>You have successfully completed the form!</p>");
        $("#tbImePrezime").addClass("success").val("");
        $("#tbEmail").addClass("success").val("");
        $("#tbMessage").addClass("success").val("");
    }
  }
});

//Slajder slike glavne vesti
function slajder() {
  var current = $('#slike .prikazi');
  var next = current.next().length ? current.next() : current.parent().children(':first');
  
  current.hide().removeClass('prikazi');
  next.fadeIn(3000).addClass('prikazi');
  
  setTimeout(slajder, 5000);
}

//Promena slika hoverom
var srcPromena = function() {
  var $this = $(this);
  var noviSrc = $this.data('alt-src');
  $this.data('alt-src', $this.attr('src'));
  $this.attr('src', noviSrc);
}
$(function () {
  $('img.prom').hover(srcPromena, srcPromena);
});

//Show more dugme za vesti(Nestaje nakon sto se pojave sve vesti)
$(function () {
  var brKl = 0;
  $(".testing2").slice(0, 2).show();
  $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".testing2:hidden").slice(0, 1).slideDown();
      if ($(".testing2:hidden").length == 0) {
          $("#load").fadeOut('slow');
      }
      brKl += 2;
      if (brKl >= (nizVestSrc.length-1)) {
        $(".loaded").remove();
      }
  });
});

///JQuery Plugin Lightbox
$(function() {
  $('#gallery a').lightbox({
    blur: true,
    nav:false,
    // minSize: 768
  }); 
});




// $('#introImage1').hover( function(){
//   $(this).attr('src', 'assets/images/img_5.jpg')},
//   function(){
//     $(this).attr('src', 'assets/images/img_6.jpg')
//   }
// )

// setTimeout( function() {
//  //something
// }, 5000);