import React from "react";
import styles  from '../../styles/card_container.module.scss'
import MyCard from "./product_card";
const Products = ({products})=>{
    
    return<>
        <div className={styles.container} id='product'>

    {
        products.map((item,index)=>(<MyCard product={item} key={index} />))
    }

        </div>
    </>
}

export default Products