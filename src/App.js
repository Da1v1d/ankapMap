import React from "react";
import AppContext from "./Context/Context";
import AssignmentApp from "./AssignmentApp/AssignmentApp";
import useRoutes from "./useRoutes";
import useStops from "./useStops";
import useTabValue from "./useTabValue";

const App  = () => {
    const {route, positions} = useRoutes();
    const [currentStop, increaseStopCount] = useStops();
    const [tabValue, changeTabValue] = useTabValue();

    return ( 
        <AppContext.Provider
            value = {{
                route,
                positions,
                currentStop,
                increaseStopCount,
                tabValue,
                changeTabValue
            }}
        >
            <AssignmentApp />
        </AppContext.Provider>
    )
}

export default App;