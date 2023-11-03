import cardAccIcon from "./images/card-account-details-outline.svg";
import homeIcon from "./images/home-outline.svg";

export function createContactTab() {
    const contactTab = document.createElement("div");
    contactTab.classList.add("contact-tab-content");
    contactTab.dataset.shownTab = "contact";

    const p1 = document.createElement("p");
    const icon1container = document.createElement("span");
    icon1container.classList.add("icon-container");
    const img1 = document.createElement("img");
    img1.src = cardAccIcon;
    img1.alt = "Phone Details";

    icon1container.appendChild(img1);
    p1.appendChild(icon1container);
    p1.innerHTML += '123-123-123';

    const p2 = document.createElement("p");
    const icon2container = document.createElement("span");
    icon2container.classList.add("icon-container");
    const img2 = document.createElement("img");
    img2.src = homeIcon;
    img2.alt = "Home Address";

    icon2container.appendChild(img2);
    p2.appendChild(icon2container);
    p2.innerHTML += '2, somewhere of someplace opposite this place.';

    const p3 = document.createElement("p");
    p3.textContent = "We expect your patronage!!!";

    contactTab.appendChild(p1)
    contactTab.appendChild(p2)
    contactTab.appendChild(p3)

    return contactTab;
}