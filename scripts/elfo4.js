function nivelQuatroElfo() {
  while (question != 1 || question != 2) {
    var question = prompt(
      '1. desafiar o monstro usando seu arco e flecha \n 2. Esperar para ver se o monstro dormia'
    );

    if (question == 1) {
      window.location.href = "../personagens/elfotheend.html";
      break;
    } else if (question == 2) {
      window.location.href = "../personagens/gameoverelfo4.html";
      break;
    } else {
      alert("Digite 1 ou 2");
    }
  }
}
