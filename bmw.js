let listaProdutos;

fetch("dados.json")
  .then((response) => response.json())
  .then((data) => {
    listaProdutos = data 
    main();
  })
  .catch((error) => console.log("Erro ao acessar o arquivo " + error));

let main = () =>{
let main = document.querySelector("main");

let exibirProdutos = (lista) => {
  main.innerHTML = "";
  lista.map((item) => {
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

    let marca = document.createElement("p");
    main.appendChild(marca);
    div.appendChild(marca);
    marca.textContent = item.marca;
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
let marca = () => {
    listaProdutos.sort((a, b) => a.marca.localeCompare(b.marca));
    exibirProdutos(listaProdutos);

};
document.querySelector("#carro1").addEventListener("click", () => ordenar(listaProdutos))
document.querySelector("#carro2").addEventListener("click", () => ordenarPreso(listaProdutos))
document.querySelector("#carro3").addEventListener("click", () => marca(listaProdutos))

let pesquisa = () =>{

let potesia = document.querySelector("#motor1");

listaProdutos = listaProdutos.filter((caixa)=>{
if(potesia.value.toUpperCase().trim() === caixa.marca.toUpperCase().trim() ){
   return caixa;
}
if(potesia.value.toUpperCase().trim() === caixa.nome.toUpperCase().trim() ){
  return caixa;
}
if(potesia.value.trim() === caixa.preco.toString().trim() ){
  return caixa;
}

});
exibirProdutos(listaProdutos);
}
document.querySelector("#motor2").addEventListener("click", () => pesquisa())

}

