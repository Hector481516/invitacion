
export function createInvitation({ container, data }) {
  const { couple, message, event, actions } = data;

  const names = `
    <span>${escapeHTML(couple.firstName)}</span>
    <span class="invitation__ampersand">&</span>
    <span>${escapeHTML(couple.secondName)}</span>
  `;

  container.innerHTML = `
    <article class="invitation-card">
      <p class="invitation__eyebrow">
        ${escapeHTML(message.eyebrow)}
      </p>

      <h1 class="invitation__names">${names}</h1>

      <p class="invitation__subtitle">
        ${escapeHTML(message.title)}<br>
        ${escapeHTML(message.subtitle)}
      </p>

      <div class="invitation__divider"></div>

      <p class="invitation__date">
        <span>${escapeHTML(event.month)}</span>
        ${escapeHTML(event.date)}
        <span>${escapeHTML(String(event.year))}</span>
      </p>

      <p class="invitation__venue">
        ${escapeHTML(event.venue)}
      </p>

      <p class="invitation__city">
        ${escapeHTML(event.city)} · ${escapeHTML(event.time)}
      </p>

      <div class="invitation__divider"></div>

      <p class="invitation__closing">
        ¡Nos encantará compartir este día contigo!
      </p>

      <div class="invitation__actions">
        ${actions.rsvp ? `
          <button
            class="invitation__button"
            data-action="rsvp"
          >
            Confirmar asistencia
          </button>
        ` : ""}

        ${actions.location ? `
          <button
            class="invitation__button invitation__button--outline"
            data-action="location"
          >
            Ver ubicación
          </button>
        ` : ""}
      </div>
    </article>
  `;

  return {
    element: container
  };
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
