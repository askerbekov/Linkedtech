import React from 'react';
import headImg from '../../assets/81Z-7PzoB9L1.png'
import './style.scss';
import logo1 from '../../assets/cl_logo4.png'
import logo2 from '../../assets/cl_logo5.png'
import logo3 from '../../assets/cl_logo7.png'
import logo4 from '../../assets/cl_logo2.png'


const HomePage = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="box">
                            <div className={'text-wrapper'}>
                                <p className={'favorite-brand'}>Favorite brands</p>
                                <h2><span>An exciting place</span> for the whole family to shop.</h2>
                                <p className={'description'}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                            </div>
                            <div className={'price-bar'}>
                                <button>Shop Now</button>
                                <h4>$ 249.99</h4>
                                <h4 className={'sales-price'}>$ 249.99</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={headImg} alt=""/>
                    </div>
                </div>
                <div className="section">
                    <div><img src={logo1} alt=""/></div>
                    <div><img src={logo2} alt=""/></div>
                    <div><img src={logo3} alt=""/></div>
                    <div><img src={logo4} alt=""/></div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;