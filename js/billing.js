function generateBilling() {
  const pelanggan = DB.get('pelanggan').filter(p=>p.status==='Aktif');
  const billing = pelanggan.map(p=>({
    nama:p.nama,
    total:p.paket.includes('50')?500000:300000,
    status:'UNPAID'
  }));
  DB.set('billing', billing);
  Swal.fire('Sukses','Billing digenerate','success');
}
