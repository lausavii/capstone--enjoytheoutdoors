window.onload = main

function main () {
    populateMountainDropdown ();
}


function populateMountainDropdown() {
   const selectElement = document.querySelector("#mountainChoice");
  selectElement.onchange = mountainChoice;


    for (const mountains of mountainsArray) {
        
        const option = document.createElement("option");
        option.value = mountains.name;
        option.innerText = mountains.name;
        selectElement.append(option);
    }
}

function mountainChoice () {
  const selectElement = document.querySelector ("#mountainChoice");
  const mountainRef = document.querySelector  ("main");
  const selectedMountain = selectElement.value;

  for (const mountains of mountainsArray) {
    if (selectedMountain === mountains.name) {
        mountainRef.innerHTML = `<img src = "images/${mountains.img}"> ${mountains.desc} 
        Effort : ${mountains.effort} <br><br>Latitude: ${mountains.coords.lat} <br>Longitude: ${mountains.coords.lng}`;
    }
  }

}
