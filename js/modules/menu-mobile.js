import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuListevents, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuListevents);

    // define touchstart e click como argumento padrao
    // de events caso o usuario não defina
    this.activeClass = "active";
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
