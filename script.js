// script.js

function highlight() {
  // Get all <strong> elements in the second paragraph
  const boldWords = document.querySelectorAll('p:nth-of-type(2) strong');

  // Change the color of each bold word to green
  boldWords.forEach(word => {
    word.style.color = 'green';
  });
}

function return_normal() {
  // Get all <strong> elements in the second paragraph
  const boldWords = document.querySelectorAll('p:nth-of-type(2) strong');

  // Revert the color of each bold word back to black
  boldWords.forEach(word => {
    word.style.color = 'black';
  });
}
