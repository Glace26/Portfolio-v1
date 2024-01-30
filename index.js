export { FireflyComponent } from './src/components/fireflies.js';
export { MovingText } from './src/components/moving-text.js';
export { LinkItem } from './src/components/link.js';
export { SkillsComponent } from './src/components/skills-component.js';
export { Section1 } from './src/components/section.js';
export { Section2 } from './src/components/section2.js';
export { Section3 } from './src/components/section3.js';
export { Section4 } from './src/components/section4.js';
/* NAVBAR */
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  setTimeout(function() {
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav").style.top = "-100px";
      document.getElementById("nav2").style.top = "0";
    } else if (prevScrollpos == currentScrollPos){
    } else if((prevScrollpos+1000) < currentScrollPos){
      document.getElementById("nav").style.top = "0";
      document.getElementById("nav2").style.top = "-100px";
    }
  }, 800);
  prevScrollpos = currentScrollPos;
}

const menuIcon = document.querySelector('.menu-icon');
let isClickable = true;
menuIcon.addEventListener('click', function() {
  if(isClickable){
    isClickable = false;
    document.body.classList.toggle('menu-open');
    document.querySelector('.menu-container').style.display = "flex";
    menuIcon.classList.toggle("active");

    setTimeout(function(){
      isClickable = true;
    }, 1000);
  }
  if(document.body.classList.contains('menu-open')){
    document.getElementById('logo-2').style.display = 'none';
  } else {
    document.getElementById('logo-2').style.display = 'inherit';
  }
})

const menuClick = document.querySelectorAll('.text');
menuClick.forEach(function(e) {
  e.addEventListener('click', function() {
    document.body.classList.toggle('menu-open');
    document.querySelector('.menu-container').style.display = "none";
    menuIcon.classList.toggle("active");
  });
});

/* HOME TEXT TRANSITION ---------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".text-landing");
  function swapDivs() {
      text.classList.toggle('transition');

      setTimeout(() => {
          text.innerHTML = 'Welcome to the place where creativity meets code';
          text.classList.remove('transition');
      }, 500);
  }
  setTimeout(swapDivs, 12000);
});


/* PROYECS MOVING -------------------------------------------------------------------*/
const square1 = document.querySelector('.square-1');
const square2 = document.querySelector('.square-2');
const square3 = document.querySelector('.square-3');
const square4 = document.querySelector('.square-4');

let previousScrollY = window.scrollY;
document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const triggerPoint = 2500; 
    const endTriggerPoint = 4000;

    if (scrollPosition >= triggerPoint && scrollPosition <= endTriggerPoint) {
      const moveAmount = ((scrollY-2300) * 0.05)/20;
      
      moveSquareOne(moveAmount);
      moveSquareTwo(moveAmount);
      moveSquareThree(moveAmount);
      moveSquareFour(moveAmount);
    } 
    previousScrollY = scrollPosition; 
});


function moveSquareOne (moveAmount){
  square1.style.transform = `translate3d(${moveAmount}vw, -${moveAmount}vw, 0)`;
}

function moveSquareTwo(moveAmount){
  square2.style.transform = `translate3d(-${moveAmount}vw, ${moveAmount}vw, 0)`;
}

function moveSquareThree(moveAmount){
  let move = moveAmount*3;
  square3.style.transform = `translate3d(${moveAmount}vw, -${move}vw, 0)`;
}

function moveSquareFour(moveAmount){
  let move = moveAmount*1.5;
  square4.style.transform = `translate3d(-${move}vw, -${move}vw, 0)`
}



/* VIEW TAG -----------------------------------------------------------------------------*/ 
const view = document.querySelector('.view');
document.addEventListener('mousemove', (e) =>{
  mouseView(e);
} );

function mouseView(e){
  let yOffset = 30; 
  let xOffset = 10; 

  let y = e.pageY - yOffset;
  let x = e.pageX - xOffset;

  view.style.left = x + 'px';
  view.style.top = y + 'px';

  //view.style.transform = `translate3d(${x}px, ${y}px, 0)`;
};

const label = document.querySelector(".label");
const square = document.querySelector(".cuadrado");
const fotos = document.querySelectorAll(".photo");
fotos.forEach(function (e) {
  e.addEventListener('mouseenter', function () {
    square.style.transform = 'scale(1)';
    square.style.visibility = "visible";
    square.style.opacity = "1";
    label.style.visibility = "visible";
    label.style.opacity = "1";
    setTimeout(function() {
      label.style.transform = 'translateX(3vw)';
      label.style.color = '#e6e6e6';
    }, 500);
    
  });

  e.addEventListener('mouseleave', function () {
    square.style.visibility = "hidden";
    square.style.opacity = "0";

    label.style.visibility = "hidden";
    label.style.opacity = "0";
    label.style.transform = 'translateX(0)';
    label.style.color = '#040212';

    square.style.transform = 'scale(0.5)';
  });
});

/* ROTATING HEADER ON CONTACT -------------------------------------------------------------*/
function initEmblem(el, str) {
  var element = document.querySelector(el);
  var text = str ? str : element.innerHTML;
  element.innerHTML = '';

  for (var i = 0; i < text.length; i++) {
    var letter = text[i];
    var span = document.createElement('span');
    var node = document.createTextNode(letter);
    var r = (360 / text.length) * i;
    var x = ((Math.PI / (text.length*10)).toFixed(0) * i)/100;
    var y = ((Math.PI / (text.length*10)).toFixed(0) * i)/100;

    span.appendChild(node);
    span.style.transform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
    element.appendChild(span);
  }
}
initEmblem('.emblem');

/* COPY MAIL -------------------------------------------------------------------------------*/
const mail = document.getElementById("negro2");
var texto = mail.innerText;

mail.addEventListener("click", function(){
  var elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;

  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);

  var miImagen = document.getElementById('copy');
  miImagen.src = 'src/assets/icons/tick.png';

  setTimeout(function() {
    miImagen.src = 'src/assets/icons/copy.png';
  }, 1500);
})

