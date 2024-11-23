import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider(props){

    const [cartItems, setCartItems] = useState([]);
    const [totalCart, setTotalCart] = useState(0);

    function AddItemCart(item){

        let cartItemsNovo = [];
        let findItem = false;

        //verificar se o item ja existe no cart
        for(var prod of cartItems){
            if (prod.id == item.id){
                item.qtd = prod.qtd+1;
                findItem = true;
                cartItemsNovo.push(item);
            } else{
                cartItemsNovo.push(prod);

            }

        }

        if ((findItem==false) || (cartItems.length==0)){
            
            cartItemsNovo.push(item);
        }

        setCartItems(cartItemsNovo);
        CalcTotal(cartItemsNovo);

    }

    function RemoveItemCart(id){

        let cartItemsNovo = [];
        
        //localiza o item e atualiza
        for(var prod of cartItems){
            if (prod.id == id){
                prod.qtd = prod.qtd - 1;
            }

            cartItemsNovo.push(prod);

        }

        // remove items zerados
        cartItemsNovo = cartItemsNovo.filter(function(item){
            return item.qtd > 0

        });

        setCartItems(cartItemsNovo);
        CalcTotal(cartItemsNovo);

    }

    function CalcTotal(items){
        let tot = 0;

        for (var item of items)
            tot = tot + (item.preco*item.qtd);

        setTotalCart(tot);

    }

    return <CartContext.Provider value={{cartItems, totalCart, setCartItems, AddItemCart, RemoveItemCart}}>
        {props.children}
    </CartContext.Provider>
}

export {CartContext, CartProvider};