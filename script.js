/* =========================================================
   DATA SKILLS
   ========================================================= */
const webSkills = [
  { name: 'HTML', icon: 'bi-filetype-html', level: 'Project Experience', desc: 'Membuat struktur halaman web.' },
  { name: 'CSS', icon: 'bi-filetype-css', level: 'Project Experience', desc: 'Mendesain tampilan website.' },
  { name: 'JavaScript', icon: 'bi-filetype-js', level: 'Familiar', desc: 'Membuat interaksi dasar pada website.' },
  { name: 'PHP', icon: 'bi-filetype-php', level: 'Project Experience', desc: 'Membuat aplikasi web dinamis.' },
  { name: 'MySQL', icon: 'bi-database', level: 'Project Experience', desc: 'Mengelola database relasional.' },
  { name: 'Bootstrap', icon: 'bi-bootstrap', level: 'Project Experience', desc: 'Membuat tampilan responsif.' },
  { name: 'Laravel', icon: 'bi-layers', level: 'Project Experience', desc: 'Framework PHP untuk web app.' },
  { name: 'CRUD', icon: 'bi-arrow-repeat', level: 'Project Experience', desc: 'Create, Read, Update, Delete.' },
  { name: 'Database', icon: 'bi-diagram-3', level: 'Familiar', desc: 'Relasi antar tabel database.' },
  { name: 'Git/GitHub', icon: 'bi-git', level: 'Learning', desc: 'Version control & kolaborasi.' }
];

const motorSkills = [
  { name: 'Mengganti Lampu Depan', icon: 'bi-lightbulb' },
  { name: 'Mengganti Lampu Belakang', icon: 'bi-lightbulb-fill' },
  { name: 'Mengganti Lampu Senja Depan', icon: 'bi-lightbulb-off' },
  { name: 'Setting Rantai Sepeda Motor', icon: 'bi-link-45deg' },
  { name: 'Mengganti Kiprok', icon: 'bi-lightning-charge' },
  { name: 'Mengganti Kampas Rem', icon: 'bi-circle' },
  { name: 'Mengganti Ban Depan Sepeda Motor', icon: 'bi-circle-fill' },
  { name: 'Mengganti Oli Sepeda Motor', icon: 'bi-droplet-fill' },
  { name: 'Mengatasi Ban Seret', icon: 'bi-arrow-repeat' },
  { name: 'Membersihkan Karburator', icon: 'bi-wind' },
  { name: 'Dasar Perawatan Sepeda Motor', icon: 'bi-tools' },
  { name: 'Dasar Pemeriksaan Komponen Kelistrikan', icon: 'bi-plug' }
];

/* =========================================================
   DATA PROJECTS
   ========================================================= */
const projects = [
  {
    title: 'Sistem Manajemen Bengkel Sepeda Motor',
    description: 'Aplikasi web untuk mengelola data bengkel sepeda motor, mulai dari pelanggan, motor, mekanik, servis, hingga sparepart.',
    image: 'assets/projects/project-1.jpg',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'CRUD'],
    features: ['Login', 'Dashboard', 'Data Pelanggan', 'Data Motor', 'Data Mekanik', 'Data Servis', 'Data Sparepart', 'CRUD', 'Relasi Database', 'Transaksi Servis'],
    demo: 'LIVE_DEMO_PROJECT_1',
    github: 'https://github.com/RhmtAbdlHlmarrsyd/website-manajemen-bengkel-sepeda-motor',
    featured: true
  },
  {
    title: 'Aplikasi Manajemen Peternakan Ayam',
    description: 'Aplikasi web untuk membantu mengelola data peternakan ayam, termasuk data ayam, pakan, dan produksi.',
    image: 'assets/projects/project-2.jpg',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    features: ['Login', 'Dashboard', 'Data Peternakan', 'Data Ayam', 'Data Pakan', 'Data Produksi', 'CRUD', 'Database'],
    demo: 'LIVE_DEMO_PROJECT_2',
    github: 'https://github.com/RhmtAbdlHlmarrsyd/kampungfarm',
    featured: false
  },
  {
    title: 'Aplikasi Pengeluaran Rumah Tangga',
    description: 'Aplikasi web sederhana untuk mencatat pemasukan dan pengeluaran rumah tangga serta menghitung total pengeluaran.',
    image: 'assets/projects/project-3.jpg',
    tech: ['Laravel', 'PHP', 'MySQL'],
    features: ['Dashboard', 'Pemasukan', 'Pengeluaran', 'Kategori', 'Riwayat Transaksi', 'Perhitungan Total'],
    demo: 'LIVE_DEMO_PROJECT_3',
    github: 'https://github.com/RhmtAbdlHlmarrsyd/rumahku-finance',
    featured: false
  },
  {
    title: 'CafeAbdul — Website Cafe',
    description: 'Website profil cafe sederhana yang menampilkan halaman utama, katalog produk, promo, dan keranjang belanja.',
    image: 'assets/projects/project-5.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5'],
    features: ['Halaman Utama', 'Katalog Produk', 'Halaman Promo', 'Keranjang Belanja', 'Desain Responsif', 'Multi-halaman'],
    demo: 'LIVE_DEMO_PROJECT_4',
    github: 'https://github.com/RhmtAbdlHlmarrsyd/CafeAbdul',
    featured: false
  }
];

