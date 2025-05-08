document.getElementById("remoto").addEventListener("click", function (event) {
  event.preventDefault();

  const url = this.href;

  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert('Link "Alterdata Remoto" copiado para a área de transferência!');
    })
    .catch((err) => {
      console.error("Erro ao copiar o link: ", err);
    });
});
