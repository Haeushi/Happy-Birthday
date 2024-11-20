const happyBirthdayText = document.getElementById('happy-birthday');
const minionLeft = document.getElementById('minion-left');
const minionRight = document.getElementById('minion-right');
const modal = document.getElementById('video-modal');
const closeModal = document.getElementById('close-modal');

// Function to start Minions pushing inward
function startPushing() {
    minionLeft.classList.add('minion-pushing');
    minionRight.classList.add('minion-pushing');
    happyBirthdayText.classList.add('jiggling');
}

// Function to stop Minions pushing inward
function stopPushing() {
    minionLeft.classList.remove('minion-pushing');
    minionRight.classList.remove('minion-pushing');
    happyBirthdayText.classList.remove('jiggling');
}

// Function to compress text smoothly
function compressTextSmoothly() {
    const text = happyBirthdayText.textContent;

    if (text === '🎂') return; // Stop if already compressed to cake emoji

    startPushing();

    setTimeout(() => {
        // Remove one letter from each end
        const newText = text.slice(1, -1);

        if (newText.length > 1) {
            happyBirthdayText.textContent = newText;
        } else {
            // Replace with clickable cake emoji
            happyBirthdayText.innerHTML = `<a href="#" id="cake-link">🎂</a>`;

            // Add click event listener to the cake emoji
            const cakeLink = document.getElementById('cake-link');
            cakeLink.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default link behavior
                modal.style.display = 'flex'; // Show the modal
            });
        }

        stopPushing();
    }, 600); // Matches the push animation duration
}

// Run the animation in steps
function animateSequence() {
    let step = 0;

    const interval = setInterval(() => {
        compressTextSmoothly();
        step++;

        // Stop animation when the text becomes the cake emoji
        if (happyBirthdayText.innerHTML.includes('🎂')) {
            clearInterval(interval);
        }
    }, 1200);
}

// Close modal when clicking the close button
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Start animation on page load
window.onload = animateSequence;