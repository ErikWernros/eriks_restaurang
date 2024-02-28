document.addEventListener("DOMContentLoaded", function() {
    const allergenSelect = document.getElementById("allergens");
    const menuItemsContainer = document.getElementById("menu-items");

    const menuItems = [
        { name: "Gravad lax", allergens: [] },
        { name: "Räksmörgås", allergens: ["gluten"] },
        { name: "Chèvre chaud", allergens: ["lactose", "gluten"] },
        { name: "Entrecote med rödvinssås", allergens: [] },
        { name: "Pasta Carbonara", allergens: ["gluten"] },
        { name: "Fisk och Skaldjursgryta", allergens: [] },
        { name: "Crème Brûlée", allergens: ["lactose"] },
        { name: "Chokladfondant", allergens: ["lactose", "gluten"] },
        { name: "Pannacotta med jordgubbar", allergens: ["lactose"] },
        { name: "Hamburgare", allergens: ["gluten"] },
        { name: "Pizza", allergens: ["gluten", "lactose"] },
        { name: "Tacos", allergens: ["gluten"] },
        { name: "Sushi", allergens: [] }
    ];

    allergenSelect.addEventListener("change", function() {
        const selectedAllergen = allergenSelect.value;
        const filteredMenu = filterMenu(selectedAllergen);
        displayMenu(filteredMenu);
    });

    function filterMenu(allergen) {
        if (allergen === "none") {
            return menuItems; 
        } else {
            return menuItems.filter(item => !item.allergens.includes(allergen));
        }
    }

    function translateAllergen(allergen) {
        switch (allergen) {
            case "gluten":
                return "Gluten";
            case "lactose":
                return "Laktos";
            default:
                return allergen; 
        }
    }

    
    function displayMenu(menu) {
        menuItemsContainer.innerHTML = ""; 

        menu.forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.className = "menu-item";
            const menuItemInfo = document.createElement("div");
            menuItemInfo.className = "menu-item-info";
            const name = document.createElement("h3");
            name.innerText = item.name;
            menuItemInfo.appendChild(name);
            const allergens = document.createElement("p");
            const translatedAllergens = item.allergens.map(translateAllergen);
            allergens.innerText = "Allergener: " + (translatedAllergens.length < 1 ? "Inga" : translatedAllergens.join(", "));
            menuItemInfo.appendChild(allergens);
            menuItem.appendChild(menuItemInfo);
            menuItemsContainer.appendChild(menuItem);
        });
    }

    displayMenu(menuItems);
});
