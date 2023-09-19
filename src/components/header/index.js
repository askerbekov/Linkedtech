import React from 'react';
import logo from '../../assets/Group165.png';
import search from '../../assets/Group 10.png';
import basket from '../../assets/Group 12.png';
import user from  '../../assets/Group 15.png';
import './style.scss';
const Header = () => {
    return (
        <div className={'container'}>
            <div className={'header'}>
                <div>
                    <img src={logo} alt=""/>
                </div>
                <nav className={'nav'}>
                    <ul className={'__ul'}>
                        <li className={'__li'}><a className={'__a'} href="#">HOME</a></li>
                        <li className={'__li'}><a className={'__a'} href="#">ABOUT</a></li>
                        <li className={'__li'}><a className={'__a'} href="#">PRODUCT</a></li>
                        <li className={'__li'}><a className={'__a'} href="#">BLOG</a></li>
                        <li className={'__li'}><a className={'__a'} href="#">SHOP</a></li>
                        <li className={'__li'}><a className={'__a'} href="#">CONTACT US</a></li>
                    </ul>
                </nav>
                <div className={'operationBar'}>
                    <button><img src={search} alt=""/></button>
                    <button><img src={basket} alt=""/></button>
                    <button><img src={user} alt=""/></button>
                </div>
            </div>
        </div>
    );
};

export default Header;