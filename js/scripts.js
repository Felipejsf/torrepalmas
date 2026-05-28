// Torre Palmas — Global Scripts

// LOAD SHARED HEADER
function loadHeader() {
  const navEl = document.getElementById('nav');
  if (!navEl) return;
  initHeaderFunctions();
}

function initHeaderFunctions() {
  const navEl = document.getElementById('nav');
  if (!navEl) return;

  const dropLi = document.getElementById('dropLi');
  if (dropLi) {
    document.addEventListener('click', e => {
      if (!dropLi.contains(e.target)) dropLi.classList.remove('open');
    });
  }
}

// CURSOR
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
});

(function anim() {
  rx += (mx - rx) * 0.11;
  ry += (my - ry) * 0.11;
  ring.style.transform = `translate(${rx - 15}px, ${ry - 15}px)`;
  requestAnimationFrame(anim);
})();

// NAV
const navEl = document.getElementById('nav');
const lightPages = ['nosotros', 'ubicacion', 'torre', 'business', 'coworking', 'disponibilidad', 'contacto'];

function updateNav(pageName) {
  if (lightPages.includes(pageName)) {
    navEl.classList.add('light');
    navEl.classList.remove('scrolled');
  } else {
    navEl.classList.remove('light');
  }
}

window.addEventListener('scroll', () => {
  const currentPage = document.querySelector('.page.active')?.id.replace('page-', '');
  if (lightPages.includes(currentPage)) {
    navEl.classList.add('light');
  } else {
    navEl.classList.toggle('scrolled', window.scrollY > 40);
    if (window.scrollY > 40) navEl.classList.remove('light');
  }
});

// DROPDOWN
const dropLi = document.getElementById('dropLi');

function toggleDrop() {
  dropLi.classList.toggle('open');
}

document.addEventListener('click', e => {
  if (!dropLi.contains(e.target)) dropLi.classList.remove('open');
});

// PAGES
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const t = document.getElementById('page-' + name);
  if (t) {
    t.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.querySelectorAll('.nav-link').forEach(a => a.classList.toggle('active', a.dataset.page === name));
  const servPages = ['torre', 'business', 'coworking'];
  document.getElementById('dropBtn').classList.toggle('active', servPages.includes(name));
  dropLi.classList.remove('open');
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('mobileServiceMenu').classList.remove('open');
  updateNav(name);
}

// MOBILE NAV
function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}

function toggleMobileServiceMenu() {
  document.getElementById('mobileServiceMenu').classList.toggle('open');
  const caret = document.getElementById('serviceCaretMobile');
  caret.textContent = document.getElementById('mobileServiceMenu').classList.contains('open') ? '▲' : '▼';
}

// FILTERS
function filterResults() {
  const fmt = document.getElementById('filterFormato').value;
  const disp = document.getElementById('filterDisp').value;
  let count = 0;
  document.querySelectorAll('.result-card').forEach(c => {
    const show = (!fmt || c.dataset.format === fmt) && (!disp || c.dataset.disp === disp);
    c.style.display = show ? '' : 'none';
    if (show) count++;
  });
  document.getElementById('resultsTitle').textContent = count + (count === 1 ? ' espacio encontrado' : ' espacios encontrados');
}

function resetFilters() {
  document.getElementById('filterFormato').value = '';
  document.getElementById('filterDisp').value = '';
  filterResults();
}

// FLOOR VISUALIZATION
const floorPlans = {
  3: {
    viewBox: '0 0 687.27 678.02',
    image: 'images/Piso3_PlanoRecurso 9.png',
    rooms: [
      { id: '301', name: 'Oficina 301', area: '85 m²', status: 'occupied', points: '473.06 .21 473.06 208.45 687.06 208.45 687.06 .21 473.06 .21' },
      { id: '302', name: 'Oficina 302', area: '103.41 m²', status: 'occupied', points: '321.88 1.39 321.88 147.39 .93 148.1 .21 1.39 321.88 1.39' },
      { id: '303', name: 'Oficina 303', area: '71.5 m²', status: 'occupied', points: '321.88 147.76 321.88 278.92 .93 278.73 .21 147.76 321.88 147.76' },
      { id: '304', name: 'Oficina 304', area: '67 m²', status: 'occupied', points: '321.88 278.89 321.88 399.96 .93 400.28 .21 278.89 321.88 278.89' },
      { id: '305', name: 'Oficina 305', area: '72.5 m²', status: 'occupied', points: '321.88 400.43 321.88 531.55 .93 531.9 .21 400.43 321.88 400.43' },
      { id: '306', name: 'Oficina 306', area: '108.37 m²', status: 'occupied', points: '.93 531.9 .27 677.82 421.66 677.82 421.46 498.94 371.93 499.6 321.91 499.6 321.91 531.55 .93 531.9' }
    ]
  },
  4: {
    viewBox: '0 0 711.96 701.77',
    image: 'images/Piso4_PlanoRecurso 11.png',
    rooms: [
      { id: '401', name: 'Oficina 401', area: '97 m²', status: 'occupied', x: '488.96', y: '.21', width: '222.78', height: '221.87', type: 'rect' },
      { id: '402', name: 'Oficina 402', area: '112.22 m²', status: 'occupied', points: '333.43 2.9 333.43 159.64 1.37 160.4 .62 2.9 333.43 2.9', type: 'polygon' },
      { id: '403', name: 'Oficina 403', area: '73.6 m²', status: 'occupied', points: '333.38 156.77 333.38 287.78 1.32 288.42 .57 156.77 333.38 156.77', type: 'polygon' },
      { id: '404', name: 'Oficina 404', area: '67 m²', status: 'occupied', points: '333.38 288.44 333.38 414.45 1.32 415.07 .57 288.44 333.38 288.44', type: 'polygon' },
      { id: '405', name: 'Oficina 405', area: '72 m²', status: 'occupied', points: '333.38 414.37 333.38 544.66 1.32 545.29 .57 414.37 333.38 414.37', type: 'polygon' },
      { id: '406', name: 'Oficina 406', area: '106 m²', status: 'occupied', points: '.88 544.33 .2 701.57 435.45 701.57 435.25 515.36 384.09 516.04 334.14 516.04 334.14 543.96 .88 544.33', type: 'polygon' },
      { id: '407', name: 'Oficina 407', area: '107 m²', status: 'occupied', x: '488.96', y: '449.28', width: '222.78', height: '251.59', type: 'rect' }
    ]
  }
};

