import "./css/style.css";
import Popover from "./js/Popover";

document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll('[data-toggle="popover"]');
  triggers.forEach((btn) => {
    const popover = new Popover(btn, {
      title: btn.dataset.title,
      content: btn.dataset.content,
    });
    btn.addEventListener("click", () => popover.toggle());
  });
});
