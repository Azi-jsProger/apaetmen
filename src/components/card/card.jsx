import React from 'react';
import './style.css'
import ButtonMaterial from "../button/ButtonMaterial";
import {useNavigate} from "react-router-dom";


const Card = (props) => {

    const {
        title ,
        images,
        price,
        rooms,
        square,
        floor,
        maxfloor,
        id
    } = props

    const navigate = useNavigate()

    function redirecToDetail () {
        navigate(`/${id}`)
    }

    return (
            <div className='card'>
                        <div>
                            {images.length > 0 && (
                                <img
                                    className='images'
                                    src={images[0]?.image}
                                    alt="First Image"
                                />
                            )}

                        </div>

                            <div className='block'>

                                <div>
                                    <h1 className='apartmen-h  discription-hover'>{title}</h1>

                                    <div className='row'>
                                        <span
                                            className='discription-size discription-hover '>Кол-во комнат: <span>{rooms}</span> </span>
                                        <span className='discription-size discription-hover'>Площадь: <span>{square}м²</span> </span>
                                        <span className='discription-size discription-hover'>Этаж: <span> {floor}/{maxfloor} </span></span>
                                    </div>

                                        <h4 className='geo discription-hover'>г. Бишкек, Кыргызстан</h4>

                                    <div className='row space'>
                                    <h1 className='price-apartmen'>${price}</h1>
                                        <ButtonMaterial
                                         onClick={redirecToDetail}
                                        />
                                    </div>

                                </div>


                            </div>

            </div>
    );
};

export default Card;