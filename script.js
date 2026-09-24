const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("mainNav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => {
      t.classList.remove("active");
    });

    document.querySelectorAll(".tab-panel").forEach((panel) => {
      panel.classList.remove("active");
    });

    tab.classList.add("active");

    const target = document.getElementById(tab.dataset.tab);

    if (target) {
      target.classList.add("active");
    }
  });
});

document.querySelectorAll(".accordion button").forEach((button) => {
  button.addEventListener("click", () => {
    const body = button.nextElementSibling;

    if (!body) return;

    const isOpen = body.style.maxHeight;

    document.querySelectorAll(".acc-body").forEach((item) => {
      item.style.maxHeight = null;
    });

    document.querySelectorAll(".accordion button span").forEach((span) => {
      span.textContent = "+";
    });

    if (!isOpen) {
      body.style.maxHeight = body.scrollHeight + "px";

      const span = button.querySelector("span");

      if (span) {
        span.textContent = "−";
      }
    }
  });
});

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

const modalData = {
  vocacional: {
    title: "Orientación vocacional",
    text: "El documento plantea actividades para identificar dudas, gustos, habilidades e intereses y conocer diferentes opciones de carrera."
  },

  academico: {
    title: "Apoyo académico",
    text: "La propuesta contempla un componente académico que pueda explicar nuevamente temas, ofrecer ejemplos y ejercicios y ampliar contenidos."
  },

  emocional: {
    title: "Seguimiento emocional",
    text: "La propuesta contempla registrar periódicamente cómo se siente el estudiante y reconocer señales de alerta para sugerir apoyo profesional o rutas institucionales."
  },

  comunidad: {
    title: "Red de apoyo",
    text: "La propuesta contempla una red de apoyo entre estudiantes con espacios seguros y moderados para compartir dificultades y favorecer el sentido de pertenencia."
  }
};

document.querySelectorAll("[data-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const data = modalData[button.dataset.modal];

    if (!data || !modal || !modalContent) return;

    modalContent.innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.text}</p>
    `;

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  if (!modal) return;

  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

const modalClose = document.getElementById("modalClose");

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
