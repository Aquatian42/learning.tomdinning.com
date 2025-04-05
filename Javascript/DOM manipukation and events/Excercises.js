const container1 = document.querySelector(".Excercise")

const pRed = document.createElement("p")
pRed.setAttribute("style", "color:red;")
pRed.textContent = "Hey I'm red!"
const h3Blue = document.createElement("h3")
h3Blue.setAttribute("style", "color:blue;")
h3Blue.textContent = "I'm a blue h3!"
const div = document.createElement("div")
div.setAttribute("style", "background-color:pink;")
const h1Div = document.createElement("h1")
h1Div.textContent = "I'm in a div"
const pMeToo = document.createElement("p")
pMeToo.textContent = "ME TOO!"
container1.appendChild(pRed)
container1.appendChild(h3Blue)
container1.appendChild(div)
div.appendChild(h1Div)
div.appendChild(pMeToo)
