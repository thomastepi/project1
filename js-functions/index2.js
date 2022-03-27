 
/* set timer function an example of a higher order function that takes another function as parameter */
/*setTimeout(function () {
    const time = 3;
    console.log(`Call after: ${time} seconds`)
}, 3000); */

const arrayOfArray = [10, 20, 30, 40, 50];
/* let result = [];

for (let i = 0; i < arrayOfArray.length; i++) {
    result.push(arrayOfArray[i] * 2); 
}

console.log(arrayOfArray);
console.log(result); */

// .map() is a higher order function used on Arrays

const result2 = arrayOfArray.map((element) => {  // element will iterate every array element similarly like the for loop does
  return element * 2
});

console.log(result2);
console.log('obtained from map() funtion: ' + result2);