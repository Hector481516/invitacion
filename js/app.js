
import { weddingData } from "./data.js";
import { createEnvelope } from "./components/envelope.js";
import { createInvitation } from "./components/invitation.js";

const app = document.querySelector("#app");
const openingScene = document.querySelector("#opening-scene");
const envelopeContainer = document.querySelector("#envelope-container");
const invitationContainer = document.querySelector("#invitation-container");

const envelope = createEnvelope({
  container: envelopeContainer,
  onOpen: handleEnvelopeOpened
});

function handleEnvelopeOpened() {
  openingScene.classList.add("is-finished");

  // Se revela la invitación una vez iniciada la apertura.
  invitationContainer.hidden = false;

  createInvitation({
    container: invitationContainer,
    data: weddingData
  });

  openingScene.setAttribute("aria-hidden", "true");

  // La sección inicial deja de ocupar el flujo visual.
  openingScene.style.display = "none";
}

// Delegación de acciones de la invitación.
invitationContainer.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;

  if (!action) return;

  if (action === "rsvp") {
    alert("Aquí conectaremos el formulario de confirmación.");
  }

  if (action === "location") {
    alert("Aquí conectaremos Google Maps o la ubicación del evento.");
  }
});
