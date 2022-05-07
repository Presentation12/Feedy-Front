filter = document.getElementById("filtro");
rows = document.querySelectorAll(".lineTable");
searchInput = document.querySelector(".barra");

filter.addEventListener("click", () => {

    tipo = document.getElementById("tipoOp").value;
    distrito = document.getElementById("distritoOp").value;
    const text = searchInput.value.toLowerCase();

    rows.forEach(row => {

        //quando se escolhe os dois filtros ou ambos estao limpos = "---"
        if ((row.querySelector(".tipo").textContent == tipo
            && row.querySelector(".distrito").textContent == distrito)
            || (tipo == "---" && distrito == "---")) {
            //barra de pesquisa
            if (row.querySelector(".nome").textContent.toLowerCase().startsWith(text)) {
                row.style.display = "";
            }
            else {
                row.style.display = "none";
            }
        }

        //quando nao se escolhe distrito, apenas tipo
        else if (row.querySelector(".tipo").textContent == tipo && distrito == "---") {
            //barra de pesquisa
            if (row.querySelector(".nome").textContent.toLowerCase().startsWith(text)) {
                row.style.display = "";
            }
            else {
                row.style.display = "none";
            }
        }

        //quando nao se escolhe tipo, apenas distrito
        else if (row.querySelector(".distrito").textContent == distrito && tipo == "---") {
            //barra de pesquisa
            if (row.querySelector(".nome").textContent.toLowerCase().startsWith(text)) {
                row.style.display = "";
            }
            else {
                row.style.display = "none";
            }
        }

        //quando nao existe o filtro
        else {
            row.style.display = "none";
        }
    })
})

rows.forEach(row => {
    row.addEventListener("click", () => {

        swal({
            title: "Detalhes",
            text: row.textContent,
            button: 'Ok'
        });
    })
});