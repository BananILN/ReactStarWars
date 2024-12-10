import ReactLoading from "react-loading";
import { useEffect, useRef, useState } from "react";
import AppStarWars from "./AppStarWars";

export default function AppLoading(){

        const [loading, setLoading] = useState(false);
        if(!loading){
            const LoadingOut = setTimeout(()=>{
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

   
    