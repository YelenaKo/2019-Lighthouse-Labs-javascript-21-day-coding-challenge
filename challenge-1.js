/*
Instructions
Given an array of volunteer names and an array of neighbourhood names, complete the doorToDoor function
so that it returns the number of neighbourhoods each volunteer should visit if the work of going door to door
is split evenly amongst them.
*/

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
