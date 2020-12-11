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



/// Moj deo JS-a

///Dinamicki ispis
//ispis nav menija
var nizNavHref = ["#about", "#why-us", "#contact"];
var nizNavIme = ["About us", "Why Us", "Contact Us"];

var ispis = `
        <li class="active"><a href="#header">Home</a></li>
`;

for(let i = 0; i < nizNavHref.length; i++){
  ispis += `
      <li><a href="${nizNavHref[i]}">${nizNavIme[i]}</a></li>
  `;
}
document.querySelector("#meniLista").innerHTML = ispis;

//ispis slika(galerija)
var nizSrc = ["assets/img/pic01.jpg", "assets/img/pic02.jpg", "assets/img/pic03.jpg", "assets/img/pic04.jpg", "assets/img/pic01.jpg", "assets/img/pic02.jpg", "assets/img/pic01.jpg", "assets/img/pic02.jpg", "assets/img/pic01.jpg", "assets/img/pic02.jpg"];
var nizHref = ["assets/img/pic01.jpg", "assets/img/pic02.jpg", "assets/img/pic03.jpg", "assets/img/pic04.jpg", "assets/img/pic01.jpg", "assets/img/pic02.jpg", "assets/img/pic01.jpg", "assets/img/pic02.jpg", "assets/img/pic01.jpg", "assets/img/pic02.jpg"];
var nizAlt = ["Slika1", "Slika2", "Slika3", "Slika4", "Slika5", "Slika6", "Slika3", "Slika4", "Slika5", "Slika6"];

var nizCapt = ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5", "Image 6", "Image 7", "Image 8", "Image 9", "Image 10"];

var ispis = "";

for(let i = 0; i < nizSrc.length; i++){
    ispis += `
        <div class="col-lg-4 col-md-6 col-12">
          <a href="${nizHref[i]}" data-caption="${nizCapt[i]}" class="d-block mb-4 h-100">
            <img src="${nizSrc[i]}" class="img-fluid" alt="${nizAlt[i]}">
          </a>
        </div>
    `;
}
document.querySelector("#slikeovde").innerHTML = ispis;

//ispisivanje kartica
var nizIconSrc = ["assets/img/pic01.jpg", "assets/img/pic02.jpg", "assets/img/pic03.jpg"];
var nizIconAlt = ["Icon1", "Icon2", "Icon3"];

var clanakTekst = ["Ovo je dinamicki ispisan tekst.", "Ovo je dinamicki ispisan tekst broj 2.", "Ovo je dinamicki ispisan tekst broj 3."];
var clanakNaslov = ["Naslov 1", "Naslov 2", "Naslov 3"];

var ispis = "";

for(let i = 0; i < nizIconSrc.length; i++){
  ispis += `
      <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
        <div class="card">
          <img src="${nizIconSrc[i]}" class="card-img-top" alt="${nizIconAlt[i]}">
          <div class="card-body">
            <h5 class="card-title"><a href="">${clanakNaslov[i]}</a></h5>
            <p class="card-text"> ${clanakTekst[i]} </p>
          </div>
        </div>
      </div>
  `;
}
document.querySelector("#karticeovde").innerHTML = ispis;

//ispisivanje FAQ(cesto postavljana pitanja)
var nizPitanja = ["Sta bi trebalo raditi?", "Sta ne bi trebalo raditi?", "Pitanje broj 3?", "Pitanje broj 4?", "Pitanje broj 5?"];
var nizOdgovora = ["Odgovor broj 1", "Odgovor broj 2", "Odgovor broj 3", "Odgovor broj 4", "Odgovor broj 5"];
var nizHrefFaq = ["#faq1", "#faq2", "#faq3", "#faq4", "#faq5"];
var nizImeFaq = ["faq1", "faq2", "faq3", "faq4", "faq5"];

var ispis = "";

for(let i = 0; i < nizPitanja.length; i++){
  ispis += `
      <li>
        <a data-toggle="collapse" class="collapsed" href="${nizHrefFaq[i]}">${nizPitanja[i]}<i class="bx bx-down-arrow-alt icon-show"></i><i class="bx bx-x icon-close"></i></a>
        <div id="${nizImeFaq[i]}" class="collapse" data-parent=".faq-list">
          <p>
            ${nizOdgovora[i]}
          </p>
        </div>
      </li>
  `;
}
document.querySelector("#faqlista").innerHTML = ispis;

//Provera reg. izrazima formu 1
// function Email(){
//   var email = document.getElementById("emailAdd").value
 
//   var checking = /^\S+@\S+\.\S+$/
//   if(checking.test(email)){
//   $(this).animate({backgroundColor:"#fbf7f7",borderColor:"#99cc33"},330)
//   }
//   else{
//   $(this).animate({backgroundColor:"#b33a3a",borderColor:"#b33a3a"},300)
//   }
//  }
 






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

});

//Slajder slike glavne vesti
function slajder() {
  var current = $('#slike .prikazi');
  var next = current.next().length ? current.next() : current.parent().children(':first');
  
  current.hide().removeClass('prikazi');
  next.fadeIn(3000).addClass('prikazi');
  
  setTimeout(slajder, 5000);
}

//Smena pozadine kod glavne slike na sajtu
// $('#hero').hover(
//   function(){
//     $(this).css('background-image', 'url("assets/img/gamingdark.jpg")')
//   },
//   function(){
//     $(this).css('background-image', 'url("assets/img/gaming.jpg")')
//   }
// )

  
  





///JQuery Plugin Lightbox
$(function() {
  $('#gallery a').lightbox({
    blur: true,
    nav:false,
    // minSize: 768
  }); 
});

