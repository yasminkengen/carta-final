const music = document.getElementById('musica');
const playBtn = document.getElementById('play-music');

if (music && playBtn) {
  music.volume = 0.3;

  playBtn.addEventListener('touchstart', toggleMusic);
  playBtn.addEventListener('click', toggleMusic);

  function toggleMusic() {
    if (music.readyState < 3) {
      alert("⚠️ A música ainda está carregando. Tente novamente.");
      return;
    }

    if (music.paused) {
      music.play().then(() => {
        playBtn.textContent = "⏸️ Pausar trilha 💕";
      }).catch(() => {
        alert("⚠️ O navegador bloqueou o som. Toque de novo.");
      });
    } else {
      music.pause();
      playBtn.textContent = "▶️ Ouvir nossa trilha 💕";
    }
  }
}
