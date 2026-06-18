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
    occupancy: '100%',
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
    occupancy: '100%',
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
    viewBox: '0 0 704 490',
    image: 'images/Oficinas bussynes center.png',
    occupancy: '100%',
    rooms: [
      { id: 'A1a', name: 'A1a · Ejecutiva', area: '15 m²', status: 'occupied', type: 'path', d: 'M94.4102 30.3498H46.3802C46.3302 44.1598 46.2902 57.9698 46.2402 71.7798C67.5902 71.7698 88.9302 71.7598 110.28 71.7398C110.39 68.8998 110.5 66.0598 110.62 63.2198H132.11C132.12 46.5298 132.13 29.8498 132.14 13.1598L94.4002 13.0898V30.3398L94.4102 30.3498Z' },
      { id: 'A7b', name: 'A7b · Ejecutiva Plus', area: '17 m²', status: 'occupied', type: 'path', d: 'M134.529 13C163.519 13.01 192.499 13.03 221.489 13.04L221.609 63.65C192.599 63.51 163.579 63.37 134.569 63.24C134.559 46.5 134.549 29.75 134.529 13.01V13Z' },
      { id: 'A1b', name: 'A1b · Ejecutiva', area: '12 m²', status: 'occupied', type: 'path', d: 'M46.3793 73.2383C67.6893 73.3383 88.9993 73.4383 110.309 73.5483C110.289 88.0483 110.269 102.558 110.239 117.058C88.9193 117.188 67.5993 117.308 46.2793 117.438C46.3093 102.708 46.3493 87.9783 46.3793 73.2483V73.2383Z' },
      { id: 'A2', name: 'A2 · Ejecutiva', area: '12 m²', status: 'occupied', type: 'path', d: 'M46.3798 119.301C67.7898 119.361 89.2098 119.411 110.62 119.471V167.461H86.6398V173.981C73.2098 173.901 59.7798 173.821 46.3398 173.741C46.3498 155.591 46.3598 137.451 46.3698 119.301H46.3798Z' },
      { id: 'A3', name: 'A3 · Corporativa Jr.', area: '25 m²', status: 'occupied', type: 'path', d: 'M46.3811 176.432L87.1911 176.262C87.1911 177.752 87.1911 179.252 87.1911 180.742H92.4311C92.4311 179.252 92.4311 177.752 92.4311 176.262L110.611 176.432C110.631 210.822 110.661 245.202 110.681 279.592C89.2411 279.452 67.8111 279.312 46.3711 279.182V176.442L46.3811 176.432Z' },
      { id: 'A4', name: 'A4 · Gerencial', area: '34 m²', status: 'occupied', type: 'path', d: 'M46 281.209C68.46 281.349 90.92 281.489 113.38 281.619V263.719H153.3C153.44 269.549 153.58 275.379 153.71 281.209C176.33 281.349 198.95 281.489 221.57 281.619V332.399H46.38C46.25 315.329 46.13 298.269 46 281.199V281.209Z' },
      { id: 'A5', name: 'A5 · Ejecutiva Plus', area: '17 m²', status: 'occupied', type: 'path', d: 'M156.091 212.199H221.571V279.169C199.621 279.309 177.661 279.449 155.711 279.579C155.841 257.119 155.961 234.659 156.091 212.199Z' },
      { id: 'A7a', name: 'A7a · Ejecutiva', area: '13 m²', status: 'occupied', type: 'path', d: 'M156 65.2695H221.81L221.57 117.02H156.09L156 65.2695Z' },
      { id: 'A6', name: 'A6 · Ejecutiva', area: '13 m²', status: 'occupied', type: 'path', d: 'M156.09 119.469L221.6 119.539C221.59 135.509 221.58 151.489 221.57 167.459H187.79V173.669H156.09V119.469Z' },
      { id: 'B1', name: 'B1 · Ejecutiva Large', area: '19 m²', status: 'occupied', type: 'path', d: 'M478.289 23.8711H582.689C582.699 39.6811 582.709 55.4911 582.719 71.3111C547.999 71.3211 513.279 71.3311 478.559 71.3511C478.469 55.5311 478.379 39.7011 478.279 23.8811L478.289 23.8711Z' },
      { id: 'B2', name: 'B2 · Ejecutiva', area: '13 m²', status: 'occupied', type: 'path', d: 'M478.42 73.75C499.87 73.83 521.31 73.92 542.76 74C542.93 91.03 543.11 108.06 543.28 125.09H478.42V73.75Z' },
      { id: 'B3', name: 'B3 · Ejecutiva', area: '13 m²', status: 'occupied', type: 'path', d: 'M478.42 127.539H543.28V178.879C524.75 178.839 506.23 178.809 487.7 178.769C487.84 174.719 487.98 170.679 488.11 166.629C484.74 166.579 481.37 166.539 478 166.489C478.14 153.509 478.27 140.519 478.41 127.539H478.42Z' },
      { id: 'B4', name: 'B4 · Ejecutiva Large Plus', area: '22.5 m²', status: 'occupied', type: 'path', d: 'M478.42 181.328H543.28V271.758H478.42V181.328Z' },
      { id: 'B5', name: 'B5 · Gerencial', area: '37 m²', status: 'occupied', type: 'path', d: 'M589.24 231.352H684.18C684.31 265.272 684.43 299.202 684.56 333.122C652.79 332.982 621.01 332.842 589.24 332.712V231.352Z' },
      { id: 'B6', name: 'B6 · Gerencial', area: '37 m²', status: 'occupied', type: 'path', d: 'M589.27 127.542C620.18 127.532 651.09 127.522 682.01 127.512C682.06 161.312 682.1 195.112 682.15 228.912H589.27V127.552V127.542Z' },
      { id: 'B7', name: 'B7 · Gerencial', area: '37 m²', status: 'occupied', type: 'path', d: 'M589.27 23.7003C621.05 23.5703 652.82 23.4503 684.6 23.3203L684.19 125.1H589.28V23.7003H589.27Z' },
      { id: 'C1a', name: 'C1a · Coworking', area: '17.5 m² · 12 lugares', status: 'coworking', type: 'path', d: 'M50.77 380.01H88.68C88.82 409.91 88.96 439.81 89.1 469.71C73.16 469.7 57.22 469.69 41.28 469.67C41.19 443.2 41.1 416.72 41 390.25C44.25 386.83 47.51 383.42 50.76 380L50.77 380.01Z' },
      { id: 'C1b', name: 'C1b · Ejecutiva', area: '14.5 m²', status: 'occupied', type: 'path', d: 'M92.84 400.07C107.94 400.05 123.03 400.03 138.13 400C138.21 423.59 138.29 447.17 138.36 470.76H93.27V468.1C92.85 468.1 92.42 468.11 92 468.12L92.83 400.07H92.84Z' },
      { id: 'C2', name: 'C2 · Corporativa', area: '31 m²', status: 'occupied', type: 'path', d: 'M189.48 379H238.16V471.32C205.54 471.23 172.92 471.14 140.3 471.06C140.2 447.58 140.1 424.11 140 400.63H189.48V379Z' },
      { id: 'C3', name: 'C3 · Corporativa', area: '31 m²', status: 'occupied', type: 'path', d: 'M239.01 379.01C255.37 379.02 271.74 379.03 288.11 379.04V400.67H337.17V471.36C321.92 471.36 306.67 471.34 291.42 471.33C291.42 470.65 291.42 469.97 291.42 469.29H286.18L286.22 471.33C270.48 471.34 254.74 471.36 239 471.37C239 440.58 239 409.79 239.01 379V379.01Z' },
      { id: 'C4a', name: 'C4a · Ejecutiva', area: '16.5 m²', status: 'occupied', type: 'path', d: 'M335.001 400.5H382.661C382.671 424.06 382.681 447.63 382.701 471.19C366.781 471.16 350.871 471.13 334.951 471.11C334.971 447.57 334.981 424.04 335.001 400.5Z' },
      { id: 'C4b', name: 'C4b · Ejecutiva', area: '16.5 m²', status: 'occupied', type: 'path', d: 'M385.03 380.01H433.12V472.33C417.08 472.33 401.04 472.35 385 472.35C385 441.57 385.02 410.79 385.03 380V380.01Z' },
      { id: 'C5', name: 'C5 · Ejecutiva Large', area: '18 m²', status: 'occupied', type: 'path', d: 'M433 374H481.09V473.6H433V374Z' },
      { id: 'C6', name: 'C6 · Ejecutiva Large', area: '18 m²', status: 'occupied', type: 'path', d: 'M488 374H533.82V473.6H488V374Z' }
    ]
  },
  coworking: {
    viewBox: '0 0 743 1145',
    image: 'images/coworking-plano.png',
    rooms: []
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

  const statusLabel = s => s === 'occupied' ? 'Ocupada' : s === 'available' ? 'Disponible' : s === 'coworking' ? 'Coworking' : s === 'reserved' ? 'Reservada' : 'Próximamente';
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

  // Detectar planos verticales (alto > ancho) y limitar el ancho del contenedor
  // para que no salgan excesivamente altos en el layout 30/70.
  const vbParts = floor.viewBox.split(' ').map(Number);
  const isPortrait = vbParts.length === 4 && vbParts[3] > vbParts[2];
  const viewerStyle = isPortrait ? 'style="max-width:460px"' : '';

  // Badge de ocupación (separado del plano — se renderiza en su propio contenedor arriba)
  const occupancyContainer = document.getElementById('floorOccupancyContainer');
  if (occupancyContainer) {
    occupancyContainer.innerHTML = floor.occupancy ? `
      <div class="floor-occupancy-badge" role="status" aria-label="Ocupación del piso: ${floor.occupancy}">
        <span class="occupancy-dot"></span>
        <span class="occupancy-pct">${floor.occupancy}</span>
        <span class="occupancy-label">de ocupación</span>
      </div>
    ` : '';
  }

  // Si el plano no tiene habitaciones interactivas (p.ej. Coworking),
  // solo se muestra la imagen — sin SVG overlay ni tooltip.
  const svgOverlay = floor.rooms.length > 0 ? `
      <svg class="floor-svg" viewBox="${floor.viewBox}" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            .room-unit { fill: rgba(232,244,248,0.55); stroke: #333; stroke-width: 1.5; cursor: pointer; transition: filter 0.25s ease, stroke-width 0.25s ease; vector-effect: non-scaling-stroke; }
            .room-unit.available { fill: rgba(200,230,201,0.7); }
            .room-unit.soon { fill: rgba(255,249,196,0.7); }
            .room-unit.occupied { fill: rgba(255,204,204,0.65); }
            .room-unit.coworking { fill: rgba(79,179,212,0.55); stroke: #1e90b8; }
            .room-unit.reserved { fill: rgba(255,183,77,0.7); }
            .room-unit:hover { filter: brightness(0.88); stroke-width: 2.5; }
          </style>
        </defs>
        <g id="rooms">${svgRooms}</g>
      </svg>
      <div class="room-tooltip" id="roomTooltip" style="display:none;"></div>` : '';

  container.innerHTML = `
    <div class="floor-viewer" ${viewerStyle}>
      <img src="${floor.image}" alt="Plano Decorativo" class="floor-decoration">${svgOverlay}
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
      // Variable CSS dedicada al stagger del reveal — no contamina otras transitions (hover)
      child.style.setProperty('--reveal-delay', (i * 0.08) + 's');
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
  initGallery();
});

// ── GALERÍA + LIGHTBOX ──
function initGallery() {
  const items = document.querySelectorAll('.gallery-item');
  if (!items.length) return;

  // Crear lightbox una sola vez (si no existe)
  let lb = document.getElementById('galleryLightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'galleryLightbox';
    lb.className = 'gallery-lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-label', 'Galería de imágenes');
    lb.innerHTML = `
      <button class="gallery-lightbox-close" aria-label="Cerrar">✕</button>
      <button class="gallery-lightbox-nav prev" aria-label="Anterior">‹</button>
      <img alt="">
      <button class="gallery-lightbox-nav next" aria-label="Siguiente">›</button>
      <div class="gallery-lightbox-count"></div>
    `;
    document.body.appendChild(lb);
  }

  // Recolectar imágenes por galería (data-gallery agrupa)
  const galleries = {};
  items.forEach(item => {
    const img = item.querySelector('img');
    if (!img) return;
    const key = item.dataset.gallery || 'default';
    if (!galleries[key]) galleries[key] = [];
    galleries[key].push(img.src);
    item.dataset.galleryIdx = galleries[key].length - 1;
  });

  let currentGallery = [];
  let currentIdx = 0;
  const lbImg = lb.querySelector('img');
  const lbCount = lb.querySelector('.gallery-lightbox-count');

  const show = idx => {
    if (!currentGallery.length) return;
    currentIdx = (idx + currentGallery.length) % currentGallery.length;
    lbImg.src = currentGallery[currentIdx];
    lbCount.textContent = `${currentIdx + 1} / ${currentGallery.length}`;
  };

  const open = (gKey, idx) => {
    currentGallery = galleries[gKey] || [];
    show(idx);
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  };

  items.forEach(item => {
    item.addEventListener('click', () => {
      open(item.dataset.gallery || 'default', Number(item.dataset.galleryIdx) || 0);
    });
    // Accesibilidad: Enter abre el lightbox cuando tiene foco
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(item.dataset.gallery || 'default', Number(item.dataset.galleryIdx) || 0);
      }
    });
  });

  lb.querySelector('.gallery-lightbox-close').addEventListener('click', close);
  lb.querySelector('.gallery-lightbox-nav.prev').addEventListener('click', e => { e.stopPropagation(); show(currentIdx - 1); });
  lb.querySelector('.gallery-lightbox-nav.next').addEventListener('click', e => { e.stopPropagation(); show(currentIdx + 1); });
  lb.addEventListener('click', e => { if (e.target === lb) close(); });

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(currentIdx - 1);
    else if (e.key === 'ArrowRight') show(currentIdx + 1);
  });
}
