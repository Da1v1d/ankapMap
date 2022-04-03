import React, { Suspense, useContext } from "react";
import AppContext from "../Context/Context";

const Map = React.lazy(() => import ('../Map/Map'))
const StopsComponent = React.lazy(() => import('../StopsComponent/StopsComponent'))


const PageContent = () => {

    const { tabValue } = useContext(AppContext);

    return (
        <>
            {tabValue === 1?
                <Suspense fallback = {null}>
                    <Map /> 
                </Suspense>
                
                : 
                <Suspense fallback = {null}>
                    <StopsComponent />
                </Suspense>
            }
        </>
    )
}

export default PageContent;