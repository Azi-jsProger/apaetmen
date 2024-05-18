import React, {useEffect, useState} from 'react';
import './style.css'
import axios from "axios";
import {useParams} from "react-router-dom";
import Loading from "../../components/loading/loading";

const DetailPage = () => {

    const { id } = useParams()
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    async function getApartmen() {
        setIsLoading(true)
        try {
            const response = await axios.get(`https://realty-ggcv.onrender.com/main/flats/${id}`)
            setData(response.data)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getApartmen()
    }, []);

    return (
        <div>
            {isLoading ?
                <Loading></Loading>
                :
                <div>
                    <h1>{data.title}</h1>
                    <p><strong>Состояние:</strong> {data.condition}</p>
                    <p><strong>Описание:</strong> {data.description}</p>
                    <div className='image-grid'>
                        {data?.flat_images?.map((item, idx) => {
                            return (
                                <div
                                    className='image-block'
                                    key={idx}
                                >
                                    <img src={item.image} alt=""/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }


        </div>
    );
};

export default DetailPage;