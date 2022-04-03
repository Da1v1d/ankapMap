import React, { useContext } from "react";
import { Tabs, Tab } from "@mui/material";
import AppContext from "./Context/Context";

const TabsStyles = {
    Tabs: {
        position: 'absolute' ,
        zIndex: 1,        
        color: 'white', 
        height : '48px',
        '& .MuiTabs-indicator': {
            bgcolor: 'white',
          },
    },
    Tab: {
        color: 'white',
        textTransform : 'none',
        '&.Mui-selected' : {
            color: 'white',
        }
    }
}

const MuiTabs = () => {
    const {tabValue , changeTabValue, route, currentStop} = useContext(AppContext);

    return (
        <Tabs value = {tabValue} onChange = {changeTabValue} sx = {TabsStyles.Tabs}>
            <Tab 
                label = {tabValue === 1 ? 'STOPS' : `STOPS ${currentStop}/${route.length}`} 
                sx = {TabsStyles.Tab} 
            />
            <Tab 
                label = "MAP" 
                sx = {TabsStyles.Tab} 
            />
        </Tabs>
    )
}

export default MuiTabs;