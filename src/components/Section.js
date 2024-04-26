class Section {
  constructor({ data, renderer }, containerSelector) {
    this._initialArray = data;
    this._renderer = cardRenderer
    this._container = document.querySelector(containerSelector);
  }

    renderItems() {
  // Iterate over the _renderedItems array of messages
  this._initialArray.forEach((item) => {

    // Based on the isOwner field, create instances of the classes
    const card = item.isOwner ? 
        new UserCard(item, ".card-template_type_user") : new DefaultCard(item, ".card-template_type_default");

    const cardElement = card.generateCard();

    // Insert the markup on the page
    // using the setItem() method of the Section() class
    this.setItem(cardElement);
  }); 

    setItem(element) {
    this._container.append(element);
  }
}