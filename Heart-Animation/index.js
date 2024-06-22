const bodyEl = document.querySelector("body");
    const spanEl = document.querySelector("span");
    let isMoving = false;
    let mouseX = 0;
    let mouseY = 0;

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
      console.log(mouseX,mouseY)
    }
  