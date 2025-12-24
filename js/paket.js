const KEY_PAKET = 'paket';

function renderPaket() {
  dataPaket.innerHTML = DB.get(KEY_PAKET).map((p,i)=>`
    <tr>
      <td>${p.nama}</td>
      <td>Rp ${p.harga}</td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="hapusPaket(${i})">Hapus</button>
      </td>
    </tr>`).join('');
}

function tambahPaket() {
  Swal.fire({
    title: 'Tambah Paket',
    html: `
      <input id="nama" class="swal2-input" placeholder="Nama Paket">
      <input id="harga" class="swal2-input" placeholder="Harga">
    `,
    preConfirm: () => ({ nama:nama.value, harga:parseInt(harga.value) })
  }).then(r => {
    DB.push(KEY_PAKET, r.value);
    renderPaket();
  });
}

function hapusPaket(i){
  DB.delete(KEY_PAKET, i);
  renderPaket();
}

document.addEventListener('DOMContentLoaded', renderPaket);
                        
