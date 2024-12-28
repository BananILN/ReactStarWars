import {getRandomElementOfArr, getRandomHexColor , TIMER_INTERVAL} from "./utils"
import { API_URL } from "./api";
import { useEffect, useRef, useState } from "react";
import ReactLoading from "react-loading";

export default function StarWars(){
    const [loading, setLoading] = useState(true);
    const [hero, setHero] = useState({ name: 'undefined' });
    const intervalRef = useRef(undefined);
    const randColor = getRandomHexColor();

    useEffect(() => {
        getRandomHero();

        intervalRef.current = setInterval(() => {
            getRandomHero();
        }, TIMER_INTERVAL);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    const getRandomHero = () => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                const hero = data.results;
                const randHero = getRandomElementOfArr(hero);
                setHero({ name: randHero.name });
                setLoading(false);
            });
    };

    const getRandomHeroHandler = () => {
        clearInterval(intervalRef.current);
        getRandomHero();
        intervalRef.current = setInterval(() => {
            getRandomHero();
        }, TIMER_INTERVAL);
    };

    if (loading) {
        return <ReactLoading type="bars" color="#0000FF" height={100} width={50} />;
    }

    return (
        <>
            <h2 className="Hero" style={{ backgroundColor: randColor }}>Hero: {hero.name}</h2>
            <button onClick={getRandomHeroHandler}>Get Hero</button>
        </>
    );
}

