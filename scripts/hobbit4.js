function nivelQuatroHobbit() {
  while (question != 1 || question != 2) {
    var question = prompt(
      '1. Foge e volta para o conforto da sua casa\n 2. Procura uma maneira de distrair o Golem e entra na caverna'
    );

    if (question == 1) {
      window.location.href = "../personagens/gameoverhobbit4.html";
      break;
    } else if (question == 2) {
      window.location.href = "../personagens/hobbittheend.html";
      break;
    } else {
      alert("Digite 1 ou 2");
    }
  }
}