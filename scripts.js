const body = document.querySelector("body");
const container = document.querySelector("#container");
for (j = 0; j <= 5; j++) {
    let row = document.createElement("div")
    row.classList.add("r");
    for (let i = 0; i <= 5; i++) {
        let squar = document.createElement("div");
        squar.classList.add("s");
        row.appendChild(squar);
    }
    container.appendChild(row);
}
