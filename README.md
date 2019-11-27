# _Lighthouse Labs - the 21-Day Coding Challenge_

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

### Hint: `.push`

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

### Hint: 
```

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #7

### Instructions:

### Hint: 
```

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #8

### Instructions:

### Hint: 
```

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #9

### Instructions:

### Hint: 
```

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #10

### Instructions:

### Hint: 
```

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #11

### Instructions:

### Hint: 
```

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #12

### Instructions:

### Hint: 
```

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #13

### Instructions:

### Hint: 
```

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #14

### Instructions:

### Hint: 
```

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #15

### Instructions:

### Hint: 
```

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #16

### Instructions:

### Hint: 
```

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #17

### Instructions:

### Hint: 
```

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #18

### Instructions:

### Hint: 
```

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #19

### Instructions:

### Hint: 
```

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #20

### Instructions:

### Hint: 
```

```

[▲ Page Up](#Lighthouse-Labs---the-21-Day-Coding-Challenge)

---

## Challenge #21

### Instructions:

### Hint: 
```

```

---

