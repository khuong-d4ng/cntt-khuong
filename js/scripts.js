window.addEventListener("DOMContentLoaded", function() {
    var anhCanXoaElements = document.querySelectorAll(".anh-can-xoa");
    var divToResize = document.getElementsByClassName("anh-giu-lailai")[0];
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
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
      screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if (screenWidth < 500) {
        hideAnhCanXoaElements();
      } else {
        showAnhCanXoaElements();
      }
    }
  
    checkScreenWidth();
  
    window.addEventListener("resize", function() {
      checkScreenWidth();
    });
  });