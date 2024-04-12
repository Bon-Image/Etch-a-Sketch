const body = document.querySelector("body");
const container = document.querySelector("#container");
for (j = 0; j <= 50; j++) {
    let row = document.createElement("div")
    row.classList.add("r");
    for (let i = 0; i <= 50; i++) {
        let squar = document.createElement("div");
        squar.classList.add("s");
        row.appendChild(squar);
    }
    container.appendChild(row);

}
const changeColor = function (event) {
    if (event.target.classList.contains("s")){
        event.target.style.backgroundColor = "green"; 
    }

}

container.addEventListener("mouseout", changeColor)







/* const squars = document.getElementsByClassName("s");
squars.addEventListener("mouseleave", () => {
    console.log("Test")
}) */