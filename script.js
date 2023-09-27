window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


  window.addEventListener("scroll", function() {
    var scrollTop = window.scrollY;
    if (scrollTop > 3390) {
      // Animate the left and right divs in from the sides
      document.querySelector(".left-div").style.left = "0";
      document.querySelector(".right-div").style.right = "0";
      

    } else {
      // Animate the left and right divs back out to the sides
      document.querySelector(".left-div").style.left = "-100%";
      document.querySelector(".right-div").style.right = "-100%";
    }
  });

