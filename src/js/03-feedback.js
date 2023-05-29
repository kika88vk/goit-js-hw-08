
const form = document.querySelector(".feedback-form");
const email = document.querySelector("input");
const message = document.querySelector("textarea");
const FEEDBACK_KEY = "feedback-form-state";
import throttle from "lodash.throttle";


form.addEventListener("input", throttle(input, 500));
form.addEventListener("submit", submit);



let formData = JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || {};


function input(event) {
    
    formData[event.target.name] = event.target.value;
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));

};

function checkLocalStorage(){
    // const parsedInputObj = JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || {};
    
    if (formData.email) {
        email.textContent = formData.email;
        
    } 
    if (formData.message) {
        message.textContent = formData.message;
    } else {
        email.textContent = formData.email;
        message.textContent = formData.message;
    }
    

}

checkLocalStorage();

function submit(event) {
    event.preventDefault();
    const {
        elements: { email, message }
    } = event.currentTarget;
    if (email.value === "" || message.value === "") {
        return alert("Не заповнені поля!!!");
    }
    console.log(formData);
    
    event.currentTarget.reset();
    formData = {};
}
