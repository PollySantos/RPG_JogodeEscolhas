function nivelTresElfo() {
  while (question != 1 || question != 2) {
    var question = prompt(
      '1. Segue pela esquerda\n2. Segue pela direita'
    );

    if (question == 1) {
      window.location.href = "../personagens/elfopt4.html";
      break;
    } else if (question == 2) {
      window.location.href = "../personagens/gameoverelfo3.html";
      break;
    } else {
      alert("Digite 1 ou 2");
    }
  }
}