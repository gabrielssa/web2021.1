import React from 'react';
import ItemDaPesquisa from './ItemDaPesquisa/ItemDaPesquisa';
import './Pesquisa.css'; 
// import { useHistory, Link } from "react-router-dom";

class Pesquisa extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }


    // const data = props.location

    // let history = useHistory();

    // const historyPush = (pageb) => {
    //     history.push({
    //         pathname: `/${pageb}`,
    //       })
    // }

    


    render(){
        

        let handleSearch = () => {

            // var conteudoNovo = document.createTextNode("Item da pesquisa");
            // document.getElementById("pesquisa-container").appendChild(conteudoNovo)
            /**
            1. Pego o que tem no input
            2. Requição pro back com o valor que no tem no input
            3. Recebo uma lista de 3 nomes e três imgs
            4. 
            **/
                
        if(document.getElementById("sb").value == ""){
            this.setState(
                {
                    items: []
                }
            )
        }else{

        

            this.setState(
                {
                    items: [
                        {
                        nome: "World of Wacraft",
                        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmK3EXdLPqZSG1HfjX9IrH4ELf7WBObmdLbA&usqp=CAU"
                        },
                        {
                        nome: "Ashes of Creation",
                        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmK3EXdLPqZSG1HfjX9IrH4ELf7WBObmdLbA&usqp=CAU"
                        },
                        {
                        nome: "League of Legends",
                        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmK3EXdLPqZSG1HfjX9IrH4ELf7WBObmdLbA&usqp=CAU"
                        }
                                    ]
                }
            )
        }


        }

        let renderItems = () => {
            if (this.state.items.length != 0){
                return(
                    <>
                    <ItemDaPesquisa nome={this.state.items[0].nome} imagem={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmK3EXdLPqZSG1HfjX9IrH4ELf7WBObmdLbA&usqp=CAU"} />
                    <ItemDaPesquisa nome={this.state.items[1].nome} imagem={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmK3EXdLPqZSG1HfjX9IrH4ELf7WBObmdLbA&usqp=CAU"}/>
                    <ItemDaPesquisa nome={this.state.items[2].nome} imagem={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmK3EXdLPqZSG1HfjX9IrH4ELf7WBObmdLbA&usqp=CAU"}/>
                    </>
                )
            }
        }

        return(
        <div id="myDiv">
            <div id="pesquisa-container">
                <input type="text" id="sb" placeholder='Pesquise algo' onChange={() => handleSearch()}></input>
                {renderItems()}
            </div>
        </div>
    )
    } 
}

export default Pesquisa;