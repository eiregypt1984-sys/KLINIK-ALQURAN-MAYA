// ══════════════════════════════════════════════════════════════
//  DATA DEMO
// ══════════════════════════════════════════════════════════════

// --- Pensyarah ---
const pensyarah = [
  { kod: "ARAI", nama: "Ustazah Raihan binti Ahmad" },
  { kod: "AIZT", nama: "Ustaz Izzat Amin bin Mohd Nasir" },
  { kod: "ALTH", nama: "Ustazah Latifah binti Hussin" },
  { kod: "AHAS", nama: "Ustazah Wan Nur Hasnah binti Wan Yunus" },
  { kod: "ASAO", nama: "Ustazah Siti Aisyah binti Othman" },
];

// --- Jadual Pensyarah Bertugas (7 hari × 3 slot, 2 pensyarah setiap hari) ---
const jadualPensyarah = [
  { hari: "Isnin",   pagi: ["ARAI","AIZT"], petang: ["ALTH","AHAS"], malam: ["ASAO","ARAI"] },
  { hari: "Selasa",  pagi: ["AIZT","ALTH"], petang: ["AHAS","ASAO"], malam: ["ARAI","AIZT"] },
  { hari: "Rabu",    pagi: ["ALTH","ASAO"], petang: ["ARAI","AIZT"], malam: ["AHAS","ALTH"] },
  { hari: "Khamis",  pagi: ["AHAS","ARAI"], petang: ["AIZT","ASAO"], malam: ["ALTH","AHAS"] },
  { hari: "Jumaat",  pagi: ["ASAO","ALTH"], petang: ["ARAI","AHAS"], malam: ["AIZT","ASAO"] },
  { hari: "Sabtu",   pagi: ["ARAI","AHAS"], petang: ["AIZT","ALTH"], malam: ["ASAO","ARAI"] },
  { hari: "Ahad",    pagi: ["ALTH","AIZT"], petang: ["ASAO","ARAI"], malam: ["AHAS","AIZT"] },
];

// --- Pelajar Demo (5 pelajar, status berbeza) ---
let pelajarDemo = [
  {
    id: 1,
    nama: "Siti Aminah binti Abdullah",
    email: "siti.aminah@email.com",
    telefon: "012-3456789",
    tahap: "Asas (Baru belajar)",
    tarikh: "2025-06-01",
    status: "Menunggu Pengesahan",
    modulSelesai: 0,
    latihanAI: 0,
    kelasHadir: 0,
    statusUjian: "—",
  },
  {
    id: 2,
    nama: "Muhammad Firdaus bin Hassan",
    email: "firdaus.hassan@email.com",
    telefon: "013-7654321",
    tahap: "Pertengahan (Ada asas)",
    tarikh: "2025-06-02",
    status: "Menunggu Pengesahan",
    modulSelesai: 0,
    latihanAI: 0,
    kelasHadir: 0,
    statusUjian: "—",
  },
  {
    id: 3,
    nama: "Nurul Hidayah binti Zakaria",
    email: "nurul.hidayah@email.com",
    telefon: "011-2345678",
    tahap: "Asas (Baru belajar)",
    tarikh: "2025-05-20",
    status: "Diluluskan",
    modulSelesai: 3,
    latihanAI: 8,
    kelasHadir: 4,
    statusUjian: "Belum Menduduki",
  },
  {
    id: 4,
    nama: "Ahmad Syauqi bin Mohd Rozi",
    email: "syauqi.rozi@email.com",
    telefon: "019-8765432",
    tahap: "Pertengahan (Ada asas)",
    tarikh: "2025-05-15",
    status: "Diluluskan",
    modulSelesai: 7,
    latihanAI: 15,
    kelasHadir: 9,
    statusUjian: "Sedang Disemak",
  },
  {
    id: 5,
    nama: "Wan Faridah binti Wan Ibrahim",
    email: "wan.faridah@email.com",
    telefon: "017-3456789",
    tahap: "Lanjutan (Boleh baca lancar)",
    tarikh: "2025-04-10",
    status: "Lulus Ujian",
    modulSelesai: 10,
    latihanAI: 22,
    kelasHadir: 14,
    statusUjian: "Lulus (82%)",
  },
];

// --- Modul Pembelajaran (10 modul) ---
const modulPembelajaran = [
  { id: 1, tajuk: "Pengenalan Ilmu Tajwid",       topik: "Pengertian, tujuan, hukum mempelajari tajwid, Lahn Jali & Khafi, 4 tingkatan bacaan" },
  { id: 2, tajuk: "Makhraj Huruf",                topik: "5 kawasan umum, 17 makhraj khusus, latihan sebutan huruf hijaiyah" },
  { id: 3, tajuk: "Alif Lam Ma'rifah",            topik: "Alif Lam Al-Qamariyyah (14 huruf), Alif Lam As-Syamsiyyah (14 huruf)" },
  { id: 4, tajuk: "Hukum Nun Mati & Tanwin",      topik: "Izhar, Idgham, Iqlab, Ikhfa' — dengan contoh ayat" },
  { id: 5, tajuk: "Hukum Mim Mati & Syaddah",    topik: "Idgham Mislain, Ikhfa' Syafawi, Izhar Syafawi; Mim & Nun Syaddah" },
  { id: 6, tajuk: "Jenis-jenis Idgham",           topik: "Idgham Mutamasilain, Mutajanisain, Mutaqoribain" },
  { id: 7, tajuk: "Jenis-jenis Mad",              topik: "Mad Asli/Tabi'i; Mad Far'i — 9 jenis termasuk Wajib Muttasil, Jaiz Munfasil & Mad Lazim" },
  { id: 8, tajuk: "Hukum Bacaan Ra & Lam",        topik: "Ra tafkhim & tarqiq; Lam Al-Jalalah (tafkhim & tarqiq)" },
  { id: 9, tajuk: "Qalqalah & Waqaf",             topik: "Qalqalah Sughra & Kubra, 5 huruf qalqalah; tanda-tanda waqaf dalam mushaf" },
  { id: 10, tajuk: "Hamzah Wasal & Bacaan Gharib", topik: "Hamzah Wasal; Iltiqa' Sakinain; Bacaan-bacaan Gharib dalam Al-Qur'an" },
];

// --- Aktiviti Terkini (admin) ---
const aktivitiAdmin = [
  { dot: "amber",   teks: "<strong>Muhammad Firdaus bin Hassan</strong> telah menghantar permohonan pendaftaran",          masa: "2 jam lalu" },
  { dot: "amber",   teks: "<strong>Siti Aminah binti Abdullah</strong> telah menghantar permohonan pendaftaran",            masa: "5 jam lalu" },
  { dot: "emerald", teks: "<strong>Nurul Hidayah binti Zakaria</strong> telah menyelesaikan Modul 3",                       masa: "Semalam" },
  { dot: "teal",    teks: "<strong>Ahmad Syauqi bin Mohd Rozi</strong> menyertai kelas bersama Ustazah Wan Nur Hasnah",    masa: "Semalam" },
  { dot: "gold",    teks: "<strong>Wan Faridah binti Wan Ibrahim</strong> telah lulus ujian penilaian dengan 82%",          masa: "3 hari lalu" },
];

// ══════════════════════════════════════════════════════════════
//  SESI (localStorage)
// ══════════════════════════════════════════════════════════════

function saveSession(role, nama) {
  localStorage.setItem("kaq_role", role);
  localStorage.setItem("kaq_user", nama);
}

function getSession() {
  return {
    role: localStorage.getItem("kaq_role"),
    nama: localStorage.getItem("kaq_user"),
  };
}

function clearSession() {
  localStorage.removeItem("kaq_role");
  localStorage.removeItem("kaq_user");
}

// ══════════════════════════════════════════════════════════════
//  LOG MASUK
// ══════════════════════════════════════════════════════════════

let selectedRole = null;

// Klik kad peranan
document.querySelectorAll(".role-card").forEach(card => {
  card.addEventListener("click", () => {
    selectedRole = card.dataset.role;

    // Update UI
    document.querySelectorAll(".role-card").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");

    // Tunjukkan langkah borang
    document.getElementById("login-step-role").style.display = "none";
    document.getElementById("login-step-form").style.display = "block";

    // Update badge
    const badge = document.getElementById("selected-role-badge");
    badge.textContent = selectedRole === "pelajar" ? "🎓 Portal Pelajar" : "🔧 Portal Admin";

    // Focus pada input
    setTimeout(() => document.getElementById("login-name").focus(), 100);
  });
});

// Balik ke pilih peranan
document.getElementById("btn-back-role").addEventListener("click", () => {
  selectedRole = null;
  document.querySelectorAll(".role-card").forEach(c => c.classList.remove("selected"));
  document.getElementById("login-step-form").style.display = "none";
  document.getElementById("login-step-role").style.display = "block";
  document.getElementById("login-name").value = "";
});

// Butang Log Masuk
document.getElementById("btn-login").addEventListener("click", doLogin);
document.getElementById("login-name").addEventListener("keydown", e => {
  if (e.key === "Enter") doLogin();
});

function doLogin() {
  const nama = document.getElementById("login-name").value.trim();
  if (!nama) {
    document.getElementById("login-name").focus();
    document.getElementById("login-name").style.borderColor = "#e53935";
    return;
  }
  document.getElementById("login-name").style.borderColor = "";

  saveSession(selectedRole, nama);
  showPortal(selectedRole, nama);
}

// ══════════════════════════════════════════════════════════════
//  LOG KELUAR
// ══════════════════════════════════════════════════════════════

document.getElementById("btn-logout-pelajar").addEventListener("click", doLogout);
document.getElementById("btn-logout-admin").addEventListener("click", doLogout);

function doLogout() {
  clearSession();

  // Sembunyikan semua portal
  document.getElementById("portal-pelajar").style.display = "none";
  document.getElementById("portal-admin").style.display   = "none";

  // Tunjukkan skrin log masuk
  document.getElementById("login-screen").style.display = "flex";

  // Reset borang
  selectedRole = null;
  document.querySelectorAll(".role-card").forEach(c => c.classList.remove("selected"));
  document.getElementById("login-step-form").style.display = "none";
  document.getElementById("login-step-role").style.display = "block";
  document.getElementById("login-name").value = "";
}

// ══════════════════════════════════════════════════════════════
//  PAPAR PORTAL
// ══════════════════════════════════════════════════════════════

function showPortal(role, nama) {
  document.getElementById("login-screen").style.display = "none";

  if (role === "pelajar") {
    document.getElementById("portal-pelajar").style.display = "flex";
    document.getElementById("portal-admin").style.display   = "none";
    initPortalPelajar(nama);
  } else {
    document.getElementById("portal-admin").style.display   = "flex";
    document.getElementById("portal-pelajar").style.display = "none";
    initPortalAdmin(nama);
  }
}

// ══════════════════════════════════════════════════════════════
//  NAVIGASI PORTAL
// ══════════════════════════════════════════════════════════════

function navigateTo(portal, sectionId) {
  // Sembunyikan semua seksyen dalam portal ini
  const portalEl = document.getElementById(`portal-${portal}`);
  portalEl.querySelectorAll(".section").forEach(s => s.classList.remove("active"));

  // Deaktifkan semua nav item dalam portal ini
  portalEl.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));

  // Papar seksyen sasaran
  const target = document.getElementById(sectionId);
  if (target) target.classList.add("active");

  // Aktifkan nav item yang betul
  const navItem = portalEl.querySelector(`.nav-item[data-section="${sectionId}"]`);
  if (navItem) navItem.classList.add("active");

  // Kemas kini tajuk halaman
  const titleMap = {
    "p-overview":   "Papan Pemuka",
    "p-profil":     "Profil & Daftar",
    "p-jadual":     "Jadual Kelas",
    "p-modul":      "Modul Pembelajaran",
    "p-latihan":    "Latihan AI",
    "p-kelas-guru": "Kelas Bersama Guru",
    "p-ujian":      "Ujian & Penilaian",
    "p-sijil":      "E-Sijil",
    "a-overview":    "Papan Pemuka Admin",
    "a-pendaftaran": "Pendaftaran",
    "a-jadual":      "Jadual Pensyarah",
    "a-modul":       "Urus Modul",
    "a-kemajuan":    "Kemajuan Pelajar",
    "a-ujian":       "Ujian & Sijil",
    "a-laporan":     "Laporan",
  };

  const titleEl = document.getElementById(portal === "pelajar" ? "p-page-title" : "a-page-title");
  if (titleEl) titleEl.textContent = titleMap[sectionId] || sectionId;

  // Tutup sidebar mobile
  closeSidebarMobile(portal);
}

// Pasang event listener navigasi
document.querySelectorAll(".nav-item[data-portal]").forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    navigateTo(item.dataset.portal, item.dataset.section);
  });
});

// "Lihat semua" links
document.querySelectorAll(".link-small[data-portal]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    navigateTo(link.dataset.portal, link.dataset.section);
  });
});

// ══════════════════════════════════════════════════════════════
//  HAMBURGER / SIDEBAR MOBILE
// ══════════════════════════════════════════════════════════════

function setupHamburger(portal) {
  const hamburger = document.getElementById(`hamburger-${portal}`);
  const sidebar   = document.getElementById(`sidebar-${portal}`);
  const overlay   = document.getElementById(`overlay-${portal}`);

  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
  });
}

function closeSidebarMobile(portal) {
  document.getElementById(`sidebar-${portal}`).classList.remove("open");
  document.getElementById(`overlay-${portal}`).classList.remove("active");
}

// ══════════════════════════════════════════════════════════════
//  PORTAL PELAJAR — INISIALISASI
// ══════════════════════════════════════════════════════════════

