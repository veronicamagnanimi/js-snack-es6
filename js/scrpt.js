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


