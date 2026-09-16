/**
 * MAIN INTERACTION & LOGIC - Nicolas Guedes Portfolio
 * Dark Mode Real: Minimalist, Pure Black & Graphite, Zero Blue
 */

import { personalData, aboutData, skillsCategories, projectsData } from './data.js';

/* --------------------------------------------------------------------------
   RELIABLE INLINE SVGS (MONOCHROME / ZERO BLUE)
   -------------------------------------------------------------------------- */
const ICONS = {
  github: `<svg class="svg-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
  linkedin: `<svg class="svg-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
  mail: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  whatsapp: `<svg class="svg-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`,
  external: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  eye: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  copy: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
  check: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
  image: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
  close: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
};

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileDrawer();
  renderSkills();
  initProjectsFilter();
  initProjectModal();
  initContactInteractions();
});

/* --------------------------------------------------------------------------
   NAVBAR & SCROLLSPY
   -------------------------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (navbar) {
      if (scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   MOBILE DRAWER
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const openBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const drawer = document.getElementById('mobile-drawer');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');

  if (!drawer) return;

  function openDrawer() {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* --------------------------------------------------------------------------
   SKILLS RENDERING (NO TAILWIND, NO POSTGRESQL, GENERIC PYTHON)
   -------------------------------------------------------------------------- */
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = skillsCategories.map(cat => `
    <div class="skill-category-card">
      <h3 class="skill-cat-title">${cat.title}</h3>
      <p class="skill-cat-desc">${cat.description}</p>
      <div class="skill-pill-list">
        ${cat.skills.map(s => `
          <div class="skill-pill-item">
            <span class="skill-pill-name">${s.name}</span>
            <span class="skill-pill-badge">${s.badge}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   PROJECTS FILTER & RENDERING (LOCAL PATH READY)
   -------------------------------------------------------------------------- */
function initProjectsFilter() {
  const grid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!grid) return;

  function render(category = 'all') {
    const filtered = category === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === category);

    grid.innerHTML = filtered.map(project => `
      <article class="project-card" data-id="${project.id}">
        <!-- Espaço configurável para imagem local: ${project.image} -->
        <div class="project-image-wrapper">
          <img 
            src="${project.image}" 
            alt="${project.name}" 
            class="project-img" 
            loading="lazy"
            onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" 
          />
          <div class="project-image-fallback" style="display: none;">
            <div class="project-fallback-icon">${ICONS.image}</div>
            <div class="project-fallback-path">${project.image}</div>
          </div>
        </div>

        <div class="project-body">
          <div class="project-badge-row">
            <span class="project-category-badge">${project.categoryLabel}</span>
            ${project.hasDeploy ? `
              <span class="project-live-tag">
                <span class="status-indicator-dot"></span> Live Demo
              </span>
            ` : ''}
          </div>

          <h3 class="project-name">${project.name}</h3>
          <p class="project-short-desc">${project.shortDescription}</p>

          <div class="project-tech-badges">
            ${project.technologies.slice(0, 4).map(t => `<span class="tech-pill">${t}</span>`).join('')}
            ${project.technologies.length > 4 ? `<span class="tech-pill">+${project.technologies.length - 4}</span>` : ''}
          </div>

          <div class="project-actions">
            <button class="btn btn-secondary btn-sm btn-details" data-id="${project.id}">
              ${ICONS.eye} Detalhes
            </button>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="Ver no GitHub">
              ${ICONS.github} Código
            </a>
            ${project.deployUrl ? `
              <a href="${project.deployUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" title="Acessar aplicação online">
                ${ICONS.external} Demo
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `).join('');

    attachDetailsListeners();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
    });
  });

  render('all');
}

/* --------------------------------------------------------------------------
   PROJECT DETAIL MODAL
   -------------------------------------------------------------------------- */
function initProjectModal() {
  const backdrop = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!backdrop) return;

  function closeModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.innerHTML = ICONS.close;
    closeBtn.addEventListener('click', closeModal);
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

function attachDetailsListeners() {
  const detailButtons = document.querySelectorAll('.btn-details');
  const backdrop = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-dynamic-content');

  detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.dataset.id;
      const project = projectsData.find(p => p.id === projectId);
      if (!project || !backdrop || !modalContent) return;

      modalContent.innerHTML = `
        <div class="project-image-wrapper mb-3" style="border-radius: var(--radius-md); max-height: 240px;">
          <img 
            src="${project.image}" 
            alt="${project.name}" 
            class="project-img" 
            onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" 
          />
          <div class="project-image-fallback" style="display: none;">
            <div class="project-fallback-icon">${ICONS.image}</div>
            <div class="project-fallback-path">${project.image}</div>
          </div>
        </div>

        <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem; align-items: center;">
          <span class="badge-tag">${project.categoryLabel}</span>
          ${project.hasDeploy ? '<span class="project-live-tag"><span class="status-indicator-dot"></span> Deploy Ativo</span>' : ''}
        </div>

        <h2 class="modal-title">${project.name}</h2>
        <p class="modal-subtitle">${project.title}</p>

        <div class="modal-block">
          <h4 class="modal-block-title">Problema Resolvido</h4>
          <p>${project.problem}</p>
        </div>

        <div class="modal-block">
          <h4 class="modal-block-title">Solução Técnica & Arquitetura</h4>
          <p>${project.solution}</p>
        </div>

        <div class="modal-block">
          <h4 class="modal-block-title">Destaques da Implementação</h4>
          <ul class="modal-highlights-list">
            ${project.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>

        <div class="modal-block">
          <h4 class="modal-block-title">Tecnologias Utilizadas</h4>
          <div class="project-tech-badges">
            ${project.technologies.map(t => `<span class="tech-pill">${t}</span>`).join('')}
          </div>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 0.65rem; margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            ${ICONS.github} Repositório no GitHub
          </a>
          ${project.deployUrl ? `
            <a href="${project.deployUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              ${ICONS.external} Acessar Aplicação Online
            </a>
          ` : ''}
        </div>
      `;

      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });
}

/* --------------------------------------------------------------------------
   CONTACT INTERACTIONS & TOAST
   -------------------------------------------------------------------------- */
export function showToast(message = 'Ação realizada com sucesso!') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">${ICONS.check}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 200);
  }, 3000);
}

function initContactInteractions() {
  const copyBtn = document.getElementById('btn-copy-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(personalData.email);
        showToast('E-mail copiado para a área de transferência!');
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = personalData.email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        showToast('E-mail copiado para a área de transferência!');
      }
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name')?.value || '';
      const email = document.getElementById('form-email')?.value || '';
      const subject = document.getElementById('form-subject')?.value || 'Contato via Portfólio';
      const message = document.getElementById('form-message')?.value || '';

      if (!name || !email || !message) {
        showToast('Preencha os campos obrigatórios.');
        return;
      }

      const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent('Nome: ' + name + '\nE-mail: ' + email + '\n\n' + message)}`;
      
      window.location.href = mailtoUrl;
      showToast('Abrindo seu cliente de e-mail...');
      contactForm.reset();
    });
  }
}
