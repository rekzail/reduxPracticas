import { Alert, AlertColor, Snackbar, Typography } from '@mui/material'
import React from 'react'


type NotificationProps = {
    open:boolean,
    mensagge:string,
    severity : AlertColor | undefined,
    handleClose: () => void
}

export const Notification:React.FC<NotificationProps> = ({open,mensagge,severity,handleClose}) => {
  return (
    <Snackbar 
        anchorOrigin={{vertical:'top', horizontal:'center'}} 
        autoHideDuration={4000}
        open = {open}
        onClose={handleClose}
        >
        
        <Alert onClose={handleClose} severity={severity}>
            <Typography>{mensagge}</Typography>
        </Alert>
     </Snackbar>
  )
}
