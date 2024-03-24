const baseurl="https://api.weatherapi.com/v1/current.json?key=36b1b541a7a546a78ac175734231105&q=";
export async function getWeatherDataForCity(city){
    const promise=await fetch(`${baseurl}${city}&aqi=yes`);
    return await promise.json();
}
export async function getWeatherDataForLocation(lat,lon){
    const promise=await fetch(`${baseurl}${lat},${lon}&aqi=yes`);
    return await promise.json();
}