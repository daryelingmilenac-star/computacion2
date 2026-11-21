// ==========================================
// 1. CONEXIÓN A SUPABASE (PROYECTO: Computacion2)
// ==========================================
const SUPABASE_URL = "https://ykinlnoxkfkjhhetybgw.supabase.co";
const SUPABASE_API_KEY = "sb_publishable_HiQC-ZoVo80C95Zszcn7Rg_o_8fJmiA";
const REST_ENDPOINT = `${SUPABASE_URL}/rest/v1/comentarios`;

const supabaseHeaders = {
  apikey: SUPABASE_API_KEY,
  Authorization: `Bearer ${SUPABASE_API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

// ==========================================
// 2. MENÚ RESPONSIVO
// ==========================================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// ==========================================
// 3. CARRUSEL INFORMATIVO
// ==========================================
const slides = document.querySelectorAll(".carousel-slide");
const dotsContainer = document.getElementById("carouselDots");
let currentSlide = 0;
let dots = [];

if (slides.length > 0 && dotsContainer) {
  slides.forEach((_, idx) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (idx === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  dots = document.querySelectorAll(".dot");
}

function goToSlide(index) {
  if (slides.length === 0) return;
  slides[currentSlide].classList.remove("active");
  if (dots[currentSlide]) dots[currentSlide].classList.remove("active");

  currentSlide = (index + slides.length) % slides.length;

  slides[currentSlide].classList.add("active");
  if (dots[currentSlide]) dots[currentSlide].classList.add("active");
}

const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");

if (prevBtn)
  prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
if (nextBtn)
  nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));

if (slides.length > 1) {
  setInterval(() => goToSlide(currentSlide + 1), 6000);
}

// ==========================================
// 4. PLAN DE ASIGNATURAS POR MODALIDAD (UNHSJM)
// ==========================================
const planAsignaturas = [
  {
    semestre: "I SEMESTRE",
    materias: [
      "Matemática Introductoria",
      "Técnicas y Estrategias de Comunicación",
      "Filosofía",
      "Geometría Analítica",
      "Historia de Nicaragua",
    ],
  },
  {
    semestre: "II SEMESTRE",
    materias: [
      "Algoritmos",
      "Composición y Redacción Técnica",
      "Género en la vida Cotidiana",
      "Cálculo I",
      "Estadísticas Descriptivas e Inferencial",
    ],
  },
  {
    semestre: "III SEMESTRE",
    materias: [
      "Programación",
      "Estructuras Discretas",
      "Física I",
      "Cálculo II",
      "Libre I(General)",
      "Álgebra Lineal para Computación",
    ],
  },
  {
    semestre: "IV SEMESTRE",
    materias: [
      "Estructura de Datos",
      "Base de Datos I",
      "Física II",
      "Cálculo III",
      "Métodos y Técnicas de Investigación",
      "Análisis Numérico para Ingeniería",
    ],
  },
  {
    semestre: "V SEMESTRE",
    materias: [
      "Programación Orientada a Objeto",
      "Base de Datos II",
      "Circuitos Eléctricos",
      "Metodología de la Investigación",
      "Prácticas de Familiarización y Profesionales",
    ],
  },
  {
    semestre: "VI SEMESTRE",
    materias: [
      "Ingeniería de Requerimientos",
      "Gráfica asistida por Computadoras",
      "Sistemas Digitales",
      "Simulación por Computadores",
      "Optativa I - Lenguajes Formales",
      "Prácticas de Familiarización y Profesionalización",
    ],
  },
  {
    semestre: "VII SEMESTRE",
    materias: [
      "Análisis y Diseño",
      "Sistemas Operativos",
      "Arquitectura de Computadoras I",
      "Cultura de Paz",
      "Lenguajes, Compiladores e Intérprete",
      "Prácticas de Familiarización y Profesionalización",
    ],
  },
  {
    semestre: "VIII SEMESTRE",
    materias: [
      "Ingeniería del Software I",
      "Diseño asistido por Computadora",
      "Arquitectura de Computadoras II",
      "Análisis Algorítmico Avanzado",
      "Redes de Computadoras",
      "Formas de Culminación de Estudios",
    ],
  },
  {
    semestre: "IX SEMESTRE",
    materias: [
      "Ingeniería del Software II",
      "Programación Móvil",
      "Libre II (profesionalizante)",
      "Sistemas Distribuidos",
      "Sistemas de Control",
      "Optativa II",
      "Formas de Culminación de Estudios",
    ],
  },
  {
    semestre: "X SEMESTRE",
    materias: [
      "Formulación y Evaluación de Proyectos Computacionales",
      "Programación Web",
      "Inteligencia Artificial",
      "Robótica",
      "Libre III (profesionalizante)",
      "Formas de Culminación de Estudios",
    ],
  },
];

const semestersGrid = document.getElementById("semestersGrid");
const modalityNote = document.getElementById("modalityNote");

function renderPlan(modalidad) {
  if (!semestersGrid) return;
  semestersGrid.innerHTML = "";

  if (modalityNote) {
    if (modalidad === "regular") {
      modalityNote.innerHTML =
        "<strong>Modalidad Regular (Turno Matutino):</strong> Cursado presencial de lunes a viernes durante 4 ½ años (10 semestres).";
    } else {
      modalityNote.innerHTML =
        "<strong>Modalidad por Encuentro (Sabatino):</strong> Mismo pensum de 10 semestres con sesiones presenciales intensivas y apoyo en EVA UNHSJM.";
    }
  }

  planAsignaturas.forEach((bloque) => {
    const card = document.createElement("div");
    card.className = "semester-card";
    const itemsHTML = bloque.materias.map((m) => `<li>${m}</li>`).join("");
    card.innerHTML = `<h3>${bloque.semestre}</h3><ul>${itemsHTML}</ul>`;
    semestersGrid.appendChild(card);
  });
}

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderPlan(btn.dataset.modality);
  });
});

renderPlan("regular");

// ==========================================
// 5. FORMULARIO Y CONEXIÓN A SUPABASE
// ==========================================
const commentForm = document.getElementById("commentForm");
const commentsList = document.getElementById("commentsList");
const formStatus = document.getElementById("formStatus");

function escapeHTML(str) {
  return String(str).replace(
    /[&<>"']/g,
    (m) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[m],
  );
}

async function cargarComentarios() {
  if (!commentsList) return;

  try {
    const res = await fetch(
      `${REST_ENDPOINT}?select=id,nombre,perfil,mensaje,created_at&order=created_at.desc`,
      {
        method: "GET",
        headers: supabaseHeaders,
      },
    );

    const text = await res.text();
    if (!res.ok) {
      commentsList.innerHTML = `<p style="color:#d90429;">Error HTTP ${res.status}: ${escapeHTML(text)}</p>`;
      return;
    }

    const data = JSON.parse(text);
    renderComentarios(data);
  } catch (err) {
    commentsList.innerHTML = `<p style="color:#d90429;">Error de conexión: ${escapeHTML(err.message)}</p>`;
  }
}

function renderComentarios(lista) {
  if (!commentsList) return;

  if (!lista || lista.length === 0) {
    commentsList.innerHTML = `<p class="loading-text">Aún no hay comentarios registrados. ¡Sé el primero en comentar!</p>`;
    return;
  }

  commentsList.innerHTML = lista
    .map(
      (c) => `
      <div class="comment-item">
        <div class="comment-header">
          <strong>${escapeHTML(c.nombre)}</strong>
          <span class="comment-badge">${escapeHTML(c.perfil || "Visitante")}</span>
        </div>
        <p>${escapeHTML(c.mensaje)}</p>
        <small style="color:#64748b;">
          ${c.created_at ? new Date(c.created_at).toLocaleString("es-NI") : "Reciente"}
        </small>
      </div>
    `,
    )
    .join("");
}

if (commentForm) {
  commentForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nuevoComentario = {
      nombre: document.getElementById("nombre").value.trim(),
      correo: document.getElementById("correo").value.trim(),
      perfil: document.getElementById("perfil").value,
      mensaje: document.getElementById("mensaje").value.trim(),
    };

    if (formStatus) {
      formStatus.textContent = "Guardando comentario...";
      formStatus.style.color = "#0b4f8a";
    }

    try {
      const res = await fetch(REST_ENDPOINT, {
        method: "POST",
        headers: supabaseHeaders,
        body: JSON.stringify(nuevoComentario),
      });

      const text = await res.text();
      if (!res.ok) {
        if (formStatus) {
          formStatus.textContent = `Error HTTP ${res.status}: ${text}`;
          formStatus.style.color = "#d90429";
        }
        return;
      }

      if (formStatus) {
        formStatus.textContent = "¡Comentario guardado exitosamente!";
        formStatus.style.color = "#15803d";
      }

      commentForm.reset();
      cargarComentarios();
    } catch (err) {
      if (formStatus) {
        formStatus.textContent = "Error al enviar: " + err.message;
        formStatus.style.color = "#d90429";
      }
    }
  });
}

cargarComentarios();