/* =========================================================
   DATA GALLERY
   ========================================================= */
const gallery = [
  { image: 'assets/projects/project-1.jpg', title: 'Sistem Manajemen Bengkel' },
  { image: 'assets/projects/project-2.jpg', title: 'Manajemen Peternakan Ayam' },
  { image: 'assets/projects/project-3.jpg', title: 'Pengeluaran Rumah Tangga' },
  { image: 'assets/projects/project-4.jpg', title: 'Project Lainnya' },
  { image: 'assets/projects/project-5.jpg', title: 'CafeAbdul — Website Cafe' },
  { image: 'assets/projects/project-6.jpg', title: 'CRUD Data Siswa' },
  { image: 'assets/projects/project-7.jpg', title: 'CRUD Data Obat' }
];

/* =========================================================
   DATA CERTIFICATES
   ========================================================= */
const certificates = [
  { title: 'Sertifikat Program Paham AI', issuer: 'Polres Mojokerto', year: '2026', description: 'Sertifikat Program Paham AI dari Polres Mojokerto.', image: 'assets/certificates/certificate-1.png', link: 'assets/certificates/certificate-1.png' },
  { title: 'Certificate of AI Class ASEAN', issuer: 'ASEAN FOUNDATION', year: '2026', description: 'Certificate of AI Class ASEAN dari ASEAN FOUNDATION.', image: 'assets/certificates/certificate-2.png', link: 'assets/certificates/certificate-2.png' },
  { title: 'Sertifikat Kompetensi Unit Uji Kompetensi', issuer: 'SMKN 2 MOJOKERTO', year: '2026', description: 'Sertifikat Kompetensi Unit Uji Kompetensi.', image: 'assets/certificates/certificate-3.png', link: 'assets/certificates/certificate-3.png' },
  { title: 'Sertifikat Kelulusan Game Edukasi Construct', issuer: 'Educa Studio', year: '2026', description: 'Sertifikat Kelulusan Game Edukasi Construct.', image: 'assets/certificates/certificate-4.png', link: 'assets/certificates/certificate-4.png' },
  { title: 'Sertifikat Kelulusan Tutorial Dasar Menggunakan Github', issuer: 'PT Humma Teknologi Indonesia', year: '2026', description: 'Sertifikat Kelulusan Tutorial Dasar Menggunakan Github.', image: 'assets/certificates/certificate-5.png', link: 'assets/certificates/certificate-5.png' },
  { title: 'Sertifikat Kelulusan Pemrograman Web Menggunakan Laravel', issuer: 'PT Humma Teknologi Indonesia', year: '2026', description: 'Sertifikat Kelulusan Pemrograman Web Menggunakan Laravel.', image: 'assets/certificates/certificate-6.png', link: 'assets/certificates/certificate-6.png' },
  { title: 'Sertifikat Kelulusan Pemrograman Web dengan PHP Native', issuer: 'PT Humma Teknologi Indonesia', year: '2026', description: 'Sertifikat Kelulusan Pemrograman Web dengan PHP Native.', image: 'assets/certificates/certificate-7.png', link: 'assets/certificates/certificate-7.png' },
  { title: 'Sertifikat Kelulusan Pemrograman Web Front End dengan Bootstrap 5', issuer: 'PT Humma Teknologi Indonesia', year: '2026', description: 'Sertifikat Kelulusan Pemrograman Web Front End dengan Bootstrap 5.', image: 'assets/certificates/certificate-8.png', link: 'assets/certificates/certificate-8.png' },
  { title: 'Sertifikat Kelulusan Pengenalan IT dan Fundamental Programming', issuer: 'PT Humma Teknologi Indonesia', year: '2026', description: 'Sertifikat Kelulusan Pengenalan IT dan Fundamental Programming.', image: 'assets/certificates/certificate-9.png', link: 'assets/certificates/certificate-9.png' },
  { title: 'Sertifikat Kelulusan Mastering Public Speaking', issuer: 'PT Humma Teknologi Indonesia', year: '2026', description: 'Sertifikat Kelulusan Mastering Public Speaking.', image: 'assets/certificates/certificate-10.png', link: 'assets/certificates/certificate-10.png' },
  { title: 'Sertifikat Kelulusan Belajar Coding Menggunakan Scratch', issuer: 'PT Humma Teknologi Indonesia', year: '2026', description: 'Sertifikat Kelulusan Belajar Coding Menggunakan Scratch.', image: 'assets/certificates/certificate-11.png', link: 'assets/certificates/certificate-11.png' },
  { title: 'Sertifikat Kelulusan Java Fundamental Programming', issuer: 'PT Humma Teknologi Indonesia', year: '2026', description: 'Sertifikat Kelulusan Java Fundamental Programming.', image: 'assets/certificates/certificate-12.png', link: 'assets/certificates/certificate-12.png' }
];

