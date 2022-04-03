import React, { useContext } from "react";
import AppContext from "../Context/Context";
import StopCard from "./StopCard";

const StopsComponent = () => {

    const {route , currentStop} = useContext(AppContext);

    const cards = route.map((info, index) => (
        <StopCard 
            key={ index } 
            done = {index < currentStop} 
            active = {index === currentStop}  
            info = { info } 
            id = { index + 1 }
        />
    ))

    return (
        <div 
            style = {{
                width: '100%', 
                height: 'calc(100vh - 60px)', 
                backgroundColor: '#49474D'
            }}
        >
            {cards}
        </div>
    )
}

export default StopsComponent;