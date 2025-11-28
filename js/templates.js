export function checklistTemplate(data) {
    return `<div class="cardInfo">
        <h2 class="cardName">${data.name}</h2>
        <img class="cardImg" loading="lazy" src="${data.images.small}" alt="${data.name}">
        <a href="" class="cardLink">View card details</a>
        <div class="checkboxContainer">
            <input class="checkbox" type="checkbox" id="${data.id}">
        </div>
    </div>`
}