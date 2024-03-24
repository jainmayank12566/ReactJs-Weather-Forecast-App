import {useWeather} from '../context/Weather';
function Input(){
    const weather=useWeather();
    return(
        <div>
            <input value={weather.searchcity} onChange={(e)=>weather.setsearchcity(e.target.value)} placeholder='enter city name' />
        </div>
    )
}
export default Input;