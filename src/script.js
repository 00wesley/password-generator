//pegando o slider
let sliderElement = document.querySelector("#slider");

function exibirValor() {
  let currentValue = sliderElement.value;
  sizePassword.innerHTML = currentValue;
}

sliderElement.addEventListener("click", exibirValor);

//pegando o botão
let buttonElement = document.querySelector("#generator-btn");

//pegando o valor de caracteres:
let sizePassword = document.querySelector("#value");

//pegando aonde vai ficar a senha
let password = document.querySelector("#user-password");

//pegando o container de mostar a senha:
let containerPassword = document.querySelector("#container-password");

let charset =
  "abcdefghijklmno pqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*(){}[]:></?+=-";

let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

slider.oniput = () => {
  sizePassword.innerHTML = this.value;
};

function generatePassword() {
  let pass = "";

  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  newPassword = pass;
}

buttonElement.addEventListener("click", generatePassword);

function copyPassword() {
  alert("Senha copiada com sucesso!");
  navigator.clipboard.writeText(newPassword);
}

containerPassword.addEventListener("click", copyPassword);
