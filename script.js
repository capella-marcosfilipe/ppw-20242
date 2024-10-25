function sendMessage() {
  const nome = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const message = nome + " " + address + " " + email;

  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank");
}
