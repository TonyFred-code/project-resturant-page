import coloratoImg from "./images/colorato.png";
import cremaImg from "./images/crema.png";
import disgustosoImg from "./images/disgustoso.png";
import gamberiImg from "./images/gamberi.png";
import pepeImg from "./images/pepe.png";
import pomodoroImg from "./images/pomodoro.png";

function createMenuItem(imgLink, imgAlt, menuIngredients) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const img = document.createElement("img");
  img.src = imgLink;
  img.alt = imgAlt;

  const menuIngredientsContainer = document.createElement("p");
  menuIngredientsContainer.textContent = menuIngredients;

  menuItem.appendChild(img);
  menuItem.appendChild(menuIngredientsContainer);

  return menuItem;
}

export function createMenuTab() {
  const menuTab = document.createElement("div");
  menuTab.classList.add("menu-tab-content");
  menuTab.dataset.shownTab = "menu";

  const menuItem1 = createMenuItem(
    coloratoImg,
    "Colorato Pizza",
    "Pizza ingredients cheese garlic tomato toppings"
  );
  menuTab.appendChild(menuItem1);

  const menuItem2 = createMenuItem(
    cremaImg,
    "Crema Pizza",
    "Pizza ingredients cheese garlic tomato toppings"
  );
  menuTab.appendChild(menuItem2);

  const menuItem3 = createMenuItem(
    disgustosoImg,
    "Disgustoso Pizza",
    "Pizza ingredients cheese garlic tomato toppings"
  );
  menuTab.appendChild(menuItem3);

  const menuItem4 = createMenuItem(
    pepeImg,
    "Pepe Pizza",
    "Pizza ingredients cheese garlic tomato toppings"
  );
  menuTab.appendChild(menuItem4);

  const menuItem5 = createMenuItem(
    gamberiImg,
    "Gamberi Pizza",
    "Pizza ingredients cheese garlic tomato toppings"
  );
  menuTab.appendChild(menuItem5);

  const menuItem6 = createMenuItem(
    pomodoroImg,
    "Pomodoro Pizza",
    "Pizza ingredients cheese garlic tomato toppings"
  );
  menuTab.appendChild(menuItem6);

  return menuTab;
}
