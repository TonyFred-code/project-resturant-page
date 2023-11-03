import './style.css';
import chef from './images/chef.png';
import carne from './images/carne.png';
import colorato from './images/colorato.png';
import crema from './images/crema.png';
import disgustoso from './images/disgustoso.png';
import gamberi from './images/gamberi.png';
import pepe from './images/pepe.png';
import pomodoro from './images/pomodoro.png';
import salsiccia from './images/salsiccia.png';


console.log("working");

const container = document.querySelector("#container");
console.log(container);

const chefImage = new Image();
chefImage.src = chef;
chefImage.alt = "A chef";

container.appendChild(chefImage);