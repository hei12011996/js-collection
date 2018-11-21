'use strict';
var map_to_four_multiples_add_one = function(collection){
  // return [5,9,13,17,21];
  let returnArray = [];
  collection.forEach(function(element){
  	returnArray.push(element * 4 + 1);
  });
  return returnArray;
};

module.exports = map_to_four_multiples_add_one;
