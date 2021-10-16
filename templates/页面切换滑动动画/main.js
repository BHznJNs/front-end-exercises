const CONTAINER = document.querySelector("#container")
const PAGENUM = CONTAINER.childElementCount
const BTNs = document.querySelectorAll(".btn")
let moved = 0

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

// 判断是否可以进行动画
function canBeMoved(toMove) {
    // 正在展示的页数
    let pageShowing = Math.abs(moved / 110) + 1
    //  如果最后一页且点击下一页
    if ((pageShowing >= PAGENUM) && toMove < 0) {
        return false
    //         如果第一页且点击上一页
    } else if ((pageShowing == 1) && toMove > 0) {
        return false
    } else {
        return true
    }
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
    if (!canBeMoved(toMove)){
        return
    }
    btnControler()

    CONTAINER.classList.add("changing")
    await sleep(1000)

    moved += toMove
    CONTAINER.style.left = moved + "vw"

    await sleep(1000)
    CONTAINER.classList.remove("changing")
}