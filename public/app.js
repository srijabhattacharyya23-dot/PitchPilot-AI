/* ==========================================================================
   PitchPilot AI - Frontend Application Logic
   ========================================================================== */

// --- Global Translation Dictionaries ---
const TRANSLATIONS = {
  en: {
    stadium_hub: "FIFA World Cup 2026 • MetLife Stadium Hub",
    fan_portal: "Fan Portal",
    staff_ops: "Staff Ops",
    live_match: "LIVE MATCH",
    fan_exp: "FAN EXPERIENCE",
    home_dash: "Home Dashboard",
    seat_path: "Seat Pathfinder",
    fifa_copilot: "FIFA Cup-Pilot",
    green_rewards: "Green Rewards",
    ops_command: "OPERATIONS COMMAND",
    ops_hub: "Operations Hub",
    incident_disp: "Incident Dispatch",
    trans_bridge: "Translation Bridge",
    stadium_online: "Stadium Systems Online",
    welcome: "Welcome to MetLife Stadium",
    welcome_sub: "Your real-time guide for the FIFA World Cup 2026 match experience.",
    capacity: "Stadium Capacity",
    occupied: "Occupied • Near Capacity",
    avg_gate: "Avg. Gate Wait",
    your_points: "Your Green Points",
    top_eco: "Top 15% of Eco-Fans today!",
    live_wait_times: "Live Entry Gate Wait Times",
    queue_forecasts: "Queue Forecasts",
    concessions_q: "Concessions Queues",
    restrooms_avail: "Restroom Availability",
    refresh: "Refresh",
    map_title: "Seat Pathfinder & Gate Navigator",
    map_sub: "Select your entry gate or stadium quadrant below to view wait times, accessibility facilities, and customized AI paths.",
    chat_title: "FIFA Cup-Pilot Assistant",
    chat_sub: "Your GenAI companion for parking policies, transit schedules, accessibility requests, clear bag guidelines, and stadium maps.",
    eco_title: "Green Fan Rewards Program",
    eco_sub: "Help make the 2026 World Cup the most sustainable tournament in history. Earn points for eco-friendly choices and unlock exclusive rewards."
  },
  es: {
    stadium_hub: "Copa Mundial de la FIFA 2026 • Centro del Estadio MetLife",
    fan_portal: "Portal de Fans",
    staff_ops: "Operaciones",
    live_match: "PARTIDO EN VIVO",
    fan_exp: "EXPERIENCIA DE FANS",
    home_dash: "Inicio",
    seat_path: "Ruta del Asiento",
    fifa_copilot: "Copiloto FIFA",
    green_rewards: "Eco-Premios",
    ops_command: "MANDO DE OPERACIONES",
    ops_hub: "Operaciones",
    incident_disp: "Despacho de Incidentes",
    trans_bridge: "Puente de Traducción",
    stadium_online: "Sistemas Online",
    welcome: "Bienvenido al Estadio MetLife",
    welcome_sub: "Su guía en tiempo real para la experiencia del partido de la Copa Mundial 2026.",
    capacity: "Capacidad del Estadio",
    occupied: "Ocupado • Cerca de la Capacidad",
    avg_gate: "Espera Promedio",
    your_points: "Sus Eco-Puntos",
    top_eco: "¡En el 15% superior de Eco-Fans hoy!",
    live_wait_times: "Tiempos de Espera de Entrada en Vivo",
    queue_forecasts: "Pronósticos de Filas",
    concessions_q: "Filas de Concesiones",
    restrooms_avail: "Disponibilidad de Baños",
    refresh: "Actualizar",
    map_title: "Buscador de Asientos y Navegador de Puertas",
    map_sub: "Seleccione su puerta de entrada o cuadrante del estadio para ver tiempos de espera, instalaciones de accesibilidad y rutas personalizadas.",
    chat_title: "Asistente Copiloto FIFA",
    chat_sub: "Su compañero de IA generativa para políticas de estacionamiento, horarios de tránsito, solicitudes de accesibilidad, directrices de bolsas transparentes y mapas del estadio.",
    eco_title: "Programa de Eco-Premios para Fans",
    eco_sub: "Ayude a hacer del Mundial 2026 el torneo más sostenible de la historia. Gane puntos por elecciones ecológicas y desbloquee recompensas exclusivas."
  },
  fr: {
    stadium_hub: "Coupe du Monde de la FIFA 2026 • Centre du Stade MetLife",
    fan_portal: "Portail des Supporters",
    staff_ops: "Opérations",
    live_match: "MATCH EN DIRECT",
    fan_exp: "EXPÉRIENCE SUPPORTERS",
    home_dash: "Accueil",
    seat_path: "Itinéraire Siège",
    fifa_copilot: "Copilote FIFA",
    green_rewards: "Éco-Récompenses",
    ops_command: "COMMANDEMENT DES OPÉRATIONS",
    ops_hub: "Opérations",
    incident_disp: "Gestion des Incidents",
    trans_bridge: "Pont de Traduction",
    stadium_online: "Systèmes En Ligne",
    welcome: "Bienvenue au Stade MetLife",
    welcome_sub: "Votre guide en temps réel pour l'expérience de la Coupe du Monde de la FIFA 2026.",
    capacity: "Capacité du Stade",
    occupied: "Occupé • Presque Complet",
    avg_gate: "Attente Moyenne",
    your_points: "Vos Éco-Points",
    top_eco: "Dans le top 15% des Éco-Supporters aujourd'hui !",
    live_wait_times: "Temps d'attente d'entrée en direct",
    queue_forecasts: "Prévisions des files",
    concessions_q: "Files d'attente Concessions",
    restrooms_avail: "Disponibilité des Sanitaires",
    refresh: "Actualiser",
    map_title: "Chercheur de Siège & Navigateur d'Entrée",
    map_sub: "Sélectionnez votre porte d'entrée ou quadrant du stade pour voir les temps d'attente, les équipements d'accessibilité et les itinéraires personnalisés.",
    chat_title: "Assistant Copilote FIFA",
    chat_sub: "Votre compagnon IA générative pour les politiques de stationnement, les horaires de transport, les demandes d'accessibilité, les directives sac transparent et les plans du stade.",
    eco_title: "Programme Éco-Récompenses Supporters",
    eco_sub: "Aidez à faire de la Coupe du Monde 2026 le tournoi le plus durable de l'histoire. Gagnez des points pour vos choix écologiques et débloquez des récompenses exclusives."
  },
  pt: {
    stadium_hub: "Copa do Mundo da FIFA 2026 • Central do Estádio MetLife",
    fan_portal: "Portal de Fãs",
    staff_ops: "Operações",
    live_match: "PARTIDA EM DIRECTO",
    fan_exp: "EXPERIÊNCIA DE FÃS",
    home_dash: "Início",
    seat_path: "Caminho do Assento",
    fifa_copilot: "Copiloto FIFA",
    green_rewards: "Eco-Prêmios",
    ops_command: "COMANDO DE OPERAÇÕES",
    ops_hub: "Operações",
    incident_disp: "Despacho de Incidentes",
    trans_bridge: "Ponte de Tradução",
    stadium_online: "Sistemas Online",
    welcome: "Bem-vindo ao Estádio MetLife",
    welcome_sub: "Seu guia em tempo real para a experiência do jogo da Copa do Mundo 2026.",
    capacity: "Capacidade do Estádio",
    occupied: "Ocupado • Perto do Limite",
    avg_gate: "Média de Espera",
    your_points: "Seus Eco-Pontos",
    top_eco: "Top 15% de Eco-Fãs hoje!",
    live_wait_times: "Tempos de Espera das Portas em Direto",
    queue_forecasts: "Previsões de Filas",
    concessions_q: "Filas de Concesões",
    restrooms_avail: "Disponibilidade de Banheiros",
    refresh: "Atualizar",
    map_title: "Localizador de Assento e Navegador de Portões",
    map_sub: "Selecione sua porta de entrada ou quadrante do estádio para ver tempos de espera, instalações de acessibilidade e rotas personalizadas.",
    chat_title: "Assistente Copiloto FIFA",
    chat_sub: "Seu companheiro de IA generativa para políticas de estacionamento, horários de transporte, solicitações de acessibilidade, diretrizes de bolsa transparente e mapas do estádio.",
    eco_title: "Programa de Eco-Prêmios para Fãs",
    eco_sub: "Ajude a tornar a Copa do Mundo 2026 o torneio mais sustentável da história. Ganhe pontos por escolhas ecológicas e desbloqueie recompensas exclusivas."
  },
  ar: {
    stadium_hub: "كأس العالم FIFA 2026 • مركز ملعب MetLife",
    fan_portal: "بوابة المشجعين",
    staff_ops: "العمليات",
    live_match: "مباراة مباشرة",
    fan_exp: "تجربة المشجعين",
    home_dash: "الصفحة الرئيسية",
    seat_path: "دليل المقاعد",
    fifa_copilot: "المرشد الذكي FIFA",
    green_rewards: "المكافآت الخضراء",
    ops_command: "قيادة العمليات",
    ops_hub: "مركز العمليات",
    incident_disp: "إدارة الحوادث",
    trans_bridge: "جسر الترجمة",
    stadium_online: "أنظمة الملعب متصلة",
    welcome: "مرحباً بك في ملعب MetLife",
    welcome_sub: "دليلك اللحظي لتجربة مباراة كأس العالم 2026.",
    capacity: "سعة الملعب",
    occupied: "مشغول • قريب من الطاقة الاستيعابية",
    avg_gate: "متوسط انتظار البوابة",
    your_points: "نقاطك الخضراء",
    top_eco: "ضمن أفضل 15% من المشجعين البيئيين اليوم!",
    live_wait_times: "أوقات انتظار البوابات المباشرة",
    queue_forecasts: "توقعات الطوابير",
    concessions_q: "طوابير المأكولات والمشروبات",
    restrooms_avail: "توفر دورات المياه",
    refresh: "تحديث",
    map_title: "دليل المقاعد وملاح البوابات",
    map_sub: "حدد بوابة الدخول أو ربع الملعب لعرض أوقات الانتظار ومرافق إمكانية الوصول والمسارات المخصصة.",
    chat_title: "المساعد الذكي FIFA",
    chat_sub: "رفيقك بالذكاء الاصطناعي للسياسات وجداول المواصلات وطلبات إمكانية الوصول وخرائط الملعب.",
    eco_title: "برنامج مكافآت المشجع الأخضر",
    eco_sub: "ساعد في جعل كأس العالم 2026 البطولة الأكثر استدامة في التاريخ. اكسب نقاطاً للخيارات الصديقة للبيئة."
  },
  de: {
    stadium_hub: "FIFA Fußball-Weltmeisterschaft 2026 • MetLife Stadionzentrale",
    fan_portal: "Fan-Portal",
    staff_ops: "Betrieb",
    live_match: "LIVE-SPIEL",
    fan_exp: "FAN-ERLEBNIS",
    home_dash: "Startseite",
    seat_path: "Sitzplatzführer",
    fifa_copilot: "FIFA Kopilot",
    green_rewards: "Öko-Prämien",
    ops_command: "BETRIEBSKOMMANDO",
    ops_hub: "Betriebszentrale",
    incident_disp: "Einsatzleitung",
    trans_bridge: "Übersetzungsbrücke",
    stadium_online: "Stadion-Systeme Online",
    welcome: "Willkommen im MetLife Stadion",
    welcome_sub: "Ihr Echtzeit-Leitfaden für das FIFA Weltmeisterschaftserlebnis 2026.",
    capacity: "Stadionkapazität",
    occupied: "Belegt • Fast voll",
    avg_gate: "Ø Wartezeit Eingang",
    your_points: "Ihre Öko-Punkte",
    top_eco: "Top 15% der Öko-Fans heute!",
    live_wait_times: "Live-Wartezeiten an Eingangstoren",
    queue_forecasts: "Warteschlangenprognosen",
    concessions_q: "Verpflegungsschlangen",
    restrooms_avail: "Toilettenverfügbarkeit",
    refresh: "Aktualisieren",
    map_title: "Sitzplatzfinder & Eingangsnavigator",
    map_sub: "Wählen Sie Ihr Eingangstor oder Stadionquadrant, um Wartezeiten, Barrierefreiheitseinrichtungen und KI-Routen zu sehen.",
    chat_title: "FIFA Kopilot-Assistent",
    chat_sub: "Ihr KI-Begleiter für Parkrichtlinien, Nahverkehrspläne, Barrierefreiheitsanfragen und Stadionkarten.",
    eco_title: "Öko-Prämien-Programm für Fans",
    eco_sub: "Helfen Sie dabei, die WM 2026 zum nachhaltigsten Turnier der Geschichte zu machen. Verdienen Sie Punkte für umweltfreundliche Entscheidungen."
  }
};

