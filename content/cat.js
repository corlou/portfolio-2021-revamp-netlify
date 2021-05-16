/**
 * This function finds the #cat element, and updates it's classes
 * from ".cat-start" to ".cat-end", which triggers a css animation
 */
const walkTheCat = function () {
  // Find all .cat elements
  const allCatElements = document.getElementsByClassName('cat');

  // Pick out the first one
  const firstCatElement = allCatElements[0];

  // If he hasn't walked across, attach the class to make him walk,
  // otherwise remove the class so he walks back
  firstCatElement.classList.toggle('cat-walk');
};