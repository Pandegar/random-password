const passwordBox = document.getElementById("password");
const lenght = 12;

const uppeerCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+-=[]{}|;:,.<>/?";

const allChars = uppeerCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += uppeerCase[Math.floor(Math.random() * uppeerCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    passwordBox.value = password;
    
    while(lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}