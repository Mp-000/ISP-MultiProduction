function renderAktivasi() {
  const p = DB.get('pelanggan');
  tabel.innerHTML = p.map((x,i)=>`
    <tr>
      <td>${x.nama}</td>
      <td>${x.status}</td>
      <td>
        <button class="btn btn-success btn-sm" onclick="aktifkan(${i})">Aktifkan</button>
      </td>
    </tr>`).join('');
}

function aktifkan(i) {
  const p = DB.get('pelanggan');
  p[i].status = 'Aktif';
  DB.set('pelanggan', p);
  renderAktivasi();
}

document.addEventListener('DOMContentLoaded', renderAktivasi);
