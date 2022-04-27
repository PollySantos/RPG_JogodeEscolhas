function nivelTresCavaleiro() {
  while (question != 1 || question != 2) {
    var question = prompt(
      '1. Interpretar a dica do ferido hobbit como a necessidade de acender uma tocha \n 2. Seguir seus instintos e encarar a caverna em sua forma natural'
    );

    if (question == 1) {
      window.location.href = "../personagens/gameovercavaleiro3.html";
      break;
    } else if (question == 2) {
      window.location.href = "../personagens/cavaleiropt4.html";
      break;
    } else {
      alert("Digite 1 ou 2");
    }
  }
}
