import {createContext,useContext, useState} from 'react';
import {getWeatherDataForCity,getWeatherDataForLocation} from '../api/index';
export const WeatherContext=createContext(null);
export const WeatherProvider=(props)=>{
    const[data,setdata]=useState(null);//complete data
    const[searchcity,setsearchcity]=useState("");//eg ambala

    async function fetchData(){
        const response=await getWeatherDataForCity(searchcity);
        setdata(response);
    }

    function fetchCurrentUserLocationData(){
        navigator.geolocation.getCurrentPosition((position)=>{
            setsearchcity("");
            getWeatherDataForLocation(position.coords.latitude,position.coords.longitude)
            .then((data)=>{
                setdata(data);
            })
        },(error)=>{
            console.log("Error",error);
        })
    }
    return(
        <WeatherContext.Provider value={{data,setdata,searchcity,setsearchcity,fetchData,fetchCurrentUserLocationData}}>
            {props.children}
        </WeatherContext.Provider>
    )
}
export function useWeather(){
    return useContext(WeatherContext);
}