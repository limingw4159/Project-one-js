window.addEventListener("load", function () {
  var nav_lis = document.querySelector(".nav__right");
  var lis = nav_lis.querySelectorAll("li");
  var mainHome = document.querySelectorAll(".mainhome");
  init(mainHome);

  for (let i = 0; i < lis.length; i++) {
    lis[i].setAttribute("index", i);
    lis[i].onclick = function () {
      for (let i = 0; i < lis.length; i++) {
        lis[i].className = "";
        var index = this.getAttribute("index");
        for (let i = 0; i < mainHome.length; i++) {
          mainHome[i].style.display = "none";
        }

        mainHome[index].style.display = "block";
      }
      this.className = "current";
    };
  }
});

function init(mainHome) {
  for (let i = 0; i < mainHome.length; i++) {
    mainHome[i].style.display = "none";
  }
  mainHome[0].style.display = "block";
}
