const bodyEl = document.querySelector("body");
    const spanEl = document.querySelector("span");
    let isMoving = false;
    let mouseX = 0;
    let mouseY = 0;
    let popsizeWD = 50;
    let popsizeHD = 50;
  
    let popsizeW = spanEl.style.width = `${popsizeWD}px`;
    let popsizeH = spanEl.style.height = `${popsizeHD}px`;

    let score = 0;

    bodyEl.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (!isMoving) {
        isMoving = true;
        requestAnimationFrame(updatePosition);
      }
    });

    function updatePosition() {
      spanEl.style.left = `${mouseX}px`;
      spanEl.style.top = `${mouseY}px`;

      if (isMoving) {
        requestAnimationFrame(updatePosition);
      } else {
        isMoving = false;
      }
    }

const audio = [document.querySelector("audio")];
var blobs = [];
const btn = document.querySelector("button");

function play(){
  const audio1 = document.querySelector("#myAudio");
  setInterval(()=>{
    audio1.play(),100
  });

  btn.textContent = 'ey stop it, u tweaking jigsaw😑';
  btn.onclick = '';
  btn.addEventListener("click", () => {
    btn.textContent = 'Nuh uh😐🍔';
    btn.addEventListener("click", () => {
      btn.onclick = location.reload();
    })
  })

  for (let i = 0; i < 10; i++) {
    let blob = document.createElement("img");
    blob.src = "/Pop-eat-game/burger.png";
    blob.classList.add("cheeseBurger");
    bodyEl.appendChild(blob);
    blobs.push(blob); // Add each blob to the blobs array

  
  // Add mouseover event listener to update position
  blob.addEventListener("mouseover", () => {
    updateBlobPosition(blob);
    popSizeUp(blob)
    
  });
}
function popSizeUp(){

      popsizeHD++;
      popsizeWD++;

      spanEl.style.width = `${popsizeWD}px`;
      spanEl.style.height = `${popsizeHD}px`;

      score++;

      document.querySelector("p").textContent = `score: ${score} `
      console.log(popsizeWD)
}


// Function to initially position the blobs
function blobPos() {
  blobs.forEach(blob => {
    updateBlobPosition(blob);
  });
}

// Function to update the position of a blob
function updateBlobPosition(blob) {
  let positionX = Math.random() * 1800; // Ensure it stays within the window width
  let positionY = Math.random() * 600; // Ensure it stays within the window height
  blob.style.left = `${positionX}px`;
  blob.style.bottom = `${positionY}px`;
  
  const audio2 = document.querySelector("#pop");
    audio2.play();
}

blobPos(); 
//call the func so the blops will appended to da bodyEl
}

  /* V.1 man.. i'm out of here

const btn = document.querySelector("button")
function play(){
  cheeseBurgerAsset();
 
  function cheeseBurgerAsset(){   
 
   bodyEl.addEventListener("mousemove", (event) => {
    
     const positionX = Math.random()*2000;
     const positionY = Math.random()*600;
 
 
     const cheeseBurger = document.createElement("img");
 
     let left = event.clientX = positionX;
     let top = event.clientY = positionY;
 
     cheeseBurger.style.left = `${left}px`;
     cheeseBurger.style.bottom = `${top}px`;
 
     cheeseBurgerPNG = '/Pop-eat-game/burger.png';
     cheeseBurger.src = cheeseBurgerPNG;
 
     cheeseBurger.classList.add('cheeseBurger')
 
     setTimeout(()=> {
       document.body.appendChild(cheeseBurger),
       1000
     })
 
     let scoreText = document.querySelector("p").textContent = `score: ${score} 🍔`;
     
     cheeseBurger.onmouseover = () => {
       cheeseBurger.remove();
       
       popsizeWD += 1;
       popsizeHD += 1;
 
       popsizeW = spanEl.style.width = `${popsizeWD}px`;
       popsizeH = spanEl.style.height = `${popsizeHD}px`;
 
       score += 1;
       const audio2 = document.querySelector("#pop");
       audio2.play();
       
     }
     setInterval(() => {
       cheeseBurger.remove();
     }, 2000);
   
   }) 
 }
  setInterval(() => {
    audio.play()
  })

  btn.textContent = "Ey Stop it, u tweaking Jigsaw😑";
  btn.onclick = '';

  btn.addEventListener("click", () => {
    btn.textContent = 'Nuh uh😐🍔';
    btn.addEventListener("click", () => {
      btn.onclick = location.reload();
    })
   
  })
}
*/