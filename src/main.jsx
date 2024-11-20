
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from "./Data";

createRoot(document.getElementById('root')).render(
  <DataProvider>

    <App />

  </DataProvider>

)
