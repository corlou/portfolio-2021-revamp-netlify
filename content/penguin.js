/**
 * This function finds the #penguin element, and updates it's classes
 * from ".penguin-start" to ".penguin-end", which triggers a css animation
 */
const slideThePenguin = function () {
  // Find all .penguin elements
  const allPenguinElements = document.getElementsByClassName('penguin');

  // Pick out the first one
  const firstPenguinElement = allPenguinElements[0];

  // If he hasn't slid across, attach the class to make him slide,
  // otherwise remove the class so he slides back
  firstPenguinElement.classList.toggle('penguin-slide');
};