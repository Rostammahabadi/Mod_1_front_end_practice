animals = ["pig", "elephant", "lion", "giraffe"]

function nameAnimals(argument) {
  for (i = 0; i!=animals.length; i++) {
    console.log("Mommy, I want to see " + argument[i])
  }
}

nameAnimals(animals)


var pets = [
  {
    name: 'Tilly',
    type: 'cat',
    favoriteTreat: 'cheese',
    human: 'Leta'
  },
  {
    name: 'Sodie',
    type: 'dog',
    favoriteTreat: 'milkbones',
    human: 'Amy'
  },
  {
    name: 'Pumpernickel',
    type: 'cat',
    favoriteTreat: 'kibble',
    human: 'Eric'
  }
];

function getPetNames(objects) {
  var paragraph = ""
  for (i = 0; i!=objects.length; i++) {
    var sentence = objects[i].human + " has a pet " + objects[i].type + " named " + objects[i].name + " who loves " + objects[i].favoriteTreat + ", "
    paragraph += sentence
  }
  return console.log(paragraph)
}

getPetNames(pets)

var dogWalks = [4, 5, 2, 2, 6, 1, 3]

function eachDay(arr) {
  for(i=0; i!= arr.length; i++){
    console.log("Trisha earned $" + arr[i]) + " today!"
  }
}

eachDay(dogWalks)

var dogWalks = [4, 5, 2, 2, 6, 1, 3]

function eachDay(arr) {
  total = 0
  for(i=0; i!=arr.length; i++) {
    total += arr[i]
  }
  return console.log(total)
}

eachDay(dogWalks)

var hourlyPay = [22, 17, 29, 16, 18]

function highestPay(arr) {
  return console.log(Math.max(...arr))
}

highestPay(hourlyPay)
