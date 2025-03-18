console.log('ky')

const video = document.getElementById('myVideo');
const play = document.querySelector('.video__play')

// Play the video 
function playVideo() {
  video.play();
}


// Pause the video 
function pauseVideo() {
  video.pause();
}


// Stop the video 
function stopVideo() {
  video.pause();
  video.currentTime = 0; // Reset the video to the beginning 
}

// Настраивая currentTime, вы можете перейти к любой точке видео, предоставляя пользователям более интерактивный и отзывчивый опыт. Это особенно полезно для таких функций, как навигация по главам, кнопки пропуска или даже синхронизация видео с внешним контентом.

function setCurrentTime(seconds) {
  video.currentTime = seconds;
}

function getCurrentTime() {
  return video.currentTime;
}

// настройки звука: громкость и отключение звука: 
function setVolume(level) {
  video.volume = level; // 0.0 (mute) to 1.0 (full volume) 
}

function muteVideo() {
  video.muted = true;
}

function unmuteVideo() {
  video.muted = false;
}

// Режим «картинка в картинке» (PIP) позволяет пользователям смотреть видео в небольшом окне с изменяемыми размерами, которое располагается поверх другого контента. Эта функция особенно полезна для многозадачности, поскольку позволяет зрителям продолжать просмотр, просматривая другой контент или используя другие приложения. 

function togglePictureInPicture() {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else if (video.requestPictureInPicture) {
    video.requestPictureInPicture();
  }
}

//Полноэкранный режим

function toggleFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
}

// Элементы видео HTML5 поддерживают несколько дорожек, что позволяет вам предоставлять субтитры на разных языках или даже описательные аудиозаписи для пользователей с нарушениями зрения. 

function addSubtitleTrack(label, src, lang) {
  const track = document.createElement('track');
  track.kind = 'subtitles';
  track.label = label;
  track.src = src;
  track.srclang = lang;
  video.appendChild(track);
}

// Настройка скорости воспроизведения. playbackRate темпвоспроизведения (0,5x - замедленное, 2x - ускоренная перемотка)

function setPlaybackRate(rate) { 
	video.playbackRate = rate; // 1.0 (normal), 0.5 (slow), 2.0 (fast) 
} 


// прослушиватели событий для реагирования на различные этапы воспроизведения видео
video.addEventListener('play', () => {
  console.log('Video is playing');
});


video.addEventListener('pause', () => {
  console.log('Video is paused');
});


video.addEventListener('ended', () => {
  console.log('Video has ended');
}); 

const onVideoPlayStop = () => {
  video.play();
}

const playStop = () => {
  video.paused ? video.play() : video.pause();
}

play.addEventListener('click', playStop);
