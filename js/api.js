import { checklistTemplate } from "./templates.js";

const baseUrl = "https://raw.githubusercontent.com/teaguerchubak/pokemontcg/refs/heads/main/cards/en/";

export async function getJson(url) {
    let cardJson = {};
    const response = await fetch(baseUrl + url);
    if (response.ok) {
        cardJson = await response.json();
    } else throw new Error("response not ok");
    return cardJson;
}

export function createCardList() {
    const dropdown = document.getElementById("setLists");
    const listContainer = document.querySelector(".display");

    dropdown.addEventListener("change", async function() {
        const selected = document.querySelector("#setLists").value;
        const cardData = await getJson(selected + ".json");

        listContainer.innerHTML = "";

        const cardsHtml = cardData.map(card => checklistTemplate(card)).join("");

        listContainer.innerHTML = cardsHtml;
    });
}