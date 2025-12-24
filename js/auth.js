const USERS = [
  { username: 'admin', password: '123', role: 'Admin' },
  { username: 'noc', password: '123', role: 'NOC' },
  { username: 'finance', password: '123', role: 'Finance' },
  { username: 'cs', password: '123', role: 'Customer Service' }
];

function login() {
  const u = username.value;
  const p = password.value;

  const user = USERS.find(x => x.username === u && x.password === p);
  if (!user) return Swal.fire('Gagal', 'Login salah', 'error');

  localStorage.setItem('user', JSON.stringify(user));
  location.href = 'dashboard.html';
}

function authCheck() {
  if (!localStorage.getItem('user')) location.href = '../index.html';
}
