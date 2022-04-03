import { AppBar } from "@mui/material";
import React from "react";
import MuiTabs from '../MuiTabs';
import '../index.css';
import PageContent from "../PageContent/PageContent";

const barStyle = {
  height: '50px', 
  bgcolor: 'black'
}

const AssignmentApp = () => {

  return (
    <div className="app">
      <AppBar position="static" sx = {barStyle}>
          <MuiTabs />
      </AppBar>
      <PageContent />
    </div>
  );

}

export default React.memo(AssignmentApp);