'use strict';
function map_to_even(collection){
  // return [2,4,6,8,10];
  let returnArray = [];
  collection.forEach(function(element){
  	returnArray.push(element * 2);
  });
  return returnArray;
}
module.exports = map_to_even;
