// ARRAY - Daftar kos
let kos = JSON.parse(localStorage.getItem('ngekosin_kos') || 'null') || [
  {nama:'Kos Melati - Cikarang', lokasi:'Cikarang, Dekat Jababeka', harga:850000, tipe:'Putri', rating:4.9, foto:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80', fasilitas:'AC, WiFi, Kamar Mandi Dalam, Dapur'},
  {nama:'Kos Berkah - Jababeka', lokasi:'Jababeka, Cikarang', harga:1200000, tipe:'Putra', rating:4.8, foto:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80', fasilitas:'AC, WiFi, Parkir Luas, Laundry'},
  {nama:'Kos Griya Asri', lokasi:'Lippo Cikarang', harga:1500000, tipe:'Campur', rating:4.9, foto:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80', fasilitas:'AC, WiFi, Kamar Mandi Dalam, TV, Kulkas'},
  {nama:'Kos Mawar - Kost Harian', lokasi:'Cikarang Selatan', harga:650000, tipe:'Putri', rating:4.7, foto:'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80', fasilitas:'Kipas, WiFi, Kamar Mandi Luar'},
  {nama:'Penginapan Pak Haji', lokasi:'Dekat Stasiun Cikarang', harga:1800000, tipe:'Campur', rating:4.8, foto:'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80', fasilitas:'AC, WiFi, Sarapan, Cleaning'},
  {nama:'Kos Elite Cikarang', lokasi:'Meikarta, Cikarang', harga:2100000, tipe:'Putra', rating:5.0, foto:'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80', fasilitas:'AC, WiFi, Kolam Renang, Gym, Security 24 Jam'},
];
let pesanan = JSON.parse(localStorage.getItem('ngekosin_pesanan') || '[]');
let dipilih = 0;
function simpan(){ localStorage.setItem('ngekosin_kos', JSON.stringify(kos)); localStorage.setItem('ngekosin_pesanan', JSON.stringify(pesanan)); }
function rupiah(n){ return 'Rp ' + n.toLocaleString('id-ID'); }
function toast(p){ let t=document.createElement('div'); t.textContent=p; t.style.cssText='position:fixed;top:16px;left:50%;transform:translateX(-50%);background:#111;color:#fff;padding:12px 18px;border-radius:12px;z-index:99;font-size:14px'; document.body.appendChild(t); setTimeout(()=>t.remove(),2500); }
function pindah(nama){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+nama).classList.add('active');
  document.querySelectorAll('.menu button').forEach(b=>b.classList.remove('aktif'));
  let btn=document.getElementById('btn-'+nama); if(btn) btn.classList.add('aktif');
  window.scrollTo(0,0); tampil();
}
function cariDariHome(){ document.getElementById('cari').value=document.getElementById('cariHome').value; }
function kartu(k, idx){
  return `<div class="kartu" onclick="bukaDetail(${idx})">
    <img src="${k.foto}"><div class="kartu-body">
    <span class="badge">🏠 ${k.tipe} • ⭐ ${k.rating}</span>
    <h3>${k.nama}</h3><p>📍 ${k.lokasi}</p>
    <p class="fasilitas">${k.fasilitas}</p>
    <div class="harga">${rupiah(k.harga)} <small>/ bulan</small></div>
    </div></div>`;
}
function tampil(){
  // SEARCHING - Linear Search
  let key=document.getElementById('cari').value.toLowerCase();
  let fh=document.getElementById('filterHarga').value;
  let ft=document.getElementById('filterTipe').value;
  let urut=document.getElementById('urut').value;
  let hasil=[];
  for(let k of kos){
    let cocok=(k.nama.toLowerCase().includes(key)||k.lokasi.toLowerCase().includes(key)) && (ft==''||k.tipe==ft);
    if(fh=='murah' && k.harga>=1000000) cocok=false;
    if(fh=='sedang' && (k.harga<1000000||k.harga>1500000)) cocok=false;
    if(fh=='mahal' && k.harga<=1500000) cocok=false;
    if(cocok) hasil.push(k);
  }
  // SORTING - Bubble Sort
  if(urut){
    for(let i=0;i<hasil.length;i++){ for(let j=0;j<hasil.length-i-1;j++){
      let a= urut=='harga'?hasil[j].harga:hasil[j].nama.toLowerCase();
      let b= urut=='harga'?hasil[j+1].harga:hasil[j+1].nama.toLowerCase();
      if(a>b){let tmp=hasil[j];hasil[j]=hasil[j+1];hasil[j+1]=tmp;}
    }}
  }
  document.getElementById('jmlKos').textContent=hasil.length;
  document.getElementById('list').innerHTML=hasil.map(k=>kartu(k, kos.indexOf(k))).join('');
  document.getElementById('kosong').style.display=hasil.length==0?'block':'none';
  // Beranda - 3 terpopuler
  let populer=[...kos].sort((a,b)=>b.rating-a.rating).slice(0,3);
  document.getElementById('listPopuler').innerHTML=populer.map(k=>kartu(k, kos.indexOf(k))).join('');
  // Pesanan
  document.getElementById('badgePesanan').textContent=pesanan.length;
  document.getElementById('badgePesanan').style.display=pesanan.length==0?'none':'block';
  let lp=document.getElementById('listPesanan'); lp.innerHTML='';
  document.getElementById('pesananKosong').style.display=pesanan.length==0?'block':'none';
  pesanan.forEach((p,idx)=>{
    lp.innerHTML+=`<div class="pesanan-item"><img src="${p.foto}"><div class="info"><h3>${p.namaKos}</h3><p style="color:#666;font-size:13px">👤 ${p.nama} • 📅 Masuk ${p.tanggal}<br>⏳ ${p.durasi} bulan • Total: <b>${rupiah(p.total)}</b><br><span style="background:#D1FAE5;padding:3px 8px;border-radius:10px;font-size:11px">✅ TERPESAN - Antrian No. ${idx+1}</span></p></div><button onclick="batalPesanan(${idx})" style="border:0;background:#FEE2E2;padding:10px;border-radius:10px;cursor:pointer">🗑️ Batal</button></div>`;
  });
  // Laporan
  let totalPesanan=pesanan.reduce((a,b)=>a+b.total,0);
  document.getElementById('laporanIsi').innerHTML=`<br>Total kos: <b>${kos.length}</b><br>Total pesanan: <b>${pesanan.length} pesanan (Queue)</b><br>Total pemasukan dari pesanan: <b>${rupiah(totalPesanan)}</b>`;
  hitungTotal();
}
function bukaDetail(idx){
  dipilih=idx; let k=kos[idx];
  document.getElementById('detailIsi').innerHTML=`<img src="${k.foto}" style="width:100%;height:260px;object-fit:cover;border-radius:16px">
    <h2>${k.nama}</h2><p class="muted">📍 ${k.lokasi} • ⭐ ${k.rating} • 🏠 Tipe ${k.tipe}</p>
    <div class="box"><b>Fasilitas:</b><p>${k.fasilitas}</p><b>Harga:</b><p class="harga">${rupiah(k.harga)} <small>/ bulan</small></p><p class="muted small">✅ Kamar tersedia • Bisa survey dulu • Bisa bayar di tempat</p></div>`;
  document.getElementById('bTanggal').value=new Date().toISOString().slice(0,10);
  pindah('detail');
}
function hitungTotal(){
  let k=kos[dipilih]; if(!k) return;
  let durasi=parseInt(document.getElementById('bDurasi').value);
  let diskonPersen= durasi==3?5: durasi==6?10: durasi==12?15:0;
  let subtotal=k.harga*durasi; let diskon=subtotal*diskonPersen/100;
  document.getElementById('rHarga').textContent=rupiah(k.harga);
  document.getElementById('rDurasi').textContent=durasi+' bulan';
  document.getElementById('rDiskon').textContent='- '+rupiah(diskon)+' ('+diskonPersen+'%)';
  document.getElementById('rTotal').textContent=rupiah(subtotal-diskon);
}
document.getElementById('bDurasi').addEventListener('change', hitungTotal);
function pesan(){
  let nama=document.getElementById('bNama').value.trim();
  let hp=document.getElementById('bHp').value.trim();
  let tanggal=document.getElementById('bTanggal').value;
  let durasi=parseInt(document.getElementById('bDurasi').value);
  if(!nama||!hp){ toast('⚠️ Nama & WA harus diisi!'); return; }
  let k=kos[dipilih];
  let diskonPersen= durasi==3?5: durasi==6?10: durasi==12?15:0;
  let total=k.harga*durasi*(1-diskonPersen/100);
  // QUEUE - Pesanan masuk antrian, yang pesan duluan dilayani duluan
  pesanan.push({namaKos:k.nama, foto:k.foto, nama, hp, tanggal, durasi, total});
  simpan(); tampil();
  toast('🎉 Berhasil! Kos '+k.nama+' sudah kamu pesan!');
  pindah('pesanan');
}
function batalPesanan(i){ if(!confirm('Batalkan pesanan ini?')) return; pesanan.splice(i,1); simpan(); tampil(); toast('Pesanan dibatalkan'); }
function tambahKos(){
  let nama=document.getElementById('kNama').value.trim();
  let lokasi=document.getElementById('kLokasi').value.trim();
  let harga=parseInt(document.getElementById('kHarga').value);
  let tipe=document.getElementById('kTipe').value;
  let fasilitas=document.getElementById('kFasilitas').value || 'WiFi, Parkir';
  if(!nama||!lokasi||!harga){ toast('⚠️ Lengkapi nama, lokasi, harga!'); return; }
  kos.push({nama, lokasi, harga, tipe, rating:4.8, foto:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80', fasilitas});
  simpan(); tampil(); toast('✅ Kos berhasil didaftarkan!'); pindah('cari');
}
tampil();