import { checklistStorage, saveSet } from "./storage.js";
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

async function loadSetData(selected) {
    const listContainer = document.querySelector(".display");

    saveSet(selected);

    const cardData = await getJson(selected + ".json");

    listContainer.innerHTML = "";

    const cardsHtml = cardData.map(card => checklistTemplate(card, selected)).join("");

    listContainer.innerHTML = cardsHtml;

    checklistStorage(selected);

    const img = document.querySelectorAll(".cardImg");
    const modal = document.querySelector(".modal");
    const modalImg = document.querySelector(".modal-img");
    const closeModal = document.querySelector(".close");
    
    img.forEach(image => {
        image.addEventListener("click", () => {
            modalImg.src = image.dataset.large;
            modalImg.classList.add("largeImg");
            modal.style.display = "block";
        });

        closeModal.addEventListener("click", () => {
            image.src = image.dataset.small;
            image.classList.remove("largeImg");
            modal.style.display = "none";
        });
    });
}

export function createCardList() {
    const dropdown = document.getElementById("setLists");

    dropdown.addEventListener("change", () => {
        const selected = dropdown.value;
        loadSetData(selected);
    });
}