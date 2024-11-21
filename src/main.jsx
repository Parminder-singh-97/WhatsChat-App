
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from "./Data";
import { Provider } from 'react-redux';
import store from './Store/Store.js'

createRoot(document.getElementById('root')).render(

  <Provider store={store}>

  <DataProvider>

    <App />

  </DataProvider>

  </Provider>

)
