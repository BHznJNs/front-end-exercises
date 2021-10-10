const CONTAINER = document.querySelector("#container")
const BTNs = document.querySelectorAll(".btn")
let moved = 0

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

// 在动画进行中禁用按钮
async function btnControler() {
    for (let btn of BTNs) {
        btn.style.pointerEvents="none"
    }
    await sleep(2000)
    for (let btn of BTNs) {
        btn.style.pointerEvents="auto"
    }
}

// 动画控制函数
async function pageChanger(toMove) {
    btnControler()

    CONTAINER.classList.add("changing")
    await sleep(1000)

    moved += toMove
    CONTAINER.style.left = moved + "vw"

    await sleep(1000)
    CONTAINER.classList.remove("changing")
}