function initPortalPelajar(nama) {
  // Kemas kini nama pada sidebar dan topbar
  const initial = nama.charAt(0).toUpperCase();
  document.getElementById("p-avatar").textContent    = initial;
  document.getElementById("p-user-name").textContent = nama;
  document.getElementById("p-page-sub").textContent  = `Selamat datang kembali, ${nama} 👋`;
  document.getElementById("p-welcome-name").textContent = `Selamat datang, ${nama}!`;

  // Cari data pelajar demo berdasarkan nama (atau gunakan pelajar pertama sebagai demo)
  const pelajar = pelajarDemo.find(p => p.nama.toLowerCase().includes(nama.toLowerCase().split(" ")[0]))
                  || pelajarDemo[2]; // default: Nurul Hidayah (status Diluluskan)

  currentPelajar = pelajar;

  // Kemas kini statistik
  document.getElementById("p-stat-modul").textContent   = pelajar.modulSelesai;
  document.getElementById("p-stat-latihan").textContent  = pelajar.latihanAI;
  document.getElementById("p-stat-hadir").textContent    = pelajar.kelasHadir;
  document.getElementById("p-stat-sijil").textContent    =
    pelajar.statusUjian === "Lulus (82%)" ? "Layak" : "Belum";

  // Render aliran status
  renderFlowSteps(pelajar.status);

  // Render status banner
  renderStatusBanner(pelajar);

  // Render jadual
  renderJadualTable("p-jadual-body");

  // Setup hamburger
  setupHamburger("pelajar");

  // Init seksyen baharu (akan dipanggil selepas DOM sedia)
  setTimeout(() => {
    initProfilSection(pelajar);
    renderTempahanList();
    renderPensyarahGrid();
    renderRekodLatihan();
    renderModulSenarai();
    initUjianSection(pelajar);
    initSijilSection(pelajar);
  }, 0);

  // Reset ke overview
  navigateTo("pelajar", "p-overview");
}

// ── Aliran langkah ──

function renderFlowSteps(statusPelajar) {
  // Tentukan langkah semasa
  const statusMap = {
    "Menunggu Pengesahan": 0,
    "Diluluskan": 2,
    "Lulus Ujian": 5,
  };
  const currentStep = statusMap[statusPelajar] !== undefined ? statusMap[statusPelajar] : 0;

  const stepsEl = document.getElementById("p-flow-steps");
  const steps   = stepsEl.querySelectorAll(".flow-step");
  const conns   = stepsEl.querySelectorAll(".flow-connector");

  steps.forEach((s, i) => {
    s.classList.remove("done", "active");
    if (i < currentStep) s.classList.add("done");
    else if (i === currentStep) s.classList.add("active");
  });

  conns.forEach((c, i) => {
    c.classList.remove("done");
    if (i < currentStep) c.classList.add("done");
  });
}

// ── Status banner ──

function renderStatusBanner(pelajar) {
  const el = document.getElementById("p-status-banner");
  if (pelajar.status === "Menunggu Pengesahan") {
    el.innerHTML = `
      <div class="status-banner-pending">
        <span style="font-size:1.5rem">⏳</span>
        <div>
          <strong>Permohonan anda sedang disemak oleh Admin.</strong><br>
          <span style="font-size:0.78rem">Anda akan menerima makluman setelah permohonan diluluskan. Sila semak semula kemudian.</span>
        </div>
      </div>`;
  } else if (pelajar.status === "Diluluskan") {
    el.innerHTML = `
      <div class="status-banner-active">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:1.5rem">✅</span>
          <div>
            <strong style="color:var(--emerald-dark)">Pendaftaran anda telah diluluskan!</strong><br>
            <span style="font-size:0.78rem;color:var(--muted)">Teruskan belajar modul dan jadualkan kelas bersama pensyarah.</span>
          </div>
        </div>
        <button class="btn-primary" onclick="navigateTo('pelajar','p-modul')">Teruskan Belajar →</button>
      </div>`;
  } else if (pelajar.status === "Lulus Ujian") {
    el.innerHTML = `
      <div class="status-banner-active">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:1.5rem">🏆</span>
          <div>
            <strong style="color:var(--emerald-dark)">Tahniah! Anda telah lulus ujian!</strong><br>
            <span style="font-size:0.78rem;color:var(--muted)">E-sijil anda sedang disediakan oleh admin.</span>
          </div>
        </div>
        <button class="btn-primary" onclick="navigateTo('pelajar','p-sijil')">Lihat E-Sijil →</button>
      </div>`;
  }
}

// ── Profil pelajar ──

function renderProfilPelajar(pelajar) {
  const el = document.getElementById("p-profile-preview");
  const statusBadge = getStatusBadge(pelajar.status);
  el.innerHTML = `
    <div class="profile-row"><span class="profile-key">Nama Penuh</span><span class="profile-val">${pelajar.nama}</span></div>
    <div class="profile-row"><span class="profile-key">E-mel</span><span class="profile-val">${pelajar.email}</span></div>
    <div class="profile-row"><span class="profile-key">No. Telefon</span><span class="profile-val">${pelajar.telefon}</span></div>
    <div class="profile-row"><span class="profile-key">Tahap Bacaan</span><span class="profile-val">${pelajar.tahap}</span></div>
    <div class="profile-row"><span class="profile-key">Tarikh Daftar</span><span class="profile-val">${pelajar.tarikh}</span></div>
    <div class="profile-row"><span class="profile-key">Status</span><span class="profile-val">${statusBadge}</span></div>
    <div class="profile-row"><span class="profile-key">Modul Selesai</span><span class="profile-val">${pelajar.modulSelesai} / 10</span></div>
    <div class="profile-row"><span class="profile-key">Status Ujian</span><span class="profile-val">${pelajar.statusUjian}</span></div>
  `;
}

// ══════════════════════════════════════════════════════════════
//  PORTAL ADMIN — INISIALISASI
// ══════════════════════════════════════════════════════════════

function initPortalAdmin(nama) {
  const initial = nama.charAt(0).toUpperCase();
  document.getElementById("a-avatar").textContent    = initial;
  document.getElementById("a-user-name").textContent = nama;
  document.getElementById("a-page-sub").textContent  = `Selamat datang, ${nama} 👋`;

  // Render jadual pendaftaran terkini (overview — 5 terbaharu)
  renderPendaftaranTable("a-recent-reg-body", 5);

  // Render jadual pendaftaran penuh
  renderPendaftaranTable("a-pendaftaran-body", null);

  // Render aktiviti terkini
  renderAktiviti();

  // Render jadual pensyarah (kedua-dua portal)
  renderJadualTable("a-jadual-body");

  // Render modul admin (versi baru dengan toggle/edit/padam)
  renderModulAdmin();

  // Render kemajuan pelajar (versi baru dengan kolum kelas hadir & butiran)
  renderKemajuanAdmin();

  // Render laporan
  renderLaporan();

  // Render tambahan admin
  setTimeout(() => {
    renderTempahanAdmin();
    renderUjianAdminSenarai();
  }, 0);

  // Setup hamburger
  setupHamburger("admin");

  // Reset ke overview
  navigateTo("admin", "a-overview");
}

// ══════════════════════════════════════════════════════════════
//  RENDER: JADUAL PENSYARAH
// ══════════════════════════════════════════════════════════════

function renderJadualTable(tbodyId) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;

  tbody.innerHTML = jadualPensyarah.map(row => {
    const namaP = kod => {
      const p = pensyarah.find(x => x.kod === kod);
      return p ? `<div style="font-weight:600;font-size:0.78rem">${p.nama}</div><div style="font-size:0.68rem;color:var(--muted)">(${p.kod})</div>` : kod;
    };
    return `
      <tr>
        <td><strong>${row.hari}</strong></td>
        <td>${row.pagi.map(namaP).join('<hr style="border:none;border-top:1px dashed var(--border);margin:4px 0">')}</td>
        <td>${row.petang.map(namaP).join('<hr style="border:none;border-top:1px dashed var(--border);margin:4px 0">')}</td>
        <td>${row.malam.map(namaP).join('<hr style="border:none;border-top:1px dashed var(--border);margin:4px 0">')}</td>
      </tr>
    `;
  }).join("");
}

// ══════════════════════════════════════════════════════════════
//  RENDER: MODUL LIST (pelajar)
// ══════════════════════════════════════════════════════════════

function renderModulList(elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.innerHTML = modulPembelajaran.map(m => `
    <div class="modul-item">
      <div class="modul-num">${m.id}</div>
      <div>
        <div class="modul-title">${m.tajuk}</div>
        <div class="modul-desc">${m.topik}</div>
      </div>
      <span class="badge badge-gray" style="margin-left:auto;white-space:nowrap">Akan Datang</span>
    </div>
  `).join("");
}

// ══════════════════════════════════════════════════════════════
//  RENDER: PENDAFTARAN ADMIN
// ══════════════════════════════════════════════════════════════

function renderPendaftaranTable(tbodyId, limit) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;

  const data = limit ? pelajarDemo.slice(0, limit) : pelajarDemo;
  tbody.innerHTML = data.map((p, i) => {
    const badge = getStatusBadge(p.status);
    const tindakan = p.status === "Menunggu Pengesahan"
      ? `<div style="display:flex;gap:6px;flex-wrap:wrap">
           <button class="btn-approve" onclick="ubahStatus(${p.id},'Diluluskan')">Lulus ✓</button>
           <button class="btn-reject"  onclick="ubahStatus(${p.id},'Ditolak')">Tolak ✗</button>
           <button class="btn-info"    onclick="ubahStatus(${p.id},'Maklumat Tambahan')">Maklumat?</button>
         </div>`
      : `<span style="font-size:0.75rem;color:var(--muted)">—</span>`;

    // For overview table (5 columns), for full table (7 columns)
    if (tbodyId === "a-recent-reg-body") {
      return `
        <tr>
          <td><strong>${p.nama}</strong></td>
          <td>${p.tahap}</td>
          <td>${p.tarikh}</td>
          <td>${badge}</td>
          <td>${tindakan}</td>
        </tr>
      `;
    } else {
      return `
        <tr>
          <td>${i + 1}</td>
          <td><strong>${p.nama}</strong></td>
          <td style="font-size:0.78rem">${p.email}</td>
          <td>${p.tahap}</td>
          <td>${p.tarikh}</td>
          <td>${badge}</td>
          <td>${tindakan}</td>
        </tr>
      `;
    }
  }).join("");
}

// Ubah status pelajar
function ubahStatus(id, statusBaru) {
  const p = pelajarDemo.find(x => x.id === id);
  if (p) {
    p.status = statusBaru;
    // Re-render jadual
    renderPendaftaranTable("a-recent-reg-body", 5);
    renderPendaftaranTable("a-pendaftaran-body", null);
    renderKemajuanAdmin();
    updateStatsAdmin();
  }
}

// Kemas kini statistik admin
function updateStatsAdmin() {
  const tunggu = pelajarDemo.filter(p => p.status === "Menunggu Pengesahan").length;
  const aktif  = pelajarDemo.filter(p => p.status === "Diluluskan").length;
  const jumlah = pelajarDemo.length;

  const elJumlah = document.getElementById("a-stat-jumlah");
  const elTunggu = document.getElementById("a-stat-tunggu");
  const elAktif  = document.getElementById("a-stat-aktif");
  if (elJumlah) elJumlah.textContent = jumlah;
  if (elTunggu) elTunggu.textContent = tunggu;
  if (elAktif)  elAktif.textContent  = aktif;
}

// ══════════════════════════════════════════════════════════════
//  RENDER: AKTIVITI TERKINI (admin)
// ══════════════════════════════════════════════════════════════

function renderAktiviti() {
  const el = document.getElementById("a-activity-list");
  if (!el) return;
  el.innerHTML = aktivitiAdmin.map(a => `
    <li>
      <span class="dot ${a.dot}"></span>
      <div>${a.teks}<div class="time">${a.masa}</div></div>
    </li>
  `).join("");
}

// ══════════════════════════════════════════════════════════════
//  RENDER: LAPORAN ADMIN
// ══════════════════════════════════════════════════════════════

function renderLaporan() {
  // Kad statistik laporan
  const statsEl = document.getElementById("a-laporan-stats");
  if (statsEl) {
    const tunggu = pelajarDemo.filter(p => p.status === "Menunggu Pengesahan").length;
    const aktif  = pelajarDemo.filter(p => p.status === "Diluluskan").length;
    const lulus  = pelajarDemo.filter(p => p.status === "Lulus Ujian").length;
    statsEl.innerHTML = `
      <div class="stat-card emerald"><div class="stat-icon">👥</div><div class="stat-info"><div class="stat-val">${pelajarDemo.length}</div><div class="stat-label">Jumlah Pelajar</div></div></div>
      <div class="stat-card amber"><div class="stat-icon">⏳</div><div class="stat-info"><div class="stat-val">${tunggu}</div><div class="stat-label">Menunggu</div></div></div>
      <div class="stat-card teal"><div class="stat-icon">✅</div><div class="stat-info"><div class="stat-val">${aktif}</div><div class="stat-label">Aktif Belajar</div></div></div>
      <div class="stat-card gold"><div class="stat-icon">🏆</div><div class="stat-info"><div class="stat-val">${lulus}</div><div class="stat-label">Lulus Ujian</div></div></div>
    `;
  }

  // Graf bar: Status Pelajar
  const chartStatus = document.getElementById("chart-status");
  if (chartStatus) {
    const tungguN = pelajarDemo.filter(p => p.status === "Menunggu Pengesahan").length;
    const aktifN  = pelajarDemo.filter(p => p.status === "Diluluskan").length;
    const lulusN  = pelajarDemo.filter(p => p.status === "Lulus Ujian").length;
    const maxN    = Math.max(tungguN, aktifN, lulusN, 1);

    const barData = [
      { label: "Menunggu", val: tungguN, pct: Math.round((tungguN/maxN)*100), cls: "gold" },
      { label: "Aktif",    val: aktifN,  pct: Math.round((aktifN/maxN)*100),  cls: "" },
      { label: "Lulus",    val: lulusN,  pct: Math.round((lulusN/maxN)*100),  cls: "" },
    ];

    chartStatus.innerHTML = `<div class="bar-chart">${barData.map(b => `
      <div class="bar-chart-item">
        <div class="bar-chart-val">${b.val}</div>
        <div class="bar-chart-bar ${b.cls}" style="height:${Math.max(b.pct, 8)}px;width:100%"></div>
        <div class="bar-chart-label">${b.label}</div>
      </div>
    `).join("")}</div>`;
  }

  // Graf bar: Kemajuan Modul
  const chartModul = document.getElementById("chart-modul");
  if (chartModul) {
    const modulData = pelajarDemo.map(p => ({
      nama: p.nama.split(" ").slice(0,2).join(" "),
      selesai: p.modulSelesai,
      pct: Math.round((p.modulSelesai / 10) * 100),
    }));

    chartModul.innerHTML = `<div class="bar-chart">${modulData.map(m => `
      <div class="bar-chart-item">
        <div class="bar-chart-val">${m.selesai}</div>
        <div class="bar-chart-bar" style="height:${Math.max(m.pct, 6)}px;width:100%"></div>
        <div class="bar-chart-label">${m.nama}</div>
      </div>
    `).join("")}</div>`;
  }
}