// --- Global Application State ---
const state = {
  currentMode: 'fan', // 'fan' or 'staff'
  currentTab: 'fan-overview',
  greenPoints: 120,
  chatHistory: [],
  activeIncidents: [],
  selectedLanguage: 'en',
  globalLanguage: 'en',
  telemetryData: null,
  activeMapSelection: 'quad-north',
  triviaPlayed: false
};

// --- Preset Fan Queries in Other Languages (for Simulator Mic button) ---
const presetFanQueries = [
  { text: "¿Dónde está mi asiento? Sección 104, fila 12.", lang: "es" },
  { text: "Où se trouve mon siège ? Section 210, rangée 5.", lang: "fr" },
  { text: "أين مقعدي؟ القسم 305، الصف 8.", lang: "ar" },
  { text: "Por favor, tenga su entrada digital lista para escanear.", lang: "es" },
  { text: "Y a-t-il une consigne pour les sacs à dos?", lang: "fr" },
  { text: "كيف يمكنني الوصول إلى محطة القطار؟", lang: "ar" }
];
let presetIndex = 0;

// --- Initialize App ---
document.addEventListener('DOMContentLoaded', () => {
  initModeToggle();
  initNavigation();
  initTelemetryLoop();
  initMapInteractions();
  initChatAssistant();
  initSustainabilityHub();
  initIncidentCommand();
  initTranslatorBridge();
  initMatchSimulation();
  initLanguageSelector();
  
  // Set AI status
  checkAIServerStatus();
});

