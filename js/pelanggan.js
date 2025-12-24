const KEY = 'pelanggan';

function renderPelanggan() {
  const data = DB.get(KEY);
  let html = '';
  data.forEach((p, i) => {
    html += `
    <tr>
      <td>${p.nama}</td>
      <td>${p.alamat}</td>
      <td>${p.paket}</td>
      <td><span class="badge bg-${p.status==='Aktif'?'success':'secondary'}">${p.status}</span></td>
      <td>
        <button class="btn btn-sm btn-warning" onclick="edit(${i})">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="hapus(${i})">Hapus</button>
      </td>
    </tr>`;
  });
  dataPelanggan.innerHTML = html;
}

function tambahPelanggan() {
  Swal.fire({
    title: 'Tambah Pelanggan',
    html: `
      <input id="nama" class="swal2-input" placeholder="Nama">
      <input id="alamat" class="swal2-input" placeholder="Alamat">
      <input id="paket" class="swal2-input" placeholder="Paket">
    `,
    preConfirm: () => ({
      nama: nama.value,
      alamat: alamat.value,
      paket: paket.value,
      status: 'Non Aktif'
    })
  }).then(r => {
    if (r.isConfirmed) {
      DB.push(KEY, r.value);
      renderPelanggan();
    }
  });
}

function edit(i) {
  const p = DB.get(KEY)[i];
  Swal.fire({
    title: 'Edit Pelanggan',
    html: `
      <input id="nama" class="swal2-input" value="${p.nama}">
      <input id="alamat" class="swal2-input" value="${p.alamat}">
      <input id="paket" class="swal2-input" value="${p.paket}">
    `,
    preConfirm: () => ({
      ...p,
      nama: nama.value,
      alamat: alamat.value,
      paket: paket.value
    })
  }).then(r => {
    DB.update(KEY, i, r.value);
    renderPelanggan();
  });
}

function hapus(i) {
  Swal.fire({ title:'Hapus?', showCancelButton:true })
  .then(r => {
    if (r.isConfirmed) {
      DB.delete(KEY, i);
      renderPelanggan();
    }
  });
}

document.addEventListener('DOMContentLoaded', renderPelanggan);
          
