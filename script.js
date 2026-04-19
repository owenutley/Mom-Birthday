// Grab the button element from your HTML
const surpriseBtn = document.getElementById('surpriseBtn');

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