// --- Check if Gemini AI Server is configured ---
async function checkAIServerStatus() {
  const statusEl = document.getElementById('ai-engine-status');
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'ping' })
    });
    const data = await response.json();
    if (data.source && data.source.includes('Gemini')) {
      statusEl.innerHTML = `<i class="fa-solid fa-brain accent-text"></i> Gemini AI Active`;
    } else {
      statusEl.innerHTML = `<i class="fa-solid fa-shield-halved text-warning"></i> Simulator Mode Active`;
    }
  } catch (err) {
    statusEl.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-red"></i> Offline Mode`;
  }
}

// --- Mode Toggle Logic (Fan vs. Staff Command) ---
function initModeToggle() {
  const checkbox = document.getElementById('mode-toggle-checkbox');
  const body = document.body;
  
  const fanNav = document.querySelector('.fan-nav-group');
  const staffNav = document.querySelector('.staff-nav-group');
  
  checkbox.addEventListener('change', (e) => {
    // Visual beep/pulse feedback
    triggerVisualBeep();
    
    if (e.target.checked) {
      // Switch to Staff Mode
      state.currentMode = 'staff';
      body.classList.remove('fan-mode');
      body.classList.add('staff-mode');
      
      fanNav.classList.add('hidden');
      staffNav.classList.remove('hidden');
      
      // Default to staff overview tab
      switchTab('staff-overview');
    } else {
      // Switch to Fan Mode
      state.currentMode = 'fan';
      body.classList.remove('staff-mode');
      body.classList.add('fan-mode');
      
      staffNav.classList.add('hidden');
      fanNav.classList.remove('hidden');
      
      // Default to fan overview tab
      switchTab('fan-overview');
    }
  });
}

// --- Tab Navigation Logic ---
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      // Ensure click registers on the button even if clicking internal tags
      const button = e.target.closest('.nav-item');
      if (!button) return;
      
      const targetTabId = button.getAttribute('data-target');
      switchTab(targetTabId);
    });
  });
}

