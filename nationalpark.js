window.onload = main;

function main() {
  populateStateDropdown();
  populateParktypeDropdown();
  const selectLocationElement = document.querySelector("#parkLocation");
  selectLocationElement.onchange = parkStateLocation;
  const selectTypeElement = document.querySelector("#parkType");
  selectTypeElement.onchange = parkLocalDesc;
}

function populateStateDropdown() {
  const selectLocationElement = document.querySelector("#parkLocation");
  for (const location of locationsArray) {
    const option = document.createElement("option");
    option.value = location;
    option.innerText = location;
    selectLocationElement.append(option);
  }
}

function populateParktypeDropdown() {
  const selectTypeElement = document.querySelector("#parkType");
  for (const parkType of parkTypesArray) {
    const option = document.createElement("option");
    option.value = parkType;
    option.innerText = parkType;
    selectTypeElement.append(option);
  }
}

function parkStateLocation(changeEvent) {
  const parkCardsContainer = document.querySelector("#parkCards");
  const currState = changeEvent.target.value;
  const matchedState = filterData(currState);
  console.log(currState);

  parkCardsContainer.innerHTML = "";

  matchedState.forEach((element) => {
    const parkCard = createParkCard(element);
    parkCardsContainer.appendChild(parkCard);
  });
}

function parkLocalDesc(changeEvent) {
  const parkCardsContainer = document.querySelector("#parkCards");
  const currLocal = changeEvent.target.value;
  const matchedState = filterData(currLocal);
  console.log(currLocal);

  parkCardsContainer.innerHTML = "";

  matchedState.forEach((element) => {
    const parkCard = createParkCard(element);
    parkCardsContainer.appendChild(parkCard);
  });
}

function filterData(state) {
  const parkLocalDesc = nationalParksArray.filter((parkItem) =>
    parkItem.LocationName.includes(state)
  );
  return parkLocalDesc;
}

function createParkCard(park) {
  const parkCard = document.createElement("div");
  parkCard.classList.add("col-lg-4", "col-md-6", "mb-4");

  const card = document.createElement("div");
  card.classList.add("card");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const localName = document.createElement("h5");
  localName.classList.add("card-title");
  localName.innerText = park.LocationName;
  cardBody.appendChild(localName);

  const localAddress = document.createElement("p");
  localAddress.classList.add("card-text");
  localAddress.innerText = park.Address;
  cardBody.appendChild(localAddress);

  const localCity = document.createElement("p");
  localCity.classList.add("card-text");
  localCity.innerText = park.City;
  cardBody.appendChild(localCity);

  card.appendChild(cardBody);
  parkCard.appendChild(card);

  return parkCard;
}
