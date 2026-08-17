const arr=[3453,'hello',true,null];

console.log(Array.isArray(arr));

const movies=['spiderman','Avenger','conjuring','obsession','dunkirk','tenet'];

console.log(movies.length);

console.log(movies[2]);
console.log(movies.indexOf('dunkirk'));
console.log(movies.indexOf('doctor america'));

console.log(movies.at(-3));

movies[2]='Annabelle';

console.log(movies);

// slicing

console.log(movies.slice(2,5));
console.log(movies.slice(3,6));
console.log(movies.slice(3,20));
console.log(movies.slice(2));

// Adding and removing element 

movies.push('Dr. Strange');// add at last
movies.unshift(); // this will add element at first position
console.log(movies);

movies.pop(); // this will remove last element
movies.shift();  //this will remove first element automatically
console.log(movies);

movies.splice(2,2);
console.log(movies);

movies.splice(1,3);// removing elements
console.log(movies);

movies.splice(1,1 ,'smurf','godfather','Dark knight'); // replaced element with deleted items
console.log(movies);

movies.splice(1,0,'Fight club','mortal combat');
console.log(movies);

