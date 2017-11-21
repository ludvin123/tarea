document.addEventListener("DOMContentLoaded" , function(){
  console.log("Estoy listo!!");

  var form = document.querySelectorAll("form");

  form[0].addEventListener('submit' , function(){
    event.preventDefault();
    console.log("Enviado")
  });
  console.log(form);
})
