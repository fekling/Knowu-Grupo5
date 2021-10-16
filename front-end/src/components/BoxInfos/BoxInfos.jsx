import React, { Component } from "react";

import './BoxInfos.css';
import { BoxInfoEventoData } from "./BoxInfosData";

class BoxInfos extends Component {
    render() { 
        return (
            <aside className="boxinfos">
                <ul className="boxinfos-items">
                        <li className="boxinfos-titulo">
                            Eventos
                        </li>
                        {BoxInfoEventoData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                        {item.image}
                                        <span className="boxinfos-titulo">{item.title}</span>
                                </li>
                            );
                        })}
                    </ul>
            </aside>
        );
    }
}
 
export default BoxInfos;