/* =========================================================
   RENDER SKILLS
   ========================================================= */
function renderSkills() {
  const webContainer = document.getElementById('webSkills');
  const motorContainer = document.getElementById('motorSkills');

  const badgeClass = {
    'Learning': 'badge-learning',
    'Familiar': 'badge-familiar',
    'Project Experience': 'badge-project'
  };

  if (webContainer) {
    webContainer.innerHTML = webSkills.map(skill => `
      <div class="col-md-6 col-lg-4">
        <div class="skill-card">
          <div class="skill-card-header">
            <i class="bi ${skill.icon}"></i>
            <h5>${skill.name}</h5>
            <span class="skill-badge ${badgeClass[skill.level]}">${skill.level}</span>
          </div>
          <p class="skill-desc">${skill.desc}</p>
        </div>
      </div>
    `).join('');
  }

  if (motorContainer) {
    motorContainer.innerHTML = motorSkills.map(skill => `
      <div class="col-md-6 col-lg-3">
        <div class="skill-card">
          <div class="skill-card-header">
            <i class="bi ${skill.icon}"></i>
            <h5>${skill.name}</h5>
          </div>
        </div>
      </div>
    `).join('');
  }
}

/* =========================================================
   RENDER PROJECTS
   ========================================================= */
function renderProjects() {
  const container = document.getElementById('projectsContainer');
  if (!container) return;

  container.innerHTML = projects.map((p, i) => `
    <div class="col-lg-4 col-md-6">
      <div class="project-card">
        <div class="project-image-wrapper">
          ${p.featured ? '<span class="project-featured-badge"><i class="bi bi-star-fill me-1"></i>Utama</span>' : ''}
          <img src="${p.image}" alt="${p.title}" class="project-image" onerror="this.src='https://via.placeholder.com/600x375/2563eb/ffffff?text=${encodeURIComponent(p.title)}'">
        </div>
        <div class="project-body">
          <h4 class="project-title">${p.title}</h4>
          <p class="project-desc">${p.description}</p>
          <div class="project-tech">
            ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <ul class="project-features">
            ${p.features.slice(0, 5).map(f => `<li><i class="bi bi-check2"></i><span>${f}</span></li>`).join('')}
            ${p.features.length > 5 ? `<li><i class="bi bi-three-dots"></i><span>dan lainnya</span></li>` : ''}
          </ul>
          <div class="project-actions">
            <a href="${p.github}" target="_blank" rel="noopener" class="btn-project">
              <i class="bi bi-github"></i> GitHub
            </a>
            <button class="btn-project" onclick="showProjectDetail(${i})">
              <i class="bi bi-eye"></i> Lihat Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* =========================================================
   RENDER GALLERY
   ========================================================= */
function renderGallery() {
  const container = document.getElementById('galleryContainer');
  if (!container) return;

  container.innerHTML = gallery.map((g, i) => `
    <div class="col-md-6 col-lg-3">
      <div class="gallery-item" onclick="openGalleryModal('${g.image}', '${g.title}')">
        <img src="${g.image}" alt="${g.title}" onerror="this.src='https://via.placeholder.com/600x375/2563eb/ffffff?text=${encodeURIComponent(g.title)}'">
        <div class="gallery-overlay">
          <i class="bi bi-zoom-in"></i>
        </div>
      </div>
    </div>
  `).join('');
}

/* =========================================================
   RENDER CERTIFICATES
   ========================================================= */
function renderCertificates() {
  const container = document.getElementById('certificatesContainer');
  if (!container) return;

  container.innerHTML = certificates.map((c, i) => `
    <div class="col-md-6 col-lg-4">
      <div class="cert-card">
        <img src="${c.image}" alt="${c.title}" class="cert-image" onerror="this.src='https://via.placeholder.com/400x300/2563eb/ffffff?text=Sertifikat'">
        <div class="cert-body">
          <h4 class="cert-title">${c.title}</h4>
          <p class="cert-issuer"><i class="bi bi-building me-1"></i>${c.issuer}</p>
          <p class="cert-year"><i class="bi bi-calendar3 me-1"></i>${c.year}</p>
          <p class="cert-desc">${c.description}</p>
          <button class="btn-project" onclick="openCertificateModal(${i})">
            <i class="bi bi-eye"></i> Lihat Sertifikat
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

/* =========================================================
   MODAL: CERTIFICATE
   ========================================================= */
let currentCertIndex = 0;

function openCertificateModal(index) {
  currentCertIndex = index;
  updateCertificateModal();
  const modal = new bootstrap.Modal(document.getElementById('certificateModal'));
  modal.show();
}

function updateCertificateModal() {
  const c = certificates[currentCertIndex];
  document.getElementById('certificateModalImage').src = c.image;
  document.getElementById('certificateModalTitle').textContent = c.title;
  document.getElementById('certificateModalIssuer').textContent = c.issuer;
  document.getElementById('certificateModalYear').textContent = c.year;
  document.getElementById('certCounter').textContent = `${currentCertIndex + 1} / ${certificates.length}`;
}

function initCertificateNavigation() {
  const prevBtn = document.getElementById('certPrevBtn');
  const nextBtn = document.getElementById('certNextBtn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentCertIndex = (currentCertIndex - 1 + certificates.length) % certificates.length;
      updateCertificateModal();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentCertIndex = (currentCertIndex + 1) % certificates.length;
      updateCertificateModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('certificateModal');
    if (!modal || !modal.classList.contains('show')) return;

    if (e.key === 'ArrowLeft') {
      currentCertIndex = (currentCertIndex - 1 + certificates.length) % certificates.length;
      updateCertificateModal();
    } else if (e.key === 'ArrowRight') {
      currentCertIndex = (currentCertIndex + 1) % certificates.length;
      updateCertificateModal();
    }
  });
}

/* =========================================================
   MODAL: GALLERY
   ========================================================= */
function openGalleryModal(image, title) {
  document.getElementById('galleryModalImage').src = image;
  document.getElementById('galleryModalTitle').textContent = title;
  const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
  modal.show();
}

/* =========================================================
   MODAL: PROJECT DETAIL
   ========================================================= */
function showProjectDetail(index) {
  const p = projects[index];
  const body = document.getElementById('projectModalBody');
  document.getElementById('projectModalTitle').textContent = p.title;

  body.innerHTML = `
    <img src="${p.image}" alt="${p.title}" class="img-fluid rounded mb-3" onerror="this.src='https://via.placeholder.com/800x400/2563eb/ffffff?text=${encodeURIComponent(p.title)}'">
    <p class="text-secondary">${p.description}</p>
    <h6 class="mt-3 mb-2"><i class="bi bi-stack me-1"></i> Teknologi</h6>
    <div class="project-tech mb-3">
      ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
    </div>
    <h6 class="mb-2"><i class="bi bi-list-check me-1"></i> Fitur Utama</h6>
    <ul class="project-features mb-3">
      ${p.features.map(f => `<li><i class="bi bi-check2"></i><span>${f}</span></li>`).join('')}
    </ul>
    <div class="d-flex gap-2 flex-wrap">
      <a href="${p.github}" target="_blank" rel="noopener" class="btn-project primary">
        <i class="bi bi-github"></i> GitHub
      </a>
    </div>
  `;

  const modal = new bootstrap.Modal(document.getElementById('projectModal'));
  modal.show();
}

/* =========================================================
   NAVBAR SCROLL
   ========================================================= */
function initNavbar() {
  const navbar = document.getElementById('mainNavbar');
  const backToTop = document.getElementById('backToTop');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    if (scrollY > 400) backToTop.classList.add('show');
    else backToTop.classList.remove('show');

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop) current = section.getAttribute('id');
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const collapse = document.getElementById('navMenu');
      if (collapse.classList.contains('show')) {
        new bootstrap.Collapse(collapse).hide();
      }
    });
  });
}

