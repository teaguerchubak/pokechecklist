import { dropdownMenu } from "./menu.js";
import { createCardList } from "./api.js";
import { loadSet } from "./storage.js";

function init() {
    document.addEventListener("DOMContentLoaded", () => {
        createCardList();

        const dropdown = document.getElementById("setLists");
        const savedSet = loadSet();

        if (savedSet) {
            dropdown.value = savedSet;
            dropdown.dispatchEvent(new Event("change"));
        }
    });
}

dropdownMenu();
init();