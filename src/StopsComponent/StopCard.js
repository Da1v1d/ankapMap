import React, {useContext} from "react";
import { Avatar, Button } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import './style.css';
import AppContext from "../Context/Context";

const StopCard = ({ info, id, active, done }) => {

    const {increaseStopCount} = useContext(AppContext)

    return (
        <>
        <div className="card" style = {{color: done? '#F4F4F4': '' ,background: done? 'transparent' : active? 'white': '#DFDFDF'}}>
            <div className="avatar">
                    <Avatar sx={{ bgcolor: done? '#3193E2': '#E12663' }}>
                        {done ? <DoneIcon /> : id}
                    </Avatar>
            </div>
            
            <div className="card__info">
                <div style = {{display: 'flex', justifyContent:'space-between'}}>
                    <div style = {{fontWeight: 600}}>
                        {info.information.country}
                    </div>
                    <div style = {{marginRight: '10px'}}>
                       {!done? '24-42' : ''}
                    </div>
                </div>
                   
                <div style = {{color: done? '#F4F4F4' : 'grey'}}>
                    {`${info.information.street}`}
                </div>

                <div style = {{display: 'flex', justifyContent:'space-between', color: done? '#F4F4F4' : 'grey'}}>
                    <div >
                        1242422
                    </div>

                    <div style = {{marginRight: '10px'}}>
                        {!done? `${info.time_window_earliest || `00`}-${info.time_window_latest || `00`}` : ''}
                    </div>
                </div>

            </div>
        </div>
        {active && (
            <div style = {{marginLeft: '10px', background: 'white', width: '380px', height: '40px', display: 'flex', justifyContent: 'flex-end'}}>
                <Button
                    variant = 'text'
                    startIcon = {<DoneIcon />}
                    sx = {{mr: 1}}
                    onClick = {increaseStopCount}
                >
                    Finish
                </Button>
            </div>
        )}
        </>
    )

}

export default StopCard;