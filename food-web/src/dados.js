const pedidos = [
    {id_pedido: 542685, dt: "17/01/2024", total: 150.45},
    {id_pedido: 542568, dt: "18/01/2024", total: 250.45},
    {id_pedido: 125685, dt: "19/01/2024", total: 300.00},
    {id_pedido: 320685, dt: "11/01/2023", total: 100.45},
    {id_pedido: 102685, dt: "10/10/2023", total: 90.50}
];

const produtos = [
    {
        id: 1, 
        nome: "Spicy Burguer", 
        descricao: "Hamburguer de 250g, queijo, tomate, alface e cebola", 
        preco: 24.90,
        foto: "https://jornadajs-food.s3.amazonaws.com/spicy.png"
    },
    {
        id: 2, 
        nome: "Sanduba", 
        descricao: "Sanduiche natural, alface, tomate, pão integral e orégano", 
        preco: 22.00,
        foto: "https://jornadajs-food.s3.amazonaws.com/sanduba.png"
    },
    {
        id: 3, 
        nome: "Super Burguer", 
        descricao: "Hamburguer de 300g, molho, queijo, tomate, alface e cebola", 
        preco: 29.90,
        foto: "https://jornadajs-food.s3.amazonaws.com/super.png"
    },
    {
        id: 4, 
        nome: "Mega", 
        descricao: "Hamburguer de 300g, maionese, tomate, alface, queijo e cebola", 
        preco: 34.90,
        foto: "https://jornadajs-food.s3.amazonaws.com/mega.png"
    },
    {
        id: 5, 
        nome: "Penne", 
        descricao: "Penne ao molho especial de tomates, ervas aromáticas e cebola", 
        preco: 27.00,
        foto: "https://jornadajs-food.s3.amazonaws.com/penne.png"
    },
    {
        id: 6, 
        nome: "Fritas", 
        descricao: "Batata frita crocante com molho especial de maionese da casa", 
        preco: 14.90,
        foto: "https://jornadajs-food.s3.amazonaws.com/fritas.png"
    },
    {
        id: 7, 
        nome: "Coca-Cola Lata", 
        descricao: "Coca-cola em lata de 300ml, trincando de gelada para você", 
        preco: 9.90,
        foto: "https://jornadajs-food.s3.amazonaws.com/coca.png"
    }
  ];

  const carrinho = [
    {
        id: 1,
        nome: "X-Tudo",
        preco: 20.00,
        foto: "https://jornadajs-food.s3.amazonaws.com/spicy.png",
        qtd: 2
    },
    {
        id: 2,
        nome: "Sanduba",
        preco: 15.00,
        foto: "https://jornadajs-food.s3.amazonaws.com/sanduba.png",
        qtd: 1
    }
  ];

  export {produtos, pedidos, carrinho};