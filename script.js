document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('betaForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  document.getElementById('formMessage').textContent = email ? `Thanks — ${email} is ready to be connected to the beta list.` : '';
});
