import gitHubIcon from './images/github.svg';

export function createHeader() {
    const header = document.createElement("header");

    const h1 = document.createElement("h1");
    h1.textContent = "Pizzaly";

    const nav = document.createElement("nav");
    const homeBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");

    homeBtn.textContent = "Home";
    homeBtn.dataset.tab = "home";

    menuBtn.textContent = "Menu";
    menuBtn.dataset.tab = 'menu';

    contactBtn.textContent = "Contact";
    contactBtn.dataset.tab = "contact";

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    header.appendChild(h1);
    header.appendChild(nav);

    return header;
}

export function createMain() {
    const main = document.createElement("main");

    return main;
}


export function createFooter() {
    const footer = document.createElement("footer");

    footer.innerHTML = `Copyright &copy; 2023 | Tony Fred`;

    const footerLink = document.createElement('a');
    footerLink.href = "https://github.com/tonyfred-code/";

    const iconContainer = document.createElement("span");
    iconContainer.classList.add("icon-container");

    const img = document.createElement("img");
    img.src = gitHubIcon;
    img.alt = "Github";

    iconContainer.appendChild(img);

    footerLink.appendChild(iconContainer);

    footer.appendChild(footerLink);

    return footer;
}