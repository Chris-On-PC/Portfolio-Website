'use strict';

function recaptcha_callback(){
      
      document.getElementById('js_send').disabled = false;
    }

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});


function myProj1() {
    var x = document.getElementById("Tachograph");

    if (x.classList.contains("is-active")) {
       
        x.classList.remove("is-active");
    } else {
      
        x.classList.add("is-active");
    }
}

function myProj2() {
    var x = document.getElementById("HeartRate");

    if (x.classList.contains("is-active")) {
        
        x.classList.remove("is-active");
    } else {
      
        x.classList.add("is-active");
    }
}

function myProj3() {
    var x = document.getElementById("Skripsie");

    if (x.classList.contains("is-active")) {
        
        x.classList.remove("is-active");
    } else {
      
        x.classList.add("is-active");
    }
}

function myProj4() {
    var x = document.getElementById("Masters");

    if (x.classList.contains("is-active")) {
        
        x.classList.remove("is-active");
    } else {
      
        x.classList.add("is-active");
    }
}

function contact() {
    var x = document.getElementById("Contact");

    if (x.classList.contains("is-active")) {
        
        x.classList.remove("is-active");
    } else {
      
        x.classList.add("is-active");
    }
}

var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('is-active');
      sections.removeClass('is-active');
 
      $(this).addClass('is-active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('is-active');
    }
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        nav.find('a').removeClass('is-active');
      sections.removeClass('is-active');
 
      $(this).addClass('is-active');
      nav.find('a[href="#7"]').addClass('is-active');
    }

  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
 
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
 
  return false;
});



function submitmyform(){
        var emailval = $('input[name="email"]').val(),
              nameval = $('input[name="name"]').val(),
              subjectval = $('input[name="subject"]').val(),
              msgval = $('textarea').val();
           
        $.ajax({
          url: 'php/contact.php',
          type:'post',
          data: {email : emailval, name : nameval, subject: subjectval, msg:msgval},
          dataType:'html',
          async:false,
          success: function(data){
              alert("Your message has successfully been sent. Thank you for your interest!")
              $('#response_goes_here').html(data);

          }
         }); 
        
        window.history.replaceState({}, document.title, "/");
}




window.sr = ScrollReveal();