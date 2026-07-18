const { createElement } = require("react");

const cats = [
    {
        name: "Pepper",
        breed: "Domestic Short hair",
        age: 1,
        adopted: false
    }
{
        name: "Big Boy",
        breed: "Domestic Short Hair",
        age:  4,
        adopted: false
    }

];


const catContainer = document.getElementById("catContainer");

const catForm = document.querySelector("#catForm");

function displayCats (){
    for(let i = 0; i < cats.length; i++){
        
        const cat = cats[i];
    }
    const catInfo = document.createElement("div");
    const catName = document.createElement("uhhh... something");
    

}