document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-validador");

    form.addEventListener("submit", function (event) {
    event.preventDefault();

    let campoA = parseFloat(document.getElementById("Campo-A").value);
    let campoB = parseFloat(document.getElementById("Campo-B").value);

    if (campoB > campoA) {
        const mensagemSucesso = `O valor de <b>${campoB}</b> é maior que o valor de <b>${campoA}</b>, parabéns!`;

        let containerMensagemSucesso = document.querySelector(".sucess-message");
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        document.getElementById("Campo-A").value = '';
        document.getElementById("Campo-B").value = '';

        setTimeout(function () {
            location.reload();
        }, 3000);

    } else {
        document.querySelector(".error-message").style.display = 'block';
    }
    });
});




