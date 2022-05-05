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


// TODO
function verifiyPlan() 
{
  tipoPlano = document.getElementById("planoOp").value;
  m = document.getElementsByClassName("metodo");
  //tipoMetodo = document.getElementById("metodoOp").CONTEUDOATUAL;
  preco = document.getElementById("preco").textContent;

  if (tipoPlano == "---") {
    alert("ola");
    preco = "---";
    //tipoMetodo = "---";
  }
  if (tipoPlano == "Free") {
    preco = "Gratuito";
    m.style.display = "none";
  }
  if (tipoPlano == "Mensal") {
    preco = "1.99 €/Mês";
    //tipoMetodo = "---";
  }
  if (tipoPlano == "Anual") {
    preco = "17.99 €/Ano";
    //tipoMetodo = "---";
  }
}

function insertsPass()
{
  document.getElementById("suspender").style.display="none";
  document.getElementById("cancelar").style.display="block";
  document.getElementById("passes").style.display="block";
}

function cancelar()
{
  document.getElementById("passes").style.display="none";
  document.getElementById("suspender").style.display="block";
}


function ConfirmDialog()  {

  var result = confirm("Deseja continuar a sua ação?");
  document.getElementById("ref").href="../../Login e Registo/html/teste.html";
  pass1 = document.getElementById("pass").value;
  pass2 = document.getElementById("pass2").value;

  if(result && (pass1 == pass2))  
  {
      alert("Sucesso!");
  }
  else if(pass1 != pass2)
  {
    alert("Passwords não equivalentes!");
    document.getElementById("ref").href="#";
  }
  else
  {
    document.getElementById("ref").href="#";
  }
}