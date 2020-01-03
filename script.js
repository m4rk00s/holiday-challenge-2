const cors = require("cors");
const ul = document.getElementById("contacts");
const url = "https://serene-tundra-64006.herokuapp.com/contacts";

fetch(url, { mode: "no-cors" })
  .then(response => console.log(response))
  .catch(error => console.error(error));
