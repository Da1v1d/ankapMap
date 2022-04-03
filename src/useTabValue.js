import React, { useCallback } from "react";

const useTabValue = () => {
    const [tabValue, setTabValue] = React.useState(0);

    const changeTabValue = useCallback((_, newValue) => {
      setTabValue(newValue);
    },[]);

    return [tabValue, changeTabValue];

}

export default useTabValue;
