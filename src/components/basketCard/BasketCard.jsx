import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {delBasketThunk} from "../../redux/reducers/basketSlice.js";

const BasketCard = ({item}) => {
    const dispatch = useDispatch();
    function delBasket(item) {
        dispatch(delBasketThunk(item))
    }

    return (
        <div>
            <img src={item.thumbnail} alt="Basket Card" />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <button onClick={delBasket(item)}>DEL</button>
        </div>
    )
}

export default BasketCard;