
import './ItemCount.css'
import React, { useState } from "react";


const ItemCount = ({ stock, cantidadInicial, onAdd }) => {

   const [cantidad, setCantidad] = useState(cantidadInicial)


   const sumarCantidad = () => {
      if (cantidad < stock) {
         setCantidad(cantidad + 1)
      }
   }

   const restarCantidad = () => {
      if (cantidad > 1) {
         setCantidad(cantidad - 1)
      }
   }

   return (
      <div className='btn-count'>
         <div>
            <button onClick={sumarCantidad}>+</button>
            <span>{cantidad}</span>
            <button onClick={restarCantidad}>-</button>
         </div>
         <div>
            <button className='btn-agregar' onClick={() => onAdd(cantidad)} disabled={!stock}>Agregar</button>
         </div>
      </div>
   )
}

export default ItemCount