// ══════════════════════════════════════════════════════════════
//  HELPER: STATUS BADGE
// ══════════════════════════════════════════════════════════════

function getStatusBadge(status) {
  const map = {
    "Menunggu Pengesahan":  `<span class="badge badge-amber">⏳ Menunggu</span>`,
    "Diluluskan":           `<span class="badge badge-emerald">✅ Diluluskan</span>`,
    "Ditolak":              `<span class="badge badge-red">✗ Ditolak</span>`,
    "Maklumat Tambahan":    `<span class="badge badge-gold">📋 Maklumat Diperlukan</span>`,
    "Lulus Ujian":          `<span class="badge badge-teal">🏆 Lulus Ujian</span>`,
  };
  return map[status] || `<span class="badge badge-gray">${status}</span>`;
}

// ══════════════════════════════════════════════════════════════
//  INIT — Semak sesi sedia ada
// ══════════════════════════════════════════════════════════════

(function init() {
  const sesi = getSession();
  if (sesi.role && sesi.nama) {
    showPortal(sesi.role, sesi.nama);
  }
  // Jika tiada sesi, skrin log masuk kekal kelihatan (default dalam HTML)
})();

// ══════════════════════════════════════════════════════════════
//  MODAL HELPERS
// ══════════════════════════════════════════════════════════════

function showModal(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = "flex";
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = "none";
}

function closeModalOutside(e, id) {
  if (e.target && e.target.classList.contains("modal-overlay")) {
    closeModal(id);
  }
}

// ══════════════════════════════════════════════════════════════
//  SUB-TUGAS 3: PROFIL & PENDAFTARAN
// ══════════════════════════════════════════════════════════════

// Pelajar log masuk semasa (demo: id=3, Nurul Hidayah — status Diluluskan)
let currentPelajar = null;

function initProfilSection(pelajar) {
  currentPelajar = pelajar;
  const regData = localStorage.getItem("kaq_reg");

  // Jika pelajar demo sudah ada status "Diluluskan" atau lulus ujian, tunjuk profil terus
  const demoAdaDaftar = pelajar.status && pelajar.status !== "Menunggu Pengesahan";

  if (!regData && !demoAdaDaftar) {
    // Belum daftar — tunjuk borang
    document.getElementById("profil-borang-wrap").style.display = "block";
    document.getElementById("profil-pelajar-wrap").style.display = "none";
    // Pre-fill nama dari sesi
    const sesi = getSession();
    if (sesi.nama) document.getElementById("reg-nama").value = sesi.nama;
  } else {
    // Sudah daftar atau demo pelajar — tunjuk profil
    document.getElementById("profil-borang-wrap").style.display = "none";
    document.getElementById("profil-pelajar-wrap").style.display = "flex";
    renderProfilLengkap(pelajar);
  }
}

function renderProfilLengkap(pelajar) {
  // Avatar
  const avatarEl = document.getElementById("profil-avatar-lg");
  if (avatarEl) avatarEl.textContent = pelajar.nama.charAt(0).toUpperCase();

  // Nama, emel, telefon
  const namaEl = document.getElementById("profil-nama-display");
  const emailEl = document.getElementById("profil-email-display");
  const telEl   = document.getElementById("profil-telefon-display");
  if (namaEl)  namaEl.textContent  = pelajar.nama;
  if (emailEl) emailEl.textContent = "📧 " + pelajar.email;
  if (telEl)   telEl.textContent   = "📞 " + pelajar.telefon;

  // Badge status
  const badgeEl = document.getElementById("profil-status-badge");
  if (badgeEl)  badgeEl.innerHTML = getStatusBadge(pelajar.status);

  // Profile rows
  renderProfilPelajar(pelajar);

  // Langkah seterusnya
  renderLangkahSeterusnya(pelajar);
}

function renderLangkahSeterusnya(pelajar) {
  const el = document.getElementById("profil-langkah-content");
  if (!el) return;

  const langkahMap = {
    "Menunggu Pengesahan": {
      icon: "⏳", warna: "#fff8e1", border: "#d97706",
      tajuk: "Permohonan anda sedang disemak oleh admin.",
      penerangan: "Sila tunggu makluman pengesahan daripada pentadbir sistem. Proses semakan mengambil masa 1-3 hari bekerja.",
      tindakan: null
    },
    "Diluluskan": {
      icon: "✅", warna: "#d1fae5", border: "#1a5c3a",
      tajuk: "Permohonan anda telah diluluskan!",
      penerangan: "Langkah seterusnya: Tempah slot kelas bersama pensyarah dan mulakan modul pembelajaran.",
      tindakan: { label: "Ke Jadual Kelas →", fn: "navigateTo('pelajar','p-jadual')" }
    },
    "Ditolak": {
      icon: "❌", warna: "#fee2e2", border: "#b91c1c",
      tajuk: "Permohonan anda tidak diluluskan.",
      penerangan: "Sila hubungi admin untuk maklumat lanjut mengenai sebab penolakan.",
      tindakan: null
    },
    "Maklumat Tambahan": {
      icon: "ℹ", warna: "#fef9c3", border: "#92400e",
      tajuk: "Admin memerlukan maklumat tambahan.",
      penerangan: "Sila hubungi admin atau kemaskini profil anda untuk melengkapkan maklumat yang diperlukan.",
      tindakan: null
    },
    "Lulus Ujian": {
      icon: "🏆", warna: "#d1fae5", border: "#1a5c3a",
      tajuk: "Tahniah! Anda telah lulus ujian.",
      penerangan: "E-sijil anda sedang disediakan. Sila semak seksyen E-Sijil.",
      tindakan: { label: "Lihat E-Sijil →", fn: "navigateTo('pelajar','p-sijil')" }
    }
  };

  const info = langkahMap[pelajar.status] || {
    icon: "ℹ", warna: "#f3f4f6", border: "#e5e7eb",
    tajuk: "Status: " + pelajar.status,
    penerangan: "Sila hubungi admin untuk maklumat lanjut.",
    tindakan: null
  };

  el.innerHTML = `
    <div style="background:${info.warna};border:1px solid ${info.border};border-radius:8px;padding:14px 16px;display:flex;align-items:flex-start;gap:12px">
      <span style="font-size:1.4rem">${info.icon}</span>
      <div style="flex:1">
        <div style="font-weight:700;font-size:0.9rem;margin-bottom:4px">${info.tajuk}</div>
        <div style="font-size:0.8rem;color:var(--muted)">${info.penerangan}</div>
        ${info.tindakan ? `<button class="btn-primary" style="margin-top:10px;font-size:0.78rem;padding:6px 14px" onclick="${info.tindakan.fn}">${info.tindakan.label}</button>` : ""}
      </div>
    </div>`;
}

function hantarPermohonan() {
  const nama = document.getElementById("reg-nama").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const telefon = document.getElementById("reg-telefon").value.trim();
  const umur  = document.getElementById("reg-umur").value;
  const tahap = document.getElementById("reg-tahap").value;

  if (!nama || !email || !telefon || !umur || !tahap) {
    alert("Sila lengkapkan semua ruangan bertanda *");
    return;
  }

  const regData = {
    nama, email, telefon, umur, tahap,
    tarikh: new Date().toISOString().slice(0, 10),
    status: "Menunggu Pengesahan"
  };

  localStorage.setItem("kaq_reg", JSON.stringify(regData));

  const msgEl = document.getElementById("reg-msg");
  msgEl.innerHTML = "✅ Permohonan anda telah diterima dan sedang disemak oleh admin.";
  msgEl.style.display = "block";

  setTimeout(() => {
    document.getElementById("profil-borang-wrap").style.display = "none";
    document.getElementById("profil-pelajar-wrap").style.display = "flex";
    // Gunakan data pelajar demo sebagai asas, kemaskini dengan data borang
    const p = Object.assign({}, currentPelajar, regData);
    renderProfilLengkap(p);
  }, 1500);
}

// ══════════════════════════════════════════════════════════════
//  SUB-TUGAS 4: JADUAL KELAS — TEMPAHAN
// ══════════════════════════════════════════════════════════════

let selectedHari = null;

function pilihHari(btn, hari) {
  // Deaktifkan semua butang hari
  document.querySelectorAll(".btn-hari").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  selectedHari = hari;
  kemaskiniPensyarahBertugas();
}

function kemaskiniPensyarahBertugas() {
  if (!selectedHari) return;
  const slotEl = document.querySelector('input[name="jadual-slot"]:checked');
  if (!slotEl) return;

  const slot = slotEl.value; // pagi / petang / malam
  const row  = jadualPensyarah.find(r => r.hari === selectedHari);
  if (!row) return;

  const kodList = row[slot] || [];
  const previewEl = document.getElementById("jadual-pensyarah-preview");
  const namesEl   = document.getElementById("jadual-pensyarah-names");

  previewEl.style.display = "block";
  namesEl.innerHTML = kodList.map(kod => {
    const p = pensyarah.find(x => x.kod === kod);
    return `<div class="pensyarah-chip">${p ? p.nama : kod}</div>`;
  }).join("");
}

function tempahSlot() {
  if (!selectedHari) { alert("Sila pilih hari terlebih dahulu."); return; }
  const slotEl   = document.querySelector('input[name="jadual-slot"]:checked');
  const kaedahEl = document.querySelector('input[name="jadual-kaedah"]:checked');
  if (!slotEl)   { alert("Sila pilih slot masa."); return; }
  if (!kaedahEl) { alert("Sila pilih kaedah."); return; }

  const slot   = slotEl.value;
  const kaedah = kaedahEl.value;
  const slotLabel = { pagi: "Pagi (08:00–10:00)", petang: "Petang (14:00–16:00)", malam: "Malam (20:00–22:00)" }[slot];

  const row = jadualPensyarah.find(r => r.hari === selectedHari);
  const pensyarahKod = row ? (row[slot] || []) : [];
  const pensyarahNama = pensyarahKod.map(k => { const p = pensyarah.find(x => x.kod === k); return p ? p.nama : k; });

  const newTempahan = {
    id: Date.now(),
    hari: selectedHari,
    slot: slotLabel,
    kaedah,
    pensyarah: pensyarahNama,
    tarikh: new Date().toLocaleDateString("ms-MY"),
    status: "Menunggu Pengesahan"
  };

  // Simpan ke localStorage
  let senarai = getTempahan();
  senarai.push(newTempahan);
  localStorage.setItem("kaq_tempahan", JSON.stringify(senarai));

  // Tunjuk mesej
  const msgEl = document.getElementById("jadual-tempah-msg");
  msgEl.innerHTML = `✅ Tempahan <strong>${selectedHari} — ${slotLabel}</strong> bersama <em>${pensyarahNama.join(", ")}</em> sedang menunggu pengesahan admin.`;
  msgEl.style.display = "block";

  // Re-render senarai tempahan
  renderTempahanList();

  // Reset selepas 3 saat
  setTimeout(() => { msgEl.style.display = "none"; }, 4000);
}

function getTempahan() {
  try { return JSON.parse(localStorage.getItem("kaq_tempahan") || "[]"); }
  catch { return []; }
}

function renderTempahanList() {
  const el = document.getElementById("jadual-tempahan-list");
  if (!el) return;
  const senarai = getTempahan();
  if (!senarai.length) {
    el.innerHTML = `<p style="color:var(--muted);font-size:0.82rem;text-align:center;padding:16px 0">Tiada tempahan lagi.</p>`;
    return;
  }
  el.innerHTML = senarai.slice().reverse().map(t => {
    const statusBadge = getStatusBadge(t.status);
    return `<div class="tempahan-item">
      <div class="tempahan-info">
        <div class="tempahan-hari">📅 ${t.hari} — ${t.slot}</div>
        <div class="tempahan-sub">👨‍🏫 ${t.pensyarah.join(", ")} | 💻 ${t.kaedah} | ${t.tarikh}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">${statusBadge}</div>
    </div>`;
  }).join("");
}

function renderKelasBersamaGuru() {
  const el = document.getElementById("kelas-disahkan-list");
  if (!el) return;
  const senarai = getTempahan().filter(t => t.status === "Disahkan");
  if (!senarai.length) {
    el.innerHTML = `<p style="color:var(--muted);font-size:0.82rem;text-align:center;padding:16px 0">Tiada kelas yang disahkan lagi.</p>`;
    return;
  }
  el.innerHTML = senarai.map(t => `
    <div class="tempahan-item">
      <div class="tempahan-info">
        <div class="tempahan-hari">✅ ${t.hari} — ${t.slot}</div>
        <div class="tempahan-sub">👨‍🏫 ${t.pensyarah.join(", ")} | 💻 ${t.kaedah}</div>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        <button class="btn-primary" style="font-size:0.72rem;padding:5px 10px" onclick="sertaiKelas('${t.hari}','${t.slot}')">Sertai Kelas</button>
        <span class="badge badge-emerald">✅ Disahkan</span>
      </div>
    </div>`).join("");
}

function sertaiKelas(hari, slot) {
  const infoEl = document.getElementById("modal-kelas-info");
  if (infoEl) infoEl.textContent = `Kelas ${hari} ${slot} — Sedang menyambung...`;
  showModal("modal-sertai-kelas");
}

function renderPensyarahGrid() {
  const el = document.getElementById("pensyarah-kad-grid");
  if (!el) return;
  const desc = [
    "Pakar Tajwid & Makhraj Huruf. Berpengalaman 10 tahun mengajar al-Quran.",
    "Pakar Ilmu Qiraat. Graduan Universiti Al-Azhar Mesir.",
    "Pakar Tahfiz & Tajwid. Berpengalaman 8 tahun dalam pengajaran al-Quran.",
    "Pakar Tilawah & Tartil. Pengetua Kelas Al-Quran Maya PTSB.",
    "Pakar Fiqh Tilawah. Berpengalaman mengajar pelajar dari semua peringkat umur."
  ];
  el.innerHTML = pensyarah.map((p, i) => `
    <div class="pensyarah-kad">
      <div class="pensyarah-avatar">${p.nama.charAt(0)}</div>
      <div class="pensyarah-kad-nama">${p.nama}</div>
      <div class="pensyarah-kad-kod"><span class="badge badge-emerald">${p.kod}</span></div>
      <div class="pensyarah-kad-desc">${desc[i] || ""}</div>
    </div>`).join("");
}

