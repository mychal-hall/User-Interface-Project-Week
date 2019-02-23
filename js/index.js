// JS goes here

const menuButton = document.querySelector(".menuButton");
const navMenu = document.querySelector(".links");
const navLink = document.querySelectorAll(".menuLink");


menuButton.addEventListener("click", event => {
  menuButton.classList.toggle("open");
});
menuButton.addEventListener("click", event =>
  navMenu.classList.toggle("hidden")
);

class TabLink {
  constructor(tablink) {
    this.tablink = tablink;
    this.data = this.tablink.dataset.tab;
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab="${this.data}"]`
    );
    this.tabItem = new TabItem(this.itemElement);
    this.tablink.addEventListener("click", () => {
      this.select();
    });
  }

  select() {
    const links = document.querySelectorAll(".tabs-link");
    Array.from(links).forEach(link => {
      link.classList.remove("tabs-link-selected");
    });
    this.tablink.classList.add("tabs-link-selected");
    this.tabItem.select();
  }
}
class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll(".tabs-item");
    items.forEach(item => item.classList.remove("tabs-item-selected"));
    this.element.classList.add("tabs-item-selected");
  }
}

links = document.querySelectorAll(".tabs-link")
                .forEach(tablink => new TabLink(tablink));


// const timeline = new TimelineMax({ paused: true, reversed: true });
// timeline.to('.links', 1, { opacity: 0.9});

// menuButton.addEventListener('click', function() {   
//   timeline.reversed() ? timeline.play() : timeline.reverse();
// });

// menuButton.addEventListener("click", event =>
// TweenMax.to('.links', 1, { opacity: 1, ease: Power4.easeIn})