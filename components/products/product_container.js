import React from "react";
import styles  from '../../styles/card_container.module.scss'
import MyCard from "./product_card";
const Products = ({products})=>{
    
    return<>
        <h1 id='product' style={{textAlign: 'center' , marginTop: '50px'}}>Products </h1>      
        <div className={styles.container} >

    {
        products.map((item,index)=>(<MyCard product={item} key={index} />))
    }

        </div>
    </>
}

export default Products