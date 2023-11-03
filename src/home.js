import carneImg from "./images/carne.png";

/*
<div class="home-tab-content">
          <p>Best pizza in your country</p>
          <p>Today's special</p>
          <img src="../src/images/carne.png" alt="A pizza">
          <p>Visit us today for your next meal!</p>
        </div>
*/

export function createHomeTab() {
  const homeTab = document.createElement("div");
  homeTab.classList.add("home-tab-content");
  homeTab.dataset.shownTab = "home";

  const text1 = document.createElement("p");
  text1.textContent = "Best pizza in your country!";
  const text2 = document.createElement("p");
  text2.textContent = "Today's special: Carne Pizza";
  const text3 = document.createElement("p");
  text3.textContent = "Visit us today for your next meal!";
  const img = document.createElement("img");
  img.src = carneImg;
  img.alt = "Carne Pizza";

  homeTab.appendChild(text1);
  homeTab.appendChild(text2);
  homeTab.appendChild(img);
  homeTab.appendChild(text3);

  return homeTab;
}
