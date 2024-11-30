// Select elements
const slider = document.getElementById('slider');
const sliderTrack = slider.querySelector('.slider-track');
let isScrolling = false;
let autoSlideInterval;

// Auto Slide Function
function autoSlide() {
    clearInterval(autoSlideInterval); // Reset interval
    autoSlideInterval = setInterval(() => {
        const scrollWidth = slider.scrollWidth;
        const visibleWidth = slider.offsetWidth;
        const currentScroll = slider.scrollLeft;

        // Check if we reached the end; if yes, reset to the beginning
        if (currentScroll + visibleWidth >= scrollWidth) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            slider.scrollBy({ left: 300, behavior: 'smooth' }); // Slide one card width
        }
    }, 2000);
}

// Pause Auto Slide on Manual Interaction
slider.addEventListener('scroll', () => {
    clearInterval(autoSlideInterval); // Pause auto-slide during user interaction
    if (!isScrolling) {
        isScrolling = true;

        // Restart auto-slide after 3 seconds
        setTimeout(() => {
            isScrolling = false;
            autoSlide();
        }, 3000);
    }
});

// Initialize
autoSlide();
