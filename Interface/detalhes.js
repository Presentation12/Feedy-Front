function mostraPass(pass) 
{

  var x = document.getElementById(pass);

  if (x.type === "password") 
  {
    x.type = "text";
  }

  else 
  {
    x.type = "password";
  }
}

function editable() {
  x=document.getElementById("nome")
  x.disabled = false;
  x=document.getElementById("apelido")
  x.disabled = false;
  x=document.getElementById("email")
  x.disabled = false;
  x=document.getElementById("contacto")
  x.disabled = false;
}

function nonEditable() {
  x=document.getElementById("nome")
  x.disabled = true;
  x=document.getElementById("apelido")
  x.disabled = true;
  x=document.getElementById("email")
  x.disabled = true;
  x=document.getElementById("contacto")
  x.disabled = true;
}
