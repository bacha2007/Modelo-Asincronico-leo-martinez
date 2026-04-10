const contenedor = document.getElementById("contenedor");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

let pagina = 0;
const limite = 10;

const consultarApi = async () => {
    try {
        const url = `https://dummyjson.com/products?limit=${limite}&skip=${pagina}`;
        const response = await fetch(url);
        const data = await response.json();

        renderData(data.products);

        btnPrev.disabled = pagina === 0;
        btnNext.disabled = pagina + limite >= data.total;

    } catch (error) {
        console.error("Error:", error);
    }
};

const renderData = (data) => {
    contenedor.innerHTML = "";

    data.forEach(product => {
        const article = document.createElement("article");

        article.innerHTML = `
            <h2>${product.title}</h2>
            <p>${product.brand}</p>
            <p>$${product.price}</p>
            <img src="${product.thumbnail}" width="150"/>
        `;

        contenedor.appendChild(article);
    });
};

btnNext.addEventListener("click", () => {
    pagina += limite;
    consultarApi();
});

btnPrev.addEventListener("click", () => {
    if (pagina >= limite) {
        pagina -= limite;
        consultarApi();
    }
});

consultarApi();

const inputBuscador = document.getElementById("buscador");
const btnBuscar = document.getElementById("btnBuscar");

const buscarApi = async (texto) => {
    try {
        const url = `https://dummyjson.com/products/search?q=${texto}`;
        const response = await fetch(url);
        const data = await response.json();

        renderData(data.products);

        btnPrev.disabled = true;
        btnNext.disabled = true;

    } catch (error) {
        console.error("Error en búsqueda:", error);
    }
};

btnBuscar.addEventListener("click", () => {
    const texto = inputBuscador.value;

    if (texto.trim() !== "") {
        buscarApi(texto);
    }
});

inputBuscador.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        btnBuscar.click();
    }
});