'use strict';

function double_to_one(collection) {
	collection=collection.join(',').split(',');
	collection=collection.join(',').split(',');
	for(var i=0;i<collection.length;i++){
		collection[i]=parseInt(collection[i]);
	}
 	var result = [], hash = {};
	for (var i = 0, elem; (elem = collection[i]) != null; i++) {
  	if (!hash[elem]) {
  		result.push(elem);
  		hash[elem] = true;
  	}
	}
  return result ; 
}

module.exports = double_to_one;
