/*
Filename: complexCode.js
Description: Complex JavaScript code example
*/

// Constants
const MAX_RETRIES = 3;
const API_URL = "https://api.example.com/";

// Global variables
let globalCounter = 0;
let dataStore = {};

// Helper functions
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          resolve(response.json());
        } else {
          reject(new Error("Failed to fetch data"));
        }
      })
      .catch(error => {
        reject(new Error(`Failed to fetch data: ${error.message}`));
      });
  });
}

function processResponse(response) {
  if (response.status === "success") {
    const result = response.data * globalCounter;
    dataStore[response.id] = result;
    return result;
  } else {
    throw new Error(response.message);
  }
}

// Main function
async function complexCodeExample() {
  try {
    for (let i = 0; i < MAX_RETRIES; i++) {
      console.log(`Attempt ${i+1}`);
      const response = await fetchData(API_URL);
      const result = processResponse(response);
      globalCounter += result;
      console.log(`Current counter: ${globalCounter}`);
    }

    console.log("Data Store:");
    Object.keys(dataStore).forEach(key => {
      console.log(`${key}: ${dataStore[key]}`);
    });

    console.log("Complex Code Execution Completed");
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

// Execute the main function
complexCodeExample();