const lod = require('lodash');



//testing lodash function on object
let obj = {'name': 'suyash', 'lname': 'gupta', 'designation': 'SE'};
console.log('lname is present', lod.some(obj, 'name'));

//testing values for lodash
console.log('lname is present in array of values', lod.values(obj));



//testing lodash function on array of object
object = [{'name': 'suyash', 'lname': 'gupta', 'designation': 'SE'}];

console.log('lname is present in array of object', lod.some(object, {'name':'suyash'}));