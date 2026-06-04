/* =========================================
   KELURAHAN JEMAWAN — script.js
   Semua fungsi JavaScript website
   ========================================= */

/* =============================================
   DATA BERITA
   ============================================= */
const beritaData = [
  {
    id: 0,
    emoji: '🌾',
    tag: 'PERTANIAN',
    kategori: 'pertanian',
    judul: 'Panen Raya Kelompok Tani Subur Makmur Sukses Dilaksanakan',
    tanggal: '18 Mei 2026',
    isi: `Kelompok Tani Subur Makmur Kelurahan Jemawan berhasil menggelar panen raya dengan hasil yang memuaskan. Tahun ini, total hasil panen mencapai 12 ton per hektar, meningkat 20% dibanding tahun lalu.

Kegiatan ini dihadiri oleh Lurah Jemawan Budi Santoso, S.Sos, perwakilan Dinas Pertanian Kabupaten Klaten, serta seluruh anggota kelompok tani. Suasana sangat meriah dengan diiringi kesenian tradisional setempat.

Program intensifikasi pertanian yang telah berjalan selama dua tahun terbukti berhasil meningkatkan produktivitas lahan secara signifikan. Penggunaan pupuk organik dan sistem irigasi yang lebih baik menjadi kunci keberhasilan ini.

Ke depan, kelurahan akan terus mendukung program pertanian berkelanjutan demi kesejahteraan petani dan ketahanan pangan masyarakat Kelurahan Jemawan.`
  },
  {
    id: 1,
    emoji: '🏥',
    tag: 'KESEHATAN',
    kategori: 'kesehatan',
    judul: 'Posyandu Kelurahan Jemawan Raih Predikat Posyandu Aktif',
    tanggal: '10 Mei 2026',
    isi: `Posyandu Melati Kelurahan Jemawan berhasil meraih predikat Posyandu Aktif dari Dinas Kesehatan Kabupaten Klaten. Penghargaan bergengsi ini diserahkan langsung oleh Kepala Dinas Kesehatan dalam acara peringatan Hari Kesehatan Nasional.

Penghargaan ini diberikan atas dedikasi para kader posyandu dalam memberikan pelayanan kesehatan ibu dan anak secara rutin setiap bulan. Selama tahun 2025, posyandu berhasil melayani lebih dari 450 balita dan 120 ibu hamil.

Program unggulan yang dijalankan meliputi pemantauan tumbuh kembang anak, imunisasi lengkap, penyuluhan gizi, dan deteksi dini stunting. Angka stunting di Kelurahan Jemawan berhasil turun dari 8,5% menjadi 5,2% dalam satu tahun.

Lurah Jemawan menyampaikan apresiasi atas kerja keras seluruh kader posyandu yang telah berkontribusi meningkatkan derajat kesehatan masyarakat.`
  },
  {
    id: 2,
    emoji: '🎓',
    tag: 'PENDIDIKAN',
    kategori: 'pendidikan',
    judul: 'Beasiswa Bagi Siswa Berprestasi dari Keluarga Kurang Mampu Dibuka',
    tanggal: '3 Mei 2026',
    isi: `Kelurahan Jemawan bekerja sama dengan Yayasan Pendidikan Klaten membuka program beasiswa bagi siswa berprestasi dari keluarga kurang mampu. Program ini merupakan wujud kepedulian pemerintah kelurahan terhadap dunia pendidikan.

Program beasiswa ini menyediakan 15 kuota untuk jenjang SMP dan SMA/SMK. Besaran beasiswa mencakup biaya SPP selama satu tahun, uang saku bulanan sebesar Rp 200.000, serta perlengkapan alat tulis sekolah.

Pendaftaran dibuka hingga 30 Juni 2026. Persyaratan pendaftaran:
- Fotokopi rapor 3 semester terakhir dengan nilai rata-rata minimal 80
- Surat Keterangan Tidak Mampu (SKTM) dari kelurahan
- Surat rekomendasi dari guru wali kelas
- Fotokopi KK dan KTP orang tua

Informasi lebih lanjut dan formulir pendaftaran dapat diambil langsung di kantor Kelurahan Jemawan pada jam kerja.`
  },
  {
    id: 3,
    emoji: '🏗️',
    tag: 'PEMBANGUNAN',
    kategori: 'pembangunan',
    judul: 'Renovasi Jalan Lingkungan RT 03/RW 01 Selesai Dikerjakan',
    tanggal: '25 April 2026',
    isi: `Proyek renovasi jalan lingkungan di RT 03/RW 01 Kelurahan Jemawan telah berhasil diselesaikan tepat waktu dan sesuai anggaran yang ditetapkan. Pengerjaan berlangsung selama tiga minggu dengan melibatkan kontraktor lokal.

Jalan sepanjang 250 meter dan lebar 3,5 meter kini telah diaspal dengan kualitas hotmix terbaik menggunakan anggaran Dana Desa tahun 2026 sebesar Rp 185 juta.

Warga RT 03/RW 01 sangat mengapresiasi perbaikan ini karena akses jalan menjadi lebih lancar, aman, dan nyaman — terutama saat musim hujan yang sebelumnya kerap menimbulkan genangan air dan jalan berlubang.

Selanjutnya, kelurahan telah merencanakan program perbaikan infrastruktur di RT 05/RW 02 dan pemasangan lampu jalan di sepanjang jalan utama kelurahan pada semester kedua tahun 2026.`
  },
  {
    id: 4,
    emoji: '🌱',
    tag: 'PEMBANGUNAN',
    kategori: 'pembangunan',
    judul: 'Program Penghijauan: 500 Pohon Ditanam di Kelurahan Jemawan',
    tanggal: '15 April 2026',
    isi: `Dalam rangka memperingati Hari Bumi, Kelurahan Jemawan mengadakan program penghijauan dengan menanam 500 pohon di berbagai titik strategis di wilayah kelurahan. Kegiatan ini melibatkan seluruh elemen masyarakat, mulai dari pelajar, karang taruna, ibu-ibu PKK, hingga perangkat kelurahan.

Jenis pohon yang ditanam antara lain pohon trembesi, mahoni, jambu air, dan rambutan. Pemilihan jenis pohon disesuaikan dengan fungsinya — pohon peneduh untuk pinggir jalan dan pohon buah untuk area pemukiman.

Program ini merupakan bagian dari Rencana Pembangunan Jangka Menengah (RPJM) Kelurahan Jemawan yang menargetkan peningkatan Ruang Terbuka Hijau (RTH) sebesar 30% pada tahun 2027.

Setiap warga yang berpartisipasi mendapat tanggung jawab untuk merawat pohon di sekitar rumah masing-masing sebagai bentuk partisipasi aktif dalam menjaga lingkungan.`
  }
];

