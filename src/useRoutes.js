import { useState, useEffect, useMemo } from "react";

const useRoutes = () => {
    const [route, setRoute] = useState([]);
    const [address, setAddress] = useState([])

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/narzero/849b3190d9cb47503f36c35aee5e7c72/raw/e6c13ccd56cb1cad854ce5fa556229b3e906eb5f/route.json')
        .then(response => response.json())
        .then(data => {
            setRoute(data.stops)
            setAddress(data.stops.map(a => a.address))
        })        
  },[])

    const positions = useMemo(() => {
        const stopsArr = [];
        address.map(stop => stopsArr.push([stop.lat,stop.lng]))
        return stopsArr
    },[address])

  return {route, setAddress, positions}

}

export default useRoutes;