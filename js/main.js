function onClickMenu() {
  document.getElementById("menu").classList.toggle("change")
  document.getElementById("nav").classList.toggle("change")
  document.getElementById("menu-bg").classList.toggle("change-bg")
}
// carousel
let items = document.getElementsByClassName("item")

var baseTransform = "translateX(-50%) translateY(-50%)"

for (let item of items) {
  item.addEventListener("click", function (event) {
    moveTo(event.target.dataset.index)
  })
}

function moveTo(toIndex) {
  for (let item of items) {
    let itemIndex = item.dataset.index
    let delta = itemIndex - toIndex
    item.style.transform =
      baseTransform +
      " translateZ(-" +
      Math.abs(delta) * 500 +
      "px) translateX(" +
      delta * 100 +
      "px)"
  }
}

moveTo(3)
