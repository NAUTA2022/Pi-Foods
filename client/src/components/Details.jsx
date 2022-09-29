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
           <div className={styles.tarjetaDeDetalles}> 
           <img className={styles.imga} src={detailsstate[0].img ? detailsstate[0].img :'https://st.depositphotos.com/1036708/2191/i/600/depositphotos_21918797-stock-photo-knife-and-fork-with-plate.jpg'}/>
           
           <h3 className={styles.typea} ><p className={styles.TitulosDetalles}>TIPO DE DIETA:</p> {detailsstate[0].typeDiets.map(t => t.name)}</h3>
           <div className={styles.section1}> 
           <h4 className={styles.typeb}><p className={styles.TitulosDetalles}>TIPO DE PLATO:</p> {detailsstate[0].dishTypes ? detailsstate[0].dishTypes.map(d => d.name) :'dish type not found'  }</h4>
           <h5 className={styles.typec}><p className={styles.TitulosDetalles}>NIVEL DE SALUDABLE:</p> {detailsstate[0].healthScore}</h5>
           </div>
           <div className={styles.section2}>
           <h5 className={styles.typed}><p className={styles.TitulosDetalles}>RESUMEN:</p> {detailsstate[0].summary.replace(/<[^>]+>/g, "")}</h5>
           <h5 className={styles.typee}><p className={styles.TitulosDetalles}>PASOS:</p> { Array.isArray(detailsstate[0].analyzedInstructions) ? detailsstate[0].analyzedInstructions.map(e => e.steps.map(f => f.step)) : detailsstate[0].analyzedInstructions }</h5>
           </div>
           </div>

           <h5 className={styles.typef}><p className={styles.TitulosDetalles}>PUNTUACIÓN:</p> {detailsstate[0].spoonacularScore}</h5>
       </div> : 
       
       <div className={styles.carga}><h2 className={styles.carga1}> 🍔 </h2> <h2 className={styles.carga2}> 🍔 </h2> <h2 className={styles.carga3}> 🍔 </h2></div>
    }
        </div>
    )
}