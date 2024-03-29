// Write your code here!
document.querySelector('main#main').remove();

// Create a new header element
const newHeader = document.createElement('h1');

// Set the id attribute of the new header element to 'victory'
newHeader.id = 'victory';

// Set the innerHTML of the new header element
newHeader.innerHTML = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your actual name

// Append the new header element to the document body
document.body.appendChild(newHeader);

// Export the newHeader variable for testing
module.exports = { newHeader };