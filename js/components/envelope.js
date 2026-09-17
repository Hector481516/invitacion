
export function createEnvelope({ container, onOpen }) {
  const stage = document.createElement("div");
  stage.className = "envelope-stage";

  stage.innerHTML = `
    <div
      class="envelope"
      role="button"
      tabindex="0"
      aria-label="Abrir sobre de invitación"
    >
      <div class="envelope__body"></div>
      <div class="envelope__paper"></div>
      <div class="envelope__side envelope__side--left"></div>
      <div class="envelope__side envelope__side--right"></div>
      <div class="envelope__flap"></div>
      <div class="envelope__seal" aria-hidden="true"></div>
    </div>
  `;

  container.replaceChildren(stage);

  const envelope = stage.querySelector(".envelope");
  let opened = false;

  function open() {
    if (opened) return;

    opened = true;
    envelope.classList.add("is-opening");
    envelope.setAttribute("aria-disabled", "true");

    // La invitación se muestra cuando el sobre ya comenzó a abrirse.
    window.setTimeout(() => {
      envelope.classList.add("is-open");
      onOpen?.();
    }, 1100);
  }

  envelope.addEventListener("click", open);

  envelope.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });

  return {
    open,
    element: envelope
  };
}
