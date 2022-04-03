import React, { useContext } from "react";
import { MapContainer, TileLayer, Polyline } from 'react-leaflet'
import AppContext from "../Context/Context";
import { TYLE_LAYER_ATTRIBUTION, TYLE_LAYER_URL } from "./constants";
import Markers from "./Markers";

const Map = () => {
    const {positions} = useContext(AppContext);

    return (
        <MapContainer 
            center={[52.8080356, 7]} 
            zoom={11} 
            style = {{width: '100%', minHeight: 'calc(100vh - 50px)'}}
        >
            <TileLayer
                attribution = {TYLE_LAYER_ATTRIBUTION}
                url = {TYLE_LAYER_URL}
            />
            <Markers />
            
            <Polyline pathOptions={{ color: 'blue' }} positions={positions} fillOpacity = '0' />
        </MapContainer>
    )
}

export default Map;