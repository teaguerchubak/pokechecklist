const baseUrl = "https://api.pokemontcg.io/v2/";
const apiKey = "eed3257d-f5cc-4f05-a724-1d6d58bc55ec";

async function getJson(url) {
    const options = {
        method: "GET",
        headers: {
            "X-Api-Key": apiKey
        }
    };
    let cardJson = {};
    const response = await fetch(baseUrl + url, options);
    if (response.ok) {
        cardJson = await response.json();
    } else throw new Error("response not ok");
    return cardJson;
}

async function getCardData() {
    const cardData = await getJson("cards?id=base1");
    log(cardData);
}

getCardData();