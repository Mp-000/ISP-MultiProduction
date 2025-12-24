function renderBayar() {
  bayarTabel.innerHTML = DB.get('billing').map((b,i)=>`
    <tr>
      <td>${b.nama}</td>
      <td>Rp ${b.total}</td>
      <td>${b.status}</td>
      <td>
        <button class="btn btn-success btn-sm" onclick="bayar(${i})">Bayar</button>
      </td>
    </tr>`).join('');
}

function bayar(i){
  const b = DB.get('billing');
  b[i].status='PAID';
  DB.set('billing', b);
  renderBayar();
}

document.addEventListener('DOMContentLoaded', renderBayar);
