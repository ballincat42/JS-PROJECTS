const containerEl = document.querySelector('.container');

for(let index = 0; index < 30;index++){
    const RandomContainer = document.createElement('div');
    RandomContainer.classList.add('Rcontainer');
    containerEl.appendChild(RandomContainer)
}

const RcontainerEls = document.querySelectorAll('.Rcontainer');

AppendColor()
function AppendColor(){

    RcontainerEls.forEach((RcontainerEl) => {
        const randomColor = getRandomColor();
        RcontainerEl.style.backgroundColor = randomColor;
        RcontainerEl.innerText = randomColor;
     
    })
}

function getRandomColor() {
    // Generate a random number between 0 and 16777215 (FFFFFF in hex)
    const randomNumber = Math.floor(Math.random() * 16777215);
    // Convert the number to a hexadecimal string and pad with leading zeros if necessary
    const randomColor = `#${randomNumber.toString(16).padStart(6, '0')}`;
    return randomColor;
}



