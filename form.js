
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const response = document.getElementById('responseMessage');

  if (!name || !email || !message) {
    response.style.display = 'block';
    response.style.color = 'red';
    response.textContent = 'Please fill out all fields.';
    return;
  }

  response.style.display = 'block';
  response.style.color = 'green';
  response.textContent = 'Thank you! Your message has been sent.';

  // Reset form
  document.getElementById('contactForm').reset();
});