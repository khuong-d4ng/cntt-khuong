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
window.addEventListener("DOMContentLoaded", function () {
  var rightSectionHome = document.querySelector(".right-container-home");
  var rSectionSlider = document.querySelector(".rSection-slider");

  function hideRightSectionHome() {
    rightSectionHome.style.display = "none";
    rSectionSlider.style.display = "block";
  }

  function showRightSectionHome() {
    rightSectionHome.style.display = "block";
    rSectionSlider.style.display = "none";
  }

  if (window.innerWidth < 500) {
    hideRightSectionHome();
  } else {
    showRightSectionHome();
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth < 500) {
      hideRightSectionHome();
    } else {
      showRightSectionHome();
    }
  });
});
