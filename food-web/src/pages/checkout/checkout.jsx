import { useContext, useState } from "react";
import Navbar from "../../components/navbar/navbar.jsx";
import "./checkout.css";
import { CartContext } from "../../contexts/cart-context.jsx";

/*
var valor = 0;

function Soma(){
    valor=valor+1;
    console.log(valor)
}

function Subtracao(){
    valor=valor-1;
    console.log(valor)
}
*/

function Checkout(){

    const {totalCart} = useContext(CartContext);


    return <>
        <Navbar />

        <div className="container">
            <div className="titulo text-center">
                <h1>Finalizar pedido</h1>
            </div>
        </div>

        <div className="col-3">
            <div className="box-checkout">
                <h3>Dados pessoais</h3>

                <div className="input-group">
                    <p>Nome Completo</p>
                    <input type="text" id="nome" />
                </div>

                <div className="input-group">
                    <p>E-mail</p>
                    <input type="text" id="email" />
                </div>

                <div className="input-group">
                    <p>Telefone </p>
                    <input type="text" id="fone" />
                </div>
            </div>

        </div>

        <div className="col-3">
            <div className="box-checkout">
                <h3>Endereco de entrega</h3>

                <div className="input-group">
                    <p>CEP</p>
                    <input type="text" id="cep" />
                </div>

                <div className="input-group">
                    <p>Endereco</p>
                    <input type="text" id="endereco" />
                </div>

                <div className="input-group">
                    <p>Bairro </p>
                    <input type="text" id="bairro" />
                </div>

                <div className="input-group">
                    <p>Cidade </p>
                    <input type="text" id="cidade" />
                </div>

                <div className="input-group">
                    <p>Estado </p>
                    <select id='uf' >
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                        <option value="EX">Estrangeiro</option>
                    </select>
                </div>
            </div>

        </div>

        <div className="col-3">
            <div className="box-checkout">
                <h3>Valores</h3>

                <div className="checkout-valores">
                    <span>Total</span>
                    <span><strong>{new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(totalCart)}</strong></span>
                    
                </div>

                <div className="checkout-button">
                    <button className="btn-checkout"> Finalizar pedido</button>
                </div>

            </div>

        </div>

    </>
    
}

export default Checkout;