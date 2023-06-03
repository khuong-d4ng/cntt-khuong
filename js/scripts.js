function includeHTML() {
  var elements = document.querySelectorAll("[include-html]");
  elements.forEach(function (element) {
    var file = element.getAttribute("include-html");
    if (file) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            element.innerHTML = this.responseText;
            // chỉ chạy js sau khi html được include hoàn chỉnh, tránh kiểu include vào xong ko dùng đc js :)
            var scripts = element.getElementsByTagName("script");
            for (var i = 0; i < scripts.length; i++) {
              eval(scripts[i].text);
            }
          }
          if (this.status == 404) {
            element.innerHTML = "Page not found.";
          }
          element.removeAttribute("include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  });
}

var parentItems = document.querySelectorAll("#menu .menu-parent > li");
  var dropdownItems = document.querySelectorAll("#menu .submenu > li");

  // Hover vào phần tử cha
  parentItems.forEach(function (item) {
    var parentLink = item.querySelector("a");

    item.addEventListener("mouseenter", function () {
      if (!parentLink.classList.contains("textHome")) {
        parentLink.style.fontSize = "18px";
        parentLink.style.backgroundImage =
          "linear-gradient(to right, rgb(253, 211, 0), rgb(254, 0, 0))";
        parentLink.style.webkitBackgroundClip = "text";
        parentLink.style.webkitTextFillColor = "transparent";
        parentLink.style.backgroundClip = "text";
      }
    });

    item.addEventListener("mouseleave", function () {
      if (
        !item.classList.contains("active") &&
        !parentLink.classList.contains("textHome")
      ) {
        parentLink.style.fontSize = "16px";
        parentLink.style.backgroundImage = "none";
        parentLink.style.webkitBackgroundClip = "initial";
        parentLink.style.webkitTextFillColor = "initial";
        parentLink.style.backgroundClip = "initial";
      }
    });

    // Hover vào phần tử con
    var submenu = item.querySelector(".submenu");
    if (submenu) {
      submenu.addEventListener("mouseenter", function () {
        if (!parentLink.classList.contains("textHome")) {
          parentLink.style.fontSize = "18px";
          parentLink.style.backgroundImage =
            "linear-gradient(to right, rgb(253, 211, 0), rgb(254, 0, 0))";
          parentLink.style.webkitBackgroundClip = "text";
          parentLink.style.webkitTextFillColor = "transparent";
          parentLink.style.backgroundClip = "text";
        }
      });

      submenu.addEventListener("mouseleave", function () {
        if (
          !item.classList.contains("active") &&
          !parentLink.classList.contains("textHome")
        ) {
          parentLink.style.fontSize = "16px";
          parentLink.style.backgroundImage = "none";
          parentLink.style.webkitBackgroundClip = "initial";
          parentLink.style.webkitTextFillColor = "initial";
          parentLink.style.backgroundClip = "initial";
        }
      });
    }
  });

/** ĐOẠN NÀY ĐỂ CUỘN XUỐNG PHẦN HOT TOUUR KHI CLICK NÀO NEW! */

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
  });
}

/* ĐIỀU KIỆN CHO QUẢ RESPONSIVE ĐỈNH CAO: TRÊN 500PX THÌ HIỂN THỊ rSECTION HOME BÌNH THƯỜNG(BẢN DESKTOP) 
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


/* stories slider, left stories*/
$(document).ready(function () {
  var windowWidth = $(window).width();
  var slideToShowNumber = 2;
  var slideScrollNumber = 2;

  if (windowWidth < 600) {
    slideToShowNumber = 1;
    slideScrollNumber = 1;
  }
  $("#stories-slider").slick({
    lazyLoad: "ondemand",
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
      lazyLoad: "ondemand",
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

const emailInput = document.getElementById("email-input");
      const userLabel = document.querySelector(".user-label");

      emailInput.addEventListener("input", function () {
        if (this.value !== "") {
          this.classList.add("input-filled");
          userLabel.classList.add("label-filled");
        } else {
          this.classList.remove("input-filled");
          userLabel.classList.remove("label-filled");
        }
      });
      const emailInputFocus = document.getElementById("email-input");
      const userLabelFocus = document.querySelector(".user-label");
      const defaultLabelText = "Hãy cho chúng tôi biết đánh giá của bạn!";
      const newLabelText = "Hãy nhập email để gửi đánh giá";

      emailInputFocus.addEventListener("focus", function () {
        userLabelFocus.textContent = newLabelText;
      });

      emailInputFocus.addEventListener("blur", function () {
        if (this.value === "") {
          userLabelFocus.textContent = defaultLabelText;
        }
      });

//cuộn
window.addEventListener("scroll", myScrollHandler, { passive: true });
