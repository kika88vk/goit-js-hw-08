
const form = document.querySelector(".feedback-form");
const email = document.querySelector("input");
const message = document.querySelector("textarea");
const FEEDBACK_KEY = "feedback-form-state";
import throttle from "lodash.throttle";
email.blur();



form.addEventListener("input", throttle(input, 500));
form.addEventListener("submit", submit);

checkLocalStorage();


function input(event) {
    event.preventDefault();
    const {
        elements: { email, message }
    } = event.currentTarget;
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify({ email: email.value, message: message.value }));

};

function checkLocalStorage(){
    const parsedInputObj = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
    
    if (FEEDBACK_KEY !== null) {
        email.textContent = parsedInputObj.email;
        
        message.textContent = parsedInputObj.message;
    } else {
        email.textContent = "";
        message.textContent = "";
    
    }
}

function submit(event) {
    event.preventDefault();
    const {
        elements: { email, message }
    } = event.currentTarget;
    if (email.value === "" || message.value === "") {
        return alert("Не заповнені поля!!!");
    }
    console.log({ email: email.value, message: message.value });
    
    event.currentTarget.reset();
}