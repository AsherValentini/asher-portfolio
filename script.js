/* script.js */
// For optional interactions, toggles, or future expansions.

console.log("Your personal website loaded with JetBrains style! :)");

// Hover-activated video playback
const videos = document.querySelectorAll('.portfolio-video');
const bst_videos = document.querySelectorAll('.portfolio-video-bst');

// This hover affect should only work for the Ball on a Plate GUI
videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  video.addEventListener('mouseleave', () => {
    video.pause();
  });
});

bst_videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  video.addEventListener('mouseleave', () => {
    video.pause();
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const toggleArrows = document.querySelectorAll('.toggle-arrow');

  toggleArrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const cardBody = arrow.closest('.collapsible-card').querySelector('.card-body');
      cardBody.classList.toggle('expanded');
      cardBody.classList.toggle('collapsed');
      arrow.classList.toggle('rotated');
    });
  });
});


