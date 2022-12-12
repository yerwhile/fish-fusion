// Create an array of fish objects with properties for species, weight, price, and amount
// Return array
const boatInventory = () => {
    const fishes = [
            { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 30 },
            { id: 2, species: "Mackerel", weight: 3, price: 4.10, amount: 48 },
            { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 25 },
            { id: 4, species: "Walleye", weight: 2, price: 9.45, amount: 19 },
            { id: 5, species: "Sunfish", weight: 25, price: 5.18, amount: 1 },
            { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: 37 },
            { id: 7, species: "Tuna", weight: 18, price: 8.66, amount: 5 },
            { id: 8, species: "Puffer", weight: 2, price: 9.84, amount: 52 }
    ];
    return fishes;
}

module.exports = {boatInventory}