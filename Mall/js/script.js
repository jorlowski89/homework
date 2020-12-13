const shopsArr = Array.from(document.querySelectorAll("#CCC, #PepCo, #NeoNet, #MartesSport, #TXM"));
const shopsInfo = Array.from(document.querySelectorAll("#CCCInfo, #PepCoInfo, #NeoNetInfo, #MartesSportInfo, #TXMInfo"));

function clearInfo() {
    shopsInfo.forEach((itemInfo) => {
        itemInfo.classList.add("hideInfo")
    });
}

shopsArr.forEach((item) => {
    const child = Array.from(item.children)
    child.forEach(itemChild => {
        itemChild.style = ""
    })

    item.classList.add("moveDown");

    item.addEventListener("click", function activate() {
        shopsInfo.forEach((itemInfo) => {
            itemInfo.classList = "hideInfo"
        });

        const idInfo = document.querySelector(`#${item.id}Info`)

        idInfo.classList = "showInfo"

        if (item.classList == "moveDown") {
            shopsArr.forEach(element => {
                element.classList = "moveDown";
            })
            item.classList.toggle("moveDown");
            item.classList.toggle("moveUp");
            idInfo.classList = "showInfo"
        } else if (item.classList == "moveUp") {
            item.classList.toggle("moveDown");
            item.classList.toggle("moveUp");
            idInfo.classList = "hideInfo"
        }

    })
})

clearInfo();