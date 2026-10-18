/* =========================================================
   DATA
   ========================================================= */
let webSkills = [];
let motorSkills = [];
let projects = [];
let certificates = [];

function getDefaultWebSkills() {
  return [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 'Project Experience', desc: 'Membuat struktur halaman web.' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 'Project Experience', desc: 'Mendesain tampilan website.' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 'Familiar', desc: 'Membuat interaksi dasar pada website.' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 'Learning', desc: 'JavaScript dengan tipe data statis.' },
    { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 'Project Experience', desc: 'Membuat aplikasi web dinamis.' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 'Project Experience', desc: 'Mengelola database relasional.' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', level: 'Project Experience', desc: 'Membuat tampilan responsif.' },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', level: 'Learning', desc: 'Framework CSS utility-first.' },
    { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', level: 'Project Experience', desc: 'Framework PHP untuk web app.' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 'Learning', desc: 'Library JavaScript untuk UI.' },
    { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', level: 'Learning', desc: 'Bahasa pemrograman modern untuk Android & backend.' },
    { name: 'Ruby', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg', level: 'Learning', desc: 'Bahasa pemrograman dinamis.' },
    { name: 'CRUD', icon: 'bi-arrow-repeat', level: 'Project Experience', desc: 'Create, Read, Update, Delete.' },
    { name: 'Database', icon: 'bi-diagram-3', level: 'Familiar', desc: 'Relasi antar tabel database.' },
    { name: 'Git/GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 'Learning', desc: 'Version control & kolaborasi.' }
  ];
}

function getDefaultMotorSkills() {
  return [
    { name: 'Mengganti Lampu Depan', icon: 'bi-lightbulb' },
    { name: 'Mengganti Lampu Belakang', icon: 'bi-lightbulb-fill' },
    { name: 'Mengganti Lampu Senja Depan', icon: 'bi-lightbulb-off' },
    { name: 'Setting Rantai Sepeda Motor', icon: 'bi-link-45deg' },
    { name: 'Mengganti Kiprok', icon: 'bi-lightning-charge' },
    { name: 'Mengganti Kampas Rem', icon: 'bi-circle' },
    { name: 'Mengganti Ban Depan', icon: 'bi-circle-fill' },
    { name: 'Mengganti Oli', icon: 'bi-droplet-fill' },
    { name: 'Mengatasi Ban Seret', icon: 'bi-arrow-repeat' },
    { name: 'Membersihkan Karburator', icon: 'bi-wind' },
    { name: 'Dasar Perawatan Motor', icon: 'bi-tools' },
    { name: 'Pemeriksaan Kelistrikan', icon: 'bi-plug' }
  ];
}

function getDefaultProjects() {
  return [
    { title: 'Sistem Manajemen Bengkel Sepeda Motor', description: 'Aplikasi web untuk mengelola data bengkel sepeda motor.', image: 'assets/projects/project-1.jpg', tech: ['PHP', 'MySQL', 'Bootstrap', 'CRUD'], github: 'https://github.com/RhmtAbdlHlmarrsyd/website-manajemen-bengkel-sepeda-motor', featured: true },
    { title: 'KampungFarm — Manajemen Peternakan Ayam', description: 'Platform manajemen peternakan ayam.', image: 'assets/projects/project-2.jpg', tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'], github: 'https://github.com/RhmtAbdlHlmarrsyd/kampungfarm', featured: false },
    { title: 'RumahKu Finance — Pengeluaran Rumah Tangga', description: 'Aplikasi keuangan rumah tangga.', image: 'assets/projects/project-3.jpg', tech: ['Laravel', 'PHP', 'MySQL'], github: 'https://github.com/RhmtAbdlHlmarrsyd/rumahku-finance', featured: false },
    { title: 'Data Obat — Sistem Informasi Obat', description: 'Aplikasi CRUD data obat.', image: 'assets/projects/project-4.jpg', tech: ['PHP', 'MySQL', 'Bootstrap', 'CRUD'], github: 'https://github.com/RhmtAbdlHlmarrsyd/data-obat', featured: false },
    { title: 'Data Siswa — Sistem Informasi Siswa', description: 'Aplikasi CRUD data siswa.', image: 'assets/projects/project-6.jpg', tech: ['PHP', 'MySQL', 'Bootstrap', 'CRUD'], github: 'https://github.com/RhmtAbdlHlmarrsyd/data-siswa', featured: false },
    { title: 'CafeAbdul — Website Cafe', description: 'Website profil cafe.', image: 'assets/projects/project-5.jpg', tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5'], github: 'https://github.com/RhmtAbdlHlmarrsyd/CafeAbdul', featured: false }
  ];
}

function getDefaultCertificates() {
  return [
    { title: 'Program Paham AI', issuer: 'Senopati Academy · Polri · Kemendikdasmen', year: '2026', image: 'assets/certificates/certificate-1.png' },
    { title: 'Certificate of AI Class ASEAN', issuer: 'ASEAN Foundation · Google.org', year: '2026', image: 'assets/certificates/certificate-2.png' },
    { title: 'Sertifikat Kompetensi Unit Uji Kompetensi', issuer: 'SMK Negeri 2 Mojokerto', year: '2026', image: 'assets/certificates/certificate-3.png' },
    { title: 'Game Edukasi Construct', issuer: 'Gamelab Indonesia · Educa Studio', year: '2026', image: 'assets/certificates/certificate-4.png' },
    { title: 'Tutorial Dasar Menggunakan Github', issuer: 'Getskill.id', year: '2026', image: 'assets/certificates/certificate-5.png' },
    { title: 'Pemrograman Web Menggunakan Framework Laravel', issuer: 'Getskill.id', year: '2026', image: 'assets/certificates/certificate-6.png' },
    { title: 'Pemrograman Web dengan PHP Native', issuer: 'Getskill.id', year: '2026', image: 'assets/certificates/certificate-7.png' },
    { title: 'Pemrograman Front End Web dengan Bootstrap', issuer: 'Getskill.id', year: '2026', image: 'assets/certificates/certificate-8.png' },
    { title: 'Pengenalan IT dan Fundamental Programming', issuer: 'Getskill.id', year: '2026', image: 'assets/certificates/certificate-9.png' },
    { title: 'Mastering Public Speaking', issuer: 'Getskill.id', year: '2026', image: 'assets/certificates/certificate-10.png' },
    { title: 'Belajar Coding Menggunakan Scratch', issuer: 'Getskill.id', year: '2026', image: 'assets/certificates/certificate-11.png' },
    { title: 'Java Fundamental Programming', issuer: 'Getskill.id', year: '2026', image: 'assets/certificates/certificate-12.png' }
  ];
}

async function loadData() {
  try {
    const res = await fetch('data.json?v=' + Date.now());
    if (!res.ok) throw new Error('data.json tidak ditemukan');
    const data = await res.json();

    webSkills = data.skills?.web || getDefaultWebSkills();
    motorSkills = data.skills?.motor || getDefaultMotorSkills();
    projects = data.projects || getDefaultProjects();
    certificates = data.certificates || getDefaultCertificates();

    updateCounters();
  } catch (err) {
    console.warn('Gagal load data.json, pakai default:', err);
    webSkills = getDefaultWebSkills();
    motorSkills = getDefaultMotorSkills();
    projects = getDefaultProjects();
    certificates = getDefaultCertificates();
    updateCounters();
  }
}

function updateCounters() {
  const techCounter = document.querySelector('.counter[data-target="15"]');
  if (techCounter) techCounter.dataset.target = webSkills.length;

  const projCounter = document.querySelector('.counter[data-target="6"]');
  if (projCounter) projCounter.dataset.target = projects.length;

  const motorCounter = document.querySelector('.counter[data-target="12"]');
  if (motorCounter) motorCounter.dataset.target = motorSkills.length;
}

function renderSkills() {
  const webContainer = document.getElementById('webSkills');
  const motorContainer = document.getElementById('motorSkills');

  const badgeClass = {
    'Learning': 'badge-learning',
    'Familiar': 'badge-familiar',
    'Project Experience': 'badge-project'
  };

  if (webContainer) {
    webContainer.innerHTML = webSkills.map(skill => {
      const logoHtml = skill.logo
        ? `<img src="${skill.logo}" alt="${skill.name}" class="skill-logo" onerror="this.outerHTML='<div class=\\'skill-logo-fallback\\'><i class=\\'bi bi-code-slash\\'></i></div>'">`
        : `<div class="skill-logo-fallback"><i class="bi ${skill.icon || 'bi-code-slash'}"></i></div>`;

      return `
        <div class="col-md-6 col-lg-4 stagger-item">
          <div class="skill-card">
            ${logoHtml}
            <div class="skill-content">
              <div class="skill-card-header">
                <h5>${skill.name}</h5>
                <span class="skill-badge ${badgeClass[skill.level] || 'badge-familiar'}">${skill.level || 'Familiar'}</span>
              </div>
              <p class="skill-desc">${skill.desc || ''}</p>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  if (motorContainer) {
    motorContainer.innerHTML = motorSkills.map(skill => `
      <div class="col-md-6 col-lg-3 stagger-item">
        <div class="skill-card">
          <div class="skill-logo-fallback"><i class="bi ${skill.icon || 'bi-tools'}"></i></div>
          <div class="skill-content">
            <div class="skill-card-header">
              <h5>${skill.name}</h5>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function renderProjects() {
  const track = document.getElementById('projectsTrack');
  if (!track) return;

  if (projects.length === 0) {
    track.innerHTML = '<div class="text-center p-4"><p>Belum ada project.</p></div>';
    return;
  }

  track.innerHTML = projects.map(p => `
    <div class="project-card">
      <div class="project-image-wrapper">
        ${p.featured ? '<span class="project-featured-badge"><i class="bi bi-star-fill me-1"></i>Utama</span>' : ''}
        <img src="${p.image}" alt="${p.title}" class="project-image" onerror="this.src='https://via.placeholder.com/800x450/FFD93D/000000?text=${encodeURIComponent(p.title)}'">
      </div>
      <div class="project-body">
        <h4 class="project-title">${p.title}</h4>
        <p class="project-desc">${p.description}</p>
        <div class="project-tech">
          ${(p.tech || []).map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <div class="project-actions">
          <a href="${p.github || '#'}" target="_blank" class="btn-project">
            <i class="bi bi-github"></i> Lihat GitHub
          </a>
        </div>
      </div>
    </div>
  `).join('');

  renderDots('projectDots', projects.length, 'projectsTrack');
}

function renderCertificates() {
  const track = document.getElementById('certificatesTrack');
  if (!track) return;

  if (certificates.length === 0) {
    track.innerHTML = '<div class="text-center p-4"><p>Belum ada sertifikat.</p></div>';
    return;
  }

  track.innerHTML = certificates.map((c, i) => `
    <div class="cert-card" onclick="openCertificateModal(${i})">
      <div class="cert-image-wrapper">
        <img src="${c.image}" alt="${c.title}" class="cert-image" onerror="this.src='https://via.placeholder.com/600x450/FFD93D/000000?text=Sertifikat'">
      </div>
      <div class="cert-body">
        <h4 class="cert-title">${c.title}</h4>
        <p class="cert-issuer"><i class="bi bi-building me-1"></i>${c.issuer}</p>
        <p class="cert-year"><i class="bi bi-calendar3 me-1"></i>${c.year}</p>
      </div>
    </div>
  `).join('');

  renderDots('certDots', certificates.length, 'certificatesTrack');
}

function renderDots(containerId, count, trackId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = Array.from({ length: count }).map((_, i) => `
    <div class="carousel-dot ${i === 0 ? 'active' : ''}" 
         data-index="${i}" 
         onclick="goToSlide('${trackId}', ${i})"></div>
  `).join('');
}

function goToSlide(trackId, index) {
  const track = document.getElementById(trackId);
  if (!track) return;

  const card = track.children[index];
  if (!card) return;

  track.scrollTo({
    left: card.offsetLeft - track.offsetLeft,
    behavior: 'smooth'
  });
}

function updateDotsOnScroll(trackId, dotsId) {
  const track = document.getElementById(trackId);
  const dotsContainer = document.getElementById(dotsId);
  if (!track || !dotsContainer) return;

  track.addEventListener('scroll', () => {
    const children = Array.from(track.children);
    const trackCenter = track.scrollLeft + track.clientWidth / 2;

    let activeIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, i) => {
      const childCenter = child.offsetLeft - track.offsetLeft + child.clientWidth / 2;
      const distance = Math.abs(childCenter - trackCenter);
      if (distance < minDistance) {
        minDistance = distance;
        activeIndex = i;
      }
    });

    dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === activeIndex);
    });
  });
}

function openCertificateModal(index) {
  if (!certificates.length) return;
  const c = certificates[index];
  document.getElementById('certificateModalImage').src = c.image;
  document.getElementById('certificateModalTitle').textContent = c.title;
  document.getElementById('certificateModalIssuer').textContent = c.issuer;
  document.getElementById('certificateModalYear').textContent = c.year;
  
  if (typeof bootstrap !== 'undefined') {
    const modal = new bootstrap.Modal(document.getElementById('certificateModal'));
    modal.show();
  }
}

function initCarousel(trackId, prevId, nextId) {
  const track = document.getElementById(trackId);
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);

  if (!track || !prevBtn || !nextBtn) return;

  function getActiveIndex() {
    const children = Array.from(track.children);
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let activeIndex = 0;
    let minDistance = Infinity;
    children.forEach((child, i) => {
      const childCenter = child.offsetLeft - track.offsetLeft + child.clientWidth / 2;
      const distance = Math.abs(childCenter - trackCenter);
      if (distance < minDistance) {
        minDistance = distance;
        activeIndex = i;
      }
    });
    return activeIndex;
  }

  prevBtn.addEventListener('click', () => {
    const idx = Math.max(0, getActiveIndex() - 1);
    goToSlide(trackId, idx);
  });

  nextBtn.addEventListener('click', () => {
    const children = track.children;
    const idx = Math.min(children.length - 1, getActiveIndex() + 1);
    goToSlide(trackId, idx);
  });
}

function initSwipe(trackId) {
  const track = document.getElementById(trackId);
  if (!track) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.style.cursor = 'grabbing';
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.style.cursor = 'grab';
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
    track.style.cursor = 'grab';
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
  });

  track.addEventListener('touchstart', () => {
    track.style.scrollSnapType = 'none';
  });

  track.addEventListener('touchend', () => {
    track.style.scrollSnapType = 'x mandatory';
    setTimeout(() => {
      const children = Array.from(track.children);
      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      let activeIndex = 0;
      let minDistance = Infinity;
      children.forEach((child, i) => {
        const childCenter = child.offsetLeft - track.offsetLeft + child.clientWidth / 2;
        const distance = Math.abs(childCenter - trackCenter);
        if (distance < minDistance) {
          minDistance = distance;
          activeIndex = i;
        }
      });
      goToSlide(trackId, activeIndex);
    }, 50);
  });
}

function initTypingEffect() {
  const roleEl = document.getElementById('roleTyping');
  if (!roleEl) return;

  const roles = ['Web Development Enthusiast', 'Motorcycle Technician', 'Frontend Learner', 'Laravel Explorer', 'SMK Student'];

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

function initCounter() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      if (isNaN(target)) return;

      let current = 0;
      const step = target / (1500 / 16);

      const updateCounter = () => {
        current += step;
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

function initNavbar() {
  const backToTop = document.getElementById('backToTop');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (backToTop) {
      if (scrollY > 400) backToTop.classList.add('show');
      else backToTop.classList.remove('show');
    }

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

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const collapse = document.getElementById('navMenu');
      if (collapse && collapse.classList.contains('show') && typeof bootstrap !== 'undefined') {
        new bootstrap.Collapse(collapse).hide();
      }
    });
  });
}