function updateFloorView(floorNumber) {
  document.querySelectorAll('.floor-btn').forEach(btn => {
    const isActive = String(btn.dataset.floor) === String(floorNumber);
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });

  const container = document.getElementById('floorSvgContainer');
  if (!container) return;

  // Business Center: planos vectoriales separados (Secciones A, B, C)
  if (floorNumber === 'business') { renderBusinessCenter(container); return; }

  const floor = floorPlans[floorNumber];
  if (!floor) return;

  const statusLabel = s => s === 'occupied' ? 'Ocupada' : s === 'available' ? 'Disponible' : 'Próximamente';
  let svgRooms = floor.rooms.map(room => {
    const statusClass = room.status;
    const a11y = `tabindex="0" role="button" aria-label="${room.name}, ${room.area}, ${statusLabel(room.status)}"`;
    if (room.type === 'rect') {
      return `<rect id="room-${room.id}" class="room-unit ${statusClass}" data-room="${room.id}" data-name="${room.name}" data-area="${room.area}" data-status="${room.status}" ${a11y} x="${room.x}" y="${room.y}" width="${room.width}" height="${room.height}"/>`;
    } else {
      return `<polygon id="room-${room.id}" class="room-unit ${statusClass}" data-room="${room.id}" data-name="${room.name}" data-area="${room.area}" data-status="${room.status}" ${a11y} points="${room.points}"/>`;
    }
  }).join('');

  container.innerHTML = `
    <div class="floor-viewer">
      <svg class="floor-svg" viewBox="${floor.viewBox}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            .room-unit { fill: #e8f4f8; stroke: #333; stroke-width: 1.5; cursor: pointer; transition: filter 0.25s ease, stroke-width 0.25s ease; }
            .room-unit.available { fill: #c8e6c9; }
            .room-unit.soon { fill: #fff9c4; }
            .room-unit.occupied { fill: #ffcccc; }
            .room-unit:hover { filter: brightness(0.88); stroke-width: 2.5; }
          </style>
        </defs>
        <g id="rooms">${svgRooms}</g>
      </svg>
      <img src="${floor.image}" alt="Plano Decorativo" class="floor-decoration">
      <div class="room-tooltip" id="roomTooltip" style="display:none;"></div>
    </div>
  `;

  setupRoomListeners();
}

// Business Center: arma los 3 planos vectoriales (A y B arriba, C abajo a lo ancho)
function renderBusinessCenter(container) {
  const tpl = document.getElementById('bcTemplates');
  if (!tpl) { container.innerHTML = '<p style="padding:24px;color:#7a8574">Plano del Business Center no disponible.</p>'; return; }

  container.innerHTML = '<div class="floor-viewer"><div class="bc-layout"></div><div class="room-tooltip" id="roomTooltip" style="display:none;"></div></div>';
  const layout = container.querySelector('.bc-layout');

  tpl.querySelectorAll('svg').forEach(svg => {
    const clone = svg.cloneNode(true);
    const section = clone.dataset.section || '';
    clone.removeAttribute('hidden');

    clone.querySelectorAll('path').forEach(p => {
      const status = p.getAttribute('data-status') || 'occupied';
      const area = p.getAttribute('data-area') || '';
      const statusText = status === 'occupied' ? 'Ocupada' : status === 'available' ? 'Disponible' : status === 'coworking' ? 'Coworking' : 'Próximamente';
      const officeName = p.getAttribute('data-name') || ((status === 'coworking' ? 'Coworking ' : 'Oficina ') + p.id);
      p.setAttribute('class', 'room-unit ' + status);
      p.setAttribute('data-name', officeName);
      p.setAttribute('data-area', area);
      p.setAttribute('data-status', status);
      p.setAttribute('data-room', section + '-' + p.id);
      p.setAttribute('tabindex', '0');
      p.setAttribute('role', 'button');
      p.setAttribute('aria-label', officeName + (area ? ', ' + area : '') + ', ' + statusText);
    });

    const block = document.createElement('div');
    block.className = 'bc-block' + (section === 'C' ? ' full' : '');
    const label = document.createElement('div');
    label.className = 'bc-block-label';
    label.textContent = 'Sección ' + section;
    block.appendChild(label);
    block.appendChild(clone);
    layout.appendChild(block);
  });

  setupRoomListeners();
}

