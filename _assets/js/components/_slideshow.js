// ----------------------------------------------
// Imports
// ----------------------------------------------
import $ from 'jquery';

// ----------------------------------------------
// Slideshow
// ----------------------------------------------
const Slideshow = (() => {
  let s;

  return {
    settings() {
      return {
        html: $('html'),
        body: $('body'),
        open: 'js-slideshow-open',
        overflow: 'js-overflow',
        closing: 'js-slideshow-closing'
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      this.toggleSlideshow();
    },

    toggleSlideshow() {
      $('.slideshow__open').on('click', (event) => {
        console.log(event)
        s.body.addClass(s.open);
        s.html.addClass(s.overflow);
      });

      $('.slideshow').on('click', e => {
        if (!$(e.target).closest('.slideshow__container').length) {
          Slideshow.slideshowClose();
        }
      });

      $('.slideshow-left').on('click', e => {
        console.log("left!", e);
      });

      $('.slideshow-right').on('click', e => {
        console.log("right!", e);
      });

      s.body.on('keyup', e => {
        if (s.body.hasClass(s.open) && e.which === 27) {
          Slideshow.slideshowClose();
        }
      });
    },

    slideshowClose() {
      s.body.addClass(s.closing);
      s.body.removeClass(s.open);
      s.html.removeClass(s.overflow);

      setTimeout(() => {
        s.body.removeClass(s.closing);
      }, 800);
    }
  };
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Slideshow;
