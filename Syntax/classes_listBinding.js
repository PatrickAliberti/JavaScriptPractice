class ListBinding {
  constructor(element) {
    this.listElement = element;
    this.textList = ["dcode", "bottle"];
  }

  // Creates an <li>txt</li> element
  static createListItem(txt) {
    const li = document.createElement("li");
    li.textContent = txt;

    return li;
  }

  update() {
    // Remove the existing <li> tags
    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }

    // Fill the <ul> / <li> tag with <li>
    for (const text of this.textList) {
      this.listElement.appendChild(ListBinding.createListItem(text));
    }
  }
}