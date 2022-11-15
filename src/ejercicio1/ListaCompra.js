import React, { useState } from "react";
import * as bibliLista from "./biblioteca/bibliotecaLista.js";
import "./css/lista.css";




function ListaCompra(props) {
    

    const listaInicial = [];
    const valoresIniciales = {
        id: "",
        nombre: "",
        descripcion: "",
        precio: "",
        unidades: "",
    };

    const [lista, setLista] = useState(listaInicial);
    const [producto, setProducto] = useState(valoresIniciales);



    const actDato = (e) =>{

        const { name, value } = e.target;

        setProducto({...producto, [name]: value, id: bibliLista.generarId(5)});

    }


    function anyadirLista() {



        setLista([...lista, producto]);


    }
    const borrarLista = () => {
        setLista(listaInicial);
    };

    function eliminarProducto(codId, codNom, codDesc, codPrecio, codUni) {
        
        console.log(`entra`);
        const nuevosProd = lista.filter((producto) => {
            return producto.id !== codId && producto.nombre !== codNom && producto.descripcion !== codDesc && producto.precio !== codPrecio && producto.unidades !== codUni;
        });
        
        setLista(nuevosProd);


    }



    

    return (

        <React.Fragment>
            <div>

               <p>
                   <label htmlFor={"nombre"}>Nombre: </label>
                   <input type={"text"} name={"nombre"} onChange={actDato} className={'nombre'} value={producto.nombre}></input>
               </p>
               <p>
                   <p><label htmlFor={"descripcion"}>Descripción: </label></p>
                    
                    <textarea name={"descripcion"} rows="8" cols="35" onChange={actDato} className={'descripcion'} value={producto.descripcion}></textarea>
               </p>
               <p>
                    <label htmlFor={"precio"}>Precio: </label>
                    <input type={"number"} name={"precio"} onChange={actDato} className={'precio'} value={producto.precio}></input>
               </p>
               <p>
                    <label htmlFor={"unidades"}>Unidades: </label>
                    <input type={"number"} name={"unidades"} onChange={actDato} className={'unidades'} value={producto.unidades}></input>
               </p>
               <button onClick={() => {anyadirLista()}}>Añadir</button>
               <button onClick={() => {borrarLista()}}>Borrar Todo</button>


            </div>
                
            <div>
                {lista.map((listas) => {
                    return <div className="producto" onClick={() => eliminarProducto(listas.id, listas.nombre, listas.descripcion, listas.precio, listas.unidades)}>
                        <p>Id: {listas.id}</p>
                        <p>Nombre: {listas.nombre}</p>
                        <p>Descripción: {listas.descripcion}</p>
                        <p>Precio: {listas.precio}</p>
                        <p>Unidades: {listas.unidades}</p>  
                    </div>
                })}
            </div>




        </React.Fragment>


    );





}

export default ListaCompra;