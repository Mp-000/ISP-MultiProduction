function suspend(i){
  const p = DB.get('pelanggan');
  p[i].status='Suspend';
  DB.set('pelanggan', p);
}
