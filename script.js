document.addEventListener('DOMContentLoaded', function() {
    const botaoMensagem = document.getElementById('mensagemBtn');
    const mensagemElemento = document.getElementById('mensagemSaudacao');

    botaoMensagem.addEventListener('click', function() {
        const mensagem = "Busque a Jesus, Ele te ama!";
        mensagemElemento.textContent = mensagem;
    });
});