const div = document.querySelector('.my-div');

// handling promises
//using .then
// using async await

// axios or fetch(exist by default)
const url = 'https://restcountries.com/v2/all';

async function getAllCountriesApi() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);


    data.forEach(element => {
        //console.log(element);
        const newTag = document.createElement('li');
        newTag.innerHTML = element.name;
        div.appendChild(newTag);
    });

    // data.filter((item)=>{
    //     if(item.population > 100000000){
    //         console.log(item.name + ': ' + item.population)
    //     }
    // })
   
}
getAllCountriesApi();

