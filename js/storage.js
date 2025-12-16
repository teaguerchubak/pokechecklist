export function checklistStorage(setName) {
    const boxes = document.querySelectorAll(".checkbox");

    const savedCards = JSON.parse(localStorage.getItem(setName)) || {};

    boxes.forEach(box => {
        const cardId = box.id;
        box.checked = !!savedCards[cardId];

        box.addEventListener("change", () => {
            savedCards[cardId] = box.checked;
            localStorage.setItem(setName, JSON.stringify(savedCards));
        });
    });
}

export function saveSet(setName) {
    localStorage.setItem("selectedSet", setName);
}

export function loadSet() {
    return localStorage.getItem("selectedSet");
}