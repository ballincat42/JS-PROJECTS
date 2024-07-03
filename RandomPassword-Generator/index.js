const inputEl = document.querySelector('input');
const toggle = document.querySelector('.copyBtn');
inputEl.value = Generate();

//copy the password
function Copy(){
    inputEl.select();
    inputEl.setSelectionRange(0,999);
    navigator.clipboard.writeText(inputEl.value);
    toggle.textContent = 'Copied!';
}

//generate password
function Generate(){
    const chars = 
    '1234567890!@#$%^&*()qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXMCNVB';
    let password = ''
    const passwordLength = 20;
     for(let i = 0; i < passwordLength; i++){
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
     }
     inputEl.value = password;
     toggle.textContent = 'Copy';
     return password;
}