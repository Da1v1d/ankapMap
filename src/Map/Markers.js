import React, { useContext } from "react";
import { Marker, CircleMarker } from "react-leaflet";
import AppContext from "../Context/Context";

const Markers = () => {
    const {positions , currentStop} = useContext(AppContext)

    return positions.map((position, index) => (
        index > currentStop && (
        <div key={index}>
            <Marker 
                position={position} 
            />
            <CircleMarker
                center={position}
                pathOptions={{color: 'blue'}}
                radius={5} 
            />
        </div>
        
    )))
}

export default Markers