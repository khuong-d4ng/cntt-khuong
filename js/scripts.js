window.addEventListener("DOMContentLoaded", function () {
  var anhCanXoaElements = document.querySelectorAll(".anh-can-xoa");
  var divToResize = document.getElementsByClassName("anh-giu-lailai")[0];
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  function hideAnhCanXoaElements() {
    for (var i = 0; i < anhCanXoaElements.length; i++) {
      anhCanXoaElements[i].style.display = "none";
    }
    if (divToResize) {
      divToResize.style.width = "100%";
    }
  }

  function showAnhCanXoaElements() {
    for (var i = 0; i < anhCanXoaElements.length; i++) {
      anhCanXoaElements[i].style.display = "";
    }
    if (divToResize) {
      divToResize.style.width = "33.33%";
    }
  }

  function checkScreenWidth() {
    screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (screenWidth < 550) {
      hideAnhCanXoaElements();
    } else {
      showAnhCanXoaElements();
    }
  }

  checkScreenWidth();

  window.addEventListener("resize", function () {
    checkScreenWidth();
  });
});

/** ĐOẠN NÀY ĐỂ CUỘN XUỐNG PHẦN HOT TOUUR KHI CLICK NÀO NEW! */

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
  });
}

/* ĐIỀU KIỆN CHO QUẢ RESPONSIVE ĐỈNH CON MẸ NÓ CAO: TRÊN 500PX THÌ HIỂN THỊ rSECTION HOME BÌNH THƯỜNG(BẢN DESKTOP) 
DƯỚI < 500PX THÌ HIỂN THỊ BẢN SLIDER HAHAHAH NGONNNNNNNNNNNNN*/

$("#rSection-slider").slick({
  centerMode: true,
  centerPadding: "30px",
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
  arrows: false,
});




$(document).ready(function () {

  var windowWidth = $(window).width();
  var slideToShowNumber = 2;
    var slideScrollNumber = 2;

    if (windowWidth < 600) {
      slideToShowNumber = 1;
      slideScrollNumber = 1;
    }
    $("#stories-slider").slick({
      lazyLoad: 'ondemand',
      infinite: true,
        slidesToShow: slideScrollNumber,
        slidesToScroll: slideToShowNumber,
      prevArrow:
        "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });
  updateSlider();

  $(window).on("resize", function () {
    var newWindowWidth = $(window).width();
    if (newWindowWidth !== windowWidth) {
      windowWidth = newWindowWidth;
      updateSlider();
    }
  });
});
$(document).ready(function () {
  var slideToShowNumber = 2;
  var slideScrollNumber = 2;

  function updateSlider() {
    var windowWidth = $(window).width();

    if (windowWidth < 600) {
      slideToShowNumber = 1;
      slideScrollNumber = 1;
    } else {
      slideToShowNumber = 2;
      slideScrollNumber = 2;
    }

    $("#stories-slider").slick({
      lazyLoad: 'ondemand',
      infinite: true,
      slidesToShow: slideToShowNumber,
      slidesToScroll: slideScrollNumber,
      prevArrow:
        "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });
  }

  updateSlider();

  $(window).on("resize", function () {
    updateSlider();
  });
});


window.addEventListener("DOMContentLoaded", function () {
  var rightContainerHome = document.querySelector(".right-container-home");
  var rSectionSlider = document.querySelector("#rSection-slider");

  function updateLayout() {
    var windowWidth = window.innerWidth;

    if (windowWidth < 500) {
      rightContainerHome.style.display = "none";
      rSectionSlider.style.display = "block";
    } else {
      rightContainerHome.style.display = "block";
      rSectionSlider.style.display = "none";
    }
  }

  updateLayout();

  window.addEventListener("resize", function () {
    updateLayout();
  });
});

//cuộn
window.addEventListener('scroll', myScrollHandler, { passive: true });
function wp_dereg_script_comment_reply(){wp_deregister_script( 'comment-reply' );}
add_action('init','wp_dereg_script_comment_reply');

//Function checks if a given script is already loaded
function isScriptLoaded(src){
  return document.querySelector('script[src="' + src + '"]') ? true : false;
}

//When a reply link is clicked, check if reply-script is loaded. If not, load it and emulate the click
$('.comment-reply-link').click(function(){ 
  if(!(isScriptLoaded("/wp-includes/js/comment-reply.min.js"))){
      var script = document.createElement('script');
      script.src = "/wp-includes/js/comment-reply.min.js"; 
  script.onload = emRepClick($(this).attr('data-commentid'));        
      document.head.appendChild(script);
  } 
});
//Function waits 50 ms before it emulates a click on the relevant reply link now that the reply script is loaded
function emRepClick(comId) {
sleep(50).then(() => {
document.querySelectorAll('[data-commentid="'+comId+'"]')[0].dispatchEvent(new Event('click'));
});
}
//Function does nothing, for a given amount of time
function sleep (time) {
return new Promise((resolve) => setTimeout(resolve, time));
}