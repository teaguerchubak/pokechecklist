export function checklistTemplate(data, setName) {
    return `<div class="cardInfo">
        <h2 class="cardName">${data.name}</h2>
        <img class="cardImg" loading="lazy" src="${data.images.small}" alt="${data.name}" data-small="${data.images.small}" data-large="${data.images.large}">
        <a href="details.html?set=${setName}&id=${data.id}" class="cardLink">View card details</a>
        <div class="checkboxContainer">
            <input class="checkbox" type="checkbox" id="${data.id}">
        </div>
    </div>`
}

function abilitiesTemplate(abilities = []) {
    if (abilities.length === 0) {
        return `<p>No abilities</p>`;
    }

    return abilities.map(ability => `<p>${ability.name}:<br>${ability.text}</p>`).join(' ');
}

export function cardDetailsTemplate(data) {
    return `<section class="details">
    <div class="text">
    <h3>${data.name}</h3>
    <p>${data.subtypes}</p>
    <p>Evolves from: ${data.evolvesFrom}</p>
    <p>Ability: ${abilitiesTemplate(data.abilities)}</p>
    </div>
    <img src="${data.images.small}" alt="${data.name}">
    </section>`;
}