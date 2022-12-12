const {boatInventory} = require("./fishingBoat.js")
 // Create a function that stores boatInventory's returned array in a variable
 // and create an empty array. Runa  for loop to iterate through elements in
 // boatInventory's returned array, and conditional to push fish whose quantity
 // 10 or greater and whose price is less than or equal to 7.50, into the
 // mongerPurchaases array. Return that array.
const mongerInventory = () => {
    const mongerSelection = boatInventory();
    const mongerPurchases = [];

    for(let fish of mongerSelection) {
        if(fish.amount >= 10 && fish.price <= 7.50) {
            fish.amount = 10;
            mongerPurchases.push(fish);
        }
    }
    return mongerPurchases;
}

module.exports = {mongerInventory}