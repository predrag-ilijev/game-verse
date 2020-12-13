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

//Dinamicki ispis
//ispis nav menija
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

//ispis slika(galerija)
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

//ispisivanje kartica
var nizIconSrc = ["assets/img/rev8.jpg", "assets/img/hinf.jpg", "assets/img/hman3.jpg"];
var nizIconAlt = ["Icon1", "Icon2", "Icon3"];

var clanakTekst = ["Does this game even need an introduction? The Resident Evil franchise is one of if not the longest-standing horror gaming franchises in the world. And with the return to its survival-horror roots with the enormously successful Resident Evil 7: Biohazard, the eighth installment is bound to be as jaw-dropping, if not more, right? You’re absolutely correct!",
"If you’ve been eagerly anticipating the continuation of the Master Chief’s saga, your patience will soon be rewarded! Although the game was supposed to launch around the end of 2020, the release has been postponed to 2021. However, the anticipation for it hasn’t dwindled in the slightest! With all that in mind, eager fans can do nothing but save up and patiently wait for updates and more reveals.",
"This stealth-based third-person shooter focuses on using stealth and deception to take out prominent criminals worldwide. The developers behind the franchise, IO Interactive,  revealed that Agent 47’s contracts would take him to Dubai, England, and many more places this time around. They also noted that the players would be able to sync their maps and progress from the previous Hitman games with the latest installment!"];
var clanakNaslov = ["Resident Evil Village", "Halo Infinite", "Hitman 3"];

var ispis = "";

