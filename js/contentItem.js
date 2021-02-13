class ContentItem {
    constructor(el) {
        this.DOM = {el: el};

        Splitting();

        this.DOM.title = this.DOM.el.querySelector('.content__title-inner');
        this.DOM.number = this.DOM.el.querySelector('.content__title-number');
        this.DOM.imgs = [...this.DOM.el.querySelectorAll('.gallery__item-imginner')];
        this.DOM.caption = {
            title: this.DOM.el.querySelectorAll('.gallery__item-caption > .gallery__item-title'),
            meta: this.DOM.el.querySelectorAll('.gallery__item-caption > .gallery__item-meta')
        }
    }
}