// Write your solution here!
const cats = ['Milo','Otis','Garfield']


function destructivelyAppendCat(name){
  name = cats.push('Ralph')
}

function destructivelyPrependCat(name){
  name = cats.unshift('Bob')
}

function destructivelyRemoveLastCat(name){
  name = cats.pop()
}
function destructivelyRemoveFirstCat(name){
  name = cats.shift()
}

function appendCat(name){
  return [...cats,name]
 





}
  
function prependCat(name){
  return [name,...cats]
}
function removeLastCat(){
  return cats.slice(0,cats.length -1)
  
}
 function removeFirstCat(){
  return cats.slice(1)
 }





  









// function prependCat(name){

// }
