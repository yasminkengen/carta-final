const music = document.getElementById('musica');
if (music) music.volume = 0.3;

const playBtn = document.getElementById('play-music');
if (playBtn) {
  playBtn.addEventListener('click', () => {
    if (music.paused) {
      music.play().then(() => {
        playBtn.textContent = "⏸️ Pausar trilha 💕";
      }).catch(() => {
        alert("⚠️ O navegador bloqueou o som. Tente tocar novamente.");
      });
    } else {
      music.pause();
      playBtn.textContent = "▶️ Ouvir nossa trilha 💕";
    }
  });
}

