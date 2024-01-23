export default class MouseDocumengtMove {
  constructor(option) {
    const { element, ease = 0.025 } = option;

    const state = {
      element: document.querySelector(element),
      lFollowX: 0,
      lFollowY: 0,
      x: 0,
      y: 0,
      ease,
      w: document.body.offsetWidth || document.body.clientWidth,
      h:
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight,
    };

    for (let key in state) {
      this[key] = state[key];
    }

    this.init();
    this.move();
  }

  init() {
    this.x += (this.lFollowX - this.x) * this.ease;
    this.y += (this.lFollowY - this.y) * this.ease;

    this.element.style.transform =
      "translate3d(" + this.x + "px, " + this.y + "px,0)";

    window.requestAnimationFrame(() => {
      this.init();
    });
  }

  move() {
    window.addEventListener("mousemove", (e) => {
      let lMouseX = Math.max(-100, Math.min(100, this.w / 2 - e.clientX));
      let lMouseY = Math.max(-100, Math.min(100, this.h / 2 - e.clientY));

      this.lFollowX = (25 * lMouseX) / 100;
      this.lFollowY = (25 * lMouseY) / 100;
    });
  }
}
