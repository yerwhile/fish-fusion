const {mongerInventory} = require("./fishMonger.js")

const fishMenu = (maxPrice) => {
    chefSelection = mongerInventory();
    todaysMenu = `\t<h1>Menu</h1>`;
    for(let fish of chefSelection) {
        if(fish.price <= maxPrice) {
            fish.amount * .5;
            todaysMenu += `
            <article class="menu">
                <h2>${fish.species}</h2>
                    <section class="menu_item">${fish.species} Soup</section>
                    <section class="menu_item">${fish.species} Sandwich</section>
                    <section class="menu_item">Grilled ${fish.species}</section>
            </article>`;
        }
    }
    return todaysMenu;
}

module.exports = {fishMenu}