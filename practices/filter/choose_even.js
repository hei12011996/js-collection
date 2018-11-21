'use strict';

function choose_even(collection) {

  //implement here
  let returnArray = [];
  collection.forEach(function(element){
  	if(element % 2 == 0){
  		returnArray.push(element);
  	}
  });
  return returnArray;
}

module.exports = choose_even;