function hantarSoalan() {
  const pil = document.getElementById("soalan-pensyarah-sel").value;
  const teks = document.getElementById("soalan-teks").value.trim();
  if (!pil) { alert("Sila pilih pensyarah."); return; }
  if (!teks) { alert("Sila taip soalan anda."); return; }
  const msgEl = document.getElementById("soalan-msg");
  msgEl.innerHTML = `✅ Soalan anda telah dihantar kepada <strong>${pil}</strong>. Anda akan mendapat maklum balas dalam masa 1-2 hari bekerja.`;
  msgEl.style.display = "block";
  document.getElementById("soalan-teks").value = "";
  setTimeout(() => { msgEl.style.display = "none"; }, 5000);
}

// ══════════════════════════════════════════════════════════════
//  SUB-TUGAS 5: 10 MODUL PEMBELAJARAN
// ══════════════════════════════════════════════════════════════

const modulKandungan = [
  {
    id: 1, tajuk: "Pengenalan Ilmu Tajwid",
    objektif: "Memahami pengertian, tujuan, hukum mempelajari tajwid, dan 4 tingkatan bacaan al-Quran.",
    nota: `
      <div class="modul-nota-section">
        <h4>📖 Pengertian Tajwid</h4>
        <ul>
          <li><strong>Bahasa:</strong> Memperindahkan atau memperbaiki sesuatu.</li>
          <li><strong>Istilah:</strong> Mengeluarkan huruf dari tempatnya (makhraj) dengan memberikan hak-hak sifatnya.</li>
          <li><strong>Hukum Mempelajari:</strong> Fardhu Kifayah. <strong>Hukum Mengamalkan:</strong> Fardhu 'Ain.</li>
          <li><strong>Tujuan:</strong> Membaca al-Quran secara fasih & betul, mengelakkan kesalahan bacaan.</li>
        </ul>
      </div>
      <div class="modul-nota-section">
        <h4>📊 4 Tingkatan Bacaan Al-Quran</h4>
        <table class="nota-table"><thead><tr><th>Tingkatan</th><th>Nama Arab</th><th>Keterangan</th></tr></thead><tbody>
          <tr><td>1</td><td><span class="arabic-small">التَّحْقِيق</span> At-Tahqiq</td><td>Perlahan, untuk belajar & mengajar</td></tr>
          <tr><td>2</td><td><span class="arabic-small">التَّرْتِيل</span> At-Tartil</td><td>Perlahan & tenang — yang paling diutamakan (lihat Surah Al-Muzzammil:4)</td></tr>
          <tr><td>3</td><td><span class="arabic-small">التَّدْوِير</span> At-Tadwir</td><td>Sederhana — lazim untuk imam solat</td></tr>
          <tr><td>4</td><td><span class="arabic-small">الْحَدْر</span> Al-Hadr</td><td>Cepat — untuk hafiz yang mahir</td></tr>
        </tbody></table>
      </div>
      <div class="modul-nota-section">
        <h4>⚠ Jenis-jenis Kesalahan (Lahn)</h4>
        <ul>
          <li><strong>Lahn Jali <span class="arabic-small">اللَّحْنُ الْجَلِي</span>:</strong> Kesalahan nyata yang jelas — mengubah makna ayat. Hukumnya <strong>HARAM</strong>. Contoh: menukar huruf, salah baris.</li>
          <li><strong>Lahn Khafi <span class="arabic-small">اللَّحْنُ الْخَفِي</span>:</strong> Kesalahan tersembunyi yang hanya diketahui ahli tajwid. Hukumnya makruh.</li>
        </ul>
      </div>`,
    kuiz: [
      { soalan: "Apakah pengertian tajwid dari sudut istilah?", pilihan: ["Mengeluarkan huruf dari makhrajnya dengan hak sifatnya", "Membaca al-Quran dengan cepat", "Menghafal al-Quran", "Memahami makna ayat al-Quran"], jawapan: 0 },
      { soalan: "Apakah hukum mengamalkan tajwid?", pilihan: ["Sunat", "Harus", "Fardhu 'Ain", "Fardhu Kifayah"], jawapan: 2 },
      { soalan: "Tingkatan bacaan yang paling diutamakan ialah:", pilihan: ["Al-Hadr", "At-Tadwir", "At-Tahqiq", "At-Tartil"], jawapan: 3 },
      { soalan: "Lahn Jali ialah kesalahan yang:", pilihan: ["Hanya diketahui ahli tajwid", "Nyata dan boleh mengubah makna — HARAM", "Dibenarkan dalam solat", "Tiada kesan pada makna"], jawapan: 1 },
      { soalan: "At-Tahqiq paling sesuai digunakan ketika:", pilihan: ["Solat tarawih berjemaah", "Belajar dan mengajar tajwid", "Tilawah hafiz", "Bacaan pantas"], jawapan: 1 }
    ]
  },
  {
    id: 2, tajuk: "Makhraj Huruf",
    objektif: "Mengenal 5 kawasan utama dan 17 makhraj khusus huruf hijaiyah.",
    nota: `
      <div class="modul-nota-section">
        <h4>🗺 5 Kawasan Utama Makhraj</h4>
        <table class="nota-table"><thead><tr><th>Kawasan</th><th>Nama Arab</th><th>Huruf</th></tr></thead><tbody>
          <tr><td>Rongga Mulut</td><td><span class="arabic-small">الْجَوْفُ</span> Al-Jauf</td><td>ا و ي (huruf mad)</td></tr>
          <tr><td>Kerongkong</td><td><span class="arabic-small">الْحَلْقُ</span> Al-Halq</td><td>ء ه ع ح غ خ</td></tr>
          <tr><td>Lidah</td><td><span class="arabic-small">اللِّسَانُ</span> Al-Lisan</td><td>18 huruf (q, k, j, sy, dl, l, n, r, t, d, t, th, z, s, sh, dll.)</td></tr>
          <tr><td>Bibir</td><td><span class="arabic-small">الشَّفَتَيْنِ</span> As-Syafatain</td><td>ف م ب و</td></tr>
          <tr><td>Rongga Hidung</td><td><span class="arabic-small">الْخَيْشُوم</span> Al-Khaisyum</td><td>Dengung م dan ن</td></tr>
        </tbody></table>
      </div>
      <div class="modul-nota-section">
        <h4>🎙 Latihan Sebutan Huruf</h4>
        <p>Contoh latihan dari bahan (sebut setiap satu dengan jelas):</p>
        <div class="arabic-display">أَنِئًا — بَنِبًا — تَنِتًا</div>
        <div class="arabic-display">ثَنِثًا — جَنِجًا — حَنِحًا</div>
      </div>`,
    kuiz: [
      { soalan: "Huruf ء ه ع ح غ خ keluar dari kawasan:", pilihan: ["Al-Lisan (Lidah)", "Al-Halq (Kerongkong)", "As-Syafatain (Bibir)", "Al-Khaisyum (Hidung)"], jawapan: 1 },
      { soalan: "Huruf-huruf mad ا و ي keluar dari:", pilihan: ["Al-Halq", "As-Syafatain", "Al-Jauf (Rongga Mulut)", "Al-Lisan"], jawapan: 2 },
      { soalan: "Al-Khaisyum merujuk kepada:", pilihan: ["Lidah", "Bibir", "Rongga hidung — untuk dengung م & ن", "Kerongkong"], jawapan: 2 },
      { soalan: "Berapakah jumlah kawasan utama makhraj?", pilihan: ["3", "4", "5", "7"], jawapan: 2 },
      { soalan: "Huruf ف م ب و keluar dari:", pilihan: ["Al-Lisan", "Al-Halq", "Al-Jauf", "As-Syafatain (Bibir)"], jawapan: 3 }
    ]
  },
  {
    id: 3, tajuk: "Alif Lam Ma'rifah",
    objektif: "Membezakan Alif Lam Al-Qamariyyah dan Alif Lam As-Syamsiyyah.",
    nota: `
      <div class="modul-nota-section">
        <h4>🌙 Alif Lam Al-Qamariyyah</h4>
        <ul>
          <li>Lam <strong>disebut jelas</strong> + tanda sukun (ْ) pada lam.</li>
          <li>14 huruf: ء ب ج ح خ ع غ ف ق ك م و ه ي</li>
          <li>Cara ingat: <span class="arabic-small">ابغ حجك وخف عقيمه</span></li>
        </ul>
        <p>Contoh: <span class="arabic-small">الْبَقَرةُ ، الْحَمْدُ ، الْعَالَمِينَ ، الْجِن</span></p>
      </div>
      <div class="modul-nota-section">
        <h4>☀ Alif Lam As-Syamsiyyah</h4>
        <ul>
          <li>Lam <strong>tidak disebut</strong> + syaddah (ّ) pada huruf berikutnya.</li>
          <li>14 huruf: ت ث د ذ ر ز س ش ص ض ط ظ ل ن</li>
          <li>Cara ingat: <span class="arabic-small">طب ثم صل رحما تفز ضف ذا نعم دع سوء ظن زد</span></li>
        </ul>
        <p>Contoh: <span class="arabic-small">النَّاسَ ، الرَّحْمَنُ ، الشَّمْسُ ، الدِّينِ</span></p>
      </div>`,
    kuiz: [
      { soalan: "Pada Alif Lam Qamariyyah, tanda yang ada pada huruf lam ialah:", pilihan: ["Syaddah", "Sukun", "Kasrah", "Fathah"], jawapan: 1 },
      { soalan: "'الرَّحْمَنُ' — Apakah jenis Alif Lamnya?", pilihan: ["Qamariyyah", "Syamsiyyah"], jawapan: 1 },
      { soalan: "'الْحَمْدُ' — Apakah jenis Alif Lamnya?", pilihan: ["Qamariyyah", "Syamsiyyah"], jawapan: 0 },
      { soalan: "Huruf Syamsiyyah berjumlah:", pilihan: ["10", "12", "14", "16"], jawapan: 2 },
      { soalan: "Pada Alif Lam Syamsiyyah, lam:", pilihan: ["Disebut jelas", "Tidak disebut — huruf berikut bertasydid", "Disebut perlahan", "Menjadi dengung"], jawapan: 1 }
    ]
  },
  {
    id: 4, tajuk: "Hukum Nun Mati & Tanwin",
    objektif: "Mengenal pasti dan mengaplikasikan 5 hukum nun mati dan tanwin.",
    nota: `
      <div class="modul-nota-section">
        <h4>1️⃣ Izhar Halqi <span class="arabic-small">إِظْهَارٌ حَلْقِي</span></h4>
        <ul><li>Sebut nun mati/tanwin dengan <strong>jelas</strong> tanpa dengung.</li>
        <li>6 huruf: ء ه ع ح غ خ</li>
        <li>Contoh: <span class="arabic-small">مَنْ ءَامَنَ / غَفُورٌ حَلِيمٌ</span></li></ul>
      </div>
      <div class="modul-nota-section">
        <h4>2️⃣ Idgham Bi Ghunnah <span class="arabic-small">إِدْغَامٌ بِغُنَّةٍ</span></h4>
        <ul><li>Masukkan nun ke dalam huruf berikut <strong>dengan dengung 2 harakat</strong>.</li>
        <li>4 huruf: ي ن م و</li>
        <li>Contoh: <span class="arabic-small">أَن يُوصَلَ / مِن وَاقٍ</span></li></ul>
      </div>
      <div class="modul-nota-section">
        <h4>3️⃣ Idgham Bila Ghunnah <span class="arabic-small">إِدْغَامٌ بِلَا غُنَّةٍ</span></h4>
        <ul><li>Masuk <strong>tanpa dengung</strong>.</li>
        <li>2 huruf: ل ر</li>
        <li>Contoh: <span class="arabic-small">مِن لَّدُنْ / غَفُورٌ رَّحِيمٌ</span></li></ul>
      </div>
      <div class="modul-nota-section">
        <h4>4️⃣ Iqlab <span class="arabic-small">إِقْلَابٌ</span></h4>
        <ul><li>Tukar nun mati/tanwin kepada <strong>mim</strong> + dengung 2 harakat.</li>
        <li>1 huruf: ب</li>
        <li>Contoh: <span class="arabic-small">أَنبِئُونِي / سَمِيعٌ بَصِيرٌ</span></li></ul>
      </div>
      <div class="modul-nota-section">
        <h4>5️⃣ Ikhfa' Haqiqi <span class="arabic-small">إِخْفَاءٌ حَقِيقِي</span></h4>
        <ul><li>Sebut nun secara <strong>samar-samar + dengung</strong>.</li>
        <li>15 huruf: ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك</li>
        <li>Contoh: <span class="arabic-small">عَن صَلَاتِهِمْ / يَنتَهُونَ</span></li></ul>
        <p><strong>Izhar Mutlaq:</strong> 4 perkataan khas: <span class="arabic-small">الدُّنْيَا بُنْيَانٌ صِنْوَانٌ قِنْوَانٌ</span></p>
      </div>`,
    kuiz: [
      { soalan: "Apakah hukum nun mati bertemu huruf ع?", pilihan: ["Ikhfa'", "Iqlab", "Izhar Halqi", "Idgham"], jawapan: 2 },
      { soalan: "Hukum nun mati bertemu huruf ل ialah:", pilihan: ["Idgham Bi Ghunnah", "Idgham Bila Ghunnah", "Izhar", "Ikhfa'"], jawapan: 1 },
      { soalan: "Iqlab berlaku apabila nun mati bertemu:", pilihan: ["م", "ب", "ف", "ق"], jawapan: 1 },
      { soalan: "Berapakah huruf Ikhfa' Haqiqi?", pilihan: ["4", "6", "10", "15"], jawapan: 3 },
      { soalan: "Idgham Bi Ghunnah melibatkan berapa harakat dengung?", pilihan: ["1", "2", "3", "4"], jawapan: 1 }
    ]
  },
  {
    id: 5, tajuk: "Hukum Mim Mati & Syaddah",
    objektif: "Mengenal pasti 3 hukum mim mati dan hukum Mim & Nun Syaddah.",
    nota: `
      <div class="modul-nota-section">
        <h4>1️⃣ Idgham Mislain Soghir <span class="arabic-small">إِدْغَامٌ مِثْلَيْنِ صَغِيرٌ</span></h4>
        <ul><li>Mim mati bertemu mim berbaris → <strong>dengung 2 harakat</strong>.</li>
        <li>Contoh: <span class="arabic-small">وَهُم مُّهْتَدُونَ</span></li></ul>
      </div>
      <div class="modul-nota-section">
        <h4>2️⃣ Ikhfa' Syafawi <span class="arabic-small">إِخْفَاءٌ شَفَوِي</span></h4>
        <ul><li>Mim mati bertemu ب → <strong>samar + dengung</strong>.</li>
        <li>Contoh: <span class="arabic-small">عَلَيْكُم بِوَكِيلٍ</span></li></ul>
      </div>
      <div class="modul-nota-section">
        <h4>3️⃣ Izhar Syafawi <span class="arabic-small">إِظْهَارٌ شَفَوِي</span></h4>
        <ul><li>Mim mati bertemu huruf lain (bukan م dan ب) → <strong>jelas</strong>.</li>
        <li>Contoh: <span class="arabic-small">أَمْ تَسْئَلُهُمْ</span></li></ul>
      </div>
      <div class="modul-nota-section">
        <h4>🔴 Mim & Nun Syaddah (Ghunnah Musyaddadah)</h4>
        <ul><li>Mim atau Nun yang bertasydid WAJIB didengungkan 2 harakat.</li>
        <li>Contoh Nun: <span class="arabic-small">فَإِنَّهُمْ / إِنَّ اللهَ</span></li>
        <li>Contoh Mim: <span class="arabic-small">وَأَنَّ اللهَ / إِنَّمَا</span></li></ul>
      </div>`,
    kuiz: [
      { soalan: "Mim mati bertemu huruf ب hukumnya:", pilihan: ["Izhar Syafawi", "Idgham Mislain", "Ikhfa' Syafawi", "Iqlab"], jawapan: 2 },
      { soalan: "Mim mati bertemu mim berbaris hukumnya:", pilihan: ["Izhar Syafawi", "Idgham Mislain Soghir", "Ikhfa' Syafawi", "Tiada hukum"], jawapan: 1 },
      { soalan: "Izhar Syafawi berlaku apabila mim mati bertemu:", pilihan: ["م", "ب", "Huruf selain م dan ب", "Huruf Qamariyyah sahaja"], jawapan: 2 },
      { soalan: "Nun bertasydid wajib:", pilihan: ["Disebut samar", "Didengungkan 2 harakat", "Disebut jelas tanpa dengung", "Ditukar kepada mim"], jawapan: 1 },
      { soalan: "Contoh Ikhfa' Syafawi ialah:", pilihan: ["وَهُم مُّهْتَدُونَ", "أَمْ تَسْئَلُهُمْ", "عَلَيْكُم بِوَكِيلٍ", "فَإِنَّهُمْ"], jawapan: 2 }
    ]
  },
  {
    id: 6, tajuk: "Jenis-jenis Idgham",
    objektif: "Membezakan 3 jenis Idgham: Mutamasilain, Mutajanisain, dan Mutaqoribain.",
    nota: `
      <div class="modul-nota-section">
        <h4>1️⃣ Idgham Mutamasilain <span class="arabic-small">مُتَمَاثِلَيْن</span></h4>
        <ul><li>Dua huruf <strong>sama</strong> bertemu (pertama mati, kedua berbaris).</li>
        <li>Contoh: <span class="arabic-small">رَبِحَت تِّجَارَتُهُمْ / فَهَل لَّنَا / اضْرِب بِّعَصَاكَ</span></li></ul>
      </div>
      <div class="modul-nota-section">
        <h4>2️⃣ Idgham Mutajanisain <span class="arabic-small">مُتَجَانِسَيْن</span></h4>
        <ul><li>Dua huruf yang <strong>sama makhraj, berbeza sifat</strong> bertemu.</li>
        <li>Pasangan: ت→ط / ط→ت / ت→د / د→ت / ث→ذ / ذ→ث / م→ب / ب→م / ل→ر</li>
        <li>Contoh: <span class="arabic-small">وَلَقَد تَّرَكْنَا / يَلْهَث ذَّلِكَ / ارْكَب مَّعَنَا</span></li>
        <li><em>Idgham Naqis:</em> <span class="arabic-small">أَحَطتُ / بَسَطتَ</span></li></ul>
      </div>
      <div class="modul-nota-section">
        <h4>3️⃣ Idgham Mutaqoribain <span class="arabic-small">مُتَقَارِبَيْن</span></h4>
        <ul><li>Dua huruf yang <strong>hampir sama makhraj dan sifat</strong>.</li>
        <li>Mengikut Riwayat Hafs: ل→ر dan ق→ك sahaja.</li>
        <li>Contoh: <span class="arabic-small">بَل رَّبَّكُمْ / أَلَمْ نَخْلُق كُّمْ</span></li></ul>
      </div>`,
    kuiz: [
      { soalan: "Idgham yang melibatkan dua huruf yang sama ialah:", pilihan: ["Mutaqoribain", "Mutajanisain", "Mutamasilain", "Bila Ghunnah"], jawapan: 2 },
      { soalan: "'بَل رَّبَّكُمْ' adalah contoh Idgham:", pilihan: ["Mutamasilain", "Mutajanisain", "Mutaqoribain", "Mislain"], jawapan: 2 },
      { soalan: "Idgham Mutajanisain melibatkan huruf yang:", pilihan: ["Sama makhraj, berbeza sifat", "Sama sifat, berbeza makhraj", "Sama makhraj dan sifat", "Berbeza makhraj dan sifat"], jawapan: 0 },
      { soalan: "Contoh Idgham Mutajanisain ialah:", pilihan: ["فَهَل لَّنَا", "بَل رَّبَّكُمْ", "وَلَقَد تَّرَكْنَا", "رَبِحَت تِّجَارَتُهُمْ"], jawapan: 2 },
      { soalan: "Dalam Riwayat Hafs, Mutaqoribain hanya berlaku pada pasangan:", pilihan: ["م↔ب", "ق↔ك dan ل↔ر", "ت↔ط dan ت↔د", "ذ↔ث"], jawapan: 1 }
    ]
  },
  {
    id: 7, tajuk: "Jenis-jenis Mad",
    objektif: "Mengenal pasti Mad Asli dan pelbagai jenis Mad Far'i beserta kadar bacaannya.",
    nota: `
      <div class="modul-nota-section">
        <h4>🔵 Mad Asli / Tabi'i — 2 Harakat</h4>
        <p>Mad yang tidak bergantung kepada sebab lain. Tanda: ا و ي selepas huruf berbaris sesuai.</p>
        <p>Contoh: <span class="arabic-small">نُوحِيهَا / يَقُولُ / دِينُ</span></p>
      </div>
      <div class="modul-nota-section">
        <h4>📌 Mad Far'i (Cabang)</h4>
        <table class="nota-table"><thead><tr><th>Nama Mad</th><th>Kadar</th><th>Contoh</th></tr></thead><tbody>
          <tr><td>Wajib Muttasil</td><td>4/5/6 harakat</td><td><span class="arabic-small">وَجَآء / مَآء</span></td></tr>
          <tr><td>Jaiz Munfasil</td><td>4/5 harakat</td><td><span class="arabic-small">لَا أُقْسِمُ</span></td></tr>
          <tr><td>'Aridh Lissukun</td><td>2/4/6 harakat</td><td><span class="arabic-small">الْعَالَمِينَ</span></td></tr>
          <tr><td>Lin</td><td>2/4/6 harakat</td><td><span class="arabic-small">خَوْفٍ / الْبَيْتِ</span></td></tr>
          <tr><td>'Iwadh</td><td>2 harakat</td><td><span class="arabic-small">حَكِيمًا → حَكِيمَا</span></td></tr>
          <tr><td>Badal</td><td>2 harakat</td><td><span class="arabic-small">ءَامَنَ</span></td></tr>
          <tr><td>Tamkin</td><td>2 harakat</td><td><span class="arabic-small">النَّبِيِّينَ</span></td></tr>
          <tr><td>Silah Qasirah</td><td>2 harakat</td><td>Ha Dhamir + bukan hamzah</td></tr>
          <tr><td>Silah Thowilah</td><td>4/5 harakat</td><td>Ha Dhamir + hamzah</td></tr>
          <tr><td>Faraq</td><td>6 harakat</td><td><span class="arabic-small">ءَآللهُ</span></td></tr>
          <tr><td>Lazim (4 jenis)</td><td>6 harakat</td><td>Kalimi Mukhaffaf/Muthaqqal, Harfi Mukhaffaf/Muthaqqal</td></tr>
        </tbody></table>
      </div>`,
    kuiz: [
      { soalan: "Mad Asli dibaca berapa harakat?", pilihan: ["1", "2", "4", "6"], jawapan: 1 },
      { soalan: "Mad Wajib Muttasil berlaku apabila:", pilihan: ["Huruf mad + hamzah dalam DUA kalimah", "Huruf mad + hamzah dalam SATU kalimah", "Dua huruf mad bertemu", "Waqaf pada huruf mad"], jawapan: 1 },
      { soalan: "Mad Lazim dibaca berapa harakat?", pilihan: ["2", "4", "5", "6"], jawapan: 3 },
      { soalan: "'الْعَالَمِينَ' apabila diwaqafkan adalah contoh Mad:", pilihan: ["Wajib Muttasil", "Jaiz Munfasil", "'Aridh Lissukun", "Badal"], jawapan: 2 },
      { soalan: "Mad Jaiz Munfasil berlaku apabila:", pilihan: ["Huruf mad + hamzah dalam satu kalimah", "Huruf mad + hamzah dalam dua kalimah", "Ha Dhamir bertemu hamzah", "Nun syaddah"], jawapan: 1 }
    ]
  },
  {
    id: 8, tajuk: "Hukum Bacaan Ra & Lam",
    objektif: "Mengenal pasti keadaan Ra dibaca tebal (Tafkhim) atau nipis (Tarqiq) dan hukum Lam Al-Jalalah.",
    nota: `
      <div class="modul-nota-section">
        <h4>🔴 Ra Tafkhim (Tebal)</h4>
        <p>Ra dibaca tebal apabila:</p>
        <ul>
          <li>Ra berbaris fathah atau dhammah. Contoh: <span class="arabic-small">رَبَّنَا / رُزِقَ</span></li>
          <li>Ra mati selepas huruf berbaris fathah/dhammah. Contoh: <span class="arabic-small">مَرْيَمَ</span></li>
          <li>Ra mati selepas huruf berbaris kasrah asli — tetapi selepas kasrah arizi tidak berlaku.</li>
          <li>Ra mati selepas huruf Isti'la' berbaris kasrah. Contoh: <span class="arabic-small">إِرْصَادًا</span></li>
        </ul>
      </div>
      <div class="modul-nota-section">
        <h4>🔵 Ra Tarqiq (Nipis)</h4>
        <p>Ra dibaca nipis apabila:</p>
        <ul>
          <li>Ra berbaris kasrah. Contoh: <span class="arabic-small">رِزْقًا</span></li>
          <li>Ra mati selepas kasrah asal (tiada huruf Isti'la' antara keduanya). Contoh: <span class="arabic-small">فِرْعَوْن</span></li>
          <li>Ra mati dalam kalimah yang asalnya Ra berbaris kasrah.</li>
        </ul>
      </div>
      <div class="modul-nota-section">
        <h4>📌 Lam Al-Jalalah (لفظ الجلالة)</h4>
        <ul>
          <li><strong>Tafkhim (Tebal):</strong> Lafaz Allah selepas fathah atau dhammah. Contoh: <span class="arabic-small">قَالَ اللهُ / بِاللهِ</span> (baris sebelum Lam = fathah/dhammah)</li>
          <li><strong>Tarqiq (Nipis):</strong> Lafaz Allah selepas kasrah. Contoh: <span class="arabic-small">بِسْمِ اللهِ</span></li>
        </ul>
      </div>`,
    kuiz: [
      { soalan: "'رَبَّنَا' — Ra dibaca:", pilihan: ["Tarqiq (nipis)", "Tafkhim (tebal)", "Dengung", "Ikhfa'"], jawapan: 1 },
      { soalan: "'رِزْقًا' — Ra dibaca:", pilihan: ["Tafkhim", "Tarqiq (nipis)", "Panjang 2 harakat", "Gunnah"], jawapan: 1 },
      { soalan: "'بِسْمِ اللهِ' — Lam Al-Jalalah dibaca:", pilihan: ["Tebal", "Nipis (Tarqiq)", "Dengung", "Sukun"], jawapan: 1 },
      { soalan: "'قَالَ اللهُ' — Lam Al-Jalalah dibaca:", pilihan: ["Nipis", "Dengung", "Tafkhim (tebal)", "Seperti biasa"], jawapan: 2 },
      { soalan: "Lam Al-Jalalah dibaca tebal apabila huruf sebelumnya berbaris:", pilihan: ["Kasrah", "Kasrah atau fathah", "Fathah atau dhammah", "Dhammah sahaja"], jawapan: 2 }
    ]
  },
  {
    id: 9, tajuk: "Qalqalah & Waqaf",
    objektif: "Mengenal pasti huruf qalqalah, dua jenis qalqalah, dan tanda-tanda waqaf dalam mushaf.",
    nota: `
      <div class="modul-nota-section">
        <h4>🔔 Qalqalah — Pantulan Suara</h4>
        <p>5 huruf Qalqalah: <strong><span class="arabic-small">قطب جد</span></strong> (ق ط ب ج د)</p>
        <table class="nota-table"><thead><tr><th>Jenis</th><th>Keadaan</th><th>Contoh</th></tr></thead><tbody>
          <tr><td>Qalqalah Sughra (Kecil)</td><td>Huruf qalqalah mati di <strong>tengah</strong> kalimah</td><td><span class="arabic-small">يَقْتُلُونَ / أَطْعَمَهُمْ</span></td></tr>
          <tr><td>Qalqalah Kubra (Besar)</td><td>Huruf qalqalah di <strong>akhir</strong> kalimah (waqaf)</td><td><span class="arabic-small">وَالْفَجْرِ ← الْفَجْرِ</span></td></tr>
        </tbody></table>
      </div>
      <div class="modul-nota-section">
        <h4>⏸ Tanda-tanda Waqaf dalam Mushaf</h4>
        <table class="nota-table"><thead><tr><th>Tanda</th><th>Nama</th><th>Maksud</th></tr></thead><tbody>
          <tr><td><strong>م</strong></td><td>Waqaf Lazim</td><td>Wajib berhenti</td></tr>
          <tr><td><strong>لا</strong></td><td>Waqaf Mamnu'</td><td>Dilarang berhenti</td></tr>
          <tr><td><strong>ج</strong></td><td>Waqaf Jaiz</td><td>Harus berhenti atau sambung</td></tr>
          <tr><td><strong>ز</strong></td><td>Waqaf Mujawwaz</td><td>Berhenti lebih baik</td></tr>
          <tr><td><strong>ص</strong></td><td>Waqaf Murakhkhas</td><td>Sambung lebih baik</td></tr>
          <tr><td><strong>قلى</strong></td><td>Al-Waqf Awla</td><td>Berhenti lebih diutamakan</td></tr>
          <tr><td><strong>صلى</strong></td><td>Al-Wasl Awla</td><td>Sambung lebih diutamakan</td></tr>
          <tr><td><strong>∴</strong></td><td>Mu'anaqah</td><td>Boleh berhenti pada mana-mana satu sahaja</td></tr>
        </tbody></table>
      </div>`,
    kuiz: [
      { soalan: "5 huruf Qalqalah ialah:", pilihan: ["ق ط ب ج د", "ء ه ع ح غ خ", "ي ن م و ل ر", "ت ث ج د ذ ز"], jawapan: 0 },
      { soalan: "Qalqalah Kubra berlaku apabila:", pilihan: ["Huruf qalqalah di tengah kalimah", "Huruf qalqalah di akhir kalimah (waqaf)", "Huruf qalqalah berbaris fathah", "Huruf qalqalah bertemu hamzah"], jawapan: 1 },
      { soalan: "Tanda م dalam mushaf bermaksud:", pilihan: ["Harus berhenti", "Dilarang berhenti", "Wajib berhenti (Waqaf Lazim)", "Berhenti lebih baik"], jawapan: 2 },
      { soalan: "Tanda لا dalam mushaf bermaksud:", pilihan: ["Wajib berhenti", "Dilarang berhenti", "Harus berhenti", "Sambung lebih baik"], jawapan: 1 },
      { soalan: "Perbezaan Sughra dan Kubra ialah:", pilihan: ["Bilangan harakat", "Lokasi huruf — tengah (Sughra) atau akhir/waqaf (Kubra)", "Jenis huruf yang digunakan", "Cara sebutan bibir"], jawapan: 1 }
    ]
  },
  {
    id: 10, tajuk: "Hamzah Wasal, Iltiqa' Sakinain & Gharib",
    objektif: "Memahami bacaan khas Hamzah Wasal, Iltiqa' Sakinain, dan bacaan Gharib dalam al-Quran.",
    nota: `
      <div class="modul-nota-section">
        <h4>📌 Hamzah Wasal <span class="arabic-small">هَمْزَةُ الْوَصْل</span></h4>
        <ul>
          <li>Huruf alif yang hanya dibaca apabila <strong>memulakan bacaan</strong>, gugur (tidak disebut) apabila disambung.</li>
          <li>Cara membaca di awal: bergantung kepada baris huruf <strong>ketiga</strong> dalam kalimah.</li>
          <li>Contoh: <span class="arabic-small">اقرأ / اكتب / الحمد</span></li>
        </ul>
      </div>
      <div class="modul-nota-section">
        <h4>📌 Iltiqa' Sakinain / Nun Al-Wiqayah</h4>
        <ul>
          <li>Pertemuan dua huruf sukun berturut-turut.</li>
          <li>Penyelesaian: tambah baris kasrah pada huruf pertama agar dapat disambung.</li>
          <li>Nun Al-Wiqayah: tambah nun kasrah antara tanwin dan huruf berikutnya yang berhamzah wasal untuk mengelakkan hilangnya bunyi tanwin.</li>
          <li>Contoh: <span class="arabic-small">قُلِ انْظُرُوا / مِنِ ابْنِ أُمَّ</span></li>
        </ul>
      </div>
      <div class="modul-nota-section">
        <h4>📖 Bacaan Gharib (Bacaan Khas)</h4>
        <p>Bacaan-bacaan khas dalam al-Quran yang perlu diambil perhatian mengikut Riwayat Hafs 'An 'Asim:</p>
        <ul>
          <li>Saktah (berhenti sebentar tanpa nafas) — terdapat 4 tempat dalam Riwayat Hafs.</li>
          <li>Imalah — hanya dalam Surah Hud:41 pada perkataan <span class="arabic-small">مَجْرَاهَا</span>.</li>
          <li>Isymam — pada perkataan <span class="arabic-small">لَا تَأْمَنَّا</span> (Yusuf:11).</li>
          <li>Tashil — pada <span class="arabic-small">ءَأَعْجَمِيٌّ</span> (Fussilat:44).</li>
        </ul>
      </div>`,
    kuiz: [
      { soalan: "Hamzah Wasal dibaca hanya apabila:", pilihan: ["Disambung dengan kalimah sebelumnya", "Memulakan bacaan (ibtida')", "Diwaqafkan", "Bertemu hamzah"], jawapan: 1 },
      { soalan: "Iltiqa' Sakinain ialah:", pilihan: ["Dua huruf berbaris fathah bertemu", "Pertemuan dua huruf sukun berturut-turut", "Dua huruf mad bertemu", "Nun mati bertemu hamzah"], jawapan: 1 },
      { soalan: "Penyelesaian Iltiqa' Sakinain ialah:", pilihan: ["Padamkan huruf pertama", "Tambah baris fathah pada huruf kedua", "Tambah baris kasrah pada huruf pertama", "Tukar kepada mad"], jawapan: 2 },
      { soalan: "Bacaan Gharib Imalah dalam Riwayat Hafs hanya terdapat pada:", pilihan: ["Seluruh al-Quran", "Surah Al-Fatihah", "Surah Hud:41 — مَجْرَاهَا", "Surah Yusuf:11"], jawapan: 2 },
      { soalan: "Saktah dalam Riwayat Hafs merujuk kepada:", pilihan: ["Berhenti panjang dengan mengambil nafas", "Berhenti sebentar tanpa mengambil nafas", "Dengung 2 harakat", "Waqaf pada akhir ayat"], jawapan: 1 }
    ]
  }
];

