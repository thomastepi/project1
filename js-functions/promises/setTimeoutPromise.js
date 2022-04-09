
let myPromiseObj = new Promise(function(myResolve, myReject){

    setTimeout(() => {

        myResolve('this will display after 3 seconds');

    }, 3000)
})

myPromiseObj.then(function (value){
    timeoutDisplay(value)
}, 
function(err) {
    console.log(err);
})



//setTimeout(timeoutDisplay, 3000)
function timeoutDisplay(someValue) {
    document.getElementById("setTimeout").innerHTML = someValue;
}


//timeoutDisplay();