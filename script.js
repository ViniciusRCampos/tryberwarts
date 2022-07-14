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

document.getElementById('agreement').addEventListener('click', (e) => {
  document.getElementById('submit-btn').disabled = !e.target.checked;
});

const textArea = document.getElementById('textArea');
const counter = document.getElementById('counter');

textArea.addEventListener('input', (input) => {
  const { target } = input;
  const maxLength = target.getAttribute('maxlength');
  const currentLength = target.value.length;

  counter.innerHTML = `${currentLength}/${maxLength}`;
});
