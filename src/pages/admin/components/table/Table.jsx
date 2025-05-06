import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {delBasketThunk, getBasketThunk} from "../../../../redux/reducers/basketSlice.js";

const Table = () => {
    const basket = useSelector(state => state.basket.basket);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBasketThunk())
    },[dispatch])


    function delAdmin(item) {
        dispatch(delBasketThunk(item))
    }

    const [text,setText] = useState('')
    const [sort, setSort] = useState("asc")

    const filterData = basket
        .filter(item => item.title.toLowerCase().includes(text.toLowerCase()))
        .sort((a, b) => {
            return sort === "asc" ? a.price - b.price : b.price - a.price;
        });


    return (
        <div>
            <input type="text" placeholder="axtar" onChange={(e) => setText(e.target.value)} />
            <button onClick={() => setSort('asc')}>A-Z</button>
            <button onClick={() => setSort('desc')}>Z-A</button>
            <table>
                <thead>
                <tr>
                    <th>Image</th>
                    <th>title</th>
                    <th>price</th>
                    <th>DELETE</th>
                </tr>
                </thead>
                <tbody>
                {filterData && filterData.map((item, index) => (
                    <tr key={index}>
                        <td><img src={item.thumbnail}/></td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td><button onClick={() => delAdmin(item)}>DEL</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;