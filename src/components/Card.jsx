import{useWeather} from '../context/Weather';
function Card(){
    const weather=useWeather();
    return(
        <div>
            <img src={weather.data?.current.condition.icon} alt="" />
            <h2>{weather.data?.current.temp_c}*C</h2>
            <h5>{weather.data?.location?.name}, {weather.data?.location.region} {weather.data?.location.country}</h5>
        </div>
    )
}
export default Card;