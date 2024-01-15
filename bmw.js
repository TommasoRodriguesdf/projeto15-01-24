const listaProdutos = [{
    id: 1,
    nome: "cavalo",
    preco: 10.10,
},
{
    id: 1,
    nome: "cavala",
    preco: 10.10,

}
];
let main = document.querySelector("main");
console.log(main);


listaProdutos.map(
   (item)=>{
      let p = document.createElement("p");
      main.appendChild(p);

      p.textContent = item.nome;
   }

);