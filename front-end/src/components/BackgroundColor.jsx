import React from 'react';
import bg from '../assets/images/bg-color.png'
import "../assets/css/cadastro-style.css"
function BackgroundColor() {
    return (
        <>
            <div class="corpo">
                <img src={bg} alt="background colorido" class="bg"></img>

            </div>
        </>
    )
}

export default BackgroundColor;