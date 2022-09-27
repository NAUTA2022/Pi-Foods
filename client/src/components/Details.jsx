import React from "react";
import {getRecipesById} from '../actions/index'
import { useParams } from "react-router";
import { useDispatch  , useSelector} from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from './Details.module.css'

export default function Detail (props){
  const   {id} = useParams()
  const dispatch = useDispatch() 
  useEffect (() => {dispatch(getRecipesById(id))} ,[]) 
 const detailsstate = useSelector((state) => state.details)
 console.log('estos son los detalles',detailsstate);
  // detailsstate[0].title
//   console.log(detailsstate);
  return (

      <div>
     { 
       detailsstate.length > 0 ? 
       
       <div className={styles.dt}> 
           <Link to='/home'><button className={styles.btn}>INICIO </button> </Link>
           <h1 className={styles.title}> {detailsstate[0].title} </h1>
           <img className={styles.imga} src={detailsstate[0].img ? detailsstate[0].img :'https://st.depositphotos.com/1036708/2191/i/600/depositphotos_21918797-stock-photo-knife-and-fork-with-plate.jpg'}/>
           <div className="tarjetaDetalles">
           <h3 className={styles.type} >TIPO DE DIETA: {detailsstate[0].typeDiets.map(t => t.name)}</h3>
           <h4 className={styles.type}>TIPO DE PLATO: {detailsstate[0].dishTypes ? detailsstate[0].dishTypes.map(d => d.name) :'dish type not found'  }</h4>
           <h5 className={styles.type}>RESUMEN: {detailsstate[0].summary}</h5>
           <h5 className={styles.type}>NIVEL DE SALUDABLE: {detailsstate[0].healthScore}</h5>
           <h5 className={styles.type}>PUNTUACIÓN: {detailsstate[0].spoonacularScore}</h5>
           <h5 className={styles.type}>PASOS: { Array.isArray(detailsstate[0].analyzedInstructions) ? detailsstate[0].analyzedInstructions.map(e => e.steps.map(f => f.step)) : detailsstate[0].analyzedInstructions }</h5>
           </div>
       </div> : 
       
       <div> <h2> Cargando... </h2> </div>

    }
        </div>
    )
}