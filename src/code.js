/* HOME TEXT TRANSITION */

document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".text");
    // Function to swap the divs
    function swapDivs() {
        text.classList.toggle('transition');

        // After a delay, replace the content and remove the 'fade-out' class
        setTimeout(() => {
            text.innerHTML = 'Welcome to the place where creativity meets code';
            text.classList.remove('transition');
        }, 500);
    }
  
    // Set a timeout to swap the divs after 10 seconds (10000 milliseconds)
    setTimeout(swapDivs, 12000);
});



