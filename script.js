/* script.js */
// For optional interactions, toggles, or future expansions.

console.log("Your personal website loaded with JetBrains style! :)");

// Hover-activated video playback
const videos = document.querySelectorAll('.portfolio-video');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  video.addEventListener('mouseleave', () => {
    video.pause();
  });
});
