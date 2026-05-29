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
  },
  business: {
    viewBox: '0 0 652.82 464.37',
    image: 'images/Oficinas bussynes center.png',
    rooms: [
      { id: 'A1a', name: 'A1a · Ejecutiva', area: '15 m²', status: 'available', type: 'path', d: 'M53.41,17.35H5.38c-.05,13.81-.09,27.62-.14,41.43,21.35-.01,42.69-.02,64.04-.04.11-2.84.22-5.68.34-8.52h21.49c.01-16.69.02-33.37.03-50.06l-37.74-.07v17.25Z' },
      { id: 'A7b', name: 'A7b · Ejecutiva Plus', area: '17 m²', status: 'occupied', type: 'path', d: 'M93.53,0c28.99.01,57.97.03,86.96.04l.12,50.61c-29.01-.14-58.03-.28-87.04-.41-.01-16.74-.02-33.49-.04-50.23Z' },
      { id: 'A1b', name: 'A1b · Ejecutiva', area: '12 m²', status: 'occupied', type: 'path', d: 'M5.38,60.24c21.31.1,42.62.2,63.93.31-.02,14.5-.04,29.01-.07,43.51-21.32.13-42.64.25-63.96.38.03-14.73.07-29.46.1-44.19Z' },
      { id: 'A2', name: 'A2 · Ejecutiva', area: '13 m²', status: 'occupied', type: 'path', d: 'M5.38,106.3c21.41.06,42.83.11,64.24.17v47.99h-23.98v6.52c-13.43-.08-26.86-.16-40.3-.24.01-18.15.02-36.29.03-54.44Z' },
      { id: 'A3', name: 'A3 · Corporativa Jr.', area: '25 m²', status: 'occupied', type: 'path', d: 'M5.38,163.43l40.81-.17c0,1.49,0,2.99,0,4.48h5.24c0-1.49,0-2.99,0-4.48l18.18.17c.02,34.39.05,68.77.07,103.16-21.44-.14-42.87-.28-64.31-.41v-102.74Z' },
      { id: 'A4', name: 'A4 · Gerencial', area: '37 m²', status: 'available', type: 'path', d: 'M5,268.21c22.46.14,44.92.28,67.38.41v-17.9h39.92c.14,5.83.28,11.66.41,17.49,22.62.14,45.24.28,67.86.41v50.78H5.38c-.13-17.07-.25-34.13-.38-51.2Z' },
      { id: 'A5', name: 'A5 · Ejecutiva Plus', area: '17 m²', status: 'available', type: 'path', d: 'M115.09,199.2h65.48v66.97c-21.95.14-43.91.28-65.86.41.13-22.46.25-44.92.38-67.38Z' },
      { id: 'A7a', name: 'A7a · Ejecutiva', area: '13 m²', status: 'occupied', type: 'path', d: 'M115,52.27h65.81l-.24,51.75h-65.48l-.09-51.75Z' },
      { id: 'A6', name: 'A6 · Ejecutiva', area: '13 m²', status: 'occupied', type: 'path', d: 'M115.09,106.47l65.51.07c-.01,15.97-.02,31.95-.03,47.92h-33.78v6.21h-31.7v-54.2Z' },
      { id: 'B1', name: 'B1 · Ejecutiva Large', area: '19 m²', status: 'available', type: 'path', d: 'M446.51,10.87h104.4c.01,15.81.02,31.62.03,47.44-34.72.01-69.44.02-104.16.04-.09-15.82-.18-31.65-.28-47.47Z' },
      { id: 'B2', name: 'B2 · Ejecutiva', area: '13 m²', status: 'occupied', type: 'path', d: 'M446.64,60.75c21.45.08,42.89.17,64.34.25.17,17.03.35,34.06.52,51.09h-64.86v-51.34Z' },
      { id: 'B3', name: 'B3 · Ejecutiva', area: '13 m²', status: 'occupied', type: 'path', d: 'M446.64,114.54h64.86v51.34c-18.53-.04-37.05-.07-55.58-.11.14-4.05.28-8.09.41-12.14-3.37-.05-6.74-.09-10.11-.14.14-12.98.27-25.97.41-38.95Z' },
      { id: 'B4', name: 'B4 · Ejecutiva Large Plus', area: '22.5 m²', status: 'available', type: 'path', d: 'M446.64,168.33h64.86v90.43h-64.86v-90.43Z' },
      { id: 'B5', name: 'Coworking', area: '', status: 'coworking', type: 'path', d: 'M557.46,218.35h94.94c.13,33.92.25,67.85.38,101.77-31.77-.14-63.55-.28-95.32-.41v-101.36Z' },
      { id: 'B6', name: 'B6 · Gerencial', area: '37 m²', status: 'occupied', type: 'path', d: 'M557.49,114.54c30.91-.01,61.82-.02,92.74-.03.05,33.8.09,67.6.14,101.4h-92.88v-101.36Z' },
      { id: 'B7', name: 'B7 · Gerencial', area: '37 m²', status: 'occupied', type: 'path', d: 'M557.49,10.7c31.78-.13,63.55-.25,95.33-.38l-.41,101.78h-94.91V10.7Z' },
      { id: 'C1a', name: 'C1a · Ejecutiva', area: '16.5 m²', status: 'occupied', type: 'path', d: 'M9.76,369.01h37.91c.14,29.9.28,59.8.42,89.7-15.94-.01-31.88-.02-47.82-.04-.09-26.47-.18-52.95-.28-79.42,3.25-3.42,6.51-6.83,9.76-10.25Z' },
      { id: 'C1b', name: 'C1b · Ejecutiva', area: '14.5 m²', status: 'occupied', type: 'path', d: 'M51.52,390.65c15.1-.02,30.19-.04,45.29-.07.08,23.59.16,47.17.23,70.76h-45.09v-2.66c-.42,0-.85.01-1.27.02l.83-68.05Z' },
      { id: 'C2', name: 'C2 · Corporativa', area: '31 m²', status: 'available', type: 'path', d: 'M149.11,369.01h48.68v92.32c-32.62-.09-65.24-.18-97.86-.26-.1-23.48-.2-46.95-.3-70.43h49.48v-21.63Z' },
      { id: 'C3', name: 'C3 · Corporativa', area: '31 m²', status: 'available', type: 'path', d: 'M201.1,368.98c16.36.01,32.73.02,49.1.03v21.63h49.06v70.69c-15.25,0-30.5-.02-45.75-.03,0-.68,0-1.36,0-2.04h-5.24l.04,2.04c-15.74.01-31.48.03-47.22.04,0-30.79,0-61.58.01-92.37Z' },
      { id: 'C4a', name: 'C4a · Ejecutiva', area: '14.5 m²', status: 'occupied', type: 'path', d: 'M301.7,390.65h47.66c.01,23.56.02,47.13.04,70.69-15.92-.03-31.83-.06-47.75-.08.02-23.54.03-47.07.05-70.61Z' },
      { id: 'C4b', name: 'C4b · Ejecutiva', area: '16.5 m²', status: 'occupied', type: 'path', d: 'M351.25,369.01h48.09v92.32c-16.04,0-32.08.02-48.12.02,0-30.78.02-61.56.03-92.35Z' },
      { id: 'C5', name: 'C5 · Ejecutiva Large', area: '18 m²', status: 'occupied', type: 'path', d: 'M401.79,364.77h48.09v99.6h-48.09v-99.6Z' },
      { id: 'C6', name: 'C6 · Ejecutiva Large', area: '18 m²', status: 'occupied', type: 'path', d: 'M456.44,364.77h45.82v99.6h-45.82v-99.6Z' }
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

  const floor = floorPlans[floorNumber];
  if (!floor) return;

  const statusLabel = s => s === 'occupied' ? 'Ocupada' : s === 'available' ? 'Disponible' : s === 'coworking' ? 'Coworking' : 'Próximamente';
  let svgRooms = floor.rooms.map(room => {
    const statusClass = room.status;
    const areaPart = room.area ? ', ' + room.area : '';
    const a11y = `tabindex="0" role="button" aria-label="${room.name}${areaPart}, ${statusLabel(room.status)}"`;
    if (room.type === 'rect') {
      return `<rect id="room-${room.id}" class="room-unit ${statusClass}" data-room="${room.id}" data-name="${room.name}" data-area="${room.area}" data-status="${room.status}" ${a11y} x="${room.x}" y="${room.y}" width="${room.width}" height="${room.height}"/>`;
    } else if (room.type === 'path') {
      return `<path id="room-${room.id}" class="room-unit ${statusClass}" data-room="${room.id}" data-name="${room.name}" data-area="${room.area}" data-status="${room.status}" ${a11y} d="${room.d}"/>`;
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
            .room-unit.coworking { fill: #a7d8c8; }
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
