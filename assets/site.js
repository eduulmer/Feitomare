const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const navbtn = document.getElementById("navbtn");
const navmobile = document.getElementById("navmobile");

if (navbtn && navmobile) {
  navbtn.addEventListener("click", () => {
    navmobile.hidden = !navmobile.hidden;
  });
}

// Configure your WhatsApp link here:
const WHATSAPP_NUMBER_E164 = ""; // example: "5548999999999"
const whats = document.getElementById("whatslink");
if (whats) {
  if (WHATSAPP_NUMBER_E164) {
    const msg = encodeURIComponent("Olá! Estou com uma dúvida sobre a hospedagem Feito Maré.");
    whats.href = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${msg}`;
  } else {
    whats.href = "#";
  }
}