/* =============================================
   FUNGSI BERITA
   ============================================= */

let filterAktif = 'semua';

/**
 * Render daftar berita ke halaman berita
 */
function renderBerita() {
  const container = document.getElementById('berita-container');
  if (!container) return;

  const filtered = filterAktif === 'semua'
    ? beritaData
    : beritaData.filter(b => b.kategori === filterAktif);

  if (filtered.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:#999;font-size:12px;padding:24px">Tidak ada berita untuk kategori ini.</p>';
    return;
  }

  container.innerHTML = filtered.map(b => `
    <div class="berita-card" onclick="openBerita(${b.id})">
      <div class="berita-thumb">${b.emoji}</div>
      <div class="berita-meta">
        <span class="btag">${b.tag}</span>
        <h4>${b.judul}</h4>
        <div class="bdate">📅 ${b.tanggal}</div>
      </div>
    </div>
  `).join('');
}

/**
 * Filter berita berdasarkan kategori
 */
function filterBerita(kategori) {
  filterAktif = kategori;

  // Update tampilan tombol filter
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('filter-active');
  });
  const activeBtn = document.getElementById('bf-' + kategori);
  if (activeBtn) activeBtn.classList.add('filter-active');

  renderBerita();
}

/**
 * Buka detail berita
 */
function openBerita(id) {
  const berita = beritaData.find(b => b.id === id);
  if (!berita) return;

  const listSection   = document.getElementById('berita-list-section');
  const detailSection = document.getElementById('berita-detail-section');
  const detailContent = document.getElementById('berita-detail-content');

  if (!listSection || !detailSection || !detailContent) return;

  // Isi konten detail
  detailContent.innerHTML = `
    <div class="bdetail-img">${berita.emoji}</div>
    <span class="btag">${berita.tag}</span>
    <h2>${berita.judul}</h2>
    <div class="bdate" style="margin-bottom:14px">📅 ${berita.tanggal}</div>
    ${berita.isi.split('\n\n').map(par => `<p>${par.replace(/\n/g, '<br>')}</p>`).join('')}
  `;

  listSection.style.display   = 'none';
  detailSection.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update URL tanpa reload
  if (window.history) {
    history.pushState(null, '', '?id=' + id);
  }
}

