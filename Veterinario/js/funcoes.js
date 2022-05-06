function mostraPass(pass) {

  var x = document.getElementById(pass);

  if (x.type === "password") {
    x.type = "text";
  }

  else {
    x.type = "password";
  }
}

function editable() {
  document.getElementById("nome").disabled = false;
  document.getElementById("apelido").disabled = false;
  document.getElementById("email").disabled = false;
  document.getElementById("contacto").disabled = false;
}

function nonEditable() {
  document.getElementById("nome").disabled = true;
  document.getElementById("apelido").disabled = true;
  document.getElementById("email").disabled = true;
  document.getElementById("contacto").disabled = true;
}

function changePlan() {
  document.getElementById("planoOp").disabled = false;
  document.getElementById("metodoOp").disabled = false
}

function savePlan() {
  document.getElementById("planoOp").disabled = true;
  document.getElementById("metodoOp").disabled = true;
}

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

function insertsPass() {
  document.getElementById("buton").style.display = "none";
  document.getElementById("passes").style.display = "block";
}

function cancelar() {
  document.getElementById("passes").style.display = "none";
  document.getElementById("buton").style.display = "block";
}


function ConfirmDialog() {

  var result = confirm("Deseja continuar a sua ação?");
  document.getElementById("ref").href = "../../Login e Registo/html/teste.html";
  pass1 = document.getElementById("pass").value;
  pass2 = document.getElementById("pass2").value;
 
  if (result && (pass1 == pass2) && (pass1 != "") && (pass2 != "")) 
  {
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

function toggleThemeMode() {
  temaAtual = document.documentElement.getAttribute("tema");
  temaNovo = "escuro";

  if (temaAtual === "escuro") {
    temaNovo = "claro";
  }

  document.documentElement.setAttribute('tema', temaNovo);
  localStorage.setItem('theme', temaNovo);
}

document.getElementById("pop-up").addEventListener("submit", (e) => {
  e.preventDefault();
  swal({
    title: "Sucesso",
    icon: "success",
    button: "Continuar",
  });
})