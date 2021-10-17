import React from "react";
import Bg from "../components/BackgroundColor"
import "../assets/css/pag-nao-encontrada.css";

function PaginaNaoEncontrada() {
    return (
        <>
        <Bg/>
            <div>
                <h1 id="notfound-knowu">Oops...</h1>
                <section className="error-container">
                    <span id="numeros-notfound">404</span>
                    <p className="zoom-area">A página que você procura não foi encontrada.</p>
                </section>
                <div className="link-container">
                    <a id="a-notfound" href="http://localhost:3000/login" className="more-link">Voltar</a>
                </div>
            </div>


        </>
    );
}

export default PaginaNaoEncontrada;