/**
 * Kembali ke daftar berita dari detail
 */
function closeBerita() {
  const listSection   = document.getElementById('berita-list-section');
  const detailSection = document.getElementById('berita-detail-section');

  if (listSection)   listSection.style.display   = 'block';
  if (detailSection) detailSection.style.display = 'none';

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Hapus parameter URL
  if (window.history) {
    history.pushState(null, '', window.location.pathname);
  }
}

/* =============================================
   FUNGSI MODAL FORM SURAT
   ============================================= */

/**
 * Buka modal form permohonan surat
 * @param {string} jenisSurat - Nama jenis surat
 */
function openModal(jenisSurat) {
  const modal = document.getElementById('modal');
  if (!modal) return;

  // Set judul modal
  document.getElementById('modal-title').textContent = '📋 ' + jenisSurat;

  // Reset form
  const fields = ['f-nama', 'f-nik', 'f-tmplahir', 'f-tgllahir', 'f-jk', 'f-alamat', 'f-hp', 'f-ket'];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });

  // Tampilkan form, sembunyikan pesan sukses
  const formContent = document.getElementById('form-content');
  const formSuccess = document.getElementById('form-success');
  if (formContent) formContent.style.display = 'block';
  if (formSuccess) formSuccess.style.display = 'none';

  // Buka modal
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/**
 * Tutup modal jika klik di luar kotak
 */
function closeModalOnBg(event) {
  if (event.target.id === 'modal') closeModal();
}

/**
 * Tutup modal
 */
function closeModal() {
  const modal = document.getElementById('modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

/**
 * Submit form permohonan surat
 */
function submitForm() {
  const nama   = document.getElementById('f-nama')?.value.trim();
  const nik    = document.getElementById('f-nik')?.value.trim();
  const alamat = document.getElementById('f-alamat')?.value.trim();
  const hp     = document.getElementById('f-hp')?.value.trim();

  // Validasi field wajib
  if (!nama || !nik || !alamat || !hp) {
    showToast('⚠️ Harap isi semua field yang wajib (*) terlebih dahulu!');
    return;
  }

  if (nik.length < 16) {
    showToast('⚠️ NIK harus 16 digit!');
    return;
  }

  if (!hp.startsWith('08') && !hp.startsWith('+62')) {
    showToast('⚠️ Nomor HP tidak valid!');
    return;
  }

  // Generate nomor antrian acak
  const noAntrian = 'ANT-' + new Date().getFullYear() + '-' + Math.floor(Math.random() * 9000 + 1000);

  // Tampilkan pesan sukses
  const formContent = document.getElementById('form-content');
  const formSuccess = document.getElementById('form-success');
  const successText = document.getElementById('success-text');

  if (formContent) formContent.style.display = 'none';
  if (successText) successText.textContent   = `Permohonan berhasil diajukan! No. Antrian: ${noAntrian}`;
  if (formSuccess) formSuccess.style.display = 'block';

  showToast('🎉 Permohonan berhasil! No. Antrian: ' + noAntrian);
}

/* =============================================
   FUNGSI FORM KONTAK / PENGADUAN
   ============================================= */

/**
 * Kirim pesan kontak / pengaduan
 */
function kirimPesan() {
  const nama  = document.getElementById('knama')?.value.trim();
  const hp    = document.getElementById('khp')?.value.trim();
  const topik = document.getElementById('ktopik')?.value;
  const pesan = document.getElementById('kpesan')?.value.trim();

  if (!nama || !hp || !topik || !pesan) {
    showToast('⚠️ Semua field harus diisi terlebih dahulu!');
    return;
  }

  // Reset form
  ['knama', 'khp', 'kpesan'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const topikEl = document.getElementById('ktopik');
  if (topikEl) topikEl.value = '';

  // Tampilkan pesan sukses
  const successEl = document.getElementById('kontak-success');
  if (successEl) {
    successEl.style.display = 'block';
    setTimeout(() => { successEl.style.display = 'none'; }, 5000);
  }

  showToast('✅ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.');
}

/* =============================================
   FUNGSI DOWNLOAD
   ============================================= */

/**
 * Simulasi proses download file
 * @param {string} namaFile - Nama file yang akan diunduh
 * @param {string} barId    - ID elemen progress bar
 */
function downloadFile(namaFile, barId) {
  showToast('⬇️ Mengunduh: ' + namaFile);

  // Animasi progress bar
  const bar = document.getElementById(barId);
  if (bar) {
    bar.style.width = '0%';
    setTimeout(() => { bar.style.width = '100%'; }, 100);
    // Reset bar setelah animasi selesai
    setTimeout(() => { bar.style.width = '0%'; }, 2500);
  }
}

/* =============================================
   FUNGSI TOAST NOTIFIKASI
   ============================================= */

let toastTimer = null;

/**
 * Tampilkan pesan toast
 * @param {string} pesan   - Teks pesan
 * @param {number} durasi  - Durasi tampil dalam ms (default 3000)
 */
function showToast(pesan, durasi = 3000) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  // Clear timer sebelumnya
  if (toastTimer) clearTimeout(toastTimer);

  toast.textContent = pesan;
  toast.classList.add('show');

  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, durasi);
}

/* =============================================
   FUNGSI ANIMASI COUNTER STATISTIK
   ============================================= */

/**
 * Animasi angka counter dari 0 ke target
 * @param {string} elId    - ID elemen HTML
 * @param {number} target  - Angka tujuan
 * @param {number} durasi  - Durasi animasi dalam ms
 */
function animasiCounter(elId, target, durasi) {
  const el = document.getElementById(elId);
  if (!el) return;

  let current = 0;
  const step  = Math.ceil(target / (durasi / 16));

  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current.toLocaleString('id-ID');
    if (current >= target) clearInterval(timer);
  }, 16);
}

