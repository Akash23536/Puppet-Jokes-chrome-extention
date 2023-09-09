// https://icanhazdadjoke.com/slack           // english jokes url
// https://hindi-jokes-api.onrender.com/jokes?api_key=1f2f44b6d56ff4f906c94e61a69f             // hindi jokes url 

fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=1f2f44b6d56ff4f906c94e61a69f') 
.then(data=>data.json())
.then(jokeData =>{
// const jokeText=jokeData.attachments[0].text;              //for english url
const jokeText=jokeData.jokeContent;
const jokeElement = document.getElementById('jokeElement');
jokeElement.innerHTML = jokeText;

})


