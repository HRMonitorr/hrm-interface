import { postWithBearer } from "https://jscroot.github.io/api/croot.js";
import { PostLogin, ResponseLogin } from "../config/config.js";
import { URLLogin, tokenlogin } from "../template/template.js";

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("formlogin");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    let data = PostLogin();
    postWithBearer(URLLogin, tokenlogin, data, ResponseLogin);
  });
});
