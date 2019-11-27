# _Lighthouse Labs - the 21-Day Coding Challenge_

## Challenge #1

### Instructions:

Given an array of volunteer names and an array of neighbourhood names,
complete the _doorToDoor_ function so that it returns the number of neighbourhoods
each volunteer should visit if the work of going door to door is split evenly amongst them.

### Hint: 
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
---

## Challenge #2

### Instructions:

Given a question topic, complete a function _interviewAnswer(topic)_ that returns your stance on that
particular election issue. The answer should be returned as a string.

When asked about arts funding, the function should return "We'll have to get creative!"
When asked about the economy, the function should return "Time is money."
When asked about transportation, the function should return "It's going to be a long road, so we better get moving."
If you're asked about a topic that isn't in the list above, respond with a default statement. (For example, "QUACK!")

### Hint: 

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

### Hint: 

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
---

## Challenge #4

### Instructions:

### Hint: 
```

```
---

## Challenge #5

### Instructions:

### Hint: 
```

```
---

## Challenge #6

### Instructions:

### Hint: 
```

```
---

## Challenge #7

### Instructions:

### Hint: 
```

```
---

## Challenge #8

### Instructions:

### Hint: 
```

```
---

## Challenge #9

### Instructions:

### Hint: 
```

```
---

## Challenge #10

### Instructions:

### Hint: 
```

```
---

## Challenge #11

### Instructions:

### Hint: 
```

```
---

## Challenge #12

### Instructions:

### Hint: 
```

```
---

## Challenge #13

### Instructions:

### Hint: 
```

```
---

## Challenge #14

### Instructions:

### Hint: 
```

```
---

## Challenge #15

### Instructions:

### Hint: 
```

```
---

## Challenge #16

### Instructions:

### Hint: 
```

```
---

## Challenge #17

### Instructions:

### Hint: 
```

```
---

## Challenge #18

### Instructions:

### Hint: 
```

```
---

## Challenge #19

### Instructions:

### Hint: 
```

```
---

## Challenge #20

### Instructions:

### Hint: 
```

```
---

## Challenge #21

### Instructions:

### Hint: 
```

```
---

