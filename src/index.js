const allTabs = document.querySelectorAll(".tabs li");
const allContents = document.querySelectorAll(".contents div");
allTabs.forEach(function(element) {
  element.addEventListener("click", function(e) {
    //remove "is-active" class from all the tabs
    allTabs.forEach(function(innerElement) {
      innerElement.classList.remove("is-active");
    });
    element.classList.add("is-active");
    allContents.forEach(function(content) {
      content.classList.remove("active");
      content.classList.add("inactive");
    });
    allContents[element.dataset.tab].classList.add("active");
    allContents[element.dataset.tab].classList.remove("inactive");
  });
});
