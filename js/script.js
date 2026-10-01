// MOKATAAN OTSIKKOA KUN NAPPIA PAINETAAN
// MOKATAAN OTSIKKOA KUN NAPPIA PAINETAAN
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});

// MUUTETAAN OTSIKON TYYLIÄ KUN NAPPIA PAINETAAN
const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");
});

// MUUTETAAN ELÄINTEKSTI KUN NAPPIA PAINETAAN
const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", function () {
    animalText.textContent = "Tiikerit ovat maailman suurimpia kissaeläimiä.Kaikkea kissaeläimiä ei kuitenkaan kannata silittää.";
});

// BONUS 1: LISÄTÄÄN UUSI LAUSE ELÄINTEKSTIN LOPPUUN
const addSentenceButton = document.querySelector("#addSentenceButton");

addSentenceButton.addEventListener("click", function () {
    animalText.textContent += " Eläimet ovat mahtavia!";
});

// BONUS 2: VAIHDETAAN KOKO SIVUN TAUSTAVÄRI
const changeBackgroundButton = document.querySelector("#changeBackgroundButton");

changeBackgroundButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "pink";
});

// TEHTÄVÄ 2: LUODAAN ELEMENTTEJÄ JAVASCRIPTILLÄ
const animalContent = document.querySelector("#animalContent");

// Luodaan otsikko
const newAnimalHeading = document.createElement("h3");
newAnimalHeading.textContent = "Päivän eläin";
newAnimalHeading.classList.add("animal-heading");

// Luodaan tekstikappale
const newAnimalText = document.createElement("p");
newAnimalText.textContent = "Pandat syövät lähes pelkästään bambua.";

// Luodaan kuva
const newAnimalImage = document.createElement("img");
newAnimalImage.src = "images/panda.png";
newAnimalImage.alt = "Panda";

// Liitetään kaikki sivulle
animalContent.append(newAnimalHeading, newAnimalText, newAnimalImage);

// PIILOTA JA NÄYTÄ -PAINIKKEET
const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

hideAnimalButton.addEventListener("click", function () {
    animalContent.style.display = "none";
});

showAnimalButton.addEventListener("click", function () {
    animalContent.style.display = "block";
});
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE



// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT
// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT
// TEHTÄVÄ 3: ELÄIMEN VALITSEMINEN
const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;

    if (selectedAnimal === "elephant") {
        animalName.textContent = "Elefantti";
        animalImage.src = "images/elephant.png";
        animalImage.alt = "Elefantti";
        animalDescription.textContent = "Elefantit ovat maailman suurimpia maaeläimiä.";
    } else if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiikeri";
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tiikeri";
        animalDescription.textContent = "Tiikerit ovat maailman suurimpia kissaeläimiä.";
    } else if (selectedAnimal === "penguin") {
        animalName.textContent = "Pingviini";
        animalImage.src = "images/penguin.png";
        animalImage.alt = "Pingviini";
        animalDescription.textContent = "Pingviinit eivät osaa lentää, mutta ne ovat erinomaisia uimareita.";
    } else if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        animalImage.src = "images/panda.png";
        animalImage.alt = "Panda";
        animalDescription.textContent = "Pandat elävät Kiinan vuoristometsissä.";
    }
});

// KUVAN KOROSTUS KUN HIIRI MENEE PÄÄLLE
animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add("image-highlight");
});

// KOROSTUS POIS KUN HIIRI LÄHTEE POIS
animalImage.addEventListener("mouseleave", function () {
    animalImage.classList.remove("image-highlight");
});


// listener for the select element from the drop down list.

// TEHTÄVÄ 4: ELÄINHAVAINTOJEN LISÄÄMINEN
const animalForm = document.querySelector("#animalForm");
const observationTableBody = document.querySelector("#observationTableBody");

animalForm.addEventListener("submit", function (event) {
    // Estetään sivun uudelleenlataus
    event.preventDefault();

    // Luetaan kenttien arvot
    const animal = document.querySelector("#observationAnimal").value.trim();
    const place = document.querySelector("#observationLocation").value.trim();
    const date = document.querySelector("#observationDate").value;

    // Tarkistetaan, ettei mikään kenttä ole tyhjä
    if (animal === "" || place === "" || date === "") {
        alert("Täytä kaikki kentät!");
        return;
    }

    // Luodaan uusi rivi ja sen solut
    const newRow = document.createElement("tr");

    const animalCell = document.createElement("td");
    animalCell.textContent = animal;

    const placeCell = document.createElement("td");
    placeCell.textContent = place;

    const dateCell = document.createElement("td");
    dateCell.textContent = date;

    // Liitetään solut riviin ja rivi taulukkoon
    newRow.append(animalCell, placeCell, dateCell);
    addDeleteButton(newRow);
    observationTableBody.append(newRow);

    // Tyhjennetään lomake
    animalForm.reset();
});
    // function to update the DOM based on the selected animal


// TEHTÄVÄ 4 BONUS: POISTA-PAINIKE JOKAISELLE RIVILLE
function addDeleteButton(row) {
    const buttonCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Poista";

    deleteButton.addEventListener("click", function () {
        row.remove();
    });

    buttonCell.append(deleteButton);
    row.append(buttonCell);
}

// Lisätään poista-painike taulukon valmiille riveille (Orava ja Jänis)
const existingRows = document.querySelectorAll("#observationTableBody tr");

existingRows.forEach(function (row) {
    addDeleteButton(row);
});

// BONUS 1: SIIRRÄ KUVAA
const moveImageButton = document.querySelector("#moveImageButton");

moveImageButton.addEventListener("click", function () {
    animalImage.classList.toggle("moved");
});

// BONUS 2: ANIMOI KUVA
const animateImageButton = document.querySelector("#animateImageButton");

animateImageButton.addEventListener("click", function () {
    animalImage.classList.toggle("wiggle");
});

// BONUS 3: HÄIVYTÄ KUVA
const fadeImageButton = document.querySelector("#fadeImageButton");

fadeImageButton.addEventListener("click", function () {
    animalImage.classList.toggle("faded");
});

// BONUS 4: POISTA KUVA
const removeImageButton = document.querySelector("#removeImageButton");

removeImageButton.addEventListener("click", function () {
    animalImage.remove();
});

// BONUS 5: KÄYDÄÄN LÄPI KAIKKI LI-ELEMENTIT
const allListItems = document.querySelectorAll("li");

console.log("Sivulla on " + allListItems.length + " li-elementtiä:");

allListItems.forEach(function (item) {
    console.log(item.textContent.trim());
});