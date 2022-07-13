const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});






document.getElementById('agreement').addEventListener('click', function (e) {
document.getElementById('submit-btn').disabled = !e.target.checked;
});