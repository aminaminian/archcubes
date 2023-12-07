


$(".line-login span").click(function () {
  $(".login-form").toggleClass("isOpen");
});
$(".login-form .closePanel").click(function () {
  $(".login-form").removeClass("isOpen");
});
$(".menuTrigger").click(function () {
  $(".panel-menu").toggleClass("isOpen");
});

$(".openSubPanel").click(function () {
  $(this).next(".subPanel").addClass("isOpen");
});

$(".closeSubPanel").click(function () {
  $(this).closest(".subPanel").removeClass("isOpen");
});

$("#panel-menu").on("click", function (e) {
 
  var target = $(e.target);
  if (
    target.attr("id") == "menu-toggle" ||
    target.parents("#panel-menu").length > 0 ||
    target.parents(".panel-menu").length > 0
  ) {
    console.log(
      "id: " +
        target.attr("id") +
        "contains: " +
        $.contains(target, $(".panel-menu"))
    );
  } else {
    if ($(".panel-menu").hasClass("isOpen"))
      $(".panel-menu").removeClass("isOpen");
    $(".subPanel").removeClass("isOpen");
  }
});

$("#panel-menu .closePanel").click(function () {
  $(".panel-menu").removeClass("isOpen");
  $(".subPanel").removeClass("isOpen");
});

if (matchMedia("only screen and (min-width: 768px)").matches) {
  $(".menuTrigger").click(function () {
    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false);
    document.body.style.overflow = 'hidden';
  });
  $("#panel-menu .closePanel").click(function () {
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setKeyboardScrolling(true);
  });
  $(".closeSubPanel").click(function () {
    $.fn.fullpage.setAllowScrolling(true);
      $.fn.fullpage.setKeyboardScrolling(true);
  });
  $(".line-login span").click(function () {
    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false);
    document.body.style.overflow = 'hidden';
  });
  $(".login-form .closePanel").click(function () {
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setKeyboardScrolling(true);
  });
}

if (matchMedia("only screen and (max-width: 768px)").matches) {
  $(".set > span").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".content").slideUp(200);
    } else {
      $(".set > span").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this).siblings(".content").slideDown(200);
    }
  });
}
AOS.init({
  easing: "ease-in-out-sine",
  duration: 500,
});

if ($(".header").length) {
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 100) {
        $(".header").addClass("sticky-menu");
      } else {
        $(".header").removeClass("sticky-menu");
      }
    });
  });
}
if (matchMedia("only screen and (max-width: 991.99px)").matches) {
  function resize() {
    var calculatePadding = parseInt($(".header").css("height"));
    $(".body-content").css({
      "padding-top": calculatePadding,
    });
  }

  $(document).ready(function () {
    resize();
  });
}

$(".search-item").click(function () {
  $(".search-wrapper").toggleClass("expand");
});

$(".close-search").click(function () {
  if ($(".search-wrapper").hasClass("expand")) {
    $(".search-wrapper").removeClass("expand").addClass("close");
  }
});



  
  




if (matchMedia("only screen and (min-width: 768px)").matches) {
  $(document).ready(function () {
    $("#fullpage").fullpage({
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 2000,
      verticalCentered: false,
      responsiveWidth: 900,
      afterResponsive: function (isResponsive) {},
      onLeave: function (index, nextIndex, direction) {
        jQuery(".section [data-aos]").removeClass("aos-animate");
        if (direction == "up") {
          $(".section").removeClass("down");
          $(".section").removeClass("next");
          $(".section").removeClass("prev");
          $("#homepage .section:nth-child(" + nextIndex + ")").addClass("up");
          $("#homepage .section:nth-child(" + nextIndex + ")")
            .next()
            .addClass("next up");
          $("#homepage .section:nth-child(" + nextIndex + ")")
            .prev()
            .addClass("prev up");
        } else {
          $(".section").removeClass("up");
          $(".section").removeClass("next");
          $(".section").removeClass("prev");
          $("#homepage .section:nth-child(" + nextIndex + ")").addClass("down");
          $("#homepage .section:nth-child(" + nextIndex + ")")
            .next()
            .addClass("next down");
          $("#homepage .section:nth-child(" + nextIndex + ")")
            .prev()
            .addClass("prev down");
        }
        console.log(direction + nextIndex);
      },
      afterLoad: function (e, t, n, i) {
     
        if ( $('[data-anchor="home"]').hasClass('active') ) {
          $('.header-page1').show();
         
          $('.m-menu').addClass('not-show');
          $('.line-menu').removeClass('not-show');
         
        }
        else{
          $('.header-page1').hide();
          $('.m-menu').removeClass('not-show');
          $('.line-menu').addClass('not-show');
        }
        $(".header [data-aos]").addClass("aos-animate");
        $(".section.active [data-aos]").addClass("aos-animate");
      },
      onLeave: function (e, t, n, i) {
        $(".header [data-aos]").removeClass("aos-animate");
        $(".section [data-aos]").removeClass("aos-animate");
        $('.line-menu').addClass('not-show');
     
        if ( $('[data-anchor="home2"]').hasClass('active') ) {
          $('.line-menu').removeClass('not-show');
          $('.m-menu').addClass('not-show');
          
        }
        else{
          $('.m-menu').removeClass('not-show');
          $('.line-menu').addClass('not-show');
        }
      },
    });

  
  });
} else {
  $(document).ready(function () {

     

  $(this).closest(".subPanel").removeClass("isOpen");
  });
}

