function nivelDoisElfo() {
  while (question != 1 || question != 2) {
    var question = prompt(
      "1. Segue pelas árvores onde tem dominio e a nevoa está densa\n 2) segue pelo rio, onde a vista um barco"
    );

    if (question == 1) {
      window.location.href = "../personagens/gameoverelfo2.html";
      break;
    } else if (question == 2) {
      window.location.href = "../personagens/elfopt3.html";
      break;
    } else {
      alert("Digite 1 ou 2");
    }
  }
}
