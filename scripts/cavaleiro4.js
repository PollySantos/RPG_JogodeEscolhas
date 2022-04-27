function nivelQuatroCavaleiro() {
    while (question != 1 || question != 2) {
      var question = prompt(
        '1. tentar subir a corda \n 2. Descer a ribanceira em direção ao clarão'
      );
  
      if (question == 1) {
        window.location.href = "../personagens/cavaleirotheend.html";
        break;
      } else if (question == 2) {
        window.location.href = "../personagens/gameovercavaleiro4.html";
        break;
      } else {
        alert("Digite 1 ou 2");
      }
    }
  }
  