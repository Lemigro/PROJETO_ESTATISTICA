function toggleFullscreen(element) {
  if (!document.fullscreenElement) {
    element.requestFullscreen().catch((err) => {
      alert(`Erro ao entrar em tela cheia: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
}

document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    document
      .querySelector(".fullscreen-active")
      ?.classList.remove("fullscreen-active");
  }
});
