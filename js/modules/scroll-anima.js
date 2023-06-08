import debounce from "./debounce.js";

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.dale = debounce(this.dale.bind(this), 50);

    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // pega a distancia de cada item em relação
  // ao topo do site]
  // eslint-disable-next-line class-methods-use-this
  dale() {
    console.log("dale po");
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // verifica a distancia em cada objeto
  // em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
      window.addEventListener("scroll", this.dale);
    }
    return this;
  }

  // remove o Event de scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
