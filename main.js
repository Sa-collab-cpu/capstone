const form = document.getElementById('registrationForm');
const entriesTableBody = document.querySelector('#entriesTable tbody');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const termsAccepted = document.getElementById('terms').checked;

  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${password}</td>
    <td>${dob}</td>
    <td>${termsAccepted ? 'Yes' : 'No'}</td>
  `;

  entriesTableBody.appendChild(newRow);

  form.reset();
});
