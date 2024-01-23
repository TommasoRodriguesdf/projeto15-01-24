const listaProdutos = [{
    id: 1,
    nome: "cavalo",
    preco: 10.11,
    imagen:"https://cdn.autopapo.com.br/box/uploads/2021/10/20131814/motor-v8-big-block-chevrolet-10.4-632.jpg",
},
{
    id: 2,
    nome: "cavala",
    preco: 10.11,
    imagen:"https://d1gl66oyi6i593.cloudfront.net/wp-content/uploads/2018/03/Motor-V5.jpg",
},
{
    id: 3,
    nome: "cavale",
    preco: 10.11,
    imagen:"https://cdn.appdealersites.com.br/bamaq/2016-02-16-motor-mercedes2.webp",
}
];
let main = document.querySelector("main");

let exibirProdutos = (lista) => {
    main.innerHTML= "";
    listaProdutos.map(
        (item)=>{
           let div = document.createElement("div");
           main.appendChild(div);
     
           let p = document.createElement("p");
           main.appendChild(p);
           div.appendChild(p);
           p.textContent = item.nome;
     
           let span = document.createElement("span");
           main.appendChild(span);
           div.appendChild(span);
           span.textContent = item.preco
     
           let img = document.createElement("img");
           main.appendChild(img);
           div.appendChild(img);
           img.src = item.imagen;
     
         
        });
}
exibirProdutos(listaProdutos);
let cod = 0;
let ordenar = () =>{
    if(cod === 0){
        listaProdutos.sort((a,b)=>a.nome.localeCompare(b.nome));
        exibirProdutos(listaProdutos);
        cod++
    }
    else{
        listaProdutos.reverse((a,b)=>a.nome.localeCompare(b.nome));
        exibirProdutos(listaProdutos);
        cod=0;
    }
}


