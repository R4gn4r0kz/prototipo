const logo = document.querySelector('.dvd-logo');

let posX = 100;
let posY = 100;
let velX = 2;
let velY = 2;

const move = () => {
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;
  const logoWidth = logo.offsetWidth;
  const logoHeight = logo.offsetHeight;

  posX += velX;
  posY += velY;

  if (posX + logoWidth >= containerWidth || posX <= 0) {
    velX *= -1;
  }

  if (posY + logoHeight >= containerHeight || posY <= 0) {
    velY *= -1;
  }

  logo.style.left = posX + 'px';
  logo.style.top = posY + 'px';

  requestAnimationFrame(move);
};

move();