function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const staggerContainers = document.querySelectorAll('.stagger-container');

  const observerOptions = {
    threshold: 0.05, 
    rootMargin: '0px 0px -20px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        const items = entry.target.querySelectorAll('.stagger-item');
        items.forEach((item, index) => {
          item.style.transitionDelay = `${index * 0.1}s`;
        });
      } else {
        entry.target.classList.remove('active');
        const items = entry.target.querySelectorAll('.stagger-item');
        items.forEach(item => {
          item.style.transitionDelay = '0s';
        });
      }
    });
  }, observerOptions);

  staggerContainers.forEach(container => staggerObserver.observe(container));
}

/* =========================================================
   INIT SEMUA
   ========================================================= */
document.addEventListener('DOMContentLoaded', async () => {
  // 1. Load Data
  await loadData();

  // 2. Render Konten
  renderSkills();
  renderProjects();
  renderCertificates();
  initTypingEffect();
  initCounter();
  initScrollProgress();
  initNavbar();

  // 3. Inisialisasi Carousel
  initCarousel('projectsTrack', 'projectPrev', 'projectNext');
  initCarousel('certificatesTrack', 'certPrev', 'certNext');

  initSwipe('projectsTrack');
  initSwipe('certificatesTrack');

  updateDotsOnScroll('projectsTrack', 'projectDots');
  updateDotsOnScroll('certificatesTrack', 'certDots');
  
  // 4. Efek Scroll Animasi
  initScrollAnimations();

  console.log('[Portfolio] Website siap dengan animasi elegan!');
});
