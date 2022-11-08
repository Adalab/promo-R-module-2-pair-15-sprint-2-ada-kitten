"use strict";

/* Elementos que usamos en el HTML */
const newFormElement = document.querySelector(".js-new-form");
const listElement = document.querySelector(".js-list");
const searchButton = document.querySelector(".js-button-search");
const buttonAdd = document.querySelector(".js-btn-add");
const buttonCancelForm = document.querySelector(".js-btn-cancel");
const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");
const inputRace = document.querySelector(".js-input-race");
const linkNewFormElememt = document.querySelector(".js-button-new-form");
const labelMesageError = document.querySelector(".js-label-error");
const input_search_desc = document.querySelector(".js_in_search_desc");

let kittenDataList = [];

//Objetos con cada gatito
const kittenData_1 = {
  image: "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
  name: "Anastacio",
  desc: "Risueño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
  race: "British Shorthair",
};
const kittenData_2 = {
  image:
    "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg",
  name: "Fiona",
  desc: "Juguetón, dormilón  le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
  race: "Persa",
};
const kittenData_3 = {
  image:
    "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg",
  name: "Cielo",
  desc: "Risueño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
  race: "Siamés",
};

//const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

//Funciones
function renderKitten(kittenData) {
  const kitten = `<li class="card">
    <article>
      <img
        class="card_img"
        src=${kittenData.image}
        alt="gatito"
      />
      <h3 class="card_title">${kittenData.name}</h3>
      <h3 class="card_race">${kittenData.race}</h3>
      <p class="card_description">
      ${kittenData.desc}
      </p>
    </article>
    </li>`;
  return kitten;
}

function renderKittenList(kittenDataList) {
  listElement.innerHTML = "";
  for (const kittenItem of kittenDataList) {
    listElement.innerHTML += renderKitten(kittenItem);
  }
}

//Mostrar/ocultar el formulario
function showNewCatForm() {
  newFormElement.classList.remove("collapsed");
}
function hideNewCatForm() {
  newFormElement.classList.add("collapsed");
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains("collapsed")) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}
//Adicionar nuevo gatito
// function addNewKitten(event) {
//     event.preventDefault();
//     const valueDesc = inputDesc.value;
//     const valuePhoto = inputPhoto.value;
//     const valueName = inputName.value;
//     if (valueDesc === "" && valuePhoto === "" && valueName === "") {
//         labelMesageError.innerHTML = "Debe rellenar todos los valores";
//     } else {
//         if (valueDesc !== "" && valuePhoto !== "" && valueName !== "") {
//             labelMesageError.innerHTML = "";
//         }
//     }
// }

function addNewKitten(event) {
  event.preventDefault();
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;
  const valueDesc = inputDesc.value;

  const newKittenDataObject = {
    photo: valuePhoto,
    name: valueName,
    desc: valueDesc,
    race: valueRace,
  };

  if (valueDesc === "" || valuePhoto === "" || valueName === "") {
    labelMesageError.innerHTML = "Debe rellenar todos los valores";
  } else {
    kittenDataList.push(newKittenDataObject);
  }
  cleanInputs();
  msgNewKitten();
  renderKittenList(kittenDataList);
}

function cleanInputs() {
  inputDesc.value = "";
  inputPhoto.value = "";
  inputName.value = "";
  inputRace.value = "";
}

function msgNewKitten() {
  labelMesageError.innerHTML = "Mola! Un nuevo gatito en Adalab!";
}

//Cancelar la búsqueda de un gatito
function cancelNewKitten(event) {
  event.preventDefault();
  newFormElement.classList.add("collapsed");
  inputDesc.value = "";
  inputPhoto.value = "";
  inputName.value = "";
}

//Filtrar por descripción
/*function filterKitten(event) {
    event.preventDefault();
    const descrSearchText = input_search_desc.value;
    listElement.innerHTML = "";
    for (const kittenItem of kittenDataList) {
        if (kittenItem.desc.includes(descrSearchText)) {
            listElement.innerHTML += renderKitten(kittenItem);
        }
    }
}*/

//kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

// function filterKitten(event) {
//     event.preventDefault();
//     const filterDescKitten = kittenDataList.filter((kitten) => kitten.desc.toLowerCase().includes(input_search_desc.value));
//     renderKittenList(filterDescKitten);
// }

function filterKitten(ev) {
  ev.preventDefault();
  const kittenListFiltered = kittenDataList
    .filter((kitten) =>
      kitten.desc.toLowerCase().includes(input_search_desc.value)
    )
    .filter((kitten) => kitten.race.toLowerCase().includes(inputRace.value));
  renderKittenList(kittenListFiltered);
}

//Mostrar el litado de gatitos en el HTML
renderKittenList(kittenDataList);

//Eventos
linkNewFormElememt.addEventListener("click", handleClickNewCatForm);
searchButton.addEventListener("click", filterKitten);
buttonAdd.addEventListener("click", addNewKitten);
buttonCancelForm.addEventListener("click", cancelNewKitten);

////////////////////////////////////PETICIONES AL SERVIDOR/////////////////////////////////////////////

const GITHUB_USER = "<MariaSJ>";
const SERVER_URL = `https://dev.adalab.es/api/kittens/${GITHUB_USER}`;

// fetch(SERVER_URL, {
//   method: "GET",
//   headers: { "Content-Type": "application/json" },
// })
//   .then((response) => response.json()) //para pasar la respuesta a json
//   .then((kittens) => {
//     console.log(kittens); //consolear primero para mirar lo que nos devuelve el servidor y elegir lo que necesitemos
//     kittenDataList = kittens.results; //guardar el resultado en la variable que queramos
//     renderKittenList(kittenDataList);
//   });

///////// EJERCICIOS LOCAL STORAGE /////////

const kittenListStored = JSON.parse(localStorage.getItem("kittensList"));
//console.log(kittenListStored);

if (kittenListStored !== null) {
  console.log(kittenListStored);
  kittenDataList = kittenListStored;
  renderKittenList(kittenDataList);
} else {
  fetch(SERVER_URL)
    .then((response) => response.json())
    .then((kittens) => {
      console.log(kittens);
      kittenDataList = kittens.results;
      renderKittenList(kittenDataList);
    })
    .catch((error) => {
      console.error(error);
    });
}
