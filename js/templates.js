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

    return abilities.map(ability => `<p class="ability">${ability.name}:<br>${ability.text}</p>`).join(' ');
}

export function cardDetailsTemplate(data) {
    return `<section class="details">
    <div class="text">
    <h3>${data.name}</h3>
    <p class="bold pad">${data.subtypes}</p>
    <p class="bold">Evolves from</p><p class="pad">${data.evolvesFrom}</p>
    <p class="bold">Ability</p><div class="pad">${abilitiesTemplate(data.abilities)}</div>
    </div>
    <div class="horizontal-line"></div>
    <img class="detail-img" src="${data.images.small}" alt="${data.name}">
    </section>`;
}