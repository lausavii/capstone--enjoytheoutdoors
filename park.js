window.onload = main

function main () {
    populateStateDropdown ();
    populateParktypeDropdown ();
}

function populateStateDropdown() {
    const selectElement = document.querySelector("#parkLocation");

    for (const location of locationsArray) {

        const option = document.createElement("option");

        option.value = location
        option.innerText = location

        selectElement.append(option)
    }
}

function populateParktypeDropdown() {
    const selectElement = document.querySelector("#parkType");

    for (const parkType of parkTypesArray ) {

        const option = document.createElement("option");

        option.value = parkType
        option.innerText = parkType

        selectElement.append(option)
    }
}
