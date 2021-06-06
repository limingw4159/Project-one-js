const navSlide = () => {
  const menu = document.querySelector(".fa-list");
  const nav = document.querySelector("nav>ul");

  menu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    console.log(nav);
  });
  nav.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    nav.classList.toggle("nav-nonactive");
  });
};

navSlide();