let modulAktifId   = null;
let kuizSoalanIdx  = 0;
let kuizJawapanStatus = {};

function getModulStatus() {
  try { return JSON.parse(localStorage.getItem("kaq_modul_status") || "{}"); }
  catch { return {}; }
}

function saveModulStatus(status) {
  localStorage.setItem("kaq_modul_status", JSON.stringify(status));
}

function renderModulSenarai() {
  const el = document.getElementById("modul-senarai-list");
  if (!el) return;
  const status = getModulStatus();
  const ikonStatus = (id) => {
    const s = status[id];
    if (s === "selesai") return "✅";
    if (s === "sedang")  return "🔵";
    return "⬜";
  };

  el.innerHTML = modulKandungan.map((m, i) => {
    const prevSelesai = i === 0 || status[i] === "selesai"; // modul 1 sentiasa buka
    const locked = i > 0 && status[i] !== "selesai" && !prevSelesai;
    const ikonClass = locked ? "🔒" : ikonStatus(m.id);
    return `<div class="modul-senarai-item ${locked ? 'locked' : ''} ${modulAktifId === m.id ? 'active' : ''}"
      onclick="${locked ? '' : `bukaModul(${m.id})`}">
      <div class="modul-senarai-num">${m.id}</div>
      <div class="modul-senarai-tajuk">${m.tajuk}</div>
      <div class="modul-senarai-ikon">${locked ? '🔒' : ikonStatus(m.id)}</div>
    </div>`;
  }).join("");

  // Kemas kini bar kemajuan
  const selesaiCount = Object.values(status).filter(s => s === "selesai").length;
  const pct = Math.round((selesaiCount / 10) * 100);
  const pctEl = document.getElementById("modul-kemajuan-pct");
  const barEl = document.getElementById("modul-kemajuan-bar");
  const cntEl = document.getElementById("modul-selesai-count");
  if (pctEl) pctEl.textContent = pct + "%";
  if (barEl) barEl.style.width = pct + "%";
  if (cntEl) cntEl.textContent = selesaiCount;
}

