'use strict';

function double_to_one(collection) {
  collection=collection.join(',').split(',');
  return collection ;
}

module.exports = double_to_one;
