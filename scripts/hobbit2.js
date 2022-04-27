function nivelDoisHobbit() {
  while (question != 1 || question != 2) {
    var question = prompt(
      '1. Permanece no acampamento com a fogueira \n 2. Sai em busca de alimento'
    );

    if (question == 1) {
      window.location.href = "../personagens/hobbitpt3.html";
      break;
    } else if (question == 2) {
      window.location.href = "../personagens/gameoverhobbit2.html";
      break;
    } else {
      alert("Digite 1 ou 2");
    }
  }
}