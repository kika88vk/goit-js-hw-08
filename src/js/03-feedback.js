import "../03-feedback.html";
const form = document.querySelector(".feedback-form");

// form.addEventListener("input", input);
form.addEventListener("submit", submit);

// function input(event) {
//     event.preventDefault();
//     const {
//         elements: { email, massage }
//     } = event.currentTarget;
//     localStorage.setItem("feedback-form-state", JSON.stringify(elements));
// };

function submit(event) {
    event.preventDefault();
    const {
        elements: { email, massage }
    } = event.currentTarget;
    if (email.value === "" || massage.value === "") {
        return alert("Не заповнені поля!!!");
    }
    console.log({ email: email.value, massage: massage.value });
    
    event.currentTarget.reset();
}