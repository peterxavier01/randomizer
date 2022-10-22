const input = document.querySelector(".password-length");
const output = document.querySelector(".output-password");
const button = document.querySelector("form button");
const clipboard = document.querySelector(".fa-clipboard-list");
const outputContainer = document.querySelector(".output-container");

function onInputFocus() {
  input.type = "text";
  input.setSelectionRange(0, 99999);
  input.type = "number";
}

input.addEventListener("keyup", () => {
  const inputValue = Number(input.value);
  if (inputValue === null || inputValue < 6) {
    button.classList.add("disabled");
    button.classList.remove("enabled");
    button.disabled = true;
  }

  if (inputValue > 6) {
    button.classList.remove("disabled");
    button.classList.add("enabled");
    button.disabled = false;
  }
});

const generatePassword = (e) => {
  e.preventDefault();
  if (input.value !== "") {
    outputContainer.classList.add("visible");
  }
  var length = input.value,
    charset =
      'abcdefghijklmnopqrstABCDEFGHIJKLMNOPQRST0123456789#@!~$%^&*()_+=-}{[]|";<>?/',
    returnedValue = "";

  for (var i = 0, n = charset.length; i < length; ++i) {
    returnedValue += charset.charAt(Math.floor(Math.random() * n));
  }
  output.innerText = returnedValue;
};

button.addEventListener("click", generatePassword);

clipboard.addEventListener("click", (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(output.innerText);
  alert("Copied password: " + output.innerText);

  input.select();
  onInputFocus();
});
