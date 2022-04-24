const div = document.querySelector('.my-div');
const url = 'https://restcountries.com/v2/all';

async function getAllCountriesApi() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    data.filter((item)=>{
        if(item.population > 100000000){
            const newTag = document.createElement('li');
            newTag.innerHTML = item.name + ': ' + item.population
            div.appendChild(newTag);
        }
    })
   
}
getAllCountriesApi();

