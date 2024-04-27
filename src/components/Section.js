export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._element = document.querySelector(selector);
  }

  renderItems() {
    this._items.forEach((items) => {
      this._renderer(items);
    });
  }

  addItems() {
    this._element.append(this._items);
  }
}
