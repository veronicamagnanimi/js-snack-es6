// PRIMO ESERCIZIO 

// Creo l'array di oggetti 
const bikes = [
    {
        name: "Bike1",
        weight: 5
    },
    {
        name: "Bike2",
        weight: 2
    },
    {
        name: "Bike3",
        weight: 8
    },
    {
        name: "Bike4",
        weight: 11
    },
    {
        name: "Bike5",
        weight: 9
    },
]

// Prendo il primo peso della prima bici
let lightBike = bikes[0];

// Ciclo per scorrere tutte le bici
for (let i = 0; i < bikes.length; i++) {
  if(bikes[i].weight < lightBike.weight) {
    lightBike = bikes[i];
    }
}

//Outuput
console.log(`La bici con peso minore è ${lightBike.name} e pesa ${lightBike.weight} kg`);


//SECONDO ESERCIZIO

//Creo l'array di oggetti
const teams = [
    {
        name: "Roma",
        points: 0,
        fouls: 0
    },
    {
        name: "Juve",
        points: 0,
        fouls: 0
    },
    {
        name: "Lazio",
        points: 0,
        fouls: 0
    },
    {
        name: "Milan",
        points: 0,
        fouls: 0
    },
]

console.log(teams);

// Funzione numeri random
const randomNumb = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Ciclo per assegnare numeri random 
for (let i = 0; i < teams.length; i++) {
  teams[i].points = (randomNumb(0,50));
  teams[i].fouls = (randomNumb(0,20));
}

// Nuovo array
const newArray = [];
for (let i = 0; i < teams.length; i++) {
    newArray.push
    ({ name: teams[i].name, fouls: teams[i].fouls});
}

// Output
console.log(newArray);


// BONUS

// Creo l'array originale
const firstArray = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
console.log(firstArray);

// Funzione con tre paramentri
function arrayFunction (array, a, b) {
    const secondArray = [];

    for (let i = a; i <= b; i++) {
        secondArray[secondArray.length] = array[i];
    }
    return secondArray;
    console.log(secondArray(array, a, b));
}



