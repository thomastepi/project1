// const greet = () => {
//     console.log("Hi! My name is Thomas");
// };
//
// const myGender = () => {
//     console.log("I am a boy");
// };
//
//
// setTimeout(greet, 3000);
//
//
// myGender();

function trackUser() {
  //setTimer callback is nested in the position callback
  //having a callback nested in another callback can make code hard to read
  //which brings us to the concept of promises
  navigator.geolocation.getCurrentPosition(position => { setTimeout(()=>{
    console.log(position);}, 2000);
  }, error => {
    console.log(error);
  });
}
//test = () => {alert('this is a test');}
document.querySelector("button").addEventListener('click',trackUser);
