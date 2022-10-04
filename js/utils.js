function findElement(selector) {
  return document.querySelector(selector);
}
function findElements(selectors) {
  return document.querySelectorAll(selectors);
}

function createTag(TagName) {
  return document.createElement(TagName);
}
