import { createHeader, createMain, createFooter } from "./initial-page.js";
import { createHomeTab } from "./home.js";
import { createMenuTab } from "./menu.js";
import { createContactTab } from "./contact.js";
import './style.css';

function renderInitialPage() {
const contentDiv = document.querySelector("#content");

const header = createHeader();
contentDiv.appendChild(header);

const tabButtons = header.querySelectorAll("[data-tab]");
tabButtons.forEach((tabBtn) => {
    tabBtn.addEventListener("click", getTab)
})

const main = createMain();
contentDiv.appendChild(main);

const footer = createFooter();
contentDiv.appendChild(footer);
}

renderInitialPage();

function getTab(e) {
    const tabName = e.target.dataset.tab;
    if (tabName === "home") {
        switchTab(createHomeTab());
    } else if (tabName === "menu") {
        switchTab(createMenuTab());
    } else if (tabName === "contact") {
       switchTab(createContactTab());
    }
}

function switchTab(tab) {
    const main = document.querySelector("main");

    if (!tab || tab === null) return;

    main.innerHTML = "";
    main.appendChild(tab);
    setActiveTabBtn();
}

switchTab(createHomeTab());

function setActiveTabBtn() {
    const tabBtns = document.querySelectorAll('[data-tab]');
    tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove("active");
    })

    const shownTab = document.querySelector("[data-shown-tab]")
    const shownTabName = shownTab.dataset.shownTab;
    const tabBtn = document.querySelector(`[data-tab="${shownTabName}"]`);
    tabBtn.classList.add("active");
}
