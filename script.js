// As únicas saídas externas são os links de Site e Aplicativo no HTML.
document.getElementById('year').textContent = new Date().getFullYear();

// Brilho discreto acompanhando o cursor (somente em dispositivos com mouse).
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.querySelectorAll('.access-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--x', `${event.clientX - rect.left}px`);
      card.style.setProperty('--y', `${event.clientY - rect.top}px`);
    });
  });
}