$(document).ready(function() {
  $(".owl-nest").owlCarousel({
    navText: ['پروژه قبلی','پروژه بعدی'],
    navElement: 'span',
    dots: false,
    //autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    thumbs: true,
    // thumbImage: true,
    thumbsPrerendered: true,
    loop: false,
    rewind: true,
    mouseDrag: false,
    touchDrag: false,
    items: 1,
    responsive: {
      0: {
         nav: true
      },
      768: {
         nav: false
      }


    }
  });
  
  $(".owl-carousel--nested").owlCarousel({
    nav: false,
    smartSpeed:450,
    navText: ['پروژه قبلی','پروژه بعدی'],
    navElement: 'span',
    dots: true,
    loop: false,
    rewind: true,
    items: 1
  });


  $(".owl-carousel--nested").on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function (e) {
    if (!e.namespace) return;
    var carousel = e.relatedTarget,
        current = carousel.current();
    if (current === carousel.maximum()) {
      $('.show-more-slide').addClass('show-btn');
       $('.show-more-slide').removeClass('show-btn2');
    }
    else(
      $('.show-more-slide').removeClass('show-btn')
    );
   
});

 $('.show-more-slide').hover(function () {
          $('.next-project').addClass('show-box');
          $(this).addClass('show-btn2');
          
        });
    


var i = 1, total = $('.owl-nest .owl-item.active .item .item--nested').length;
$('.owl-carousel--nested .owl-dot').each(function(){
  $(this).append('<i>'+ i+'</i>');
  if(i < total){
    i++;
  }else{
    i=1;
  }
 
});




  $('.text-next').click(function () {
   //$('.owl-carousel--nested').trigger('to.owl.carousel', 0);
   $('.owl-nest').trigger('next.owl.carousel');
    $('.next-project').removeClass('show-box');

  }),
  $('.text-reject').click(function(){
    //$.fn.fullpage.moveSectionDown();
   // $(".owl-nest").trigger('prev.owl.carousel');
    $.fn.fullpage.moveTo('home6');
    $('.owl-carousel--nested').trigger('to.owl.carousel', 0);
    $('.next-project').removeClass('show-box');
})
});
$(document).ready(function() {   
  $(".code-input-element").keyup(function () {
  if (this.value.length == this.maxLength) {
    $(this).nextAll('input').first().focus();
  }
  else if ($(this).val().length > 1) {
    var new_val = $(this).val().substring(1, 2);
    $(this).val(new_val);
    $(this).nextAll('input').first().focus();
  }
});
    
 $(".code-input-element").keydown(function(event) {
  if (event.keyCode == 8 && $(this).val().length == 0) {
    if ($(this).prev('input')) {
      $(this).prev('input').focus();
    }
  }
});


  });
  if (matchMedia('only screen and (max-width: 991.99px)').matches) {

    function resize(){   
      var calculatePadding = parseInt($('.header').css("height"));
      $("#fullpage").css({
          "padding-top":calculatePadding
      });
    }
    
    $(document).ready(function(){
      resize();
    });
    }
    

    $(document).ready(
(function() {

  $("[data-slider-wrap]").each(function() {
     var _this = $(this),
        _slick = _this.find("[data-slider]");

     function typeInit(target, str, destroy) {
        var typedOptions = {
              strings: [str],
              typeSpeed: 10,
              cursorChar: ""
           },
           _typedjs = new Typed(target, typedOptions);

        if (destroy === true) {
           _typedjs.destroy();
        }
     } //typeInit END

     _slick
        .on("init", function(event, slick) {
           var _current = _slick.find("[data-slick-index='0']"),
              _input = _current.find("[data-typed]"),
              _inputNative = _input[0],
              _data = _input.data("typed");

           typeInit(_inputNative, _data);
        })
        .on("afterChange", function(event, slick, currentSlide) {
           var _getCurrent = _slick.find(
                 "[data-slick-index='" + currentSlide + "']"
              ),
              _getInput = _getCurrent.find("[data-typed]"),
              _getInputNative = _getInput[0],
              _getData = _getInput.data("typed"),
               
              _getAll = $("[data-slick-index]"),
              _getAllInput = _getAll.find("[data-typed]"),
              _getAllInputNative = _getAllInput[0];

           //destroy
           typeInit(_getAllInputNative, _getData, true);
           _getAllInput
              .html("")
              .next().remove();

           //init
           typeInit(_getInputNative, _getData);
        });
    
     _slick.slick({
      draggable: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        leftToRight:1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: false
     });
    });
  
})()
);


$('body').click(function(e) {
   if(e.target.id != '.next-project'){
      setTimeout(function() {
           $('.show-more-slide').removeClass('show-btn2');
        }, 1000);

        $('.next-project').removeClass('show-box');  
   }
      
})
