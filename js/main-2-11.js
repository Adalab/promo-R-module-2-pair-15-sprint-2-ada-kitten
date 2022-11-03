'use strict';

//Lección 2.11 array y bucles II

const newFormElement = document.querySelector('.js-new-form');
const linkNewFormElememt = document.querySelector('.js-button-new-fom');


//Mostrar/ocultar el formulario
function showNewCatForm() {
  newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}
linkNewFormElememt.addEventListener('click', handleClickNewCatForm);

//Crear el gatito en HTML
function renderKitten(image, desc, name, race) {
  const kitten = `<li class="card">
    <article>
      <img
        class="card_img"
        src=${image}
        alt="gatito"
      />
      <h3 class="card_title">${name}</h3>
      <h3 class="card_race">${race}</h3>
      <p class="card_description">
      ${desc}
      </p>
    </article>
    </li>`;
  return kitten;
}

//Adicionar nuevo gatito
const buttonAdd = document.querySelector('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');

function addNewKitten(event) {
  event.preventDefault();
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;
    const valueRace = input
    const valueDesc = inputDesc.value;
  
    const newKittenDataObject = {
        photo: valuePhoto,
        name: valueName,
        desc: valueDesc,
      };
    
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
  } else{
        kittenDataList.push(newKittenDataObject);
    }
}

console.log(addNewKitten);

buttonAdd.addEventListener('click', addNewKitten);