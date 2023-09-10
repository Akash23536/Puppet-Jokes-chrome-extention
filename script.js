// fetch('https://icanhazdadjoke.com/slack')  // english jokes url
// .then(data=>data.json())
// .then(jokeData =>{
// const jokeText=jokeData.attachments[0].text;              //for english url
// const jokeElement = document.getElementById('jokeElement');
// jokeElement.innerHTML = jokeText;
// })

async function fetchAndDisplayJoke() {
    try {
      // Fetch the joke data
      const response = await fetch('https://icanhazdadjoke.com/slack');
      if (!response.ok) {
        throw new Error('Failed to fetch joke');
      }
      // Parse the JSON response
      const jokeData = await response.json();
      // Extract the joke text
      const jokeText = jokeData.attachments[0].text;
      // Get the HTML element
      const jokeElement = document.getElementById('jokeElement');
      // Display the joke text on the web page
      jokeElement.innerHTML = jokeText;
    } catch (error) {
      console.error(error);
    }
  }
  // Call the async function to fetch and display the joke
  fetchAndDisplayJoke();

// ---------------------------------------------------------------------------------------------------


// fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=1f2f44b6d56ff4f906c94e61a69f')    // hindi jokes url 
// .then(data=>data.json())
// .then(jokeData =>{
// const jokeText=jokeData.jokeContent;      //for hindi jokes url
// const jokeElement = document.getElementById('jokeElement');
// jokeElement.innerHTML = jokeText;
// })



async function fetchAndDisplayHindiJoke() {
    try {
      // Fetch the Hindi joke data
      const response = await fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=1f2f44b6d56ff4f906c94e61a69f');
      if (!response.ok) {
        throw new Error('Failed to fetch Hindi joke');
      }
      // Parse the JSON response
      const jokeData = await response.json();
      // Extract the joke text
      const jokeText = jokeData.jokeContent;
      // Get the HTML element
      const jokeElement = document.getElementById('jokeElement');
      // Display the joke text on the web page
      jokeElement.innerHTML = jokeText;
    } catch (error) {
      console.error(error);
    }
  }
  // Call the async function to fetch and display the Hindi joke
  fetchAndDisplayHindiJoke();
  
