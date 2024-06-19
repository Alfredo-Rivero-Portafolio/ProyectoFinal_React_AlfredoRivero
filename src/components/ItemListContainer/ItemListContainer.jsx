import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { getProductsByCategory, getProducts } from '../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = ({ greeting }) => {

   const [products, setProducts] = useState([]);
   const [cargando, setCargando] = useState(true);
   const categoryId = useParams().categoryId;
   console.log(categoryId)

   useEffect(() => {
      getProducts()
         .then(response => {
            if (categoryId) {
               setProducts(response.filter((product) => product.category === categoryId));
               setCargando(response)
            } else {
               setProducts(response)
            }
         })
   }, [categoryId])


   return (
      <div className="item-list">
         <h1>{greeting}</h1>
            <ItemList products={products} />
      </div>
   )
}

export default ItemListContainer 

