const btn = document.querySelector("#btn");
const validate = document.querySelector("#validate");
const input = document.querySelector("#age");

btn.addEventListener("click", () => {
    let value = Number(input.value);
    console.log(value);
    if(value >= 18 && value <= 65){
        validate.textContent = "Você tem a idade para a vaga";
    } else {
        validate.textContent = "Você não se adequa à vaga"
    }
});