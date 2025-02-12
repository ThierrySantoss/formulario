const input = document.querySelectorAll(".formulario div input, .formulario div textarea");

const enviar = document.querySelector(".enviar");

enviar.addEventListener("click", function (event) {

    input.forEach(function (item) {

        if (item.value) {
            item.classList.add("campoVerde")
            item.classList.remove("obrigatorio")
            item.nextElementSibling.style.display = "none";
        } else {
            item.classList.add("obrigatorio")
            item.classList.remove("campoVerde")
            item.nextElementSibling.style.display = "block";
            event.preventDefault();
        }

    })
})






