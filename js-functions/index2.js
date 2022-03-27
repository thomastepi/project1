
/* set timer function an example of a higher order function that takes another function as parameter */
setTimeout(function () {
    const time = 3;
    console.log(`Call after: ${time} seconds`)
}, 3000);