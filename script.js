// Grab the button element from your HTML
const surpriseBtn = document.getElementById('surpriseBtn');

window.onload = function() {
    // These options make the confetti fall slowly from the top
    confetti({
        particleCount: 150, // How many pieces of confetti
        spread: 160,         // Wide spread
        startVelocity: 15,  // Slow start speed
        origin: { y: -0.1 }, // Starts just ABOVE the top of the screen (-0.1)
        gravity: 0.8,       // Confetti is heavier so it falls
        ticks: 400,         // Makes the confetti visible for longer
        // Optional: Custom colors (use your theme colors!)
        colors: ['#d23669', '#fdf6e3', '#a1284f'] 
    });
};

// --- Slideshow Logic ---

let currentSlideIndex = 0;
// Grab all the slide elements from the HTML
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // First, remove the 'active' class from all slides to hide them
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Check if we went past the last slide or before the first slide
    if (index >= slides.length) {
        currentSlideIndex = 0; // Loop back to the beginning
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1; // Loop to the end
    } else {
        currentSlideIndex = index; // Move to the requested slide
    }

    // Add the 'active' class to the new current slide to show it
    slides[currentSlideIndex].classList.add('active');
}

// This function is called when the HTML buttons are clicked
function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

// --- Surprise Button Logic (from before) ---
// (Keep your existing surpriseBtn code down here)

// Add an action for when the button is clicked
surpriseBtn.addEventListener('click', function() {
    
    // You can replace this simple alert with something more complex later
    // like a confetti animation or revealing a hidden video.
    alert('Happy Birthday, Mom! I love you!');
    
});
