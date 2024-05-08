const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

var clickCount = 0;
//console.log('Click Count:', clickCount);
var card1 = 0;
var card2 = 0;
  
// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  clickCount++;
  //console.log('Click Count:', clickCount);
  //console.log('You Just Clicked: ', event.target);
  var cardColor = event.target.className;
  //console.log('Card Color Is: ', cardColor);
  
  if (clickCount === 1) {
    card1 = event.target;
    card1.style.backgroundColor = cardColor;
    //console.log('Card 1: ', card1);
  }
  else if (clickCount === 2) {
    if (event.target === card1) {
      console.log('Invalid Choice');
      setTimeout(() => {
        card1.style.backgroundColor = 'white';
        clickCount = 0;
      }, 1000);
    }
    else {
      card2 = event.target;
      card2.style.backgroundColor = cardColor;
    //console.log('Card 2: ', card2);
      if (card1.className === card2.className) {
        console.log('MATCH!!!');
        clickCount = 0;
      }
      else {
        console.log('Not a Match :(');
        setTimeout(() => {
          card1.style.backgroundColor = 'white';
          card2.style.backgroundColor = 'white';
          clickCount = 0;
        }, 1000);
      }
    }
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
