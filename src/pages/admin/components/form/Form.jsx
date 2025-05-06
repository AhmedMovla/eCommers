import React from 'react';
import { useFormik } from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {delBasketThunk} from "../../../../redux/reducers/basketSlice.js";
import {postProductThunk} from "../../../../redux/reducers/productSlice.js";

const Form = () => {
    const product = useSelector((state) => state.product.product);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            thumbnail: '',
            title: '',
            price: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            dispatch(postProductThunk(values));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="thumbnail">Thumbnail</label>
            <input
                id="thumbnail"
                name="thumbnail"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.thumbnail}
            />

            <label htmlFor="title">Title</label>
            <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
            />

            <label htmlFor="price">Price</label>
            <input
                id="price"
                name="price"
                type="price"
                onChange={formik.handleChange}
                value={formik.values.price}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
