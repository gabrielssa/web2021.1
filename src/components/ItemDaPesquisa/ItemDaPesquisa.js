import React from 'react';
import './ItemDaPesquisa.css';
// import { useHistory, Link } from "react-router-dom";

const ItemDaPesquisa = (props) => {
    const nome = props.nome
    const imgLink = props.imagem

    // let history = useHistory();

    // const historyPush = (pageb) => {
    //     history.push({
    //         pathname: `/${pageb}`,
    //       })
    // }

    return (
    <>
        <div id="ItemDaPesquisa-container">
            <img src={imgLink} alt="imagem" id="myImg"/>
            <span id="itemName">{nome}</span>
        </div>
    </>
    )
}

export default ItemDaPesquisa;