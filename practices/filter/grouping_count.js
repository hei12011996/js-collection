'use strict';

function grouping_count(collection) {

  //implement here
  let returnCountMap = {};
  collection.filter(element => {
    if(returnCountMap[element] === undefined){
      returnCountMap[element] = 1;
    } else {
      returnCountMap[element]++;
    }
  });
  return returnCountMap;
}

module.exports = grouping_count;
