// const getFirstSelector = function() {
//   return document.querySelector('div');
// }

function getFirstSelector(selectors) {
  return document.querySelector(selectors);
}

const lis = document
  .getElementById('app')
  .querySelectorAll('ul.ranked-list li');

for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString();
}

function nestedTarget() {
  return document.getElementsByClassName('nested');
}
console.log(nestedTarget())
