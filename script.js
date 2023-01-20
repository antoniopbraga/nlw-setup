const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  // const today = '14/01'
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("dia já incluso 🟥")
    return
  }

  alert("dia adicionado ✔")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@Habits", JSON.stringify(nlwSetup.data))
}

//const data = {
// run: ["01-01", "01-02", "01-03", "01-04", "01-05"],
// takePills: ["01-01", "01-02", "01-03", "01-04", "01-05"],
// journal: ["01-01", "01-02", "01-03", "01-04", "01-05"],}

const data = JSON.parse(localStorage.getItem("NLWSetup@Habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
