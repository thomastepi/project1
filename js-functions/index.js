function showMessage() {
    console.log('Message from normal function');
}

showMessage();

// E6+ arrow functions, higher order functions(map, filter, reduce), let, const :

arrowHeadFunction = () => {
    console.log('Arrow head message');

}

arrowHeadFunction();

// passing parameters
passingParam = (param1) => {
    console.log('this param was passed => ' + param1);

}
passingParam(2022);