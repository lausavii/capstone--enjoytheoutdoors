window.onload = main;

function main() {
  populateMountainDropdown();
}

function populateMountainDropdown() {
  const selectElement = document.querySelector("#mountainChoice");
  selectElement.onchange = mountainChoice;

  for (const mountain of mountainsArray) {
    const option = document.createElement("option");
    option.value = mountain.name;
    option.innerText = mountain.name; 
    selectElement.appendChild(option);
  }
}

//run mountain info

function mountainChoice(event) {
  

  const mountainCardsContainer = document.querySelector("#parkCards");
  const selectElement = document.querySelector("#mountainChoice");
  const selectedMountain = selectElement.value;

  console.log("Selected Mountain:", selectedMountain)

  mountainCardsContainer.innerHTML = "";

  for (const mountain of mountainsArray) {
    if (selectedMountain === mountain.name) {
      const mountainCard = createMountainsCard(mountain);
      mountainCardsContainer.appendChild(mountainCard);
    }
  }
}

function createMountainsCard(mountain) {
  console.log("Creating mountain card:", mountain)

  const mountainCard = document.createElement("div");
  mountainCard.classList.add("col-lg-4", "col-md-6", "mx-auto", "mb-4");

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = `images/${mountain.img}`;
  card.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = mountain.name;
  cardBody.appendChild(cardTitle);

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerText = mountain.desc;
  cardBody.appendChild(cardText);

  const effortText = document.createElement("p");
  effortText.classList.add("card-text");
  effortText.innerHTML = `<strong>Effort:</strong> ${mountain.effort}`;
  cardBody.appendChild(effortText);

  const coordsText = document.createElement("p");
  coordsText.classList.add("card-text");
  coordsText.innerHTML = `<strong>Latitude:</strong> ${mountain.coords.lat}<br><strong>Longitude:</strong> ${mountain.coords.lng}`;
  cardBody.appendChild(coordsText);

  card.appendChild(cardBody);
  mountainCard.appendChild(card);

  return mountainCard;
}
