import React from 'react';
import style from './Header.module.scss';
import { FaBars } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Header = () =>{
    return (
        <div className={style.header}>
            <div className={style.container}>
                <a href="/"><img src='https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png'/></a>
                <div className={style.navBar}>
                    <ul>
                        <li><a href="/">home</a></li>
                        <li><a href="/admin">admin</a></li>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">blog</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                </div>
                <div className={style.icons}>
                    <HiMagnifyingGlass className={style.mag} />
                    <CiUser />
                    <a href="/basket">  <IoCartOutline /> </a>
                    <FaBars className={style.bar}/>
                </div>
            </div>
        </div>
    )
}

export default Header;