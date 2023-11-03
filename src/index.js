import { createHeader, createMain, createFooter } from "./initial-page.js";
// import './style.css';
// import chef from './images/chef.png';
// import carne from './images/carne.png';
// import crema from './images/crema.png';
// import disgustoso from './images/disgustoso.png';
// import gamberi from './images/gamberi.png';
// import pepe from './images/pepe.png';
// import pomodoro from './images/pomodoro.png';
// import salsiccia from './images/salsiccia.png';

console.log("working");

const contentDiv = document.querySelector("#content");

const header = createHeader();
contentDiv.appendChild(header);

const main = createMain();
contentDiv.appendChild(main);

const footer = createFooter();
contentDiv.appendChild(footer);

// const chefImage = new Image();
// chefImage.src = chef;
// chefImage.alt = "A chef";

// contentDiv.appendChild(chefImage);
// LogMsg();
