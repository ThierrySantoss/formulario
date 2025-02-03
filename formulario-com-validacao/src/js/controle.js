const input = document.querySelectorAll(".formulario div input, .formulario div textarea");

const errorObrigatorio = document.querySelectorAll(".formulario div p")

const enviar = document.querySelector(".enviar");

enviar.addEventListener("click", function (event) {

    input.forEach(function (item, index) {

        if (item.value.trim() === "") {
            item.classList.add("obrigatorio")
            errorObrigatorio[index].style.display = "block";
            event.preventDefault();
        } else {
            item.classList.remove("obrigatorio")
            errorObrigatorio[index].style.display = "none";
            item.classList.add("campoVerde")
        }

    })
})






