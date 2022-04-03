import { useCallback, useState } from "react";

const useStops = () => {
    const [currentStop, setStopCount] = useState(0);

    const increaseStopCount = useCallback(() => {
        setStopCount(prev => prev + 1)
    },[])

    return [currentStop, increaseStopCount]
}

export default useStops;