for(let i = 0; i < nizIconSrc.length; i++){
  ispis += `
    <div class="col-lg-4 col-md-12 d-flex align-items-stretch">
      <div class="card darkbg">
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

//ispisivanje novosti
var nizVestSrc = ["assets/img/thumbvest1.jpg", "assets/img/thumbvest2.jpg", "assets/img/thumbvest3.jpg"];
var nizVestAlt = ["Vest1", "Vest2", "Vest3"];

var vestTekst = ["The Game Awards took place earlier today, and it spent several hours delivering not only awards, but also a host of new game announcements and updates on existing games.",
"Super Meat Boy Forever has been a long time coming, having been first announced in 2014. Now the tough-as-nails platformer has finally set a release date.",
"Epic already gives away free games every week, but starting next Thursday, you'll be able to snag a freebie every day, to celebrate the holidays."];
var vestNaslov = ["The Game Awards 2020 Announcements: All The Biggest News",
 "Super Meat Boy Forever Gets Release Date, After Wait Seemed Like Forever",
  "Epic Is Giving Away 15 Free Games For Christmas Starting Next week"];

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

//Modal za autora
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




  
  // IV primer - obrada forme
  $("#tbImePrezime").blur(function(){
    var reImePrezime = /^[A-Z][a-z]{2,19}(\s[A-Z][a-z]{2,19})+$/;
    proveraRegEx(reImePrezime, "#tbImePrezime");
  })

  $("#tbEmail").blur(function(){
    var reEmail = /^[\w\.\-]+\@([a-z0-9]+\.)+[a-z]{2,3}$/;
    proveraRegEx(reEmail, "#tbEmail");
  })

  $("#tbMessage").blur(function(){
    var reMessage = /^[\w\d]{20,150}$/;
    proveraRegEx(reMessage, "#tbMessage");
  })

  function proveraRegEx(regEx, element){
    if(!$(element).val().match(regEx)){
        $(element).addClass("greska");
        return false;
    }
    else{
        $(element).removeClass("greska");
        $(element).addClass("ok");
        return true;
    }
  }

  // Message RegExp

  // var tbMessage = document.querySelector("#tbMessage");
  // tbMessage.addEventListener("blur", checkMessage);

  // function checkMessage() {
  //   var numberOfSpaces = tbMessage.value.replace(/[^\s]/mg, "").length;

  //   if(tbMessage.value.length - numberOfSpaces < 20) {
  //     noErrors = false;
  //     tbMessage.classList.add("borderRed");
  //     tbMessage.classList.remove("borderBlue");
  //     tbMessage.nextElementSibling.style.display = "block";
  //   } else {
  //     tbMessage.classList.add("borderBlue");
  //     tbMessage.classList.remove("borderRed");
  //     tbMessage.nextElementSibling.style.display = "none";
  //   }
  // }


  $("#btnPrijava").click(provera);
  function provera(){
    var poljeImePrezime = $("#tbImePrezime");
    var emailField = $("#tbEmail");
    var messageField = $("#tbMessage");

    var reImePrezime = /^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{2,15})+$/;
    // var reEmail = /^[\w\.\-]+\@([a-z0-9]+\.)+[a-z]{2,3}$/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // var messagePattern = /^[\w\d]{20,150}$/;  /[^A-Za-z0-9 .'?!,@$#-_\n\r]/    /[a-z]*/g    value.match(/\S+/g).length;
    var messagePattern = /^[\w\d]{20,150}$/;

    var brojGresaka = 0;

    // console.log(brojGresaka)
    if(!proveraRegEx(reImePrezime, poljeImePrezime)){
        brojGresaka++;
    }
    // console.log(brojGresaka)

    if(!proveraRegEx(emailPattern, emailField)){
        brojGresaka++;
    }
    console.log(brojGresaka)
    if(!proveraRegEx(messagePattern, messageField)){
      brojGresaka++;
    }
    console.log(brojGresaka)

    if(brojGresaka == 0){
        $("#confirmation").html("<p class='alert alert-success'>You have successfully completed the form!</p>");
        $("#tbImePrezime").addClass("ok2");
        $("#tbEmail").addClass("ok2");
        $("#tbMessage").addClass("ok2");
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

//Show more dugme prikaz i nestaje nakon prikazivanja svega
$(function () {
  var brKl = 0;
  $(".testing2").slice(0, 1).show();
  $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".testing2:hidden").slice(0, 1).slideDown();
      if ($(".testing2:hidden").length == 0) {
          $("#load").fadeOut('slow');
      }
      brKl += 1;
      if (brKl >= (nizVestSrc.length-1)) {
        $(".loaded").remove();
      }
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










// // Name errors
// var nameErrorsArray = ["A name cannot have less than 3 characters", "Has to be at least 2 words", "Each word has to be capitalized"];

// for(i in nameErrorsArray) {
//   var nameErrorList = document.querySelector("#nameErrorList");

//   var liTag = document.createElement("li");
//   var liText = document.createTextNode(`- ${nameErrorsArray[i]}`);
//   liTag.appendChild(liText);

//   nameErrorList.appendChild(liTag);
// }

// // RegExp

// var noErrors;

// // Name RegExp

// var nameRegExp = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{2,})+$/;

// var tbName = document.querySelector("#tbName");
// tbName.addEventListener("blur", checkName);

// function checkName() {
//   var check = nameRegExp.test(tbName.value);
//   if(check) {
//     tbName.classList.add("borderBlue");
//     tbName.classList.remove("borderRed");
//     tbName.nextElementSibling.style.display = "none";
//   } else {
//     noErrors = false;
//     tbName.classList.add("borderRed");
//     tbName.classList.remove("borderBlue");
//     tbName.nextElementSibling.style.display = "block";
//   }
// }

// // Email RegExp

// var emailRegExp = /^[\w-_\.]+@([\w-_]{2,}\.)+[a-z]{2,}$/i;

// var tbEmail = document.querySelector("#tbEmail");
// tbEmail.addEventListener("blur", checkEmail);

// function checkEmail() {
//   var check = emailRegExp.test(tbEmail.value);
//   if(check) {
//     tbEmail.classList.add("borderBlue");
//     tbEmail.classList.remove("borderRed");
//     tbEmail.nextElementSibling.style.display = "none";
//   } else {
//     noErrors = false;
//     tbEmail.classList.add("borderRed");
//     tbEmail.classList.remove("borderBlue");
//     tbEmail.nextElementSibling.style.display = "block";
//   }
// }

// // Message RegExp

// var tbMessage = document.querySelector("#tbMessage");
// tbMessage.addEventListener("blur", checkMessage);

// function checkMessage() {
//   var numberOfSpaces = tbMessage.value.replace(/[^\s]/mg, "").length;

//   if(tbMessage.value.length - numberOfSpaces < 20) {
//     noErrors = false;
//     tbMessage.classList.add("borderRed");
//     tbMessage.classList.remove("borderBlue");
//     tbMessage.nextElementSibling.style.display = "block";
//   } else {
//     tbMessage.classList.add("borderBlue");
//     tbMessage.classList.remove("borderRed");
//     tbMessage.nextElementSibling.style.display = "none";
//   }
// }

// // Submit button

// var btnSubmitMessage = document.querySelector("#btnSubmitForm");

// btnSubmitMessage.addEventListener("click", function() {
//   noErrors = true;

//   checkName();
//   checkEmail();
//   checkMessage();

//   if(noErrors) {
//     tbName.value = "";
//     tbName.classList.remove("borderBlue");
//     tbEmail.value = "";
//     tbEmail.classList.remove("borderBlue");
//     tbMessage.value = "";
//     tbMessage.classList.remove("borderBlue");
//     var successMessage = "Your message was sent successfully!";
//     openSuccessModal(successMessage);
//   }
// });







///JQuery Plugin Lightbox
$(function() {
  $('#gallery a').lightbox({
    blur: true,
    nav:false,
    // minSize: 768
  }); 
});

// $('.testing').addClass('importantRule');







// var successModal = document.createElement("div");
// successModal.setAttribute("id", "successModal");

// var successCover = document.createElement("div");
// successCover.setAttribute("class", "cover");

// var successContainer = document.createElement("div");
// successContainer.setAttribute("id", "successContainer");

// var successMessageSpan = document.createElement("span");
// successContainer.appendChild(successMessageSpan);

// var btnClose = document.createElement("button");
// btnClose.classList.add("font-medium", "btnClose");
// btnClose.innerHTML = "X";
// btnClose.addEventListener("click", closeSuccessModal);
// successContainer.appendChild(btnClose);

// successModal.appendChild(successCover);
// successModal.appendChild(successContainer);

// bodyTag.appendChild(successModal);

// var closeModalTimeout;

// function openSuccessModal(message) {
//   successMessageSpan.innerHTML = message;
//   successModal.style.display = "block";
//   successContainer.style.display = "block";
//   var timeoutValue = 0;
//   for(let i = -100; i <= 0; i++) {
//     setTimeout(function() {
//       successCover.style.opacity = `${i+100}%`;
//     }, timeoutValue+=1.5);
//   }
//   closeModalTimeout = setTimeout(closeSuccessModal, 3000);
// }

// successCover.addEventListener("click", closeSuccessModal);

// function closeSuccessModal() {
//   successContainer.style.display = "none";
//   var timeoutValue = 0;
//   for(let i = 0; i >= -100; i--) {
//     setTimeout(function() {
//       successCover.style.opacity = `${i+100}%`;
//       if(i == -100) successModal.style.display = "none";
//     }, timeoutValue+=1.5);
//   }
//   clearTimeout(closeModalTimeout);
// }