function setupRoomListeners() {
  const roomPolygons = document.querySelectorAll('.room-unit');
  const tooltip = document.getElementById('roomTooltip');
  const svgContainer = document.querySelector('.floor-viewer');
  if (!tooltip || !svgContainer) return;

  const hideTooltip = () => { tooltip.style.display = 'none'; tooltip.dataset.currentRoom = ''; };

  roomPolygons.forEach(room => {
    // Hover: muestra el cartelito y lo sigue con el cursor
    room.addEventListener('mouseenter', function(e) { showRoomInfo(this, e, tooltip, svgContainer); });
    room.addEventListener('mousemove', function(e) { showRoomInfo(this, e, tooltip, svgContainer); });
    room.addEventListener('mouseleave', hideTooltip);

    // Táctil: tocar también lo muestra
    room.addEventListener('click', function(e) { showRoomInfo(this, e, tooltip, svgContainer); });

    // Accesible por teclado: Enter/Espacio muestran, Escape oculta
    room.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showRoomInfo(this, null, tooltip, svgContainer); }
      else if (e.key === 'Escape') { hideTooltip(); }
    });
    room.addEventListener('focus', function() { showRoomInfo(this, null, tooltip, svgContainer); });
    room.addEventListener('blur', hideTooltip);
  });
}

function showRoomInfo(element, event, tooltip, container) {
  // Solo reconstruye el contenido si cambió de oficina (evita parpadeo al mover el cursor)
  const id = element.dataset.room;
  if (tooltip.dataset.currentRoom !== id) {
    const name = element.dataset.name;
    const area = element.dataset.area;
    const status = element.dataset.status;
    const statusText = status === 'occupied' ? 'Ocupada' : status === 'available' ? 'Disponible' : status === 'coworking' ? 'Coworking' : 'Próximamente';
    const areaLine = area ? `<p><strong>Área:</strong> ${area}</p>` : '';
    tooltip.innerHTML = `<h4>${name}</h4>${areaLine}<p><strong>Estado:</strong> ${statusText}</p>`;
    tooltip.dataset.currentRoom = id;
  }
  tooltip.style.display = 'block';

  // Posición relativa al contenedor (.floor-viewer), válida con uno o varios SVG
  const rect = container.getBoundingClientRect();
  let x, y;
  if (event && typeof event.clientX === 'number') {
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
  } else {
    // Activado por teclado: posicionar en el centro de la oficina
    const b = element.getBoundingClientRect();
    x = b.left + b.width / 2 - rect.left;
    y = b.top + b.height / 2 - rect.top;
  }

  // Mantener el tooltip dentro del contenedor para que no se corte en pantallas chicas
  const maxX = container.clientWidth - tooltip.offsetWidth - 8;
  const maxY = container.clientHeight - tooltip.offsetHeight - 8;
  tooltip.style.left = Math.max(8, Math.min(x + 14, maxX)) + 'px';
  tooltip.style.top = Math.max(8, Math.min(y - 10, maxY)) + 'px';
}

// FORM SUBMISSION
function handleFormSubmit(event) {
  event.preventDefault();
  alert('¡Gracias! Un asesor se pondrá en contacto en 24 horas.');
  event.target.reset();
}

// SCROLL REVEAL — aparición progresiva de secciones y tarjetas
function initScrollReveal() {
  const selector = [
    '.section-label', '.section-title', '.section-body',
    '.product-card', '.why-item', '.amenidad-item', '.result-card',
    '.surround-card', '.valor-item', '.num-item', '.channel-card',
    '.olive-band-item', '.service-item', '.dist-item', '.stat-item',
    '.floor-display', '.contact-form', '.results-cta', '.distances-row',
    '.map-container', '.office-table', '.price-main'
  ].join(',');

  const els = document.querySelectorAll(selector);
  if (!els.length) return;

  // Escalonar los elementos que viven dentro de una misma cuadrícula
  document.querySelectorAll(
    '.products-grid, .amenidades-grid, .results-grid, .why-grid, .numbers-grid, .services-grid, .contact-channels, .olive-band, .stats-bar'
  ).forEach(grid => {
    Array.from(grid.children).forEach((child, i) => {
      child.style.transitionDelay = (i * 0.08) + 's';
    });
  });

  if (!('IntersectionObserver' in window)) return; // si no hay soporte, queda visible

  els.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => io.observe(el));
}

// Se ejecuta de inmediato (el script está al final del <body>, así que los
// elementos ya existen). Ocultarlos antes del primer dibujado evita el parpadeo.
initScrollReveal();

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  updateFloorView(3);
  updateNav('home');
});
