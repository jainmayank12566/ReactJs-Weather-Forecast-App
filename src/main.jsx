import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import {WeatherProvider} from './context/Weather';
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <WeatherProvider>
        <App/>
    </WeatherProvider>
)