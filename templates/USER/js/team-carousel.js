document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.team-track');
  const cards = document.querySelectorAll('.team-card');
  const leftBtn = document.querySelector('.carousel-left');
  const rightBtn = document.querySelector('.carousel-right');

  let currentIndex = 0;

  // Function to update center card
  function updateCenterCard() {
    const containerWidth = document.querySelector('.team-carousel').offsetWidth;

    cards.forEach((card, index) => {
      card.classList.remove('center');
      card.style.transform = 'scale(1)';
    });

    const centerCard = cards[currentIndex];
    centerCard.classList.add('center');
    centerCard.style.transform = 'scale(1.3)';

    // Get scroll amount based on the center card's position
    const scrollX = centerCard.offsetLeft + centerCard.offsetWidth / 2 - containerWidth / 2;
    track.style.transform = `translateX(${-scrollX}px)`;
  }

  // Buttons
  leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : 0;
    updateCenterCard();
  });

  rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : cards.length - 1;
    updateCenterCard();
  });

  // Initialize
  updateCenterCard();
  window.addEventListener('resize', updateCenterCard);
});
