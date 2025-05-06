import React, {useEffect} from 'react';
import  style from "./Products.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {getProductThunk} from "../../../../redux/reducers/productSlice.js";
import Card from "../../../../components/card/Card.jsx";
const Products = () => {

    const product = useSelector(state => state.product.product)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductThunk())
    }, []);


    return (
        <div className={style.products}>
            {product && product.map(item=>{
                return <Card key={item.id} item={item}/>
            })}
        </div>
    );
};

export default Products;
