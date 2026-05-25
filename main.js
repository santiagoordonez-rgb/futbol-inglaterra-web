// --- 0. MENÚ HAMBURGUESA ---
const menuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuBtn.innerText = navMenu.classList.contains('active') ? '✕' : '☰';
    });
}

// --- 1. SALUDO DINÁMICO ---
const parrafoSaludo = document.getElementById('greeting-text');
if (parrafoSaludo) {
    const esEspanol = document.documentElement.lang === 'es'; 
    const hora = new Date().getHours();
    let saludo = hora < 12 ? (esEspanol ? "¡Buen día! " : "Good morning! ") : 
                 hora < 18 ? (esEspanol ? "¡Buenas tardes! " : "Good afternoon! ") : 
                             (esEspanol ? "¡Buenas noches! " : "Good evening! ");
    parrafoSaludo.innerText = saludo + (esEspanol ? "Tradición, pasión e historia." : "Tradition, passion and history.");
}

// --- 2. MENÚ DESPLEGABLE (HOVER) ---
const clubsMenu = document.getElementById('clubs-menu');
const submenu = document.getElementById('submenu');
if (clubsMenu && submenu) {
    clubsMenu.addEventListener('mouseover', () => submenu.style.display = 'block');
    clubsMenu.addEventListener('mouseout', () => submenu.style.display = 'none');
}

// --- 3. SLIDER ---
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
if (slides.length > 0 && nextBtn) {
    let indexActual = 0;
    function mostrarSlide(index) {
        slides[indexActual].classList.remove('active');
        indexActual = (index + slides.length) % slides.length;
        slides[indexActual].classList.add('active');
    }
    nextBtn.addEventListener('click', () => mostrarSlide(indexActual + 1));
    prevBtn.addEventListener('click', () => mostrarSlide(indexActual - 1));
    setInterval(() => mostrarSlide(indexActual + 1), 4000);
}

// --- 4. CONTROL DE SECCIONES (PREMIER VS CHAMPIONSHIP) ---
const contenedorChamp = document.getElementById('championship-clubs');
const contenedorPremier = document.getElementById('premier-clubs');
const btnAlternar = document.getElementById('btn-championship');

// Función para mostrar Championship
function activarChampionship() {
    contenedorChamp.style.display = 'flex';
    contenedorPremier.style.display = 'none'; // Ocultamos Premier para dar foco
    const esEspanol = document.documentElement.lang === 'es';
    btnAlternar.innerText = esEspanol ? 'Ver Premier League' : 'Show Premier League';
}

// Función para mostrar Premier
function activarPremier() {
    contenedorChamp.style.display = 'none';
    contenedorPremier.style.display = 'flex';
    const esEspanol = document.documentElement.lang === 'es';
    btnAlternar.innerText = esEspanol ? 'Ver clubes de la Championship' : 'Show Championship Clubs';
}

// Evento del botón central
if (btnAlternar) {
    btnAlternar.addEventListener('click', () => {
        if (contenedorChamp.style.display === 'none') activarChampionship();
        else activarPremier();
    });
}

// NUEVO: Enlaces del Menú Dropdown
const linkPremier = document.getElementById('link-premier');
const linkChamp = document.getElementById('link-championship');

if (linkPremier) {
    linkPremier.addEventListener('click', (e) => {
        e.preventDefault();
        activarPremier();
        document.getElementById('clubs-section').scrollIntoView({ behavior: 'smooth' });
    });
}

if (linkChamp) {
    linkChamp.addEventListener('click', (e) => {
        e.preventDefault();
        activarChampionship();
        document.getElementById('clubs-section').scrollIntoView({ behavior: 'smooth' });
    });
}