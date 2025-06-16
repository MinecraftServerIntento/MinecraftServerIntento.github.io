// Espera a que el DOM esté listo para cargar el menú
window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("menu-container");
  if (!container) return;

  // Cargar el contenido de menu.html dentro de #menu-container
  fetch("menu.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el menú");
      }
      return response.text();
    })
    .then(html => {
      container.innerHTML = html;
      initMenu(); // Inicia funcionalidad del menú una vez cargado
    })
    .catch(error => {
      console.error("Error cargando el menú:", error);
    });
});

// Función que alterna la visibilidad del menú
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu) {
    menu.classList.toggle("show");
  }
}

// Inicializa los eventos del menú después de cargarlo
function initMenu() {
  // Cierra el menú al hacer clic en cualquier enlace
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("menu");
      if (menu) {
        menu.classList.remove("show");
      }
    });
  });
}

/* --- BOTÓN DE DESCARGA --- */
document.querySelectorAll('.container .input').forEach(chk => {
  chk.addEventListener('change', function () {
    if (!this.checked) return;               // Solo al marcar
    const file = this.closest('.container').dataset.file;
    if (!file) return;

    // Crea y dispara un enlace de descarga invisible
    const a = document.createElement('a');
    a.href = file;
    a.download = '';                         // Fuerza descarga
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // (Opcional) desmarca el checkbox tras la descarga
    setTimeout(() => { this.checked = false; }, 4000);
  });
});