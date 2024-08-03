const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const nameInput = document.getElementById("name-input")
const helloDiv = document.getElementById("hello-div")
const helloText = document.getElementById("hello-text")
const myNameIsDiv = document.getElementById("my-name-is-div")
const wellcomediv = document.getElementById("wellcome-div")
const card = document.getElementById("card")
const statusPage = document.getElementById("status-page")

nameInput.addEventListener("keyup", async function(e) {
    if (e.key == "Enter") {
        nameInput.classList.add("fadeout")
        await delay(1000)
        nameInput.style.display = "none"
        helloText.innerHTML = `Hello, ${nameInput.value}!`
        helloDiv.style.display = "block"
        helloDiv.classList.add("typewriter")
        await delay(2000)
        myNameIsDiv.style.display = "block"
        myNameIsDiv.classList.add("typewriter")
        await delay(4000)
        helloDiv.classList.add("fadeout")
        myNameIsDiv.classList.add("fadeout")
        await delay(1000)
        helloText.style.display = "none"
        myNameIsDiv.style.display = "none"
        wellcomediv.style.display = "block"
        wellcomediv.classList.add("typewriter")
        await delay(3500)
        wellcomediv.classList.add("fadeout")
        await delay(1000)
        wellcomediv.style.display = "none"
        card.classList.add("fadein")
        setTimeout(() => {
            card.style.display = "block"
        }, 1000);
    }
})

card.addEventListener("mouseover", function() {
    statusPage.classList.add("fadein")
    statusPage.style.display = "inline-block"
})

card.addEventListener("mouseout", function() {
    statusPage.style.display = "none"
})

statusPage.addEventListener("click", function() {
    window.open("https://status.trash-server.com/")
})

function detectMobile() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ]
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    })
}

if (detectMobile()) {
    document.body.remove()
    alert("You need to use a pc in order to view this page")
}