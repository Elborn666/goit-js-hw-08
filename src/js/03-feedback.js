import throttle from 'lodash.throttle';

const Refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
}

const formData = {}

Refs.form.addEventListener('submit', onFormSubmit);
Refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

Refs.form.addEventListener('input', (element) => {
    console.log(element.target.name)
    console.log(element.target.value)

    formData[element.target.name] = element.target.value;

    console.log(formData)
})

function onFormSubmit(event){
    event.preventDefault();
    
    console.log('Submit form')

    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state')
}

function onTextareaInput(event){
    const valueMsg = event.target.value

    localStorage.setItem('feedback-form-state', valueMsg)
}

function onMsgOutput(){
    const saveMsg = localStorage.getItem('feedback-form-state')
    console.log(saveMsg)

    if(saveMsg){
        Refs.textarea.value = saveMsg;   
    }
}

onMsgOutput()