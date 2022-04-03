

    let promiseObj = new Promise((resolve, reject) => {

        resolve('Hello');

        reject('err');
    })



promiseObj.then(function (value){
    console.log('success response: ', value);
    displayMessage()
}, function (error){
    console.log(error);
})

function displayMessage() {
    console.log('Arrange the party...')

}

