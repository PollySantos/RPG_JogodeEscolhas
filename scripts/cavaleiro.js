function nivelUmCavaleiro() {
  while (question != 1 || question != 2) {
    var question = prompt(
      '1. Pega a esquerda\n 2. Pega a direita'
    );

    if (question == 1) {
      window.location.href = "../personagens/cavaleiropt2.html";
      break;
    } else if (question == 2) {
      window.location.href = "../personagens/gameovercavaleiro1.html";
      break;
    } else {
      alert("Digite 1 ou 2");
    }
  }
}
