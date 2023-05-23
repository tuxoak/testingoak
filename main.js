//const url = 'https://dog.ceo/api/breeds/image/random';
//const section = document.querySelector('.container');
//const button = document.querySelector('.btn');

//button.addEventListener('click', getRandomDogs);

//randomDogPhoto = json => {
    //let photo = json[0].url;
    //section.classList.add('dogs');

    //let image = document.createElement('img');
    //image.src = photo;
    //image.classList.add('random_dogs');
    //image.alt = photo;
    //section.appendChild(image);
//};

//async function getRandomDogs() {
    //section.innerHTML = ''
    //try {
        //const response = await fetch(url);
        //const json = await response.json();
        //console.log('JSON:', json);
        //return randomDogPhoto(json);
    //} catch (e) {
        //console.log('this is an error')
        //console.log(e);
    //}
//}

var name = 'randomDog'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/dogs?name=' + name,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});