const video = document.getElementById('myVideo');
const play = document.querySelector('.video__play');
// console.log('ку');


const playStop = () => {
  console.log('ку');
// video.src= 'https://www.youtube.com/embed/9TZXsZItgdw?si=lhUb-X2bliaV0EZ0?&autoplay=1';

video.src = video.dataset.src;

console.log('видео');

play.style.display = 'none';
}

play.addEventListener('click', playStop)