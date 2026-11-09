const glassEls = document.querySelectorAll(".glass")
glassEls.forEach(gEl => gEl.addEventListener("click", handleOnClick))

let currentContent = ""
let currentAction = "pick"

function handleOnClick(e) {
    if (currentAction === "pick") {
        const content = e.target.getAttribute("data-content")
        if (!content)
            return

        currentContent = e.target.getAttribute("data-content")
        e.target.setAttribute("data-content", "")
        currentAction = "move"
    } else {
        const content = e.target.getAttribute("data-content")
        if (content)
            return

        e.target.setAttribute("data-content", currentContent)
        currentContent = ""
        currentAction = "pick"
    }
}