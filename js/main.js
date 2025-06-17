const tabCategory = document.getElementsByClassName("tab-category");
const tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabName) {
  for (let tabcat of tabCategory) {
    tabcat.classList.remove("active-tab");
  }
  for (let tabCon of tabContents) {
    tabCon.classList.remove("active-content");
  }
  event.currentTarget.classList.add("active-tab");
  document.getElementById(tabName).classList.add("active-content");
}

let sideMenu = document.getElementById("side-menu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}

function sendMail(event) {
  event.preventDefault();
  var params = {
    name: document.getElementById("fullname").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_17ao2gk";
  const templateID = "template_pw4hkfi";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("fullname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your Message Sent Sucessfully");
    })
    .catch((err) => console.log(err));
}
