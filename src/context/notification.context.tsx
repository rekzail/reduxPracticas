import { AlertColor } from '@mui/material';
import React, { useState } from 'react';
import { Notification } from '../components/Index';

type contextProps = {
    getError: (msg:string) => void,
    getSuccess  : (msg:string) => void,

}

const NotificationContext= React.createContext<contextProps | null> (null);

export const NotificationProvider: React.FC <{children: JSX.Element}>= ({children}) => {


    const [msg, setMsg] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState<AlertColor | undefined>(undefined);

    const handleCloset = () => {
        setOpen(false)
    }
    const getError = (msg:string) => {
        setOpen(true),
        setMsg(msg),
        setSeverity("error")

    };
    const getSuccess = (msg:string) => {
        setOpen(true),
        setMsg(msg),
        setSeverity("success")

    };

    const value = {getError, getSuccess}


    return (
        <NotificationContext.Provider value={value}>
            
            <Notification 
                handleClose={handleCloset}
                open = {open}
                severity = {severity}
                mensagge = {msg}
                />
                {children}
            
            

        </NotificationContext.Provider>
    )
}

export const useNotification  = () => {
    const context = React.useContext(NotificationContext)
    if (!context)  throw new Error("no exite contexto") 
        return context;
       
    
}