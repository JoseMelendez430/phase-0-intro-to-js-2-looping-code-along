for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);
function writeCards(names, eventName) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      messages.push(message);
    }
  
    return messages;
  }
  
  const result = writeCards(["Guadalupe", "Ollie", "Aki"], "birthday");
  console.log(result); // Output: ["Thank you, Guadalupe, for the wonderful birthday gift!", "Thank you, Ollie, for the wonderful birthday gift!", "Thank you, Aki, for the wonderful birthday gift!"]
function plantGarden() {
    let keepWorking = true;
    while (keepWorking) {
      chooseSeedLocation();
      plantSeed();
      waterSeed();
      keepWorking = checkForMoreSeeds();
    }
  }
  function countDown(number) {
    if (number < 1) {
      console.log("Please enter a positive integer.");
      return;
    }
  
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }