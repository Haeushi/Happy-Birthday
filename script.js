// The text we want to animate
const text = "Happy Birthday";
const textContainer = document.querySelector('.text'); // Select the text container
const fireworksContainer = document.querySelector('.fireworks'); // Fireworks container

// Loop through each character in the text
text.split("").forEach((char, index) => {
  const balloonLetter = document.createElement('div');
  balloonLetter.classList.add('balloon-letter');
  
  // Apply staggered animation delay
  balloonLetter.style.animationDelay = `${index * 0.5}s`;

  const balloon = document.createElement('div');
  balloon.classList.add('balloon');

  const string = document.createElement('div');
  string.classList.add('string');

  const letter = document.createElement('div');
  letter.classList.add('letter');
  letter.textContent = char === " " ? "\u00A0" : char; // Handle spaces

  balloonLetter.appendChild(balloon);
  balloonLetter.appendChild(string);
  balloonLetter.appendChild(letter);

  textContainer.appendChild(balloonLetter);
});

// Function to create a single firework particle
function createParticle(x, y, color) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  
  // Set initial position
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.backgroundColor = color;

  // Set random trajectory
  const angle = Math.random() * 2 * Math.PI; // Random direction
  const speed = Math.random() * 5 + 2; // Random speed

  particle.style.setProperty('--dx', Math.cos(angle) * speed + 'px');
  particle.style.setProperty('--dy', Math.sin(angle) * speed + 'px');

  // Append to fireworks container
  fireworksContainer.appendChild(particle);

  // Remove particle after animation ends
  setTimeout(() => particle.remove(), 2000);
}

// Function to generate fireworks
function createFirework() {
  const x = Math.random() * window.innerWidth; // Random horizontal position
  const y = Math.random() * window.innerHeight * 0.6; // Random vertical position

  const colors = ['#ffcc00', '#ff5733', '#33ff57', '#3357ff', '#ff33a8']; // Firework colors
  const color = colors[Math.floor(Math.random() * colors.length)]; // Random color

  // Generate multiple particles for a single firework
  for (let i = 0; i < 20; i++) {
    createParticle(x, y, color);
  }
}

// Generate fireworks every 800ms
setInterval(createFirework, 800);

// Function to redirect after animation
function redirectToNextPage() {
  window.location.href = "happy-birthday.html"; // Replace with the path to your next HTML file
}

// Set a timer for 10 seconds (match the animation duration)
setTimeout(redirectToNextPage, 15000); // 10000ms = 10s