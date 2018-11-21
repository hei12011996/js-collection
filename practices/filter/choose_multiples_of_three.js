'use strict';

function choose_multiples_of_three(collection) {

  //implement here
  let returnArray = [];
  collection.forEach(function(element){
  	if(element % 3 == 0){
  		returnArray.push(element);
  	}
  });
  return returnArray;
}

module.exports = choose_multiples_of_three;
