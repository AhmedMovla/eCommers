import React from 'react';
import {useNavigate} from "react-router-dom";
import style from "./Not.module.scss";
const Not = () => {
   const navigate = useNavigate();
    return (
        <div className={style.container}>
         <h1>Page Not Found</h1>
            <div className={style.buttonCon}>
            <button onClick={() => {navigate("/")}}>Go Home</button>
            <button onClick={() => {navigate(-1)}}>Go Back</button>
            </div>
        </div>
    );
};

export default Not;
