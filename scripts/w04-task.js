/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Kevin Laparra",
    photo: "images/meandbooker.jpeg",
    favoriteFoods: ["Burgers", "Eggs", "Brownies", "Rice", "Steak"],
    hobbies: ["Soccer", "MMA", "Hiking", "Video Games", "Basketball"],
    placesLived: [],
};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push (
    {
        place: "Guatemala City, Guatemala",
        length: "5 years"
    },
    {
        place: "Gilbert, Arizona",
        length: "12 years"
    },
    {
        place: "Orem, Utah",
        length: "9 years"
    },
    );
/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("img").setAttribute("src", myProfile.photo)
document.querySelector("img").setAttribute("alt", myProfile.name)
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});
/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    document.querySelector("#places-lived").appendChild(dt);

    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dd);
});

