export default class __Hero {
    constructor(opts) {
        this.el = opts.el;
        this.animationEl = opts.el;
        this.animationEl.innerHTML = this.HTML;
        // this.peopleAnimEl = this.el.querySelector('.wwc16__hero--people')

    }

    get isMobile() {
        return window.innerWidth < 480;
    }

    get HTML() {
        return `
            <div class="wwc16__hero-holder show-non-mobile">
              
            </div>
            <div class="static-image-holder show-mobile"></div>
            `;
    }

    get mobileHTML() {
        return ``;
    }

    // peopleAnimation() {
    //     // height of people sprite 1350
    //     this.peopleRef = (this.peopleRef - 288) % 864;
    //     this.peopleAnimEl.style.backgroundPosition = `center ${this.peopleRef}px`;
    // }

    // startAnimation(fn, interval) {
    //     var raf = window.requestAnimationFrame || ( (fn) => window.setTimeout(fn, 1) );
    //     var animFn = raf.bind(window, fn);
    //     window.setInterval(animFn, interval)
    // }

    // startAnimations() {
    //     this.peopleRef = 0;
    //     this.startAnimation(this.peopleAnimation.bind(this), 150);
    // }

}
