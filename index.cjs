const glassEls = document.querySelectorAll(".glass")
glassEls.forEach(gEl => gEl.addEventListener("click", handleOnClick))
const pickedEl = document.querySelector(".picked")

let currentContent = ""
let currentAction = "pick"
let pickedGlassRef

function handleOnClick(e) {
    if (currentAction === "pick") {
        const content = e.target.getAttribute("data-content")
        if (!content)
            return

        currentContent = e.target.getAttribute("data-content")
        e.target.setAttribute("data-content", "")
        e.target.setAttribute("data-selected", "true")
        pickedGlassRef = e.target
        pickedEl.setAttribute("data-content", currentContent)
        currentAction = "move"
    } else {
        const content = e.target.getAttribute("data-content")
        if (content)
            return

        pickedGlassRef.removeAttribute("data-selected")
        e.target.setAttribute("data-content", currentContent)
        pickedEl.removeAttribute("data-content", currentContent)
        currentContent = ""
        currentAction = "pick"
    }
}