/* =============================================
   KEYBOARD SHORTCUT & EVENT LISTENER
   ============================================= */

// Tutup modal dengan tombol Escape
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Handle tombol Back browser saat di halaman berita
window.addEventListener('popstate', function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (id !== null) {
    openBerita(parseInt(id));
  } else {
    closeBerita();
  }
});

/* =============================================
   INISIALISASI — Scroll reveal sederhana
   ============================================= */
document.addEventListener('DOMContentLoaded', function () {

  // Tambahkan animasi fadeUp ke elemen kartu saat masuk viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUp 0.5s ease both';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observasi semua kartu
  document.querySelectorAll('.vm-card, .lay-card, .berita-card, .pj-card, .kontak-item, .dl-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';

    // Gunakan IntersectionObserver jika didukung browser
    if ('IntersectionObserver' in window) {
      observer.observe(el);
    } else {
      // Fallback: langsung tampilkan
      el.style.opacity   = '1';
      el.style.transform = 'none';
    }
  });
});
/* =============================================
   FUNGSI FILTER GALERI
   PERBAIKAN: fungsi ini sebelumnya tidak ada sehingga
   tombol filter di galeri.html tidak berfungsi sama sekali
   ============================================= */

/**
 * Filter item galeri berdasarkan kategori yang dipilih
 * @param {string} kategori - Nilai dari data-filter tombol (misal: 'all', 'kegiatan')
 * @param {HTMLElement} tombolAktif - Elemen tombol yang diklik
 */
function filterGaleri(kategori, tombolAktif) {
  // Hapus kelas 'active' dari semua tombol filter
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Beri kelas 'active' hanya pada tombol yang diklik
  if (tombolAktif) tombolAktif.classList.add('active');

  // Ambil semua item galeri
  const items = document.querySelectorAll('.galeri-item');

  items.forEach(item => {
    const kategoriItem = item.getAttribute('data-category');

    // Tampilkan semua jika filter 'all', atau cocokkan kategori
    if (kategori === 'all' || kategoriItem === kategori) {
      item.style.display = 'block'; // tampilkan item
    } else {
      item.style.display = 'none';  // sembunyikan item
    }
  });
}
