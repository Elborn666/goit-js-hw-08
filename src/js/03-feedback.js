import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");

let dataForm = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
const { email, message } = form.elements;

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputData, 500));


function onInputData(event){
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

function onFormSubmit(event){
    event.preventDefault();
    
    console.log('Submit form')

    localStorage.removeItem('feedback-form-state');
    event.currentTarget.reset();
    dataForm = {};
}

function onMsgOutput(){
    if (dataForm) {
        email.value = dataForm.email || '';
        message.value = dataForm.message || '';
      }
}

onMsgOutput()