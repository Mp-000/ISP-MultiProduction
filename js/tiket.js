function buatTiket(){
  Swal.fire({
    title:'Tiket Gangguan',
    input:'text'
  }).then(r=>{
    DB.push('tiket',{masalah:r.value,status:'OPEN'});
    renderTiket();
  });
}

function renderTiket(){
  tabel.innerHTML = DB.get('tiket').map(t=>`
    <tr>
      <td>${t.masalah}</td>
      <td>${t.status}</td>
    </tr>`).join('');
}

document.addEventListener('DOMContentLoaded', renderTiket);
