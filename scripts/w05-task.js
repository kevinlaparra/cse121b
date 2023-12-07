/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const articleElement = document.createElement("article");
        const h3Element = document.createElement("h3");
        h3Element.innerHTML = temple.templeName;

        const imageElement = document.createElement("img");
        imageElement.setAttribute('src', temple.imageUrl);
        imageElement.setAttribute('alt',temple.location);

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imageElement);
        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
    const response = await fetch(url); 
    templeList = await response.json();
    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    const templesElement = document.getElementById("temples");
    templesElement.innerHTML = '';
};

/* sortBy Function */

const sortBy = (temples) => {
    reset();
    const filter = document.getElementById("sortBy").value;
    switch (filter) {
      case "utah":
        displayTemples(temples.filter(temple => temple.location.includes("Utah")));
        break;
      case "notutah":
        displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
        break;
      case "older":
        displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case "all":
        displayTemples(temples);
        break;
    }
};

getTemples();

/* Event Listener */
const sortByElement = document.getElementById("sortBy");
sortByElement.addEventListener("change", () => {
    sortBy(templeList);
});