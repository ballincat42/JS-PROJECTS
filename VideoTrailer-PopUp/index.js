const popupEl = document.querySelector('.PopUp-Container');
const popinEl = document.querySelector('.close-btn');
const videoEl = document.querySelector('video');

function popup(){
    popupEl.classList.add('active');
    videoEl.play()
}

popinEl.addEventListener(('click'), () => {
    popupEl.classList.remove('active');
    videoEl.pause()
})