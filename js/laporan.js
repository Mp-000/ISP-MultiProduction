function pendapatan(){
  const total = DB.get('billing')
    .filter(b=>b.status==='PAID')
    .reduce((a,b)=>a+b.total,0);
  totalPendapatan.innerText = 'Rp ' + total;
}

document.addEventListener('DOMContentLoaded', pendapatan);
