import React from 'react';
import style from './Card.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {postProductThunk} from "../../redux/reducers/productSlice.js";
const Card = ({item}) => {
    const product = useSelector(state => state.product.product);
    const dispatch = useDispatch();
    function addToCart() {
        dispatch(postProductThunk(item));
    }
    return <div className={style.card}>
        <img src={item.thumbnail} alt={item.title} />
        <p>{item.title}</p>
        <p>{item.price}</p>
        <button onClick={() => {addToCart(item)}}>ADD</button>
    </div>
}

export default Card;