const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)


    let content = document.getElementById('content')

    let carregando = '<p><font face="arial" size="11" color="#51A2EE">Carregando a papelada de adoção...</font></p>'

    let pronto = '<p><strong><font face="Arial Black" color="#fff" size="18">BEM VINDO A FAMÍLIA!</font></strong></p>'

    setTimeout(() => {
        content.innerHTML = carregando
    }, 500);


    setTimeout(() => {
        content.innerHTML = pronto
    }, 2000);


})