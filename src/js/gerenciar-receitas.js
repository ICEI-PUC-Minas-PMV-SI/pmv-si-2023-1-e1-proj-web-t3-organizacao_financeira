    // Recuperar dados do Local Storage
    var dados = localStorage.getItem( "listaUser");
  
    // Verificar se os dados existem
    if (dados) {
      console.log("Dados encontrados:", dados);
    } else {
      console.log("Nenhum dado encontrado.");
    }
