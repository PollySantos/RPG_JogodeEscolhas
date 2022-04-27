function nivelDoisCavaleiro() {
  while (question != 1 || question != 2) {
    var question = prompt(
      '1. Ajudar o amigo do hobbit \n 2. Ignorar o empréstimo do álcool e seguir seu caminho'
    );

    if (question == 1) {
      window.location.href = "../personagens/cavaleiropt3.html";
      break;
    } else if (question == 2) {
      window.location.href = "../personagens/gameovercavaleiro2.html";
      break;
    } else {
      alert("Digite 1 ou 2");
    }
  }
}