/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}

/* =========================================================
   TAHUN FOOTER
   ========================================================= */
function initYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* =========================================================
   TYPING EFFECT — ROLE
   ========================================================= */
function initTypingEffect() {
  const roleEl = document.getElementById('roleTyping');
  if (!roleEl) return;

  const roles = [
    'Web Development Enthusiast',
    'Motorcycle Technician',
    'Frontend Learner',
    'Laravel Explorer',
    'SMK Student'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeRole() {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 90;

    if (!isDeleting) {
      roleEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeRole, 1800);
        return;
      }
    } else {
      roleEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(typeRole, speed);
  }

  typeRole();
}

/* =========================================================
   ANIMATED COUNTER
   ========================================================= */
function initCounter() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      const duration = 1500;
      const stepTime = 16;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + (target === 100 ? '%' : '+');
        }
      };

      updateCounter();
      observer.unobserve(counter);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* =========================================================
   SCROLL PROGRESS BAR
   ========================================================= */
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = (scrollTop / docHeight) * 100;
    progressBar.style.width = percent + '%';
  });
}

/* =========================================================
   WELCOME TOAST
   ========================================================= */
function initWelcomeToast() {
  const toastEl = document.getElementById('welcomeToast');
  if (!toastEl) return;

  if (sessionStorage.getItem('welcomeShown')) return;

  setTimeout(() => {
    const toast = new bootstrap.Toast(toastEl, { delay: 6000 });
    toast.show();
    sessionStorage.setItem('welcomeShown', 'true');
  }, 2000);
}

