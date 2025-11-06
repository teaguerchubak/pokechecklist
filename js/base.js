const baseUrl = "https://raw.githubusercontent.com/teaguerchubak/pokemontcg/refs/heads/main/cards/en/";

async function getJson(url) {
    let cardJson = {};
    const response = await fetch(baseUrl + url);
    if (response.ok) {
        cardJson = await response.json();
    } else throw new Error("response not ok");
    return cardJson;
}

function checklistTemplate(data) {
    return `<div class="cardInfo">
        <h2 class="cardName">${data.name}</h2>
        <img class="cardImg" src="${data.images.small}" alt="${data.name}">
        <a href="" class="cardLink">View card details</a>
        <div class="checkboxContainer">
            <input class="checkbox" type="checkbox" id="${data.id}">
        </div>
    </div>`
}

const dropdown = document.getElementById("setLists");
const listContainer = document.querySelector(".display");

dropdown.addEventListener("change", async function() {
    const selected = document.querySelector("#setLists").value;
    const cardData = await getJson(selected + ".json");

    listContainer.innerHTML = "";

    const cardsHtml = cardData.map(card => checklistTemplate(card)).join("");

    listContainer.innerHTML = cardsHtml;
});