function bukaModul(id) {
  modulAktifId = id;
  kuizSoalanIdx = 0;
  kuizJawapanStatus = {};
  renderModulSenarai();
  renderModulKandungan(id);
}

function renderModulKandungan(id) {
  const el = document.getElementById("modul-kandungan-content");
  if (!el) return;
  const m = modulKandungan.find(x => x.id === id);
  if (!m) return;

  const status = getModulStatus();
  const isSelesai = status[id] === "selesai";
  const kuizHTML  = renderKuizHTML(m.kuiz, id);

  el.innerHTML = `
    <div class="modul-kandungan-header">
      <div>
        <div class="modul-kandungan-title">Modul ${m.id}: ${m.tajuk}</div>
        <div style="font-size:0.75rem;color:var(--muted)">🎯 Objektif: ${m.objektif}</div>
      </div>
      ${isSelesai ? '<span class="badge badge-emerald">✅ Selesai</span>' : ''}
    </div>
    ${m.nota}
    ${kuizHTML}
    <div class="modul-nav-btns">
      ${id > 1 ? `<button class="btn-secondary" onclick="bukaModul(${id-1})">← Modul ${id-1}</button>` : '<span></span>'}
      <div style="display:flex;gap:8px">
        ${!isSelesai ? `<button class="btn-primary" onclick="tandakanSelesai(${id})">✅ Tandakan sebagai Selesai</button>` : '<span class="badge badge-emerald" style="padding:8px 14px">✅ Modul Selesai</span>'}
        ${id < 10 ? `<button class="btn-secondary" onclick="bukaModul(${id+1})">Modul ${id+1} →</button>` : ''}
      </div>
    </div>`;
}

function renderKuizHTML(kuiz, modulId) {
  if (!kuiz || !kuiz.length) return "";
  const soalan = kuiz[kuizSoalanIdx];
  const isLast  = kuizSoalanIdx === kuiz.length - 1;
  const answered = kuizJawapanStatus[kuizSoalanIdx] !== undefined;

  const pilihanHTML = soalan.pilihan.map((p, i) => {
    let cls = "";
    if (answered) {
      if (i === soalan.jawapan) cls = "betul";
      else if (i === kuizJawapanStatus[kuizSoalanIdx] && i !== soalan.jawapan) cls = "salah";
    }
    return `<button class="kuiz-btn ${cls}" onclick="jawabKuiz(${modulId},${kuizSoalanIdx},${i})" ${answered ? 'disabled' : ''}>${p}</button>`;
  }).join("");

  return `<div class="kuiz-wrap">
    <h4>🧠 Kuiz Modul ${modulId} — Soalan ${kuizSoalanIdx + 1} daripada ${kuiz.length}</h4>
    <div class="kuiz-soalan">${soalan.soalan}</div>
    <div class="kuiz-pilihan">${pilihanHTML}</div>
    ${answered ? `<div style="margin-top:10px;display:flex;justify-content:flex-end">
      ${!isLast ? `<button class="btn-secondary" onclick="kuizSeterusnya(${modulId})" style="font-size:0.78rem;padding:6px 14px">Soalan Seterusnya →</button>` : `<span style="font-size:0.78rem;color:var(--emerald);font-weight:600">✓ Kuiz Selesai!</span>`}
    </div>` : ""}
  </div>`;
}

function jawabKuiz(modulId, soalanIdx, pilihan) {
  kuizJawapanStatus[soalanIdx] = pilihan;
  renderModulKandungan(modulId);
}

function kuizSeterusnya(modulId) {
  const m = modulKandungan.find(x => x.id === modulId);
  if (m && kuizSoalanIdx < m.kuiz.length - 1) {
    kuizSoalanIdx++;
    kuizJawapanStatus = {};
    renderModulKandungan(modulId);
  }
}

function tandakanSelesai(id) {
  const status = getModulStatus();
  status[id] = "selesai";
  saveModulStatus(status);

  // Kemas kini statistik pelajar demo
  if (currentPelajar) {
    const selesaiCount = Object.values(status).filter(s => s === "selesai").length;
    currentPelajar.modulSelesai = selesaiCount;
    document.getElementById("p-stat-modul").textContent = selesaiCount;
  }

  renderModulSenarai();
  renderModulKandungan(id);
}

// ══════════════════════════════════════════════════════════════
//  SUB-TUGAS 6: LATIHAN AI (SIMULASI)
// ══════════════════════════════════════════════════════════════

