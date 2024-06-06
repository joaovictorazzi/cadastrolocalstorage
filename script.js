document.addEventListener('DOMContentLoaded', () => {
    const cadastroForm = document.getElementById('cadastroForm');
    const loginForm = document.getElementById('loginForm');

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const user = {
                username: username,
                password: password
            };

            localStorage.setItem('user', JSON.stringify(user));
            alert('Usuário cadastrado com sucesso!');
            window.location.href = 'login.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser && storedUser.username === username && storedUser.password === password) {
                alert('Login bem-sucedido!');
            } else {
                alert('Usuário ou senha incorretos.');
            }
        });
    }
});