/* =========================================================
   INIT SEMUA
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  renderGallery();
  renderCertificates();
  initNavbar();
  initReveal();
  initYear();
  initTypingEffect();
  initCounter();
  initScrollProgress();
  initWelcomeToast();
  initCertificateNavigation();
});

/* robot.js — robot 3D melambai (three.js r128).
   Butuh #robot-widget dan #robot-bubble di index.html, dan three.js dimuat sebelum file ini. */
(function () {
  const host = document.getElementById('robot-widget');
  const bubble = document.getElementById('robot-bubble');
  bubble.textContent = host.dataset.greeting || 'Halo!';
  const ACCENT = 0x2563eb; // samakan dengan --accent di style.css

  // ---------- renderer / scene ----------
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  host.insertBefore(renderer.domElement, bubble);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
  camera.position.set(0, 2.9, 9.2);
  camera.lookAt(0, 1.55, 0);

  scene.add(new THREE.HemisphereLight(0xdfeaff, 0x1a2430, 0.9));
  const key = new THREE.DirectionalLight(0xffffff, 0.9);
  key.position.set(3, 7, 5);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  scene.add(key);
  const glow = new THREE.PointLight(ACCENT, 1.4, 7);
  glow.position.set(0, 0.4, 1.2);
  scene.add(glow);

  // ---------- material ----------
  const white = new THREE.MeshStandardMaterial({ color: 0xeef2f7, roughness: 0.35, metalness: 0.15 });
  const metal = new THREE.MeshStandardMaterial({ color: 0x2b3542, roughness: 0.4, metalness: 0.7 });
  const dark  = new THREE.MeshStandardMaterial({ color: 0x0a0f15, roughness: 0.15, metalness: 0.6 });
  const neon  = new THREE.MeshStandardMaterial({ color: ACCENT, emissive: ACCENT, emissiveIntensity: 1.2 });

  function mesh(geo, mat, x = 0, y = 0, z = 0) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    return m;
  }
  const sphere = (r) => new THREE.SphereGeometry(r, 32, 24);
  const cyl = (r, h) => new THREE.CylinderGeometry(r, r, h, 24);

  // ---------- ALAS ----------
  const base = new THREE.Group();
  const baseBody = mesh(new THREE.CylinderGeometry(1.9, 2.05, 0.5, 64), metal, 0, -0.25, 0);
  baseBody.receiveShadow = true;
  const baseTop = mesh(new THREE.CylinderGeometry(1.75, 1.75, 0.04, 64), new THREE.MeshStandardMaterial({ color: 0x1b2430, roughness: 0.3, metalness: 0.8 }), 0, 0.0, 0);
  baseTop.receiveShadow = true;
  const bandGeo = new THREE.TorusGeometry(1.97, 0.035, 12, 96);
  const band = mesh(bandGeo, neon, 0, -0.3, 0); band.rotation.x = Math.PI / 2;
  const ring1 = mesh(new THREE.TorusGeometry(1.5, 0.03, 12, 96), neon, 0, 0.03, 0); ring1.rotation.x = Math.PI / 2;
  const ring2 = mesh(new THREE.TorusGeometry(0.95, 0.025, 12, 96), neon.clone(), 0, 0.03, 0); ring2.rotation.x = Math.PI / 2;
  const foot = mesh(new THREE.CylinderGeometry(2.25, 2.3, 0.12, 64), new THREE.MeshStandardMaterial({ color: 0x10161e, roughness: 0.6, metalness: 0.5 }), 0, -0.56, 0);
  foot.receiveShadow = true;
  base.add(baseBody, baseTop, band, ring1, ring2, foot);
  base.scale.set(0.8, 1, 0.8);   // perkecil alas agar proporsional
  scene.add(base);

  // ---------- ROBOT ----------
  const robot = new THREE.Group();
  scene.add(robot);

  // kaki
  for (const s of [-1, 1]) {
    robot.add(mesh(cyl(0.12, 0.7), metal, s * 0.3, 0.5, 0));
    const f = mesh(sphere(0.22), white, s * 0.3, 0.14, 0.1);
    f.scale.set(1, 0.5, 1.5);
    robot.add(f);
  }
  // badan
  const body = mesh(sphere(0.8), white, 0, 1.55, 0);
  body.scale.set(0.75, 0.85, 0.6);
  robot.add(body);
  const chest = mesh(sphere(0.1), neon.clone(), 0, 1.7, 0.46);
  chest.scale.set(1, 1, 0.3);
  robot.add(chest);
  robot.add(mesh(cyl(0.2, 0.25), metal, 0, 2.25, 0)); // leher

  // kepala
  const head = new THREE.Group();
  head.position.set(0, 2.75, 0);
  robot.add(head);
  const skull = mesh(sphere(0.62), white);
  skull.scale.set(1.1, 0.95, 1);
  head.add(skull);
  const visor = mesh(sphere(0.5), dark, 0, 0.02, 0.42);
  visor.scale.set(1, 0.72, 0.5);
  head.add(visor);
  const eyes = new THREE.Group();
  for (const s of [-1, 1]) {
    const e = mesh(sphere(0.09), neon, s * 0.2, 0.04, 0.64);
    e.scale.set(1, 1, 0.3);
    eyes.add(e);
  }
  head.add(eyes);
  const smile = mesh(new THREE.TorusGeometry(0.1, 0.014, 8, 20, Math.PI), neon, 0, -0.1, 0.655);
  smile.rotation.z = Math.PI;
  head.add(smile);
  for (const s of [-1, 1]) {
    const ear = mesh(cyl(0.14, 0.12), metal, s * 0.68, 0, 0);
    ear.rotation.z = Math.PI / 2;
    head.add(ear);
    const earGlow = mesh(cyl(0.08, 0.03), neon, s * 0.745, 0, 0);
    earGlow.rotation.z = Math.PI / 2;
    head.add(earGlow);
  }
  head.add(mesh(cyl(0.025, 0.32), metal, 0, 0.74, 0));
  const tip = mesh(sphere(0.07), neon.clone(), 0, 0.93, 0);
  head.add(tip);

  // lengan: bahu -> siku -> tangan
  function makeArm(side) {
    const shoulder = new THREE.Group();
    shoulder.position.set(side * 0.72, 1.95, 0);
    shoulder.add(mesh(sphere(0.2), metal));
    shoulder.add(mesh(cyl(0.1, 0.6), white, 0, -0.3, 0));
    const elbow = new THREE.Group();
    elbow.position.set(0, -0.6, 0);
    elbow.add(mesh(sphere(0.12), neon.clone()));
    elbow.add(mesh(cyl(0.09, 0.55), white, 0, -0.275, 0));
    elbow.add(mesh(sphere(0.16), white, 0, -0.62, 0));
    shoulder.add(elbow);
    robot.add(shoulder);
    return { shoulder, elbow };
  }
  const armL = makeArm(-1);  // diam
  const armR = makeArm(1);   // melambai

  // ---------- interaksi ----------
  let waving = false, waveTimer = 0;
  function greet(ms) {
    waving = true;
    bubble.classList.add('show');
    clearTimeout(waveTimer);
    waveTimer = setTimeout(() => { waving = false; bubble.classList.remove('show'); }, ms);
  }
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  setTimeout(() => greet(4200), 900);
  setInterval(() => { if (!waving) greet(3600); }, 14000);
  host.addEventListener('pointerenter', () => { if (!waving) greet(3200); });
  host.addEventListener('click', () => greet(3200));

  const mouse = { x: 0, y: 0 };
  window.addEventListener('pointermove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
  });

  // ---------- ukuran ----------
  // Titik-titik yang HARUS terlihat penuh: tepi alas (lingkaran), puncak antena + ruang gelembung, ujung tangan saat melambai
  const FIT_PTS = [];
  for (let i = 0; i < 32; i++) {
    const a = (i / 32) * Math.PI * 2;
    FIT_PTS.push(new THREE.Vector3(Math.cos(a) * 1.95, -0.72, Math.sin(a) * 1.95));
  }
  FIT_PTS.push(new THREE.Vector3(0, 4.4, 0), new THREE.Vector3(-1.9, 3.4, 0), new THREE.Vector3(1.9, 3.4, 0));
  const FIT_MARGIN = 0.92;   // 1 = mepet tepi kotak; makin kecil makin longgar
  const TILT = 0.2;

  function placeCamera(dist, cy) {
    camera.position.set(0, cy + Math.sin(TILT) * dist, Math.cos(TILT) * dist);
    camera.lookAt(0, cy, 0);
    camera.updateMatrixWorld();
  }
  function projectedBounds() {
    let minY = 9, maxY = -9, maxX = 0;
    const v = new THREE.Vector3();
    for (const p of FIT_PTS) {
      v.copy(p).project(camera);
      minY = Math.min(minY, v.y); maxY = Math.max(maxY, v.y);
      maxX = Math.max(maxX, Math.abs(v.x));
    }
    return { minY, maxY, maxX };
  }
  function fitCamera() {
    const t = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    let cy = 1.8;
    for (let pass = 0; pass < 4; pass++) {
      let dist = 5;
      for (; dist < 60; dist *= 1.015) {
        placeCamera(dist, cy);
        const b = projectedBounds();
        if (b.maxX <= FIT_MARGIN && b.maxY <= FIT_MARGIN && b.minY >= -FIT_MARGIN) break;
      }
      const b = projectedBounds();
      cy += ((b.maxY + b.minY) / 2) * dist * t;   // geser agar isi berada di tengah kotak
    }
    // pas terakhir setelah pemusatan
    let dist = 5;
    for (; dist < 60; dist *= 1.01) {
      placeCamera(dist, cy);
      const b = projectedBounds();
      if (b.maxX <= FIT_MARGIN && b.maxY <= FIT_MARGIN && b.minY >= -FIT_MARGIN) break;
    }
  }
  function resize() {
    const w = host.clientWidth, h = host.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    fitCamera();
  }
  new ResizeObserver(resize).observe(host);
  resize();

  // ---------- animasi ----------
  const damp = (a, b, k, dt) => a + (b - a) * (1 - Math.exp(-k * dt));
  let w = 0, hx = 0, hy = 0, visible = true;
  new IntersectionObserver((en) => { visible = en[0].isIntersecting; }).observe(host);
  const clock = new THREE.Clock();

  function tick() {
    requestAnimationFrame(tick);
    if (!visible) { clock.getDelta(); return; }
    const dt = Math.min(clock.getDelta(), 0.05), t = clock.elapsedTime;
    const k = reduce ? 0.3 : 1;

    w = damp(w, waving ? 1 : 0, 5, dt);
    const swing = Math.sin(t * 9) * (reduce ? 0.2 : 1);

    // lengan melambai
    armR.shoulder.rotation.z = 0.12 + (2.45 - 0.12) * w + w * swing * 0.06 + (1 - w) * Math.sin(t * 1.4) * 0.03;
    armR.elbow.rotation.z = w * (0.35 + swing * 0.5);
    armL.shoulder.rotation.z = -0.12 - Math.sin(t * 1.4 + 1) * 0.03;

    // kepala mengikuti kursor + miring saat menyapa
    hx = damp(hx, mouse.x * 0.5, 4, dt);
    hy = damp(hy, mouse.y * 0.25, 4, dt);
    head.rotation.y = hx;
    head.rotation.x = hy;
    head.rotation.z = w * 0.1;

    // napas & goyang halus
    const breathe = 1 + Math.sin(t * 1.8) * 0.012 * k;
    body.scale.set(0.75 * breathe, 0.85 * breathe, 0.6);
    robot.rotation.y = Math.sin(t * 0.6) * 0.07 * k + hx * 0.15;

    // kedip
    const blink = (t % 3.6) < 0.14 ? 0.12 : 1;
    eyes.scale.y = damp(eyes.scale.y, blink, 40, dt);

    // lampu
    const p = 0.8 + Math.sin(t * 3) * 0.4;
    chest.material.emissiveIntensity = p;
    tip.material.emissiveIntensity = 0.6 + Math.sin(t * 5) * 0.6 + w;
    ring2.material.emissiveIntensity = 0.5 + Math.sin(t * 2.4) * 0.5;
    glow.intensity = 1.2 + w * 0.8 + Math.sin(t * 2.4) * 0.2;

    renderer.render(scene, camera);
  }
  tick();
})();
