import { cardDetailsTemplate } from "./templates.js";
import { getJson } from "./api.js";

function addDetails(htmlElement, additions) {
    const element = document.querySelector(htmlElement);
    element.insertAdjacentHTML("beforeEnd", additions);
}

function getParams(param) {
    const paramString = window.location.search;
    const params = new URLSearchParams(paramString);
    return params.get(param);
}

async function getCardDetails() {
    const id = getParams("id");
    const set = getParams("set")
    const cardList = await getJson(set + ".json");

    if(id) {
        const card = cardList.find((x) => x.id == id);
        if (card) {
            addDetails("main", cardDetailsTemplate(card));
        }
    }
}

getCardDetails();