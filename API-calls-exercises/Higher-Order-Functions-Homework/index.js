
// Question 1
// the reduce() method iterates through the elements of an array and reduces the array to a single value.
// it takes in two parameters: the initialValue(or previously returned value), and the currentValue (value
// of the current element)
const nums = [10, 40, 50, 60];
const ans = nums.reduce(function(initVal, currentVal) {
    return initVal + currentVal;
}, 0);

document.getElementById("question-1").innerHTML = "answer is: " + ans;


// Question 2
const object = [
    {Id: 1, Name: "John", Age: 25},
    {Id: 2, Name: "Sam", Age: 28},
    {Id: 3, Name: "Sara", Age: 23},
]
const obj = object.filter(myFunction)

const names25AndBelow = obj.map(function(item){
  return item.Name;
})
document.getElementById("question-2").innerHTML = names25AndBelow;


function myFunction(item) {
   if(item.Age <= 25) {
     return true;
   }
}


// Question 3
const nums2 = [10, 40, 50, 60];
const nums2By3 = nums2.map(function(item){
    return item * 3;
})
document.getElementById("question-3").innerHTML = "answer is: " + nums2By3;

// Question 4
const nums3 = [10, 40 ,50, 60, 5, 23, 24];

const isEven = nums3.filter(function(item){
   if(item % 2 === 0) {
      return true;
   }
})
document.getElementById("question-4").innerHTML = "answer is: " + isEven;

// Question 5
for (var i = 1; i <= 5; i++){
    printVal(i);
}
function printVal(i) {
    setTimeout(function(){
      document.getElementById("question-5").innerHTML = i;
    },i*2000);
}
