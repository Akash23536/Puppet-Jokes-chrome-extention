async function fetchAndDisplayEnglishJoke() {
    try {
        // Fetch the joke data
        const response = await fetch('https://icanhazdadjoke.com/slack');
        if (!response.ok) { throw new Error('Failed to fetch joke'); }
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

async function fetchAndDisplayHindiJoke() {
    try {
        // Fetch the Hindi joke data
        const response = await fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=1f2f44b6d56ff4f906c94e61a69f');
        if (!response.ok) { throw new Error('Failed to fetch Hindi joke'); }
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

fetchAndDisplayEnglishJoke();

// Get a reference to the Language button by its ID
const languageEnglishButton = document.getElementById('RightLanguageButton');
// Define an onclick function for the Language button
languageEnglishButton.onclick = function () {
    // Call the fetchAndDisplayHindiJoke function when the Language button is clicked
 // Call the async function to fetch and display the joke by default on first run
fetchAndDisplayEnglishJoke();
};


// Get a reference to the Language button by its ID
const languageHindiButton = document.getElementById('leftLanguageButton');
// Define an onclick function for the Language button
languageHindiButton.onclick = function () {
    // Call the fetchAndDisplayHindiJoke function when the Language button is clicked
    // Call the async function to fetch and display the Hindi joke
    fetchAndDisplayHindiJoke();
};




