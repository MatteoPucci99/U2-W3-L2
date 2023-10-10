const userInputField = document.getElementById("username");
const saveButton = document.getElementById("save-button");
const deleteButton = document.getElementById("delete-button");
const savedNameContainer = document.getElementById("savedName");
const localStorageKey = "username-memory";
const savedName = localStorage.getItem(localStorageKey);
console.log(savedName);

if (savedName) {
  savedNameContainer.innerHTML = `${savedName}`;
}

const save = () => {
  localStorage.setItem(localStorageKey, userInputField.value);
  alert("Dati Nome Utente salvati con successo !");
  savedNameContainer.innerHTML = `${userInputField.value}`;
  userInputField.value = "";
};

const reset = () => {
  const existingData = localStorage.getItem(localStorageKey);
  if (existingData) {
    localStorage.removeItem(localStorageKey);
    savedNameContainer.innerHTML = "";
  } else {
    alert("Inserisci prima i dati");
  }
};

deleteButton.addEventListener("click", reset);
saveButton.addEventListener("click", save);
