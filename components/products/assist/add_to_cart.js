import React from "react";
const addToCart = (product)=>{
    console.log(product);
}

const AddToCard=({product})=>{
    return<>
        <div onClick={()=>addToCart(product)}>
            Add Cart
        </div>
    </>
}

export default AddToCard