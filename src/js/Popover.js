export default class Popover {
  constructor(anchor, { title, content }) {
    this.anchor = anchor;
    this.title = title;
    this.content = content;
    this.element = null;
  }

  show() {
    this.element = document.createElement("div");
    this.element.classList.add("popover");
    this.element.innerHTML = `<div class="popover-header">${this.title}</div><div class="popover-body">${this.content}</div>`;
    document.body.appendChild(this.element);

    const anchorRect = this.anchor.getBoundingClientRect();
    const popoverWidth = this.element.offsetWidth;
    const popoverHeight = this.element.offsetHeight;

    const left =
      anchorRect.left +
      window.scrollX +
      anchorRect.width / 2 -
      popoverWidth / 2;
    const top = anchorRect.top + window.scrollY - popoverHeight - 8;

    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
  }

  hide() {
    if (this.element) {
      this.element.remove();
      this.element = null;
    }
  }

  toggle() {
    if (this.element) {
      this.hide();
    } else {
      this.show();
    }
  }
}
