import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getBasketThunk} from "../../../../redux/reducers/basketSlice.js";
import styles from "./Products.module.scss";
import BasketCard from "../../../../components/basketCard/BasketCard.jsx";
const Products = () =>{
    const basket = useSelector(state => state.basket.basket);
    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(getBasketThunk())
    }, []);


    return (
        <div className={styles.product}>
            {basket && basket.map(item => {
                return <BasketCard key={item.id} item={item} />
            })}
        </div>
    )
}

export default Products;