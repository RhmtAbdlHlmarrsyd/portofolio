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
    description: 'Aplikasi web untuk mengelola data bengkel sepeda motor, mulai dari pelanggan, motor, mekanik, servis, hingga sparepart. Project ini menjadi salah satu project utama karena sesuai dengan ketertarikan saya pada dunia otomotif.',
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
    description: 'Website profil cafe sederhana yang menampilkan halaman utama, katalog produk, promo, dan keranjang belanja. Dibuat sebagai latihan membuat website multi-halaman yang responsif dan modern.',
    image: 'assets/projects/project-5.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5'],
    features: ['Halaman Utama (Home)', 'Katalog Produk', 'Halaman Promo', 'Keranjang Belanja', 'Desain Responsif', 'Multi-halaman'],
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
  {
    title: 'Sertifikat Program Paham AI',
    issuer: 'Polres Mojokerto',
    year: '2026',
    description: 'Sertifikat Program Paham AI dari Polres Mojokerto yang membahas tentang literasi Kecerdasan Buatan.',
    image: 'assets/certificates/certificate-1.png',
    link: 'assets/certificates/certificate-1.png'
  },
  {
    title: 'Certificate of AI Class ASEAN',
    issuer: 'ASEAN FOUNDATION',
    year: '2026',
    description: 'Certificate of AI Class ASEAN dari ASEAN FOUNDATION.',
    image: 'assets/certificates/certificate-2.png',
    link: 'assets/certificates/certificate-2.png'
  },
  {
    title: 'Sertifikat Kompetensi Unit Uji Kompetensi',
    issuer: 'SMKN 2 MOJOKERTO',
    year: '2026',
    description: 'Sertifikat Kompetensi Unit Uji Kompetensi dari SMKN 2 MOJOKERTO.',
    image: 'assets/certificates/certificate-3.png',
    link: 'assets/certificates/certificate-3.png'
  },
  {
    title: 'Sertifikat Kelulusan Game Edukasi Construct',
    issuer: 'Educa Studio',
    year: '2026',
    description: 'Sertifikat Kelulusan Game Edukasi Construct dari Educa Studio.',
    image: 'assets/certificates/certificate-4.png',
    link: 'assets/certificates/certificate-4.png'
  },
  {
    title: 'Sertifikat Kelulusan Tutorial Dasar Menggunakan Github',
    issuer: 'PT Humma Teknologi Indonesia',
    year: '2026',
    description: 'Sertifikat Kelulusan Tutorial Dasar Menggunakan Github dari PT Humma Teknologi Indonesia.',
    image: 'assets/certificates/certificate-5.png',
    link: 'assets/certificates/certificate-5.png'
  },
  {
    title: 'Sertifikat Kelulusan Pemrograman Web Menggunakan Laravel',
    issuer: 'PT Humma Teknologi Indonesia',
    year: '2026',
    description: 'Sertifikat Kelulusan Pemrograman Web Menggunakan Laravel dari PT Humma Teknologi Indonesia.',
    image: 'assets/certificates/certificate-6.png',
    link: 'assets/certificates/certificate-6.png'
  },
  {
    title: 'Sertifikat Kelulusan Pemrograman Web dengan PHP Native',
    issuer: 'PT Humma Teknologi Indonesia',
    year: '2026',
    description: 'Sertifikat Kelulusan Pemrograman Web dengan PHP Native dari PT Humma Teknologi Indonesia.',
    image: 'assets/certificates/certificate-7.png',
    link: 'assets/certificates/certificate-7.png'
  },
  {
  title: 'Sertifikat Kelulusan Pemrograman Web Front End dengan Bootstrap 5',
    issuer: 'PT Humma Teknologi Indonesia',
    year: '2026',
    description: 'Sertifikat Kelulusan Pemrograman Web Front End dengan Bootstrap 5 dari PT Humma Teknologi Indonesia.',
    image: 'assets/certificates/certificate-8.png',
    link: 'assets/certificates/certificate-8.png'
  }
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
          <img src="${p.image}" alt="${p.title}" class="project-image" onerror="this.src='https://via.placeholder.com/600x375/1e40af/ffffff?text=${encodeURIComponent(p.title)}'">
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
        <img src="${g.image}" alt="${g.title}" onerror="this.src='https://via.placeholder.com/600x375/1e40af/ffffff?text=${encodeURIComponent(g.title)}'">
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

  container.innerHTML = certificates.map(c => `
    <div class="col-md-6 col-lg-4">
      <div class="cert-card">
        <img src="${c.image}" alt="${c.title}" class="cert-image" onerror="this.src='https://via.placeholder.com/400x300/1e40af/ffffff?text=Sertifikat'">
        <div class="cert-body">
          <h4 class="cert-title">${c.title}</h4>
          <p class="cert-issuer"><i class="bi bi-building me-1"></i>${c.issuer}</p>
          <p class="cert-year"><i class="bi bi-calendar3 me-1"></i>${c.year}</p>
          <p class="cert-desc">${c.description}</p>
          <a href="${c.link}" target="_blank" rel="noopener" class="btn-project">
            <i class="bi bi-eye"></i> Lihat Sertifikat
          </a>
        </div>
      </div>
    </div>
  `).join('');
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
    <img src="${p.image}" alt="${p.title}" class="img-fluid rounded mb-3" onerror="this.src='https://via.placeholder.com/800x400/1e40af/ffffff?text=${encodeURIComponent(p.title)}'">
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
      <a href="${p.github}" target="_blank" rel="noopener" class="btn-project">
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
   GREETING OTOMATIS
   ========================================================= */
function initGreeting() {
  const greetingEl = document.getElementById('greetingText');
  if (!greetingEl) return;

  const hour = new Date().getHours();
  let greeting = 'Halo';

  if (hour >= 4 && hour < 11) greeting = 'Selamat Pagi';
  else if (hour >= 11 && hour < 15) greeting = 'Selamat Siang';
  else if (hour >= 15 && hour < 18) greeting = 'Selamat Sore';
  else greeting = 'Selamat Malam';

  greetingEl.textContent = greeting;
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
          counter.textContent = target + (target === 100 ? '' : '+');
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
  initGreeting();
  initCounter();
  initScrollProgress();
  initWelcomeToast();
});
