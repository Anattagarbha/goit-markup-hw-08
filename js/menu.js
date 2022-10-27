(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mobile-open-btn"),
    closeMenuBtn: document.querySelector(".mobile-menu__close-btn"),
    menu: document.querySelector(".mobile-menu"),
    body: document.querySelector("body"),
    menuList: document.querySelector(".mobile-menu__list"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  refs.menuList.addEventListener("click", removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
    refs.body.classList.toggle("no-scroll");
  }

  function removeMenu() {
    refs.menu.classList.add("is-hidden");
  }
})();