function switchTab(tabId) {
  state.currentTab = tabId;
  
  // Update nav item active status
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    if (item.getAttribute('data-target') === tabId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  
  // Hide all sections, show target
  const sections = document.querySelectorAll('.tab-content');
  sections.forEach(sec => {
    if (sec.id === tabId) {
      sec.classList.add('active');
    } else {
      sec.classList.remove('active');
    }
  });
  
  // Perform custom updates on tab switch
  if (tabId === 'fan-map' || tabId === 'staff-overview') {
    // Refresh telemetry immediately to populate map/heatmap
    updateTelemetry();
  }
}

// --- Telemetry & Simulated Sensoring ---
function initTelemetryLoop() {
  // Initial pull
  updateTelemetry();
  
  // Refresh click listener
  document.getElementById('refresh-telemetry-btn').addEventListener('click', () => {
    triggerVisualBeep();
    updateTelemetry();
  });
  
  // Periodic update every 20 seconds
  setInterval(() => {
    if (state.currentTab === 'fan-overview' || state.currentTab === 'staff-overview' || state.currentTab === 'fan-map') {
      updateTelemetry();
    }
  }, 20000);
}

async function updateTelemetry(simulationEvent = null) {
  try {
    const payload = simulationEvent ? { event: simulationEvent } : {};
    const res = await fetch('/api/predict-crowd', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    state.telemetryData = data;
    
    // Process states and updates
    renderFanOverviewTelemetry(data.states);
    updateStadiumMapVisuals(data.states);
    renderOperationsAlerts(data.alerts);
    updateOpsOverviewSummary(data.states, data.alerts);
    
  } catch (err) {
    console.error('Error fetching crowd telemetries:', err);
  }
}

// Renders the live meters on the Fan Home Dashboard
function renderFanOverviewTelemetry(states) {
  const gateContainer = document.getElementById('fan-gate-list');
  const concessionContainer = document.getElementById('fan-concessions-list');
  const restroomContainer = document.getElementById('fan-restrooms-list');
  
  // 1. Gates Wait times
  if (gateContainer && states.gates) {
    gateContainer.innerHTML = '';
    let totalWait = 0;
    let gateCount = 0;
    
    for (const [name, metrics] of Object.entries(states.gates)) {
      totalWait += metrics.waitTime;
      gateCount++;
      
      const percent = Math.round((metrics.currentCount / metrics.capacity) * 100);
      const gateHtml = `
        <div class="gate-item">
          <div class="gate-info-row">
            <span>${name}</span>
            <span class="gate-status-text status-${metrics.status}">${metrics.waitTime} min queue (${percent}% load)</span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar-fill bar-${metrics.status}" style="width: ${percent}%"></div>
          </div>
          <div class="gate-meta-row">
            <span>Capacity: ${metrics.capacity.toLocaleString()} fans</span>
            <span><i class="fa-solid fa-wheelchair"></i> ADA Line Clear</span>
          </div>
        </div>
      `;
      gateContainer.insertAdjacentHTML('beforeend', gateHtml);
    }
    
    // Update global average metrics cards
    const avgWait = Math.round(totalWait / gateCount);
    document.getElementById('avg-gate-wait-text').textContent = `${avgWait} mins`;
    
    const metaText = document.getElementById('avg-gate-meta');
    if (avgWait > 20) {
      metaText.textContent = "High queues detected stadium-wide.";
      metaText.style.color = "var(--color-error)";
    } else if (avgWait > 10) {
      metaText.textContent = "Moderate queues. Check Seat Pathfinder.";
      metaText.style.color = "var(--color-warning)";
    } else {
      metaText.textContent = "Gates are clearing rapidly. All lanes open.";
      metaText.style.color = "var(--color-success)";
    }
  }

  // 2. Concessions Wait times
  if (concessionContainer && states.concessions) {
    concessionContainer.innerHTML = '';
    for (const [name, metrics] of Object.entries(states.concessions)) {
      const icon = name.includes('Bar') ? 'fa-glass-water' : 'fa-burger';
      const statusColor = metrics.status === 'high' ? 'text-red' : (metrics.status === 'moderate' ? 'text-yellow' : 'text-green');
      const itemHtml = `
        <div class="queue-item">
          <div class="queue-details">
            <h5><i class="fa-solid ${icon}"></i> ${name}</h5>
            <span>Cap: ${metrics.capacity} • Line density: ${metrics.currentCount}</span>
          </div>
          <div class="queue-time ${statusColor}">${metrics.waitTime} mins</div>
        </div>
      `;
      concessionContainer.insertAdjacentHTML('beforeend', itemHtml);
    }
  }

  // 3. Restroom queues
  if (restroomContainer && states.restrooms) {
    restroomContainer.innerHTML = '';
    for (const [name, metrics] of Object.entries(states.restrooms)) {
      const genderClass = name.includes('Women') ? 'fa-venus' : 'fa-mars';
      const statusColor = metrics.status === 'high' ? 'text-red' : (metrics.status === 'moderate' ? 'text-yellow' : 'text-green');
      const itemHtml = `
        <div class="queue-item">
          <div class="queue-details">
            <h5><i class="fa-solid ${genderClass}"></i> ${name}</h5>
            <span>Capacity density: ${metrics.currentCount}/${metrics.capacity}</span>
          </div>
          <div class="queue-time ${statusColor}">${metrics.waitTime} mins</div>
        </div>
      `;
      restroomContainer.insertAdjacentHTML('beforeend', itemHtml);
    }
  }
}

// Update the Map Hotspots and colors based on states
function updateStadiumMapVisuals(states) {
  if (!states || !states.gates) return;
  
  // Map Gate nodes to SVG elements
  const gateMap = {
    'Verizon Gate (North)': 'pin-gate-verizon',
    'HCLTech Gate (East)': 'pin-gate-hcltech',
    'Bud Light Gate (South)': 'pin-gate-budlight',
    'MetLife Gate (West)': 'pin-gate-metlife'
  };

  for (const [gateName, metrics] of Object.entries(states.gates)) {
    const pinId = gateMap[gateName];
    const pin = document.getElementById(pinId);
    if (!pin) continue;

    const pulse = pin.querySelector('.hotspot-pulse');
    const core = pin.querySelector('.hotspot-core');
    
    if (pulse && core) {
      // Remove all state classes
      pulse.className.baseVal = 'hotspot-pulse';
      core.className.baseVal = 'hotspot-core';
      
      // Add correct style classes
      pulse.classList.add(`${metrics.status}-pulse`);
      core.classList.add(`${metrics.status}-core`);
    }
  }
  
  // Heatmap operations overlays (on Staff Operations Hub)
  const heatNorth = document.getElementById('heat-north');
  const heatEast = document.getElementById('heat-east');
  const heatSouth = document.getElementById('heat-south');
  const heatWest = document.getElementById('heat-west');
  
  if (heatNorth) {
    updateHeatDot(heatNorth, states.gates['Verizon Gate (North)'].status);
    updateHeatDot(heatEast, states.gates['HCLTech Gate (East)'].status);
    updateHeatDot(heatSouth, states.gates['Bud Light Gate (South)'].status);
    updateHeatDot(heatWest, states.gates['MetLife Gate (West)'].status);
  }
}

function updateHeatDot(element, status) {
  element.className = 'heatmap-dot';
  if (element.id === 'heat-north') element.classList.add('dot-north');
  if (element.id === 'heat-east') element.classList.add('dot-east');
  if (element.id === 'heat-south') element.classList.add('dot-south');
  if (element.id === 'heat-west') element.classList.add('dot-west');
  
  element.classList.add(`level-${status}`);
}

// Renders dynamic alerts in Command Dashboard list
function renderOperationsAlerts(alerts) {
  const alertsContainer = document.getElementById('ops-alerts-list');
  if (!alertsContainer) return;
  
  if (!alerts || alerts.length === 0) {
    alertsContainer.innerHTML = `
      <div class="iap-empty-state">
        <i class="fa-solid fa-circle-check text-success"></i>
        <p>No active crowd bottleneck alerts. All gate flows are operating within standard parameters.</p>
      </div>
    `;
    return;
  }
  
  alertsContainer.innerHTML = '';
  alerts.forEach(alert => {
    const alertHtml = `
      <div class="alert-item-card severity-${alert.severity.toLowerCase()} animate-slide-up">
        <div class="alert-header-row">
          <span class="alert-tag"><i class="fa-solid fa-triangle-exclamation animate-pulse"></i> ${alert.category}</span>
          <span class="alert-loc">${alert.location}</span>
        </div>
        <p class="alert-message">${alert.message}</p>
        <div class="ai-recommendation-block">
          <p><strong><i class="fa-solid fa-wand-magic-sparkles"></i> GenAI Tactical Mitigation Instruction:</strong></p>
          <p style="margin-top: 0.25rem;">${alert.aiOptimizedGuidance || alert.recommendation}</p>
        </div>
      </div>
    `;
    alertsContainer.insertAdjacentHTML('beforeend', alertHtml);
  });
}

function updateOpsOverviewSummary(states, alerts) {
  const alertCountEl = document.getElementById('ops-alert-count');
  const alertMetaEl = document.getElementById('ops-alert-meta');
  const dispatchedEl = document.getElementById('ops-dispatched-count');
  
  if (alertCountEl) {
    const len = alerts ? alerts.length : 0;
    alertCountEl.textContent = `${len} Alert${len !== 1 ? 's' : ''}`;
    
    if (len > 0) {
      alertCountEl.className = "stat-value text-red";
      alertMetaEl.textContent = `${alerts[0].category} at ${alerts[0].location}`;
      dispatchedEl.textContent = `${12 + (len * 4)} Volunteers`;
    } else {
      alertCountEl.className = "stat-value text-green";
      alertMetaEl.textContent = "Stadium traffic flowing smoothly";
      dispatchedEl.textContent = "8 Volunteers";
    }
  }
}

// --- Map Sector & Pin Selection Details ---
function initMapInteractions() {
  const sectors = document.querySelectorAll('.stadium-sector');
  const hotspots = document.querySelectorAll('.hotspot');
  
  sectors.forEach(sec => {
    sec.addEventListener('click', (e) => {
      sectors.forEach(s => s.classList.remove('active-sector'));
      e.target.classList.add('active-sector');
      
      const quadrantId = e.target.id;
      state.activeMapSelection = quadrantId;
      updateMapDetailsPanel(quadrantId);
    });
  });

  hotspots.forEach(hot => {
    hot.addEventListener('click', (e) => {
      triggerVisualBeep();
      const gateName = e.currentTarget.getAttribute('data-gate');
      
      // Match gate name to quadrant
      let targetQuad = 'quad-north';
      if (gateName.includes('East')) targetQuad = 'quad-east';
      else if (gateName.includes('South')) targetQuad = 'quad-south';
      else if (gateName.includes('West')) targetQuad = 'quad-west';
      
      // Focus sector
      sectors.forEach(s => {
        if (s.id === targetQuad) s.classList.add('active-sector');
        else s.classList.remove('active-sector');
      });
      
      state.activeMapSelection = targetQuad;
      updateMapDetailsPanel(targetQuad, gateName);
    });
  });
}

function updateMapDetailsPanel(quadrantId, customGateName = null) {
  const titleEl = document.getElementById('map-selected-title');
  const loadEl = document.getElementById('zone-crowd-load-text');
  const queueEl = document.getElementById('zone-queue-time-text');
  const listEl = document.getElementById('zone-accessibility-list');
  const aiEl = document.getElementById('zone-ai-guidance-content');
  
  if (!state.telemetryData) return;
  const data = state.telemetryData.states;

  let title = "North Stand (Verizon Gate Access)";
  let loadText = "High (84%)";
  let loadClass = "text-red";
  let queueTime = "28 mins";
  let accessibilityItems = [];
  let aiGuidance = "";

  if (quadrantId === 'quad-north' || (customGateName && customGateName.includes('Verizon'))) {
    const metrics = data.gates['Verizon Gate (North)'];
    title = customGateName || "North Stand (Verizon Gate Access)";
    loadText = `${metrics.status.toUpperCase()} (${Math.round((metrics.currentCount / metrics.capacity) * 100)}%)`;
    loadClass = metrics.status === 'high' ? 'text-red' : (metrics.status === 'moderate' ? 'text-yellow' : 'text-green');
    queueTime = `${metrics.waitTime} mins`;
    accessibilityItems = [
      "Dedicated ADA accessible shuttle drop-off point at Lot B.",
      "Wheelchair entry ramp and elevator bank inside Verizon Gate portal.",
      "Sensory Kiosk offering auditory relief packs next to Guest Relations Booth Sec 103."
    ];
    aiGuidance = `"Verizon Gate is heavily jammed due to a train arrival at Meadowlands Station. If you are walking, walk past the North Gate and follow the marked blue path around the stadium to the HCLTech Gate (East) to enter inside 4 minutes. Tickets are scanned at all gates."`;
  }
  else if (quadrantId === 'quad-east' || (customGateName && customGateName.includes('HCLTech'))) {
    const metrics = data.gates['HCLTech Gate (East)'];
    title = customGateName || "East Stand (HCLTech Gate Access)";
    loadText = `${metrics.status.toUpperCase()} (${Math.round((metrics.currentCount / metrics.capacity) * 100)}%)`;
    loadClass = metrics.status === 'high' ? 'text-red' : (metrics.status === 'moderate' ? 'text-yellow' : 'text-green');
    queueTime = `${metrics.waitTime} mins`;
    accessibilityItems = [
      "Level grade zero-threshold step-free entry at East Portal.",
      "Accessible seating platform guides and companion seat coordinators at Sections 116-118.",
      "Assisted listening device charging and distribution booth at Portal E."
    ];
    aiGuidance = `"The East Stand reports excellent flow. This entrance is highly recommended for all stadium arrivals at this time. Standard lines are under 4 minutes. Fast scans are fully active."`;
  }
  else if (quadrantId === 'quad-south' || (customGateName && customGateName.includes('Bud Light'))) {
    const metrics = data.gates['Bud Light Gate (South)'];
    title = customGateName || "South Stand (Bud Light Gate Access)";
    loadText = `${metrics.status.toUpperCase()} (${Math.round((metrics.currentCount / metrics.capacity) * 100)}%)`;
    loadClass = metrics.status === 'high' ? 'text-red' : (metrics.status === 'moderate' ? 'text-yellow' : 'text-green');
    queueTime = `${metrics.waitTime} mins`;
    accessibilityItems = [
      "Bud Light Gate features a tactile guiding path for visually impaired guests.",
      "Dedicated stroller and wheelchair check-in desk on the Plaza South level.",
      "Elevators to middle and upper tiers (Levels 200, 300) located immediately past turnstiles."
    ];
    aiGuidance = `"Bud Light Gate is exhibiting moderate queues. Ideal entry path for seat sections 142-149. We recommend having your digital ticket preloaded on your smartphone to ensure steady scanner velocity."`;
  }
  else if (quadrantId === 'quad-west' || (customGateName && customGateName.includes('MetLife'))) {
    const metrics = data.gates['MetLife Gate (West)'];
    title = customGateName || "West Stand (MetLife Gate Access)";
    loadText = `${metrics.status.toUpperCase()} (${Math.round((metrics.currentCount / metrics.capacity) * 100)}%)`;
    loadClass = metrics.status === 'high' ? 'text-red' : (metrics.status === 'moderate' ? 'text-yellow' : 'text-green');
    queueTime = `${metrics.waitTime} mins`;
    accessibilityItems = [
      "MetLife West Gate has express lanes for wheelchair and mobility-impaired guests.",
      "Sensory Room (quiet zone with soft furniture and tactile toys) located inside the portal corridor.",
      "Close-captioning headset rental point at guest kiosk 128."
    ];
    aiGuidance = `"MetLife Gate has stable traffic loads. Recommended entry for VIP Club ticket holders and Sections 120-135. Clean lanes and rapid security checks currently running."`;
  }

  // Update DOM elements
  titleEl.textContent = title;
  loadEl.textContent = loadText;
  loadEl.className = `metric-value ${loadClass}`;
  queueEl.textContent = queueTime;
  queueEl.className = `metric-value ${loadClass}`;
  
  listEl.innerHTML = '';
  accessibilityItems.forEach(item => {
    listEl.insertAdjacentHTML('beforeend', `<li><i class="fa-solid fa-check text-success"></i> ${item}</li>`);
  });
  
  aiEl.textContent = aiGuidance;
}

// --- Fan Chat Bot UI & Endpoint integrations ---
function initChatAssistant() {
  const form = document.getElementById('chat-form');
  const input = document.getElementById('chat-input');
  const chatBox = document.getElementById('chat-messages-box');
  const suggestions = document.querySelectorAll('.suggest-btn');
  const langSelect = document.getElementById('chat-lang-select');
  
  langSelect.addEventListener('change', (e) => {
    state.selectedLanguage = e.target.value;
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;
    
    input.value = '';
    await sendUserChatMessage(query);
  });

  suggestions.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const query = e.target.getAttribute('data-query');
      await sendUserChatMessage(query);
    });
  });

  async function sendUserChatMessage(query) {
    // Append User Message
    appendMessage('user', query);
    
    // Append Typing Indicator
    const indicator = appendTypingIndicator();
    chatBox.scrollTop = chatBox.scrollHeight;
    
    // Prep payload
    const payload = {
      message: query,
      history: state.chatHistory,
      targetLanguage: state.selectedLanguage
    };
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const data = await response.json();
      
      // Remove typing indicator
      indicator.remove();
      
      // Append Bot Message
      appendMessage('bot', data.response);
      
      // Save history context
      state.chatHistory.push({ role: 'user', content: query });
      state.chatHistory.push({ role: 'model', content: data.response });
      
      // Cap history to keep response window clean
      if (state.chatHistory.length > 10) {
        state.chatHistory = state.chatHistory.slice(-10);
      }
      
    } catch (err) {
      console.error('Chat error:', err);
      indicator.remove();
      appendMessage('bot', "I'm having trouble reaching the main network. However, MetLife Stadium has emergency procedures active and local transit guides are operating. Try asking: 'bag policy' or 'train schedule' for local assistance.");
    }
    
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function appendMessage(role, text) {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const isBot = role === 'bot';
    const avatar = isBot ? '<i class="fa-solid fa-robot"></i>' : '<i class="fa-solid fa-user"></i>';
    
    const msgHtml = `
      <div class="message ${isBot ? 'bot-message' : 'user-message'} animate-slide-up">
        <div class="msg-avatar">${avatar}</div>
        <div class="msg-content">
          <p>${formatMessageContent(text)}</p>
          <span class="msg-time">${time}</span>
        </div>
      </div>
    `;
    chatBox.insertAdjacentHTML('beforeend', msgHtml);
  }

  function appendTypingIndicator() {
    const div = document.createElement('div');
    div.className = 'message bot-message animate-slide-up';
    div.innerHTML = `
      <div class="msg-avatar"><i class="fa-solid fa-robot"></i></div>
      <div class="msg-content">
        <div class="typing-indicator">
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
        </div>
      </div>
    `;
    chatBox.appendChild(div);
    return div;
  }

  function formatMessageContent(content) {
    // Simple formatter to handle bolding and bullet list styling in plain markdown replies
    let html = content;
    // Replace **text** with <strong>text</strong>
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Replace markdown lists
    if (html.includes('- ')) {
      const lines = html.split('\n');
      let inList = false;
      const formattedLines = lines.map(line => {
        if (line.trim().startsWith('- ')) {
          let listLine = `<li>${line.trim().substring(2)}</li>`;
          if (!inList) {
            listLine = `<ul>` + listLine;
            inList = true;
          }
          return listLine;
        } else {
          if (inList) {
            inList = false;
            return `</ul>` + line;
          }
          return line;
        }
      });
      if (inList) {
        formattedLines.push('</ul>');
      }
      html = formattedLines.join('\n');
    }
    return html;
  }
}

