document.addEventListener('DOMContentLoaded', function() {
    const reviewsContainer = document.getElementById('reviews-container');
    const reviews = reviewsContainer.children;
    const reviewCount = reviews.length;
    let currentIndex = 0;
    let intervalId;
    
    function showNextReview() {
        // Hide current review
        reviews[currentIndex].classList.remove('visible');
        
        // Move to the next review index
        currentIndex = (currentIndex + 1) % reviewCount;
        
        // Show the next review
        reviews[currentIndex].classList.add('visible');
    }
    
    // Initially show the first review
    reviews[currentIndex].classList.add('visible');
    
    // Start automatic review change
    intervalId = setInterval(showNextReview, 4000);
});