//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
  var opciones = document.querySelectorAll("#links  a");
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  opciones[4].className = "";
  link.className = "seleccionado";

  //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
  //en modo responsive
  var x = document.getElementById("nav");
  x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    document.getElementById("html").classList.add("barra-progreso1");
    document.getElementById("js").classList.add("barra-progreso2");
    document.getElementById("bd").classList.add("barra-progreso3");
    document.getElementById("ps").classList.add("barra-progreso4");
    document.getElementById("ex5").classList.add("barra-progreso5");
    document.getElementById("ex6").classList.add("barra-progreso6");
    document.getElementById("ex7").classList.add("barra-progreso7");
  }
}

const btn = document.getElementById("button");
const message = document.getElementById("message");
const nameForm = document.getElementById("name");
const tema = document.getElementById("tema");
const email = document.getElementById("email");
const popup = document.getElementById("overlay");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_ju4uarc";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviar email";
      popup.style.display = "block";
    },
    (err) => {
      btn.value = "Enviar email";
      popup.value = JSON.stringify(err);
      popup.style.display = "block";
    }
  );
  message.value = "";
  nameForm.value = "";
  tema.value = "";
  email.value = "";
});

document.getElementById("acceptButton").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
});

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    // Cambia la URL a la ubicación de tu archivo CV
    var url = "/images/cvgermain.pdf";
    window.open(url, "_blank");
  });
