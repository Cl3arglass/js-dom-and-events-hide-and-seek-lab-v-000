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

  return document.querySelector('div.target');

}

function deepestChild() {
  return  document.querySelectorAll('div#grand-node div')[3];
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll( '.ranked-list' )
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]

  let children1 = firstList.children

  for ( let i = 0, l = children1.length; i < l; i++ ) {
    children1[ i ].innerHTML = parseInt(children1[ i ].innerHTML) + n;
  }

  // let children2 = secondList.children
  //
  //
  // for ( let i = 0, l = children2.length; i < l; i++ ) {
  //   children2[ i ].innerHTML = parseInt(children2[ i ].innerHTML) + n;
  // }
  console.log(secondList.children[0].innerHTML);
}
