// script.js

// Function to generate a random color
function getRandomColor() {
    // Generating random values for red, green, and blue channels
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    
    // Constructing the color in RGB format
    var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    
    return randomColor;
}

// Function to change the background color of the color box
function changeColor() {
    var colorBox = document.getElementById('color-box');
    // Setting the background color to a random color
    colorBox.style.backgroundColor = getRandomColor();
}

// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Selecting the color-box and change-color-btn elements
    var colorBox = document.getElementById('color-box');
    var changeColorBtn = document.getElementById('change-color-btn');

    // Adding event listener to the change-color-btn element
    changeColorBtn.addEventListener('click', changeColor);
});
