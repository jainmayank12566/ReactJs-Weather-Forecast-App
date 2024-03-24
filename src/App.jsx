import { useEffect } from 'react';
import Buttons from './components/Buttons';
import Card from './components/Card';
import Input from './components/Input';
import {useWeather} from './context/Weather';
function App(){
    const weather=useWeather();
    console.log(weather);
    useEffect(()=>{
        weather.fetchCurrentUserLocationData()
    },[]);
    return(
        <div>
            <h1>Weather Forecast</h1>
            <Input />
            <Buttons onClick={weather.fetchData} value="Search"/>
            <Card />
        </div>
    )
}
export default App;