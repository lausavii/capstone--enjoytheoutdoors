window.onload = main;


function main() {
  populateStateDropdown();
  populateParktypeDropdown();
  const selectLocationElement = document.querySelector("#parkLocation");
  selectLocationElement.onchange = parkFilter;
  const selectTypeElement = document.querySelector("#parkType");
  selectTypeElement.onchange = parkFilter;
}

// populate dropdowns

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

// function to match state & park type

function parkFilter() {
  const parkCardsContainer = document.querySelector("#parkCards");
  const selectedState = document.querySelector("#parkLocation").value;
  const selectedType = document.querySelector("#parkType").value;

  console.log("Selected State:", selectedState);
  console.log("Selected Type:", selectedType);
  
  const matchedParks = filterParkData(selectedState, selectedType);

  parkCardsContainer.innerHTML = "";

  matchedParks.forEach((parkItem) => {
    const parkCard = createParkCard(parkItem);
    parkCardsContainer.appendChild(parkCard);
  });
}

// filter parks based on park type and state

function filterParkData(selectedState, selectedType) {
  const matchedParks = nationalParksArray.filter(
    (parkItem) =>
      parkItem.State === selectedState &&
      parkItem.LocationName.includes(selectedType)
  );
  return matchedParks;
}


function createParkCard(park) {

  console.log("Creating park card:", park)
  
  const parkCard = document.createElement("div");
  parkCard.classList.add("col-lg-4", "col-md-6", "mx-auto", "mb-4");

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

  const localState = document.createElement("p");
  localState.classList.add("card-text");
  localState.innerText = park.State; 
  cardBody.appendChild(localState);

  const localZipCode = document.createElement("p");
  localZipCode.classList.add("card-text");
  localZipCode.innerText = park.ZipCode; 
  cardBody.appendChild(localZipCode);



  card.appendChild(cardBody);
  parkCard.appendChild(card);

  return parkCard;
}
