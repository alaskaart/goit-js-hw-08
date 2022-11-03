import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onTextInput), 500);

const STORAGE_KEY = 'feedback-form-state';

let objData = { email: '', message: '' };

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(objData);
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextInput(evt) {
  objData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(objData));
}

function populateTextarea() {
  const JSONData = localStorage.getItem(STORAGE_KEY);
  if (JSONData) {
    objData = JSON.parse(JSONData);
    const keys = Object.keys(objData);
    for (const key of keys) {
      formEl.elements[key].value = objData[key];
    }
  }
}
populateTextarea();
