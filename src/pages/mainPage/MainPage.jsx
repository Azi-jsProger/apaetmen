import React, {useEffect, useState} from 'react';
import Loading from "../../components/loading/loading";
import Card from "../../components/card/card";
import axios from "axios";
import './style.css'

const MainPage = () => {


    const [apartmen , setApartmen] = useState([])
    const [isLoading    , setIsLoading] = useState(false)
    async function getApartmen() {
        setIsLoading(true)
        try {
            const response = await axios.get(' https://realty-ggcv.onrender.com/main/flats/')
            setApartmen(response.data.results)
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
                <div className="App">
                    {apartmen.map((item, idx, array) => {

                        return (
                            <Card
                                key={idx}
                                title={item.title}
                                images={item.flat_images}
                                price={item.price}
                                rooms={item.rooms}
                                square={item.total_area}
                                floor={item.floor}
                                maxfloor={item.number_of_floors}
                                id={item.id}
                            />
                        )

                    })}
                </div>
            }
        </div>
    );
};

export default MainPage;