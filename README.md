# _Lighthouse Labs - the 21-Day Coding Challenge_

* _[Challenge #1 `.length`](#challenge-1)_
* _[Challenge #2 `if-statements`](#challenge-2)_
* _[Challenge #3 `++`](#challenge-3)_
* _[Challenge #4 `.filter`](#challenge-4)_
* _[Challenge #5 `for...of`, `.push`](#challenge-5)_
* _[Challenge #6 `compare two arrays`](#challenge-6)_
* _[Challenge #7 `for...of`](#challenge-7)_
* _[Challenge #8 `object.property`](#challenge-8)_
* _[Challenge #9 `creating object`, `.push`](#challenge-9)_
* _[Challenge #10 `two for-loops`](#challenge-10)_
* _[Challenge #11 `for...in`](#challenge-11)_
* _[Challenge #12 `for...in`, `++` or `.filter`](#challenge-12)_
* _[Challenge #13 `.map`](#challenge-13)_
* _[Challenge #14 `.toFixed(n)`](#challenge-14)_
* _[Challenge #15 ` calculating the position`](#challenge-15)_
* _[Challenge #16 `.sort()`, `.sort((a, b)=> a - b)`](#challenge-16)_
* _[Challenge #17 `.reduce`, `arr.reduce((a, b) => (a > b) ? a : b)-(Sorting)`](#challenge-17)_
* _[Challenge #18 `Object.entries(obj)`, `.map([a , b])`](#challenge-18)_
* _[Challenge #19 `Math.floor`, `working with an object`](#challenge-19)_
* _[Challenge #20 `.map()`, `.reduce((a, b) => a + b, 0))-(Sum all the values of an array)`](#challenge-20)_
* _[Challenge #21 `destructuring - arr.find( ({ a }) => a === 'b' )`, `.includes() -  return true or false`](#challenge-21)_

## Challenge #1

### Instructions:

Given an array of volunteer names and an array of neighbourhood names,
complete the _doorToDoor_ function so that it returns the number of neighbourhoods
each volunteer should visit if the work of going door to door is split evenly amongst them.

### Hint: `.length`
We can use JavaScript's handy built-in `.length` method to get the length of each array! 
This will help you figure out how many volunteers and how many neighbourhoods there are.
```
const volunteers = [
    'Sally',
    'Jake',
    'Brian',
    'Hamid'
];


const neighbourhoods = [
    'Central Valley',
    'Big Mountain',
    'Little Bridge',
    'Bricktown',
    'Brownsville',
    "Paul's Boutique",
    'Clay Park',
    'Fox Nest'
];
    
const doorToDoor = (volunteers, neighbourhoods) => {
    return  (neighbourhoods.length / volunteers.length);
}
console.log(doorToDoor(neighbourhoods, volunteers))

// Output:
// 2
    
```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #2

### Instructions:

Given a question topic, complete a function _interviewAnswer(topic)_ that returns your stance on that
particular election issue. The answer should be returned as a string.

When asked about arts funding, the function should return "We'll have to get creative!"
When asked about the economy, the function should return "Time is money."
When asked about transportation, the function should return "It's going to be a long road, so we better get moving."
If you're asked about a topic that isn't in the list above, respond with a default statement. (For example, "QUACK!")

### Hint:  `if-statements`

We can use `if-statements` to return different responses depending on what topic is passed as a parameter.
We may also want to look at `comparison operators` while we're at it.
```
const topic = 'economy'

const interviewAnswer = (topic) => {

  if(topic === "arts funding"){
    return "We'll have to get creative!"
  }else if(topic === "economy"){
    return "Time is money."
  }else if(topic === "transportation"){
    return "It's going to be a long road, so we better get moving."
  }else{
    return  "QUACK!"
  }
}

interviewAnswer(topic)

// Output:
// Time is money.

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #3

### Instructions:

When a resident casts their vote, the system will be passed the name of the candidate they voted for and the current standings.
It will then update the standings, adding the new vote to the count.

To test the system, we'll need to complete the function castVote(name, votes) that takes in the name of a candidate and an array 
of tallied votes. The function should return an array with the updated standings.

We will be testing the system with three possible candidates: Tim, Sally and Beth. Each item in the votes array represents the 
number of votes for a particular candidate:

The first item in the array votes[0] are the votes for Tim
The second item in the arry votes[1] are the votes for Sally
The third item in the array votes[2] are the votes for Beth
For example in this array [0, 2, 1] there are 0 votes for Tim, 2 votes for Sally and 1 vote for Beth.

### Hint: `++`

We'll need to start with an `if` statement to determine who the vote is for. Once we know that we can use 
the increment operator `++` to increase `votes[0]` for Tim, `votes[1]` for Sally or `votes[2]` for Beth.

For instance, if `name === 'Tim'`, then we want to increment `votes[0]++`.
```
const name = 'Sally';
const votes = [
   0, // Tim
   2, // Sally
   1 // Beth
]
    
const castVote = (name, votes) => {
    let countVotes = votes;
    if(name === 'Tim'){countVotes[0] ++ }
    else if (name === 'Sally'){countVotes[1] ++ }
    else if (name === 'Beth'){countVotes[2] ++ }
    return countVotes;
}

// Output:
//    [
//      0, // Tim
//      3, // Sally
//      1  // Beth
//    ]
```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #4

### Instructions:

Complete the function _registerToVote(name, unregisteredVoters)_ that takes in the name of a newly registered voter and an array of names of those who have not yet registered to vote. Your function must return an array, with the newly registered voter's name removed.

### Hint: `.filter`

If we initialize a new empty array within our function, `let mailingList = []`, we can use a `for-loop` and an `if-statement` to push the right names into it.

Or if we're feeling adventurous, let's take a look at JavaScript's `filter` function. You can see an example of how 
to remove an item from an array using filter here.
```
const name = 'Bradley';
const unregisteredVoters = ['Jake', 'Alanna', 'Bradley', 'Stephanie'];

const registerToVote = (name, unregisteredVoters) => {

 return unregisteredVoters.filter(item => item !== name)
}

// Output:
// ['Jake', 'Alanna', 'Stephanie']
```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #5

### Instructions:

Complete the function chooseStations(stations) that takes in an array of possible voting stations, and then only returns the names of the stations that are appropriate.

Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.

In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.

### Hint: `for...of`, `.push`

You'll need to try out some new `comparison operators` for this. Take a look at how to do greater-than, not-equal, and logical-AND with JavaScript.

Much like the previous challenge, one way we could solve this is by initializing a new array within our function (`let goodStations = []`) and `push` the stations that meet the requirements to it as we loop through them.
```
const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = (stations) => {
    let appropriatedStations = [];
    for (let station of stations){
        if(( station[1] >= 20) && (station[2] === "school" || station[2] === "community centre" )){
            appropriatedStations.push(station[0]); } 
    }
    return appropriatedStations 
}
console.log(chooseStations(stations))

// Output:
// ['Bright Lights Elementary', 'Moose Mountain Community Centre']
```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #6

### Instructions:

Complete the function _voterTurnout()_, that will take in two arrays. The first array is a list of voter ids, and the second array is a list of voter signatures, which correspond to the voter ids. Our task here is to first check that each array have the same number of items and then confirm that each of the voter ids matches the corresponding voter signature.

If the arrays do not contain the same number of items, then we know something is amiss and our function should _return false_. If they contain the same number of elements, then we should proceed to check if the two arrays are identical, meaning they contain the same names in the same order. If they are, our function should _return "All clear, we can count the votes!"_, if they are not it should -  _return "FRAUD!"_.

### Hint: `compare two arrays`

We need to determine if the two arrays are identical by comparing them to one another. First, we'll need to make sure they are the same length. We can do this by using `.length` and the strict inequality `!==` operator.

Next, we'll need to loop through one of the arrays, comparing each item of one array to the same item in the second array using the index. You can a see step by step breakdown of how to compare two arrays [here](#https://gomakethings.com/how-to-check-if-two-arrays-are-equal-with-vanilla-js/)
```
   const voter_signatures = [
        'Bill Billiamson',
        'Kate Etak',
        'Brandon Brandonus',
        'Fake McFakerson',
        'Jane Janesford'
      ]

      const voter_ids = [
        'Bill Billiamson',
        'Kate Etak',
        'Brandon Brandonus',
        'Simon Simonson',
        'Jane Janesford'
      ]

const voterTurnout = (voter_signatures, voter_ids) => {

  if(voter_signatures.length !== voter_ids.length) return false
  else{
      for (let i = 0; voter_signatures.length > i; i++) {
          if (voter_signatures[i] !== voter_ids[i]) return "FRAUD!"
      }
  }  
  return "All clear, we can count the votes!"
}

//Output:
//FRAUD!

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #7

### Instructions:

We need to go through the survey responses to see what your constituents would like you to focus on over the course of your term in office. The array that you are given contains many phrases and words pulled from a number of interviews. We only want to focus on the following three key phrases: "smart city", "arts funding", and "transportation".

Our _termTopics_ function needs to count how many times each of those topics was mentioned in the surveys, and then return an array with the number of mentions in the following order: _smart city, arts funding_, and then _transportation_.

### Hint: `for...of `

Similar to yesterday's question, we may need a for-loop to go through each entry in the interview responses.

Whenever we need to decide which value to increase, we could use an if-statement or switch statement to make that decision.
```
const interviews = [
    'smart city', 
    'rebuild the lighthouse', 
    'arts funding', 
    'transportation',
    'arts funding', 
    'rebuild the lighthouse', 
    'sports funding', 
    'tax cuts', 
    'smart city',
    'arts funding', 
    'smart city'
]
const termTopics = (interviews) => {
    let keyPhrases = [ 0, 0, 0];

    for (let phrase of interviews){
        if (phrase === "smart city") keyPhrases[0] ++
        else if (phrase === "arts funding") keyPhrases[1] ++
        else if (phrase === "transportation") keyPhrases[2] ++
    }
    return keyPhrases
}
console.log(termTopics(interviews))

// Output:
//    [
//      3, // smart city
//      3, // arts funding
//      1  // transportation
//    ]  

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #8

### Instructions:

We need to complete a function called _smartGarbage(trash, bins)_, which will be responsible for increasing the garbage count for waste, recycling, or compost depending on what trash is submitted. Our function will receive two arguments. The first argument, trash, is a string that will tell our function what type of item is being submitted. The second argument, bins, is an object containing three properties (waste, recycling, and compost), which hold some numerical value. Our function must increase the correct value in the bins object, and the return the newly updated object.

### Hint: `object.property`

This is the first time we've encountered objects! We will need to access the proper value in the bins object using the trash as the key. If you're having trouble with this, take a look online to see how to use square bracket notation to access values in a JavaScript object.

Note: When we’re referencing a variable in the bracket notation, we can skip the quotes.
```
const bins = {
  waste: 4,
  recycling: 2,
  compost: 5
}
const trash = 'recycling'

const smartGarbage = (trash, bins) => {
  if (trash === "waste") bins.waste++
  else if (trash === "recycling") bins.recycling++
  else if (trash === "compost") bins.compost++
  return bins
}
console.log(smartGarbage(trash, bins))

// Output:
// {
//        waste: 4,
//        recycling: 3,
//        compost: 5
//  }
```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #9

### Instructions:

Complete the function, _carPassing(cars, speed)_, that takes in an array of car objects, and the speed of a car as it passes the sensor. This function should create a new object with with a property called speed, and another property called _time_ and add it to the cars array. We can retrieve the current time, for setting the time property, by using the _Date.now()_ function, which is built into JavaScript!

Our function should return an array that includes all of the elements in cars as well as our new element.

### Hint: `Creating objects using object literal syntax`, `.push`

We can define and create a new object with an object literal. You can check out the first list item [here](#https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/) as an example.

Like in previous challenges, we may need to use JavaScript's handy _push()_ method to add our new object to the cars array.
```
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

const carPassing = (cars, speed) => {
  let newObj = { time:Date.now(), speed:speed }
  cars.push(newObj)
  return cars
}
console.log(carPassing(cars, speed))

// Output:
[ { time: 1568329654807, speed: 40 },
  { time: 1568329821632, speed: 42 },
  { time: 1568331115463, speed: 35 },
  { time: 1574917288256, speed: 38 } ]

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #10

### Instructions:

We need to write a function called _whereCanIPark()_ that returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot. Our function receives an array of arrays representing parking spots, and a string with type of the vehicle that is looking for a parking spot.

There are three kinds of possible vehicles: regular cars, small cars, and motorcycles. Regular cars can only park in R spots. Small cars can park in R or S spots. Motorcycles can park in R, S, or M spots. In the array of parking spots, spots are written in both lower-case and upper-case. An upper-case letter means that the particular spot is AVAILABLE, while lower-case letters mean that the spot is UNAVAILABLE.

Our function must return an array with the coordinates of the spot as an [X, Y] pair. See the example input and output below for an illustration.

Note: There may be multiple available spots for a particular vehicle. It does not matter which spot your function chooses, as long as the spot is available. And if there are no available spots, remember to return false.

### Hint: `two for-loops`

To go through a single array, we can use a single for-loop. To go through every element in an array of arrays, we can use two for-loops: one nested within the other.
```
const spots = [
// COLUMNS ARE X
//    0    1    2    3    4    5
  ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
  ['s', 'M', 's', 'S', 'R', 'M'], // 1
  ['s', 'M', 's', 'S', 'R', 'm'], // 2
  ['S', 'r', 's', 'm', 'R', 'M'], // 3
  ['S', 'r', 's', 'm', 'R', 'M'], // 4
  ['S', 'r', 'S', 'M', 'M', 'S'], // 5
]

const vehicle = 'regular' // possible options are 'regular', 'small', or 'motorcycle'


const whereCanIPark = (spots, vehicle) => {
  // Code here!
  for (let y = 0; y < spots.length; y++){
    for (let x = 0; x < spots[y].length; x++){
      
      const spot = spots[y][x]
      
      if (vehicle === "regular" && spot === "R") return [x, y] 
      else if (vehicle === "small" && (spot === "R" || spot === "S")) return [x, y] 
      else if (vehicle === "motorcycle" && (spot === "R" || spot === "S" || spot === "M")) return [x, y]
      
    }
  }
  return false; 
}

// Output:
// [4, 0]
```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #11

### Instructions:

For this challenge, we'll implement a function called _busTimes()_. This function will calculate the arrival time for a collection of busses based on their current speed and distance from the stop. It will receive an object called _buses_, which contains a series of objects for each bus, with the distance of the bus and the speed that the bus is traveling at. Our function should return a new object that shows how long until each bus arrives at the stop.

### Hint: `for...in` 

We'll need to loop through each of the buses in the buses object. Looping through objects can be done with a for...in loop!

We can calculate the arrival time of the bus by dividing it's distance by it's speed.
```
const buses = {
  pickadilly: {
      distance: 10,
      speed: 5
  },
  uptown: {
      distance: 13,
      speed: 10
  }
}
 
const busTimes = buses => {
  const time = {}
  for (const i in buses){
     time[i] = buses[i].distance / buses[i].speed
  }
  return time
}
console.log(busTimes(buses))

// Output:
//    {
//      pickadilly: 2,
//      uptown: 1.3
//    }
```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #12

### Instructions:

For this challenge we will implement a function called _checkAir()_, which will check a collection of air samples. The function will take in two arguments. The first argument is an array of strings, where each string represents a small air sample that is either clean or dirty. The second argument is a number representing the highest acceptable amount of dirty samples. For example, a threshold of 0.4 means that there must be less than 40% of total samples classified as dirty for our air to be considered clean. Our function must return Polluted if there are too many dirty air samples, or Clean if the proportion of dirty samples is below the threshold.

### Hint: `for...in` `++` or `.filter`

Not sure where to get started? It might be useful to start by creating a variable to keep track of how many dirty samples we find as we loop through the array of samples. We can increment or add to this number using the ++ operator.

Once you know how many dirty samples there are, we just need to do some simple math to determine if it exceeds the threshold.
```
const samples = ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty']
const threshold = 0.3

const checkAir = function (samples, threshold) {
    let counter = 0;
    for (const i of samples) if (i === "dirty") counter++ 
    return (counter / samples.length > threshold ? "Polluted " : "Clean" )
}
console.log(checkAir(samples, threshold)) 

// Output:
// Polluted
```
or
```
const samples = ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty']
const threshold = 0.3

const checkAir = function (samples, threshold) {
    return (( samples.filter( i => i === "dirty").length / samples.length < threshold ) ? "Clean" : "Polluted");
}
console.log(checkAir(samples, threshold))

// Output:
// Polluted
```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #13

### Instructions:

We will be implementing this using three functions.

The first two functions will receive an array of objects that represent street lights which may be on or off.

❄️ Our first function, lightsOn, must set all of the lights to on and then return the array of lights.

❄️ The second function, lightsOff, must set all the lights to "off" and then return the array of lights.

❄️ The third function, toggleLights, will receive an array of many street lights, as well as a boolean value lightsAreOn which tells you whether or not all the lights are currently on. If lightsAreOn is true, your function should turn all of the lights off. If lightsAreOn is false, your function should turn all of the lights on.

### Hint: `.map`

Lucky for us, we can call any of the functions that we have made before toggleLights. Can you see where we might want to call our lightsOn or lightsOff functions?
```
// Input:
// for lightsOn() function
const lights = [
    {id: 1, on: false},
    {id: 2, on: false},
    {id: 3, on: false}, 
    {id: 4, on: false},
    {id: 5, on: false}
]   
// for lightsOff() function
/*
const lights = [
    {id: 1, on: true},
    {id: 2, on: true},
    {id: 3, on: true}, 
    {id: 4, on: true},
    {id: 5, on: true}
]
*/
// for toggleLights() function
/*
const lights = [
    {id: 1, on: true},
    {id: 2, on: true},
    {id: 3, on: true}, 
    {id: 4, on: true},
    {id: 5, on: true}
]
const lightsAreOn = true
*/

const lightsOn = function(lights) {
  lights.map(l => !l.on ? l.on = true : null);
  return lights;
}

const lightsOff = function(lights) {
  lights.map(l => l.on ? l.on = false : null);
  return lights;
}

const toggleLights = function(lights, lightsAreOn) {
  lightsAreOn ? lightsOff(lights) : lightsOn(lights);
  return lights;
}

console.log(lightsOn(lights))
console.log(lightsOff(lights))
console.log(toggleLights(lights, lightsAreOn))

// Output:
// for lightsOn() function
[
    {id: 1, on: true},
    {id: 2, on: true},
    {id: 3, on: true}, 
    {id: 4, on: true},
    {id: 5, on: true}
]
// for lightsOff() function
[
    {id: 1, on: false},
    {id: 2, on: false},
    {id: 3, on: false}, 
    {id: 4, on: false},
    {id: 5, on: false}
]  
// for toggleLights() function
[
    {id: 1, on: false},
    {id: 2, on: false},
    {id: 3, on: false}, 
    {id: 4, on: false},
    {id: 5, on: false}
] 
```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #14

### Instructions:

We'll be implementing a function called dynamicPricing(), which will return the cost of a particular trip given the number of people on the bus, and the distance traveled by the passenger. This function receives two numbers: numberOfPeople and distanceTraveled.

The base ticket price is $1. Passengers will be charged $0.25 per kilometer. If there are 30 or more people on the bus, there should be $0.25 added to the total.

The value that your functions returns must be a string, formatted as such: $4.25. Your values must be shown to two decimal points of precision.

### Hint: `.toFixed(n)`

There is a built-in JavaScript function called .toFixed, which will be useful here to help us round our result before returning it! Lucky for us, it also automatically returns a string.
```
const numberOfPeople = 15
const distanceTraveled = 10

const dynamicPricing = (numberOfPeople, distanceTraveled) => {
    const baseTicketPrice = 1 + distanceTraveled * 0.25
    return( numberOfPeople >= 30 ? "$"+(baseTicketPrice + 0.25).toFixed(2) : "$"+baseTicketPrice.toFixed(2)) 
}
console.log(dynamicPricing(numberOfPeople, distanceTraveled))

// Output:
// $3.50
```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #15

### Instructions:

For this challenge you'll have to implement a function called finalPosition(), which will calculate the position of the parade based on an array of directional moves. The parade will move on an X-Y grid like the following
```
                  ↑
                  3
                  |
                  2
                  |
                  1
                  |
← -4— -3— -2— -1— 0 — 1 — 2 — 3 — 4 →
                  |
                 -1
                  |
                 -2
                  |
                 -3
                  ↓
```
Your function will receive an array of moves, which are strings that say either north, south, west, or east, these represent the parade moving in a particular direction by a single space on the grid. By looking at the path that the parade moves in, your function should calculate and then return an array representing the position of the parade after completing all of the moves. The first element of the array should be the X position, and the second element of the array should be the Y position. The parade begins at `[0,0]`.

### Hint: 

One way to approach this is to start with an array at [0, 0], and then update the appropriate values while looping through the moves. See if you can get the final X value first!
```
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = (moves) => {
    let position = [0, 0]

    for (let i of moves){
        if (i === "west")  position[0] --
        else if (i === "east")  position[0] ++
        else if (i === "north")  position[1] ++
        else  position[1] --
    }
    return  position   
}
console.log(finalPosition(moves))

// Output:
// [-1, 4]
```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #16

### Instructions:

We'll complete a function festivalColours() that calculates the split complementary colours for a given colour. We'll be working with a special colour system called HSL, which stands for Hue, Saturation, and Lightness.

Here's an example of an HSL colour picker.

The function will receive an H(Hue) value, and must return an array of the values for the two split complementary colours. The smaller number should be the first element, and the larger number should be the second element.

You can take a peek at this website for the formula you'll need to use to calculate the split complementary colours.

### Hint: `.sort()` (alphabetical) , `.sort((a, b)=> a - b)` (numeric)

Still not sure what a split-complementary colour scheme is? A split-complementary colour scheme is a three-color combination that consists of a base color and two colors that are 150 degrees and 210 degrees apart from the base respectively.
```
const color1 = 100

const festivalColours = color1 => {
    let h1 = color1 + 150
    let h2 = color1 + 210
    return([h1, h2].sort((a, b)=> a - b))
}
console.log(festivalColours(color1))

// Output:
// [250, 310]
```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #17

### Instructions:

For this challenge, we'll need to implement a function called _judgeVegetable()_ that will decide which vegetable is best based on a given judging characteristic. Our function will receive two parameters: a list of veggies(as an array of objects), and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

Our function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking in the provided category.

### Hint: `array.reduce()`, 

### `array.reduce((a, b) => (a > b) ? a : b)` - _Getting the max num of array_ 

This problem involves looping through an array of objects and determining which object has the highest rating in a given category. Solving this could include a for-loop to loop through the vegetables, comparing each by the given metric to find the highest one.

One way to start might be by initializing a variable called bestVeggie as vegetables[0] and then comparing each vegetable within our loop to the bestVeggie to determine if it is greater or not. If it is greater, then we've found ourselves a new bestVeggie.
```
const vegetables = [
    {
        submitter: 'Old Man Franklin',
        redness: 10,
        plumpness: 5
    },
    {
        submitter: 'Sally Tomato-Grower',
        redness: 2,
        plumpness: 8
    },
    {
        submitter: 'Hamid Hamidson',
        redness: 4,
        plumpness: 3
    }
]

const metric = 'redness'

const judgeVegetable = (vegetables, metric) => {
   return( vegetables.reduce((bestVeggie , other) => other[metric] > bestVeggie[metric] ? other : bestVeggie).submitter )
}  
console.log(judgeVegetable(vegetables, metric))

// Output:
// Old Man Franklin
```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #18

### Instructions:

Our first function, bestOdds(), will receive two parameters. The first parameter will be an array of strings that are either red, green, or blue, representing the tickets that a particular person has. The second parameter is an object that shows how many entries there currently are for each raffle. By looking at the tickets that the particular person has, your function should return a string that lets the person know which raffle they have the highest chance of winning. The format of the response should be as follows (without the square brackets): "You have the best odds of winning the [COLOUR] raffle."

While we could do this all within the bestOdds() function, we want to keep our code DRY, so we will also need to complete a helper function. This helper function countTickets() will be called from within bestOdds() and receive the array of strings that are either red, green, or blue. The function will count how many of each string there are, and then return an object with the individual counts.

### Hint: `Object.entries(obj)`, `.map([a , b])`,

### `.reduce(( [cA, a], [cB, b]) => a > b ? [cA, a] : [B, b] )`

Make sure to call the countTickets(tickets) function from within the bestOdds() function.

Each ticket count can start at 0. We can start our countTickets() function by creating an object that sets the counts for red, green, and blue to 0.

Because we need to go through the tickets array to look at each ticket, we can use a for-loop to traverse through the array.
```
const tickets = [
  'red',
  'red',
  'green',
  'blue',
  'green'
]

const raffleEntries = {
  red: 10,
  green: 30,
  blue: 15
}

const countTickets = (tickets) => {
  let counts = {red:0, green:0, blue:0};
  tickets.map(i => counts[i]++)
  return counts;
}

const bestOdds = (tickets, raffleEntries) => {
  const bestOddsColor = Object.entries(countTickets(tickets))
  .map(([color , num]) => [color, num / raffleEntries[color]])
  .reduce(( [colorA, a], [colorB, b]) => a > b ? [colorA, a] : [colorB, b] )[0];
  
  return `You have the best odds of winning the ${bestOddsColor} raffle.`;
}
console.log(bestOdds(tickets, raffleEntries))

// Output:
// "You have the best odds of winning the red raffle."
```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #19

### Instructions:

This is the Codeville Fall Festival, and nothing says fall more than pumpkin spice. At this year's festival, there will be three ways for the people of Codeville to get their pumpkin spice fix:

Pumpkin pie
Pumpkin spice lattes
Pumpkin spice macarons

Each item differs in both cost and the grams of pumpkin spice per serving. To help festival-goers maximize their pumpkin spice consumption, help them determine the maximum amount of pumpkin spice they can ingest with the amount of money they are bringing to the festival.

A slice of pumpkin pie costs $5 each, and include a whopping 30g of pumpkin spice
Pumpkin spice lattes cost $3 each, and include 15g of pumpkin spice
Pumpkin spice macarons cost $1 each, and include 3g of pumpkin spice

We need to write a function, pumpkinSpice(money) that will take in a number, or how much the festival-goer has to spend on treats, and return an array with the 4 elements as outlined below:

The first element should represent how many slices of pumpkin pie the client can buy
The second element should represent how many pumpkin spice lattes the client can buy
The third element should represent how many pumpkin spice macarons the client can buy
The fourth element should represent how many grams of pumpkin spice the client will be buying

Our function should start by calculating how many slices of pumpkin pie we can buy. Then, we'll want to use the remaining money to do the calculations for the lattes, followed lastly by the macarons.

### Hint: `Math.floor`, `working with an object`

We can use a while loop to executes a specified statement as long as the test condition evaluates to true. In this case, as long as we have more than $5, we can continue to buy pumpkin pie.
```
const money = 9

const pumpkinSpice = money => {
  let treats = {
    pie:{
      cost: 5, 
      weight: 30 
    } ,
    latte:{
      cost: 3, 
      weight: 15
    }, 
    macaron:{
      cost: 1, 
      weight: 3
    } 
  }
  
let piesMax = Math.floor( money / treats.pie.cost )
let lattesMax = Math.floor( (money - piesMax*treats.pie.cost) / treats.latte.cost )
let macaronMax = Math.floor( (money - piesMax*treats.pie.cost - lattesMax*treats.latte.cost) / treats.macaron.cost )

let spice = piesMax * treats.pie.weight + lattesMax * treats.latte.weight + macaronMax * treats.macaron.weight
    
let treatsMax = [piesMax, lattesMax, macaronMax, spice]

return treatsMax
}

console.log(pumpkinSpice(money))

// Output:
// [1, 1, 1, 48]

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #20

### Instructions:

There's a new attraction at this year's town festival. The organizers have decided to bring in several inflatable attractions, but they have no clue how to much blow them up. Each attraction needs to be pumped to a precise volume to achieve maximum festival fun!

The attractions are each made up of a combination of several different shapes: cones, spheres and prisms. For example, the giant inflatable duck is made up of two spheres (the body and head) and a cone (the beak).

Each shape has a different calculation for determining volume, so we'll need to create a few functions that will help us figure out the volume of the various inflatable attractions.

In this challenge, we'll need to implement four functions.

The first three will calculate the volume of the individual shapes:

* _sphereVolume()_  will calculate the volume of a sphere given a radius
* _coneVolume()_ will calculate the volume of a cone given a radius and a height
* _prismVolume()_ will calculate the volume of a prism given a height, a width, and a depth
* The fourth function, _totalVolume()_, will receive an array containing the different shapes that make up a single attraction. The totalVolume function should use the previous three functions to calculate the total volume of an attraction.

Don't worry about getting the answers to the perfect precision: our tests will check to see that you're within a correct range.

### Hint: `.map`, `.reduce((a, b) => a + b, 0)` - Sum all the values of an array

Implement the functions one by one. There are tests that will help you ensure that each function is correct.

We can find the formulas for calculating the volume of a sphere, cone, and prism online.
```
const sphere = {
    type: 'sphere',
    radius: 2
}

/*const cone = {
    type: 'cone',
    radius: 3,
    height: 5
}*/

const prism = {
    type: 'prism',
    height: 3,
    width: 4,
    depth: 5
}

const largeSphere = {
    type: 'sphere',
    radius: 40
}

const smallSphere = {
    type: 'sphere',
    radius: 10
}

const cone = {
    type: 'cone',
    radius: 3,
    height: 5
}

const duck = [
    largeSphere,
    smallSphere,
    cone
]

const PI = 3.14159 

const sphereVolume = function (radius) {
    return 4/3 * PI * radius * radius * radius
}

const coneVolume = function (radius, height) {
    return PI * radius * radius * ( height / 3 )
}

const prismVolume = function (height, width, depth) {
    return height * width * depth
}

const totalVolume = function (solids) {
  return(solids.map(i => {
    if (i.type == "sphere") return sphereVolume(i.radius);
    if (i.type == "cone") return coneVolume(i.radius, i.height);
    if (i.type == "prism") return prismVolume(i.height, i.width, i.depth)})
    .reduce((a, b) => a + b, 0));

}
console.log(sphereVolume(sphere.radius))              // 33.51029333333333
console.log(coneVolume(cone.radius, cone.height))     // 47.12385
console.log(prismVolume(prism.height, prism.width, prism.depth)) // 60
console.log(totalVolume(duck))                        // 272318.2571833333

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #21

### Instructions:

The town festival is tomorrow and the organizers have only just realized that they've booked two bakeries to cater desserts, but only have one kitchen available. Instead of just choosing one bakery, let's help them figure out a way to work together.

Both of bakeries have a specialty, so they have each have a stock of specific ingredients.

Lucky for the festival organizers, we've found a recipe book in the town library with TONS of fusion recipes, unfortunately it's 1000 of pages long and we don't have much time. Let's write a function that helps determine which recipes match the ingredients that both bakeries have in stock.

We need to complete a function called chooseRecipe(), which will receive three parameters:

1. An array of ingredients in stock at Bakery A
2. An array of ingredients in stock at Bakery B
3. An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array)
We are limiting our search to two ingredient recipes. We want to find a recipe that utilizes one ingredient from Bakery A and one from Bakery B.

Our chooseRecipe() function should return the name of the correct recipe.

Note: In the tests there will always be a single correct answer, and you will NOT need to consider special cases. For example, you do NOT need to worry about cases where one bakery has BOTH the ingredients for a recipe.

### Hint: 

###  ` .includes() -  return true or false`, `.find()`

```
Find an object in an array by one of its properties and destructuring it

const arr =[{a:b, c:d}, {a:j, c:o}]; 
arr.find( ({ a }) => a === b )  

//output=> {a:b, c:d}
```



This one is a doozy! We might want to start by creating a helper function called ingredientCheck() that will take in one bakery at a time, and as well as the recipes.ingredients array to check if the given bakery possesses any of the ingredients from that recipe.

We can use JavaScript's handy built in .includes method to easily check whether an array contains a specific value.
```
const bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard']
const bakeryB = ['milk', 'butter', 'cream cheese']
const recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
]

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    return( recipes.find( ({ingredients}) =>
        bakeryA.includes(ingredients[0]) && bakeryB.includes(ingredients[1]) || 
        bakeryA.includes(ingredients[1]) && bakeryB.includes(ingredients[0])).name)
}
console.log(chooseRecipe(bakeryA, bakeryB, recipes))     

// Output:
// Persian Cheesecake

```

---

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)
