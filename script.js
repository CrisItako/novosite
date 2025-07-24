document.querySelector('form').addEventListener('submit',function(event){
    event.preventDefault();
    alert('Mensagem enviada com sucesso!Entraremos em contato.');
    this.reset();
});

