import {getRandomElementOfArr, getRandomHexColor} from "./utils"
import { API_URL } from "./api";
import { useEffect, useRef, useState } from "react";
import ReactLoading from "react-loading";

export default function StarWars(){
    
    const intervalRef = useRef(undefined);
    const [loading, setLoading] = useState(false);
    
    if(intervalRef.current === undefined && !loading){
        
        setTimeout(()=>{
            setLoading(true)
        },1000)
        return (
            <ReactLoading type="bars" color="#0000FF"  height={100} width={50}/>
        )  
    }
    return(
        <AppStarWars />
    )
}

 function AppStarWars(){
     const intervalRef = useRef(undefined);
    const [hero, setHero] = useState({name: 'undefined'});
    const randColor = getRandomHexColor();
   

   

    useEffect(()=>{
        getRandomHero()
        console.log("Mount");
    

        intervalRef.current =  setInterval(()=>{
            getRandomHero()
        }, 3000)

        return () =>{
            console.log("unMount");
            clearInterval(intervalRef.current);
        } 
    },[])

    const getRandomHero = () => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) =>{
                const hero  = data.results;
                const randHero = getRandomElementOfArr(hero);
                setHero({name: randHero.name})
            })
    }

    const getRandomHeroHandler= () =>{
        getRandomHero();
    }
     
   



    return (
        <>
        <h2 className="Hero" style={{backgroundColor: randColor}}>Hero: {hero.name}</h2>
        <button onClick={getRandomHeroHandler}>Get Hero</button>
        </>
    )
}