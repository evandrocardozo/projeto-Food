import { useEffect, useState, useContext } from "react";
import { Dock } from "react-dock";

import ProdutoCart from "../produto-cart/produto-cart.jsx";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import {carrinho} from "../../dados.js";
import { CartContext } from "../../contexts/cart-context.jsx";

function Cart(){

    const [show,setShow] = useState(false);
    const navigate = useNavigate();
    //const [cartItems, setCartItems] = useState([]);
    const {cartItems, totalCart} = useContext(CartContext);

    useEffect(function(){
        window.addEventListener('openSidebar',function(){
            setShow(true);
        });

        //setCartItems(carrinho);
    },[]);

    function checkout(){
        navigate('/checkout');
    }

    return <Dock position="right" isVisible={show} fluid={false} size={420} onVisibleChange={function(visible){setShow(visible);}}>
        <div className="text-center">
            <h1>meu pedido</h1>
        </div>

        <div className="lista-produtos">
            {
                cartItems.map(function(item){
                    return <ProdutoCart key={item.id} id={item.id} foto={item.foto} nome={item.nome} qtd={item.qtd} preco={item.preco} />
                })
            }         

        </div>

        <div className="footer-cart">
            <div className="footer-cart-valor">
                <span>Total</span>
                <span>{new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(totalCart)}</span>
            </div>

            <div>
                <button onClick={checkout} className="btn-checkout">Finalizar pedido</button>
            </div>
        </div>

    </Dock>
}

export default Cart;