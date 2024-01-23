let listaProdutos;

fetch("dados.json")
  .then((response) => response.json())
  .then((data) => {
    listaProdutos = data;
    exibirProdutos(listaProdutos);
  })
  .catch((error) => console.log("Erro ao acessar o arquivo " + error));

let main = document.querySelector("main");

let exibirProdutos = (lista) => {
  main.innerHTML = "";
  listaProdutos.map((item) => {
    let div = document.createElement("div");
    main.appendChild(div);

    let p = document.createElement("p");
    main.appendChild(p);
    div.appendChild(p);
    p.textContent = item.nome;

    let span = document.createElement("span");
    main.appendChild(span);
    div.appendChild(span);
    span.textContent = item.preco;

    let img = document.createElement("img");
    main.appendChild(img);
    div.appendChild(img);
    img.src = item.imagen;
  });
};
exibirProdutos(listaProdutos);
let cod = 0;
let ordenar = () => {
  if (cod === 0) {
    listaProdutos.sort((a, b) => a.nome.localeCompare(b.nome));
    exibirProdutos(listaProdutos);
    cod++;
  } else {
    listaProdutos.reverse((a, b) => a.nome.localeCompare(b.nome));
    exibirProdutos(listaProdutos);
    cod = 0;
  }
};
let ordenarPreso = () => {
  listaProdutos.sort((a, b) => a.preco - b.preco);
  exibirProdutos(listaProdutos);
};
