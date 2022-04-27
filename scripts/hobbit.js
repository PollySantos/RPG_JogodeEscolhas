function nivelUmHobbit() {
  while (question != 1 || question != 2) {
    var question = prompt(
      '1. Ele pega o bilhete, o rasga e joga no lixo\n 2. Ele analisa o bilhete, decide fazer as malas e parte para a aventura'
    );

    if (question == 1) {
      window.location.href = "../personagens/gameoverhobbit1.html";
      break;
    } else if (question == 2) {
      window.location.href = "../personagens/hobbitpt2.html";
      break;
    } else {
      alert("Digite 1 ou 2");
    }
  }
}