

import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRouter } from './AppRouter'
import { NotificationProvider } from './context/notification.context'


function App() {
  

  return (
    <NotificationProvider>

      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>

    </NotificationProvider>
  )
}

export default App