// --- Fan Sustainability Hub & Gamification ---
function initSustainabilityHub() {
  const logTransitBtn = document.getElementById('log-transit-btn');
  const scanBinBtn = document.getElementById('scan-bin-btn');
  const totalDisplay = document.getElementById('fan-total-points-display');
  const rankDisplay = document.getElementById('fan-rank-points');
  const pointsVal = document.getElementById('fan-green-points-val');
  
  logTransitBtn.addEventListener('click', () => {
    triggerVisualBeep();
    
    // Add transit points
    state.greenPoints += 50;
    animatePointsCounter(totalDisplay, state.greenPoints);
    animatePointsCounter(pointsVal, state.greenPoints);
    rankDisplay.textContent = `${state.greenPoints} pts`;
    
    logTransitBtn.disabled = true;
    logTransitBtn.textContent = "Logged! (+50)";
    logTransitBtn.classList.add('btn-success-green');
    
    showToastNotification("Transit Ticket Verified!", "You offset 4.2kg of CO2 and earned 50 Green Points!");
  });

  scanBinBtn.addEventListener('click', () => {
    triggerVisualBeep();
    
    // Add recycling points
    state.greenPoints += 15;
    animatePointsCounter(totalDisplay, state.greenPoints);
    animatePointsCounter(pointsVal, state.greenPoints);
    rankDisplay.textContent = `${state.greenPoints} pts`;
    
    scanBinBtn.disabled = true;
    scanBinBtn.textContent = "Scanned! (+15)";
    
    showToastNotification("Recycling Verified!", "Thanks for keeping MetLife clean! Earned 15 Green Points.");
  });

  // Trivia Question check
  const optionBtns = document.querySelectorAll('.btn-option');
  const feedback = document.getElementById('trivia-feedback');

  optionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (state.triviaPlayed) return;
      state.triviaPlayed = true;
      
      const isCorrect = e.target.getAttribute('data-correct') === 'true';
      if (isCorrect) {
        e.target.classList.add('correct');
        feedback.classList.remove('hidden');
        
        state.greenPoints += 10;
        animatePointsCounter(totalDisplay, state.greenPoints);
        animatePointsCounter(pointsVal, state.greenPoints);
        rankDisplay.textContent = `${state.greenPoints} pts`;
      } else {
        e.target.classList.add('incorrect');
        // Highlight correct option
        optionBtns.forEach(b => {
          if (b.getAttribute('data-correct') === 'true') {
            b.classList.add('correct');
          }
        });
        feedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="color: var(--color-error)"></i> Incorrect. 1,350 solar panels power the stadium lights canopy.`;
        feedback.classList.remove('hidden');
        feedback.style.color = "var(--color-error)";
      }
      
      // Disable options
      optionBtns.forEach(b => b.disabled = true);
    });
  });
}

function animatePointsCounter(element, target) {
  let current = parseInt(element.textContent) || 0;
  const steps = 15;
  const increment = Math.ceil((target - current) / steps);
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = current;
  }, 40);
}

// --- Staff Command & Incident Response dispatcher ---
function initIncidentCommand() {
  const form = document.getElementById('incident-form');
  const jamBtn = document.getElementById('btn-inject-bottleneck');
  const resetBtn = document.getElementById('btn-reset-simulation');
  
  // Incident Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    triggerVisualBeep();
    
    const type = document.getElementById('incident-type').value;
    const location = document.getElementById('incident-location').value;
    const severity = document.getElementById('incident-severity').value;
    const description = document.getElementById('incident-desc').value;
    
    // Clear form fields
    form.reset();
    
    // Generate loader for Action plan
    const iapContainer = document.getElementById('iap-content-body');
    const priorityBadge = document.getElementById('iap-priority-badge');
    
    priorityBadge.textContent = "ANALYZING...";
    priorityBadge.className = "badge badge-critical animate-pulse";
    iapContainer.innerHTML = `
      <div class="iap-empty-state">
        <i class="fa-solid fa-microchip-ai animate-spin" style="font-size: 2.5rem; color: var(--color-primary);"></i>
        <p>Consulting Google Gemini. Synthesizing MetLife Stadium safety protocols and dispatch directives...</p>
      </div>
    `;

    try {
      const response = await fetch('/api/incident-response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, location, severity, description })
      });
      const data = await response.json();
      
      renderIncidentActionPlan(data.plan, data.incident);
      
    } catch (err) {
      console.error('Incident Response generation failed:', err);
      iapContainer.innerHTML = `
        <div class="iap-empty-state">
          <i class="fa-solid fa-triangle-exclamation text-red"></i>
          <p>Unable to generate action plan. Please check server connection logs.</p>
        </div>
      `;
    }
  });

  // Inject Gate Bottleneck Jam simulator
  jamBtn.addEventListener('click', () => {
    triggerVisualBeep();
    showToastNotification("Simulation Triggered", "Injecting High Passenger Congestion Event at Verizon Gate (North)...");
    updateTelemetry('gate_jam');
  });

  resetBtn.addEventListener('click', () => {
    triggerVisualBeep();
    showToastNotification("Simulation Reset", "Re-centering stadium traffic vectors to standard flows.");
    updateTelemetry('reset');
  });
}

function renderIncidentActionPlan(plan, incident) {
  const iapContainer = document.getElementById('iap-content-body');
  const priorityBadge = document.getElementById('iap-priority-badge');
  
  if (!iapContainer || !plan) return;
  
  // Set priority badge
  priorityBadge.textContent = plan.priority;
  priorityBadge.className = `badge badge-${plan.priority.toLowerCase()}`;
  
  // Render staff badges
  const staffBadges = plan.dispatchedStaff.map(s => `<span class="staff-badge">${s}</span>`).join('');
  
  // Render checklist items
  const checklistHtml = plan.actions.map((act, idx) => `
    <label class="checklist-item" id="check-item-${idx}">
      <input type="checkbox" class="checklist-checkbox" onchange="toggleChecklistItem(${idx})">
      <span class="checklist-text">${act}</span>
    </label>
  `).join('');

  iapContainer.innerHTML = `
    <div class="iap-header animate-slide-up">
      <h4 class="iap-title">${incident.type.replace('_', ' ').toUpperCase()} • ${incident.location}</h4>
      <div class="iap-meta">Reported ${new Date().toLocaleTimeString()} • Severity: ${incident.severity.toUpperCase()}</div>
    </div>
    
    <div class="iap-staff-box animate-slide-up">
      <h5>Tactical Dispatch Orders</h5>
      <div class="staff-badges-row">
        ${staffBadges}
      </div>
    </div>

    <div class="iap-checklist animate-slide-up">
      ${checklistHtml}
    </div>

    <div class="iap-safety-precautions animate-slide-up">
      <strong><i class="fa-solid fa-shield-halved"></i> COMMAND SAFETY BRIEFING:</strong> ${plan.safetyPrecautions}
    </div>
  `;
}

// Interactive checkmark action toggling lines
window.toggleChecklistItem = function(index) {
  const item = document.getElementById(`check-item-${index}`);
  const checkbox = item.querySelector('.checklist-checkbox');
  
  if (checkbox.checked) {
    item.classList.add('checked');
    triggerVisualBeep();
  } else {
    item.classList.remove('checked');
  }
};

// --- Staff Multilingual Translator Bridge UI ---
function initTranslatorBridge() {
  const inputEl = document.getElementById('trans-input-text');
  const outputEl = document.getElementById('trans-output-text');
  const tipEl = document.getElementById('trans-cultural-tip');
  const btnTranslate = document.getElementById('btn-translate-run');
  const btnMic = document.getElementById('btn-speak-fan');
  
  const fromSelect = document.getElementById('trans-lang-from');
  const toSelect = document.getElementById('trans-lang-to');

  btnTranslate.addEventListener('click', async () => {
    const text = inputEl.value.trim();
    if (!text) return;
    
    triggerVisualBeep();
    outputEl.textContent = "Consulting Gemini Translator Bridge...";
    tipEl.textContent = "Translating sentence semantics and compiling gesture advice guidelines...";
    
    const fromLang = fromSelect.value;
    const toLang = toSelect.value;

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, fromLang, toLang })
      });
      const data = await response.json();
      
      outputEl.textContent = data.translation.translatedText;
      tipEl.textContent = data.translation.communicationTip;
      
    } catch (err) {
      console.error('Translation call failed:', err);
      outputEl.textContent = "Translation service failed to resolve. Check back-end link.";
      tipEl.textContent = "Provide manual escort to nearby guest relations desk.";
    }
  });

  // Simulator helper: Populates random common questions on mic click
  btnMic.addEventListener('click', () => {
    triggerVisualBeep();
    const query = presetFanQueries[presetIndex];
    
    inputEl.value = query.text;
    fromSelect.value = query.lang;
    
    presetIndex = (presetIndex + 1) % presetFanQueries.length;
    showToastNotification("Preset Fan Audio Loaded", "Audio converted to text. Press 'Translate Query'.");
  });
}

// --- Visual feedback cues and helper utilities ---

function triggerVisualBeep() {
  const beeper = document.getElementById('visual-audio-beeps');
  if (!beeper) return;
  
  beeper.style.backgroundColor = "rgba(59, 130, 246, 0.4)";
  beeper.classList.remove('hidden');
  
  setTimeout(() => {
    beeper.classList.add('hidden');
  }, 80);
}

function showToastNotification(title, message) {
  // Check if active container exists, or build one
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.right = '20px';
    container.style.zIndex = '9999';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '10px';
    document.body.appendChild(container);
  }
  
  const toast = document.createElement('div');
  toast.className = 'card-glass animate-slide-up';
  toast.style.padding = '0.75rem 1.25rem';
  toast.style.borderLeft = '4px solid var(--color-success)';
  toast.style.backgroundColor = 'rgba(13, 18, 34, 0.95)';
  toast.style.maxWidth = '320px';
  toast.style.fontSize = '0.82rem';
  toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5)';
  
  toast.innerHTML = `
    <div style="font-weight: 700; display:flex; align-items:center; gap:0.5rem; color:var(--text-main);">
      <i class="fa-solid fa-circle-check text-success"></i> ${title}
    </div>
    <div style="color: var(--text-muted); margin-top:0.25rem; line-height:1.4;">${message}</div>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// --- Match Ticker: Countdown + Live Simulation (ESP vs ARG, Final, Jul 19 2026, 3PM ET) ---
function initMatchSimulation() {
  const scoreEl   = document.getElementById('live-match-score');
  const timeEl    = document.getElementById('live-match-time');
  const commentEl = document.getElementById('live-match-comment');
  const badgeEl   = document.getElementById('match-ticker-badge');
  const countdownEl = document.getElementById('match-countdown');

  // Kickoff: July 19 2026, 3:00 PM Eastern Time (UTC-4 in summer = 19:00 UTC)
  const kickoffUTC = new Date('2026-07-19T19:00:00Z');

  // Pre-match rotating teasers
  const preTeasers = [
    "Final · MetLife Stadium · Jul 19 · KO 3 PM ET",
    "✓ 3rd Place: England 6–4 France",
    "Spain looking for their 2nd World Cup title",
    "Argentina are 2-time defending champions",
    "Can Messi lift the trophy once again?",
    "World Cup Final · Spain vs Argentina",
  ];
  let teaserIdx = 0;

  // Live commentary once match starts
  const commentary = {
    1:  "KICKOFF! Spain vs Argentina — The World Cup Final is UNDERWAY!",
    5:  "Early possession battle. Argentina controlling in midfield.",
    10: "Spain's first chance — Yamal drives forward but blocked.",
    15: "Argentina building pressure. Lautaro Martínez testing the Spanish defence.",
    20: "YELLOW CARD: Romero booked for a late challenge on Morata.",
    25: "Spain on the attack. Williams whips a cross — headed clear.",
    30: "Argentina corner — cleared by Laporte. Spain counter quickly.",
    35: "SHOT! Mac Allister from 25 yards — straight at Simón!",
    40: "40' — End-to-end action. Both managers animated on the touchline.",
    45: "45' +3' — HALF TIME: Spain 0–0 Argentina. Tight first half.",
    50: "SECOND HALF UNDERWAY. Spain pushing forward from the start.",
    55: "⚽ GOAL! ARGENTINA! Lautaro Martínez taps in from a De Paul cross. ESP 0–1 ARG!",
    60: "Spain respond — Pedri and Olmo brought on.",
    65: "⚽ GOAL! SPAIN! Yamal drives low into the corner! ESP 1–1 ARG!",
    70: "MetLife erupts! Level game — 20 minutes left in regulation!",
    75: "Argentina countering dangerously. Álvarez skips past Cucurella — shot wide!",
    78: "⚽⚽ GOAL! Mac Allister thunderbolt from 30 yards! ESP 1–2 ARG!",
    82: "VAR CHECK: Spain penalty appeal — NO PENALTY given.",
    85: "85' — Spain throwing everything forward. 5 mins to save their World Cup!",
    88: "⚽⚽⚽ GOAL! MORATA! Header from a Carvajal cross! ESP 2–2 ARG!",
    90: "90' — FIVE MINUTES STOPPAGE TIME signalled by fourth official!",
    92: "90+2': Rodri hits the bar for Spain! AGONISING!",
    95: "FULL TIME (90') — Spain 2–2 Argentina — EXTRA TIME!"
  };

  let matchStarted = false;
  let simMinute = 0;
  let scoreESP = 0;
  let scoreARG = 0;
  let stoppageTime = 0;
  let matchEnded = false;

  function formatCountdown(ms) {
    if (ms <= 0) return null;
    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    if (h > 0) return `${h}h ${m}m`;
    if (m > 0) return `${m}m ${s}s`;
    return `${s}s`;
  }

  function tick() {
    const now = new Date();
    const msLeft = kickoffUTC - now;

    if (!matchStarted && msLeft > 0) {
      // ── PRE-MATCH COUNTDOWN ──
      const cd = formatCountdown(msLeft);
      if (timeEl) timeEl.textContent = `KO in ${cd}`;
      if (countdownEl) {
        teaserIdx = (teaserIdx + 1) % preTeasers.length;
        countdownEl.textContent = preTeasers[teaserIdx];
      }
      return;
    }

    // ── MATCH HAS KICKED OFF ──
    if (!matchStarted) {
      matchStarted = true;
      if (badgeEl) {
        badgeEl.textContent = 'LIVE SF2';
        badgeEl.style.background = '#ef4444';
        badgeEl.style.animation = 'pulse-red 2s infinite';
      }
      if (scoreEl) scoreEl.textContent = '0 - 0';
      if (timeEl)  { timeEl.textContent = "1' KO!"; timeEl.style.color = 'var(--color-success)'; }
      simMinute = 1;
    }

    if (matchEnded) return;

    // Increment simulated time
    if (simMinute < 90) {
      simMinute++;
    } else {
      stoppageTime++;
      if (stoppageTime > 5) { matchEnded = true; }
    }

    // Score triggers
    if (simMinute === 55) { scoreARG = 1; }
    if (simMinute === 65) { scoreESP = 1; }
    if (simMinute === 78) { scoreARG = 2; }
    if (simMinute === 88) { scoreESP = 2; }

    // Update score
    if (scoreEl) scoreEl.textContent = `${scoreESP} - ${scoreARG}`;

    // Update clock
    if (timeEl) {
      if (simMinute < 90) {
        const rem = 90 - simMinute;
        timeEl.textContent = `${simMinute}' (${rem}m left)`;
      } else if (stoppageTime <= 5) {
        timeEl.textContent = `90+${stoppageTime}' (stoppage)`;
      } else {
        timeEl.textContent = `Full Time — Extra Time!`;
        timeEl.style.color = 'var(--color-warning)';
      }
    }

    // Commentary
    if (commentEl) {
      const key = simMinute < 90 ? simMinute : (90 + stoppageTime);
      const roundedKey = Object.keys(commentary).map(Number).filter(k => k <= key).pop();
      const text = commentary[roundedKey] || 'Spain and Argentina locked in a fierce World Cup battle.';
      const isGoal = text.includes('⚽') || text.includes('GOAL');
      const isVAR  = text.includes('VAR') || text.includes('PENALTY');
      const icon = isGoal ? '<i class="fa-solid fa-circle-exclamation" style="color:#f59e0b;"></i>'
                 : isVAR  ? '<i class="fa-solid fa-whistle" style="color:#60a5fa;"></i>'
                           : '<i class="fa-solid fa-circle-play text-success"></i>';
      commentEl.innerHTML = `${icon} ${text}`;
      if (isGoal) { showToastNotification('⚽ GOAL!', text); triggerVisualBeep(); }
    }
  }

  // Countdown ticks every second pre-kickoff, every 6s post-kickoff (1 sim-min = 6s)
  setInterval(() => {
    const now = new Date();
    const msLeft = kickoffUTC - now;
    if (!matchStarted && msLeft > 0) {
      // Just update the countdown text, no full tick
      const cd = formatCountdown(msLeft);
      if (timeEl) timeEl.textContent = `KO in ${cd}`;
    }
  }, 1000);

  // Teaser rotator every 5s pre-match
  setInterval(() => {
    if (!matchStarted) {
      teaserIdx = (teaserIdx + 1) % preTeasers.length;
      if (countdownEl) countdownEl.textContent = preTeasers[teaserIdx];
    }
  }, 5000);

  // Main match simulation tick every 6 seconds post-kickoff
  setInterval(() => {
    const now = new Date();
    if (now >= kickoffUTC) tick();
  }, 6000);

  // Run once immediately to set initial state
  tick();
}




// --- Global Language Switching ---
function initLanguageSelector() {
  const select = document.getElementById('global-lang-select');
  if (!select) return;

  select.addEventListener('change', (e) => {
    const lang = e.target.value;
    state.globalLanguage = lang;
    translatePage(lang);

    // Sync the chat language selector
    const chatLangSelect = document.getElementById('chat-lang-select');
    if (chatLangSelect) {
      // Only sync if the lang exists as an option
      const chatOptions = Array.from(chatLangSelect.options).map(o => o.value);
      if (chatOptions.includes(lang)) chatLangSelect.value = lang;
    }

    // Sync the translator "from" selector
    const transFromSelect = document.getElementById('trans-lang-from');
    if (transFromSelect) {
      const opts = Array.from(transFromSelect.options).map(o => o.value);
      if (opts.includes(lang)) transFromSelect.value = lang;
    }

    // Handle Arabic RTL layout
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    // Toast notification in the selected language
    const toastTitles = { en: "Language Switched", es: "Idioma Cambiado", fr: "Langue Modifiée", pt: "Idioma Alterado", ar: "تم تغيير اللغة", de: "Sprache Gewechselt" };
    const toastMsgs = { en: "Dashboard translated successfully.", es: "Panel traducido con éxito.", fr: "Tableau de bord traduit.", pt: "Painel traduzido com sucesso.", ar: "تمت الترجمة بنجاح.", de: "Dashboard erfolgreich übersetzt." };
    showToastNotification(toastTitles[lang] || "Language Switched", toastMsgs[lang] || "Dashboard translated.");
  });
}

function translatePage(lang) {
  const elements = document.querySelectorAll('[data-translate]');
  const dict = TRANSLATIONS[lang] || TRANSLATIONS['en'];

  elements.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (!dict[key]) return;

    const icon = el.querySelector('i');
    if (icon) {
      const iconHtml = icon.outerHTML;
      el.innerHTML = `${iconHtml} ${dict[key]}`;
    } else {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });
}