const latihanBahan = [
  { id: 1, arab: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", label: "Surah Al-Fatihah Ayat 1" },
  { id: 2, arab: "قُلْ هُوَ اللَّهُ أَحَدٌ",              label: "Surah Al-Ikhlas Ayat 1" },
  { id: 3, arab: "مَنْ ءَامَنَ بِاللَّهِ",               label: "Contoh Izhar Halqi" },
  { id: 4, arab: "وَجَآءَ رَبُّكَ",                       label: "Contoh Mad Wajib Muttasil" },
  { id: 5, arab: "يَكْذِبُونَ",                           label: "Contoh Qalqalah" }
];

let latihanTimer = null;
let latihanDengarTimer = null;

function kemaskiniPilihanLatihan() {
  // Tidak perlu tindakan khas — bahan dropdown sudah ada
}

function latihan_dengar() {
  const bahanSel = document.getElementById("latihan-bahan-sel");
  const val = parseInt(bahanSel.value) || 1;
  const bahan = latihanBahan.find(b => b.id === val) || latihanBahan[0];

  // Tukar paparan teks Arab
  const txtEl = document.getElementById("latihan-arab-text");
  txtEl.innerHTML = `<span class="arabic" style="font-size:2.2rem;color:var(--emerald-dark)">${bahan.arab}</span>`;

  // Simulasi "memainkan" audio
  const dengarBtn = document.getElementById("btn-latihan-dengar");
  const jedaBtn   = document.getElementById("btn-latihan-jeda");
  dengarBtn.style.display = "none";
  jedaBtn.style.display   = "inline-flex";
  dengarBtn.textContent   = "▶ Dengar Contoh";

  clearTimeout(latihanDengarTimer);
  latihanDengarTimer = setTimeout(() => {
    dengarBtn.style.display = "inline-flex";
    jedaBtn.style.display   = "none";
  }, 3000);
}

function latihan_jeda() {
  clearTimeout(latihanDengarTimer);
  document.getElementById("btn-latihan-dengar").style.display = "inline-flex";
  document.getElementById("btn-latihan-jeda").style.display   = "none";
}

function latihan_ulang() {
  document.getElementById("latihan-keputusan").style.display = "none";
  latihan_dengar();
}

function latihan_rakam() {
  const bahanSel  = document.getElementById("latihan-bahan-sel");
  const val       = parseInt(bahanSel.value) || 1;
  const bahan     = latihanBahan.find(b => b.id === val) || latihanBahan[0];
  const rakamBtn  = document.getElementById("btn-rakam");
  const timerWrap = document.getElementById("latihan-timer-wrap");
  const timerFill = document.getElementById("latihan-timer-fill");
  const timerLbl  = document.getElementById("latihan-timer-label");
  const keputusan = document.getElementById("latihan-keputusan");

  // Tukar paparan teks
  document.getElementById("latihan-arab-text").innerHTML =
    `<span class="arabic" style="font-size:2.2rem;color:var(--emerald-dark)">${bahan.arab}</span>`;

  rakamBtn.textContent = "⏺ Merakam...";
  rakamBtn.disabled    = true;
  timerWrap.style.display = "block";
  keputusan.style.display = "none";
  timerFill.style.width   = "0%";
  timerLbl.textContent    = "🎙 Sedang merakam bacaan anda...";

  let pct = 0;
  clearInterval(latihanTimer);
  latihanTimer = setInterval(() => {
    pct += 20;
    timerFill.style.width = pct + "%";
    if (pct >= 100) {
      clearInterval(latihanTimer);
      timerLbl.textContent = "⏳ Menganalisis bacaan...";
      setTimeout(() => {
        timerWrap.style.display = "none";
        rakamBtn.textContent    = "🎙 Mula Rakaman";
        rakamBtn.disabled       = false;
        paparKeputusanLatihan(bahan);
      }, 1500);
    }
  }, 1000);
}

const ulesanLatihan = [
  "Bacaan anda sangat baik! Sebutan huruf jelas dan makhraj tepat.",
  "Bacaan anda baik. Sedikit peningkatan pada mad dan dengung diperlukan.",
  "Ada beberapa kesalahan kecil pada makhraj huruf. Teruskan berlatih!",
  "Perlu lebih perhatian pada hukum nun mati dan tanwin.",
  "Bagus! Tajwid sudah hampir betul. Fokus pada qalqalah dan waqaf."
];

const sarananLatihan = [
  "💡 Saranan: Ulang semak Modul 2 (Makhraj Huruf) untuk meningkatkan ketepatan sebutan.",
  "💡 Saranan: Semak Modul 7 (Mad) untuk memastikan bacaan mad anda betul.",
  "💡 Saranan: Sertai kelas bersama guru untuk mendapat bimbingan terus.",
  "💡 Saranan: Ulang semak Modul 4 (Nun Mati & Tanwin) dan berlatih dengan lebih kerap.",
  "💡 Saranan: Teruskan! Cuba latihan modul seterusnya untuk meningkatkan lagi."
];

function paparKeputusanLatihan(bahan) {
  const skor = Math.floor(Math.random() * 36) + 60; // 60–95
  const idx  = Math.floor(skor / 20) - 3;
  const ulesanIdx  = Math.min(Math.max(Math.floor((95 - skor) / 7), 0), ulesanLatihan.length - 1);
  const sarananIdx = Math.min(Math.max(Math.floor((95 - skor) / 7), 0), sarananLatihan.length - 1);

  const keputusan = document.getElementById("latihan-keputusan");
  const skorEl    = document.getElementById("latihan-skor-circle");
  const labelEl   = document.getElementById("latihan-skor-label");
  const ulesanEl  = document.getElementById("latihan-ulasan");
  const sarananEl = document.getElementById("latihan-saranan");

  skorEl.textContent   = skor + "%";
  labelEl.textContent  = skor >= 80 ? "Cemerlang ✅" : skor >= 65 ? "Memuaskan 🔵" : "Perlu Peningkatan ⚠";
  ulesanEl.textContent = ulesanLatihan[ulesanIdx];
  sarananEl.textContent = sarananLatihan[sarananIdx];
  keputusan.style.display = "block";

  // Simpan rekod
  const rekodKey = "kaq_rekod_latihan";
  let rekod = [];
  try { rekod = JSON.parse(localStorage.getItem(rekodKey) || "[]"); } catch {}
  rekod.unshift({
    tarikh: new Date().toLocaleString("ms-MY"),
    bahan: bahan.label,
    skor,
    status: skor >= 70 ? "Lulus" : "Perlu Ulang"
  });
  if (rekod.length > 10) rekod = rekod.slice(0, 10);
  localStorage.setItem(rekodKey, JSON.stringify(rekod));
  renderRekodLatihan();

  // Kemas kini stat pelajar
  if (currentPelajar) {
    currentPelajar.latihanAI = (currentPelajar.latihanAI || 0) + 1;
    document.getElementById("p-stat-latihan").textContent = currentPelajar.latihanAI;
  }
}

function renderRekodLatihan() {
  const tbody = document.getElementById("latihan-rekod-body");
  if (!tbody) return;
  let rekod = [];
  try { rekod = JSON.parse(localStorage.getItem("kaq_rekod_latihan") || "[]"); } catch {}
  if (!rekod.length) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:16px">Tiada rekod latihan lagi.</td></tr>`;
    return;
  }
  tbody.innerHTML = rekod.slice(0, 5).map((r, i) => {
    const statusBadge = r.status === "Lulus"
      ? `<span class="badge badge-emerald">${r.status}</span>`
      : `<span class="badge badge-amber">${r.status}</span>`;
    return `<tr>
      <td>${i+1}</td>
      <td style="font-size:0.78rem">${r.tarikh}</td>
      <td style="font-size:0.78rem">${r.bahan}</td>
      <td><strong>${r.skor}%</strong></td>
      <td>${statusBadge}</td>
    </tr>`;
  }).join("");
}

// ══════════════════════════════════════════════════════════════
//  SUB-TUGAS 8: UJIAN & PENILAIAN
// ══════════════════════════════════════════════════════════════

const ujianSoalan = [
  { soalan: "Apakah pengertian tajwid dari sudut istilah?", pilihan: ["Membaca al-Quran dengan cepat", "Mengeluarkan huruf dari makhrajnya dengan hak sifatnya", "Menghafaz al-Quran", "Memahami tafsir al-Quran"], jawapan: 1 },
  { soalan: "Berapa jumlah huruf yang keluar dari kawasan Al-Halq?", pilihan: ["4", "5", "6", "8"], jawapan: 2 },
  { soalan: "Apakah hukum nun mati bertemu huruf ل?", pilihan: ["Izhar Halqi", "Ikhfa' Haqiqi", "Idgham Bi Ghunnah", "Idgham Bila Ghunnah"], jawapan: 3 },
  { soalan: "Berapa harakat Mad Wajib Muttasil dibaca (mengikut Hafs)?", pilihan: ["2 harakat", "3 harakat", "4/5 harakat", "6 harakat sahaja"], jawapan: 2 },
  { soalan: "Apakah 5 huruf Qalqalah?", pilihan: ["ء ه ع ح غ خ", "ق ط ب ج د", "ي ن م و ل ر", "ت ث ج د ذ"], jawapan: 1 }
];

let ujianSoalanIdx = 0;
let ujianMarkah    = 0;
let ujianJawapanLog = [];
let ujianSelesai   = false;

function initUjianSection(pelajar) {
  renderUjianSyarat(pelajar);
  renderUjianStatusGuru(pelajar);
  // Mula soalan pertama
  ujianSoalanIdx = 0;
  ujianMarkah    = 0;
  ujianJawapanLog = [];
  ujianSelesai   = false;
  renderUjianSoalan();
}

function renderUjianSyarat(pelajar) {
  const el = document.getElementById("ujian-syarat-list");
  if (!el) return;
  const modulStatus = getModulStatus();
  const modulSelesai = Object.values(modulStatus).filter(s => s === "selesai").length;
  const semua = modulSelesai >= 10;
  const hadir = (pelajar.kelasHadir || 0) >= 4;
  const diluluskan = pelajar.status === "Diluluskan" || pelajar.status === "Lulus Ujian";

  el.innerHTML = `
    <div class="syarat-item ${diluluskan ? 'ok' : 'nok'}">${diluluskan ? '✅' : '❌'} Pendaftaran diluluskan</div>
    <div class="syarat-item ${semua ? 'ok' : 'nok'}">${semua ? '✅' : '❌'} Semua 10 modul selesai (${modulSelesai}/10)</div>
    <div class="syarat-item ${hadir ? 'ok' : 'nok'}">${hadir ? '✅' : '❌'} Hadir kelas minimum 4 kali (${pelajar.kelasHadir}/4)</div>
    ${!semua || !hadir ? `<div style="font-size:0.78rem;color:#b91c1c;margin-top:8px;padding:8px 12px;background:#fee2e2;border-radius:6px">⚠ Sila lengkapkan semua syarat sebelum menduduki ujian.</div>` : ""}
  `;
}

function renderUjianSoalan() {
  const soalanWrap    = document.getElementById("ujian-soalan-wrap");
  const keputusanWrap = document.getElementById("ujian-keputusan");
  if (!soalanWrap) return;

  if (ujianSelesai) {
    soalanWrap.style.display    = "none";
    keputusanWrap.style.display = "block";
    renderUjianKeputusan();
    return;
  }

  soalanWrap.style.display    = "block";
  keputusanWrap.style.display = "none";

  const s = ujianSoalan[ujianSoalanIdx];
  document.getElementById("ujian-progres").textContent = `Soalan ${ujianSoalanIdx + 1} daripada ${ujianSoalan.length}`;

  const soalanEl  = document.getElementById("ujian-soalan-display");
  const jawapanEl = document.getElementById("ujian-jawapan-btns");
  const nextBtn   = document.getElementById("btn-ujian-seterusnya");

  soalanEl.innerHTML = `<div class="ujian-soalan-box">
    <div class="ujian-soalan-num">Soalan ${ujianSoalanIdx + 1}</div>
    <div class="ujian-soalan-teks">${s.soalan}</div>
  </div>`;

  jawapanEl.innerHTML = s.pilihan.map((p, i) =>
    `<button class="ujian-jawapan-btn" onclick="pilihJawapan(${i})">${String.fromCharCode(65 + i)}) ${p}</button>`
  ).join("");

  if (nextBtn) nextBtn.style.display = "none";
}

function pilihJawapan(idx) {
  const s = ujianSoalan[ujianSoalanIdx];
  const btns = document.querySelectorAll(".ujian-jawapan-btn");
  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === s.jawapan) b.classList.add("betul");
    else if (i === idx && i !== s.jawapan) b.classList.add("salah");
  });

  if (idx === s.jawapan) ujianMarkah++;
  ujianJawapanLog.push({ soalan: s.soalan, pilihan: idx, betul: idx === s.jawapan });

  const nextBtn = document.getElementById("btn-ujian-seterusnya");
  if (nextBtn) {
    nextBtn.style.display = "inline-flex";
    nextBtn.textContent = ujianSoalanIdx === ujianSoalan.length - 1 ? "Lihat Keputusan →" : "Seterusnya →";
  }
}

function soalanSeterusnya() {
  if (ujianSoalanIdx < ujianSoalan.length - 1) {
    ujianSoalanIdx++;
    renderUjianSoalan();
  } else {
    ujianSelesai = true;
    renderUjianSoalan();
  }
}

function renderUjianKeputusan() {
  const el = document.getElementById("ujian-keputusan");
  if (!el) return;
  const pct  = Math.round((ujianMarkah / ujianSoalan.length) * 100);
  const lulus = pct >= 70;
  el.innerHTML = `
    <div class="ujian-keputusan-card">
      <div style="font-size:0.8rem;color:var(--muted);margin-bottom:8px">Keputusan Ujian Penilaian Kendiri</div>
      <div class="ujian-skor-besar">${pct}%</div>
      <div style="font-size:1rem;font-weight:700;color:${lulus ? 'var(--emerald)' : '#b91c1c'};margin-bottom:8px">
        ${lulus ? '✅ Lulus' : '❌ Tidak Lulus'}
      </div>
      <div style="font-size:0.8rem;color:var(--muted);margin-bottom:12px">${ujianMarkah} daripada ${ujianSoalan.length} soalan betul</div>
      <div class="ai-notice" style="text-align:left">[SIMULASI] — Penilaian ini adalah simulasi. Keputusan yang sah perlu disahkan oleh guru.</div>
      <button class="btn-secondary" onclick="resetUjian()" style="margin-top:12px">🔄 Cuba Lagi</button>
    </div>`;
}

function resetUjian() {
  ujianSoalanIdx = 0; ujianMarkah = 0; ujianJawapanLog = []; ujianSelesai = false;
  renderUjianSoalan();
}

function renderUjianStatusGuru(pelajar) {
  const el = document.getElementById("ujian-status-guru");
  if (!el) return;
  if (pelajar.id === 5) {
    el.innerHTML = `
      <div style="background:#d1fae5;border:1px solid var(--emerald);border-radius:10px;padding:16px;display:flex;align-items:flex-start;gap:12px">
        <span style="font-size:1.8rem">🏆</span>
        <div>
          <div style="font-weight:700;font-size:0.95rem;color:var(--emerald-dark);margin-bottom:4px">Telah Dinilai — Lulus (82%)</div>
          <div style="font-size:0.8rem;color:var(--muted)">Penilai: Ustazah Wan Nur Hasnah binti Wan Yunus</div>
          <div style="font-size:0.82rem;color:var(--text);margin-top:8px;padding:8px 12px;background:var(--white);border-radius:6px">
            "Pelajar menunjukkan kefahaman yang baik dalam tajwid asas. Makhraj huruf sudah tepat. Perlu lebih perhatian pada mad jaiz munfasil."
          </div>
        </div>
      </div>`;
  } else if (pelajar.statusUjian === "Sedang Disemak") {
    el.innerHTML = `<div class="status-banner-pending"><span>⏳</span><div><strong>Dalam Semakan</strong><br><span style="font-size:0.78rem">Guru sedang menyemak penilaian anda. Sila tunggu makluman.</span></div></div>`;
  } else {
    el.innerHTML = `<div class="syarat-item" style="background:#f3f4f6;color:var(--muted)">ℹ Belum Dinilai — Penilaian guru belum dijalankan.</div>`;
  }
}

// ══════════════════════════════════════════════════════════════
//  SUB-TUGAS 9: E-SIJIL
// ══════════════════════════════════════════════════════════════

function initSijilSection(pelajar) {
  renderSijilSyarat(pelajar);
  if (pelajar.status === "Lulus Ujian") {
    paparSijil(pelajar);
  } else {
    const previewEl = document.getElementById("sijil-preview-wrap");
    const belumEl   = document.getElementById("sijil-belum-wrap");
    if (previewEl) previewEl.style.display = "none";
    if (belumEl)   belumEl.style.display   = "block";
  }
}

