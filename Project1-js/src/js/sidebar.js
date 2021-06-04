const navSlide = () => {
  const menu = document.querySelector(".fa-list");
  const nav = document.querySelector("nav>ul");

  menu.addEventListener("click", () => {
    nav.className = "nav-active";
  });
  nav.addEventListener("click", () => {
    nav.className = "nav-noactive";
  });
};

navSlide();
