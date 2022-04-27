function nivelTresHobbit() {
  while (question != 1 || question != 2) {
    var question = prompt(
      '1. Um caminho livre e bem demarcado\n 2. Um caminho escuro, com espinhos e sinuoso'
    );

    if (question == 1) {
      window.location.href = "../personagens/gameoverhobbit3.html";
      break;
    } else if (question == 2) {
      window.location.href = "../personagens/hobbitpt4.html";
      break;
    } else {
      alert("Digite 1 ou 2");
    }
  }
}