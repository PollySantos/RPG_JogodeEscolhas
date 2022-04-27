function nivelUmElfo() {
  while (question != 1 || question != 2) {
    var question = prompt(
      "1. acha que os lacaios estavam mentindo\n 2. Como não tem nada para fazer, decide descobrir se é verdade "
    );

    if (question == 1) {
      window.location.href = "../personagens/gameoverelfo1.html";
      break;
    } else if (question == 2) {
      window.location.href = "../personagens/elfopt2.html";
      break;
    } else {
      alert("Digite 1 ou 2");
    }
  }
}