function renderSijilSyarat(pelajar) {
  const el = document.getElementById("sijil-syarat-list");
  if (!el) return;
  const modulStatus = getModulStatus();
  const modulSelesai = Object.values(modulStatus).filter(s => s === "selesai").length;
  const syarat = [
    { label: "Semua 10 modul wajib selesai", ok: modulSelesai >= 10 },
    { label: "Penilaian guru selesai", ok: pelajar.statusUjian && pelajar.statusUjian !== "Belum Menduduki" && pelajar.statusUjian !== "Sedang Disemak" },
    { label: "Lulus ujian (≥70%)", ok: pelajar.statusUjian && pelajar.statusUjian.includes("Lulus") },
    { label: "Disahkan oleh admin", ok: pelajar.status === "Lulus Ujian" }
  ];
  el.innerHTML = syarat.map(s =>
    `<div class="syarat-item ${s.ok ? 'ok' : 'nok'}">${s.ok ? '✅' : '❌'} ${s.label}</div>`
  ).join("");
}

function paparSijil(pelajar) {
  const previewEl = document.getElementById("sijil-preview-wrap");
  const belumEl   = document.getElementById("sijil-belum-wrap");
  if (previewEl) previewEl.style.display = "block";
  if (belumEl)   belumEl.style.display   = "none";

  // Isi data sijil
  const namaEl    = document.getElementById("sijil-nama-pelajar");
  const tarikhEl  = document.getElementById("sijil-tarikh");
  const keputEl   = document.getElementById("sijil-keputusan");
  const nomborEl  = document.getElementById("sijil-nombor");
  const pensyEl   = document.getElementById("sijil-pensyarah");

  if (namaEl)   namaEl.textContent   = pelajar.nama;
  if (tarikhEl) tarikhEl.textContent = pelajar.tarikh || new Date().toLocaleDateString("ms-MY");
  if (keputEl)  keputEl.textContent  = pelajar.statusUjian || "Lulus";
  if (nomborEl) nomborEl.textContent = "KAM-2025-" + String(pelajar.id).padStart(4, "0");
  if (pensyEl)  pensyEl.textContent  = "Ustazah Wan Nur Hasnah binti Wan Yunus";
}

// ══════════════════════════════════════════════════════════════
//  SUB-TUGAS 10: ADMIN — TAMBAHAN
// ══════════════════════════════════════════════════════════════

function filterPendaftaran() {
  const filter = document.getElementById("a-pendaftaran-filter").value;
  const tbody  = document.getElementById("a-pendaftaran-body");
  if (!tbody) return;

  const data = filter === "Semua" ? pelajarDemo : pelajarDemo.filter(p => p.status === filter);
  const limit = null;

  tbody.innerHTML = data.map((p, i) => {
    const badge     = getStatusBadge(p.status);
    const tindakan  = p.status === "Menunggu Pengesahan"
      ? `<div style="display:flex;gap:6px;flex-wrap:wrap">
           <button class="btn-approve" onclick="ubahStatus(${p.id},'Diluluskan')">Lulus ✓</button>
           <button class="btn-reject"  onclick="ubahStatus(${p.id},'Ditolak')">Tolak ✗</button>
           <button class="btn-info"    onclick="ubahStatus(${p.id},'Maklumat Tambahan')">Maklumat?</button>
         </div>`
      : `<span style="font-size:0.75rem;color:var(--muted)">—</span>`;
    return `<tr>
      <td>${i + 1}</td>
      <td><strong>${p.nama}</strong></td>
      <td style="font-size:0.78rem">${p.email}</td>
      <td>${p.tahap}</td>
      <td>${p.tarikh}</td>
      <td>${badge}</td>
      <td>${tindakan}</td>
    </tr>`;
  }).join("");
}

function renderTempahanAdmin() {
  const tbody = document.getElementById("a-tempahan-body");
  if (!tbody) return;
  const senarai = getTempahan();
  if (!senarai.length) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;color:var(--muted);padding:16px">Tiada tempahan pelajar.</td></tr>`;
    return;
  }
  tbody.innerHTML = senarai.map((t, i) => {
    const statusBadge = getStatusBadge(t.status);
    const tindakan = t.status === "Menunggu Pengesahan"
      ? `<div style="display:flex;gap:4px;flex-wrap:wrap">
           <button class="btn-approve" onclick="sahkanTempahan(${t.id})">Sahkan ✓</button>
           <button class="btn-reject"  onclick="tolakTempahan(${t.id})">Tolak ✗</button>
         </div>`
      : `<span style="font-size:0.75rem;color:var(--muted)">—</span>`;
    return `<tr>
      <td>${i+1}</td>
      <td style="font-size:0.78rem">Pelajar Demo</td>
      <td>${t.hari}</td>
      <td style="font-size:0.72rem">${t.slot}</td>
      <td style="font-size:0.72rem">${t.kaedah}</td>
      <td style="font-size:0.72rem">${t.tarikh}</td>
      <td>${statusBadge}</td>
      <td>${tindakan}</td>
    </tr>`;
  }).join("");
}

function sahkanTempahan(id) {
  let senarai = getTempahan();
  const t = senarai.find(x => x.id === id);
  if (t) { t.status = "Disahkan"; localStorage.setItem("kaq_tempahan", JSON.stringify(senarai)); renderTempahanAdmin(); }
}

function tolakTempahan(id) {
  let senarai = getTempahan();
  const t = senarai.find(x => x.id === id);
  if (t) { t.status = "Ditolak"; localStorage.setItem("kaq_tempahan", JSON.stringify(senarai)); renderTempahanAdmin(); }
}

// Tambah modul baharu
function tambahModulBaharu() {
  const tajuk = document.getElementById("modal-modul-tajuk").value.trim();
  const hurai = document.getElementById("modal-modul-hurai").value.trim();
  const jenis = document.querySelector('input[name="modal-modul-jenis"]:checked');
  if (!tajuk) { alert("Sila masukkan tajuk modul."); return; }
  const newId = modulPembelajaran.length + 1;
  modulPembelajaran.push({ id: newId, tajuk, topik: hurai });
  renderModulAdmin();
  closeModal("modal-tambah-modul");
  document.getElementById("modal-modul-tajuk").value = "";
  document.getElementById("modal-modul-hurai").value = "";
}

// Edit modul admin
let editModulId = null;
function editModul(id) {
  const m = modulPembelajaran.find(x => x.id === id);
  if (!m) return;
  editModulId = id;
  document.getElementById("modal-edit-tajuk").value = m.tajuk;
  document.getElementById("modal-edit-hurai").value = m.topik;
  showModal("modal-edit-modul");
}

function simpanEditModul() {
  const m = modulPembelajaran.find(x => x.id === editModulId);
  if (!m) { closeModal("modal-edit-modul"); return; }
  m.tajuk = document.getElementById("modal-edit-tajuk").value.trim() || m.tajuk;
  m.topik = document.getElementById("modal-edit-hurai").value.trim() || m.topik;
  renderModulAdmin();
  closeModal("modal-edit-modul");
}

// Kemajuan admin — lihat butiran
function lihatButiran(id) {
  const p = pelajarDemo.find(x => x.id === id);
  if (!p) return;
  const pct = Math.round((p.modulSelesai / 10) * 100);
  document.getElementById("modal-butiran-content").innerHTML = `
    <div class="profile-preview">
      <div class="profile-row"><span class="profile-key">Nama</span><span class="profile-val">${p.nama}</span></div>
      <div class="profile-row"><span class="profile-key">Status</span><span class="profile-val">${getStatusBadge(p.status)}</span></div>
      <div class="profile-row"><span class="profile-key">Modul Selesai</span><span class="profile-val">${p.modulSelesai} / 10</span></div>
      <div class="profile-row"><span class="profile-key">Latihan AI</span><span class="profile-val">${p.latihanAI}</span></div>
      <div class="profile-row"><span class="profile-key">Kelas Hadir</span><span class="profile-val">${p.kelasHadir}</span></div>
      <div class="profile-row"><span class="profile-key">Status Ujian</span><span class="profile-val">${p.statusUjian}</span></div>
    </div>
    <div style="margin-top:12px">
      <div style="font-size:0.78rem;color:var(--muted);margin-bottom:4px">Kemajuan Keseluruhan</div>
      <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
      <div style="font-size:0.72rem;color:var(--emerald);margin-top:4px;font-weight:700">${pct}%</div>
    </div>`;
  showModal("modal-butiran-pelajar");
}

// Ujian admin
function renderUjianAdminSenarai() {
  const el = document.getElementById("a-ujian-tunggu-list");
  if (!el) return;
  const tunggu = pelajarDemo.filter(p => p.status === "Diluluskan" && p.modulSelesai >= 5);
  if (!tunggu.length) {
    el.innerHTML = `<p style="font-size:0.82rem;color:var(--muted);text-align:center;padding:16px 0">Tiada pelajar menunggu penilaian guru pada masa ini.</p>`;
    return;
  }
  el.innerHTML = tunggu.map(p => `
    <div class="modul-admin-item" style="margin-bottom:8px">
      <div class="modul-admin-info">
        <div>
          <div class="modul-title">${p.nama}</div>
          <div class="modul-desc">Modul: ${p.modulSelesai}/10 | Hadir: ${p.kelasHadir} kelas</div>
        </div>
      </div>
      ${getStatusBadge(p.status)}
    </div>`).join("");

  // Isi dropdown pelajar
  const sel = document.getElementById("a-ujian-pelajar-sel");
  if (sel) {
    sel.innerHTML = `<option value="">-- Pilih Pelajar --</option>` +
      pelajarDemo.filter(p => p.status === "Diluluskan").map(p => `<option value="${p.id}">${p.nama}</option>`).join("");
  }
}

function simpanSyaratLulus() {
  const val = document.getElementById("a-syarat-lulus").value;
  localStorage.setItem("kaq_syarat_lulus", val);
  const msgEl = document.getElementById("syarat-lulus-msg");
  msgEl.style.display = "inline";
  setTimeout(() => { msgEl.style.display = "none"; }, 2000);
}

function simpanKeputusanUjian() {
  const pelajarId = parseInt(document.getElementById("a-ujian-pelajar-sel").value);
  const markah    = parseInt(document.getElementById("a-ujian-markah").value);
  const ulasan    = document.getElementById("a-ujian-ulasan").value.trim();
  const statusEl  = document.querySelector('input[name="a-ujian-status"]:checked');

  if (!pelajarId) { alert("Sila pilih pelajar."); return; }
  if (isNaN(markah) || markah < 0 || markah > 100) { alert("Sila masukkan markah yang sah (0-100)."); return; }
  if (!statusEl) { alert("Sila pilih status keputusan."); return; }

  const p = pelajarDemo.find(x => x.id === pelajarId);
  if (p) {
    p.statusUjian = statusEl.value === "Lulus" ? `Lulus (${markah}%)` : `Gagal (${markah}%)`;
    if (statusEl.value === "Lulus") p.status = "Lulus Ujian";
    renderPendaftaranTable("a-recent-reg-body", 5);
    renderPendaftaranTable("a-pendaftaran-body", null);
    renderKemajuanAdmin();
    updateStatsAdmin();
  }

  const msgEl = document.getElementById("a-ujian-rekod-msg");
  msgEl.innerHTML = `✅ Keputusan untuk <strong>${p ? p.nama : 'Pelajar'}</strong> telah disimpan. Status: <strong>${statusEl.value} (${markah}%)</strong>`;
  msgEl.style.display = "block";
  setTimeout(() => { msgEl.style.display = "none"; }, 4000);
}

// Eksport laporan (simulasi)
function eksportLaporan() {
  const el = document.getElementById("a-laporan-eksport-msg");
  if (el) {
    el.innerHTML = "✅ Laporan telah dijana dalam format demo. Dalam sistem sebenar, fail CSV/PDF akan dimuat turun.";
    el.style.display = "block";
    setTimeout(() => { el.style.display = "none"; }, 4000);
  }
}

// ══════════════════════════════════════════════════════════════
//  KEMAS KINI renderModulAdmin — tambah butang Edit/Padam & Toggle
// ══════════════════════════════════════════════════════════════

function renderModulAdmin() {
  const el = document.getElementById("a-modul-list");
  if (!el) return;
  el.innerHTML = modulPembelajaran.map(m => `
    <div class="modul-admin-item">
      <div class="modul-admin-info">
        <div class="modul-num">${m.id}</div>
        <div>
          <div class="modul-title">${m.tajuk}</div>
          <div class="modul-desc">${m.topik}</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;flex-wrap:wrap">
        <label class="toggle-switch" title="Aktif / Tidak Aktif">
          <input type="checkbox" checked onchange="this.closest('.modul-admin-item').style.opacity=this.checked?'1':'0.55'">
          <span class="toggle-slider"></span>
        </label>
        <span class="badge badge-emerald">Aktif</span>
        <button class="btn-secondary" style="font-size:0.72rem;padding:4px 10px" onclick="editModul(${m.id})">✏ Edit</button>
        <button class="btn-reject" style="padding:4px 10px;font-size:0.72rem" onclick="this.closest('.modul-admin-item').style.display='none'">🗑</button>
      </div>
    </div>
  `).join("");
}

// ══════════════════════════════════════════════════════════════
//  KEMAS KINI renderKemajuanAdmin — tambah kolum Kelas Hadir & Butiran
// ══════════════════════════════════════════════════════════════

function renderKemajuanAdmin() {
  const tbody = document.getElementById("a-kemajuan-body");
  if (!tbody) return;
  tbody.innerHTML = pelajarDemo.map(p => {
    const pct = Math.round((p.modulSelesai / 10) * 100);
    return `
      <tr>
        <td><strong>${p.nama}</strong></td>
        <td>${getStatusBadge(p.status)}</td>
        <td>${p.modulSelesai} / 10</td>
        <td>${p.latihanAI}</td>
        <td>${p.kelasHadir}</td>
        <td>${p.statusUjian}</td>
        <td>
          <div style="display:flex;align-items:center;gap:8px">
            <div class="progress-bar-bg" style="flex:1;min-width:60px">
              <div class="progress-bar-fill" style="width:${pct}%"></div>
            </div>
            <span style="font-size:0.72rem;font-weight:700;min-width:30px">${pct}%</span>
          </div>
        </td>
        <td><button class="btn-secondary" style="font-size:0.72rem;padding:4px 10px" onclick="lihatButiran(${p.id})">Butiran</button></td>
      </tr>
    `;
  }).join("");
}

// (Inisialisasi sudah disatukan terus dalam initPortalPelajar & initPortalAdmin di atas)
