const tabItems = document.querySelectorAll(".tab-item");
const tabContentItem = document.querySelectorAll(".tab-content-item");
function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}
function removeShow(tabContentId) {
  tabContentItem.forEach((item) => item.classList.remove("show"));
}

function selectItem(e) {
  removeBorder();
  removeShow();
  // add border
  this.classList.add("tab-border");
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //   add show class

  tabContentItem.classList.add("show");
}

tabItems.forEach((item, index) => {
  item.addEventListener("click", selectItem);
});
