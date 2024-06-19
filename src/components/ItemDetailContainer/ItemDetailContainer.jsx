import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
   const [item, setItem] = useState(null);
   const id = useParams().id;

   useEffect(() => {
      getProductsByCategory(id)
         .then(res => {
            setItem(res)
         })
         .catch(error => {
            console.error(error);
         })
   }, [id])

   return (
      <div className='detail'>
         {item && <ItemDetail {...item} />}
      </div>
   );
}

export default ItemDetailContainer;



