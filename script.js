function saveData() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  localStorage.setItem("name", name);
  localStorage.setItem("address", address);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
}

function getData() {
  const name = localStorage.getItem("name");
  const address = localStorage.getItem("address");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");

  const userData = [name, address, email, phone];

  const userDiv = document.getElementById("userData");

  let content = "";
  for (let data of userData) {
    content += `<p>${data}</p>`;
  }
  userDiv.innerHTML = content;
}
