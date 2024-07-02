const containerEl = document.querySelector('.container');
//generate the boxes
for(let i = 0; i < 30; i++){
    const boxes = document.createElement('div');
    boxes.classList.add('Rcontainer');
    containerEl.appendChild(boxes);
}
const boxesEls = document.querySelectorAll('.Rcontainer');

//append the color
appendColor()
function appendColor(){
    boxesEls.forEach((boxesEl) => {
        const rColor = generateColor();
        boxesEl.style.backgroundColor = rColor;
        boxesEl.innerText = rColor;
    })
}

//generate the random color
function generateColor(){
    let RandomColor = Math.floor(Math.random() * 16777215);
    RandomColor = `#${RandomColor.toString(16).padStart(6,'0')}`
    return RandomColor
}

// 16777215 = FFFFFF in hex color value