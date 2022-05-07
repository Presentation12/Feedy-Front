// visualizar password
function mostraPass(pass) {

  var x = document.getElementById(pass);

  if (x.type === "password") {
    x.type = "text";
  }

  else {
    x.type = "password";
  }
}

// torna editavel determinados campos do perfil veterinario para edição alem de ficar visivel os botoes de guardar e cancelar e invisivel o de alterar
function editable() {
  document.getElementById("nome").disabled = false;
  document.getElementById("apelido").disabled = false;
  document.getElementById("email").disabled = false;
  document.getElementById("contacto").disabled = false;

  document.getElementById("alterar").style.display = "none";
  document.getElementById("editar").style.display = "block";
}

// torna não editavel determinados campos do perfil veterinario alem de ficar invisivel os botoes de guardar e cancelar e visivel o de alterar
function nonEditable() {
  document.getElementById("nome").disabled = true;
  document.getElementById("apelido").disabled = true;
  document.getElementById("email").disabled = true;
  document.getElementById("contacto").disabled = true;

  document.getElementById("alterar").style.display = "block";
  document.getElementById("editar").style.display = "none";
}

// ao clicar para editar plano tornam se editaveis as select boxes
function changePlan() {
  document.getElementById("planoOp").disabled = false;
  document.getElementById("metodoOp").disabled = false
}

// ao clicar para guardar plano tornam se não editaveis as select boxes
function savePlan() {
  document.getElementById("planoOp").disabled = true;
  document.getElementById("metodoOp").disabled = true;
}

// alteraçoes na div e campo do metodo e campo preco, dependendo dos campos selecionados no metodo e plano
function verifyPlan() {
  tipoPlano = document.getElementById("planoOp").value;

  m = document.getElementById("metodo");
  tipoMetodo = document.getElementById("metodoOp");
  preco = document.getElementById("preco");

  if (tipoPlano == "---") {
    preco.innerHTML = "---";
    tipoMetodo.value = "---";
    m.style.display = "block";
  }
  if (tipoPlano == "Free") {
    preco.innerHTML = "Gratuito";
    m.style.display = "none";
  }
  if (tipoPlano == "Mensal") {
    preco.innerHTML = "1.99 €/Mês";
    tipoMetodo.value = "---";
    m.style.display = "block";
  }
  if (tipoPlano == "Anual") {
    preco.innerHTML = "17.99 €/Ano";
    tipoMetodo.value = "---";
    m.style.display = "block";
  }
}

// torna visivel as caixas para inserção de password e butao de cancelkar e confirmar
// torna invisivel butao de alterar
function insertsPass() {
  document.getElementById("buton").style.display = "none";
  document.getElementById("passes").style.display = "block";
}

// torna invisivel as caixas para inserção de password e butao de cancelkar e confirmar
// torna visivel butao de alterar
function cancelar() {
  document.getElementById("passes").style.display = "none";
  document.getElementById("buton").style.display = "block";
}

// confirmaçao de suspenção de conta
function ConfirmDialog() {

  var result = confirm("Deseja continuar a sua ação?");
  document.getElementById("ref").href = "../../Login e Registo/html/teste.html";
  pass1 = document.getElementById("pass").value;
  pass2 = document.getElementById("pass2").value;

  if (result && (pass1 == pass2) && (pass1 != "") && (pass2 != "")) {
    alert("Sucesso!");
  }
  else if (pass1 != pass2) {
    alert("Passwords não equivalentes!");
    document.getElementById("ref").href = "#";
  }
  else {
    document.getElementById("ref").href = "#";
  }
}

// Alternar entre modo escuro e claro da pagina
function toggleThemeMode() {
  temaAtual = document.documentElement.getAttribute("tema");
  temaNovo = "escuro";

  if (temaAtual === "escuro") {
    temaNovo = "claro";
  }

  document.documentElement.setAttribute('tema', temaNovo);
  localStorage.setItem('theme', temaNovo);
}


// Busca todos os butoes confirmar e caso seja clicado este mostra uma mensagem
buttons = document.querySelectorAll(".confirmar");
buttons.forEach(button => {

  button.addEventListener("click", () => {
    swal({
      title: 'Sucesso',
      icon: 'success',
    });
  })
})

// Busca todos os butoes cancelar e caso seja clicado este mostra uma mensagem
buttons = document.querySelectorAll(".cancelar");
buttons.forEach(button => {

  button.addEventListener("click", () => {

    swal({
      title: 'Cancelado',
      icon: 'warning',
    });
  })
})

// Busca todos os butoes submeter e caso seja clicado este mostra uma mensagem
buttons = document.querySelectorAll(".submeter");
buttons.forEach(button => {

  button.addEventListener("click", () => {
    if (document.getElementById("assunto").value != "" && document.getElementById("descricao").value != "") 
    {
      swal({
        title: 'Submetido',
        icon: 'success'
      });
    }
    else
    {
      swal({
        title: 'Erro',
        text: 'Campos em falta',
        icon: 'error'
      });
    }
  })
})

// Busca o butao submeter e caso seja clicado e os campos de texto estejam preenchidos este mostra uma mensagem
document.getElementById("submeter").addEventListener("click", (e) => {
  e.preventDefault();

  if (document.getElementById("assunto").value != "" && document.getElementById("descricao").value != "") {
    document.getElementById("show").style.display="block";
  }
})

// Busca o butao ok e caso seja clicado torna invisivel a mensagem e da refresh na pagina
document.getElementById("ok").addEventListener("click", () => {
  document.getElementById("show").style.display="none";
  document.querySelector(".help").submit();
})
