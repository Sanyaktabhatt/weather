
const search= document.querySelector(".search");
const currentweather=document.querySelector("#d2");
const hourly= document.querySelector("#d3");
const weathericon= document.querySelector(".hehe");

const API_KEY = "40ae6a43767e4fd6b7c102409242609";

const weatherdetails= async(city) =>{
const api=` http://api.weatherapi.com/v1//forecast.json?key=${API_KEY}&q=${city}`;
try{
    const res= await fetch(api);
    const data=await res.json();
    console.log(data)

    if (data.current.condition.code == 1000) {
        weathericon.src = "clear.png";
    } else if (data.current.condition.code == 1003 || 
               data.current.condition.code == 1006 || 
               data.current.condition.code == 1009) {
        weathericon.src = "cloud.png";
    } else if (data.current.condition.code == 1030 || 
               data.current.condition.code == 1135 || 
               data.current.condition.code == 1147) {
        weathericon.src = "mist.png";
    } else if (data.current.condition.code == 1180 || 
               data.current.condition.code == 1183 || 
               data.current.condition.code == 1186 || 
               data.current.condition.code == 1189 || 
               data.current.condition.code == 1192 || 
               data.current.condition.code == 1195 || 
               data.current.condition.code == 1240 || 
               data.current.condition.code == 1243 || 
               data.current.condition.code == 1246) {
        weathericon.src = "rain.png";
    } else if (data.current.condition.code == 1186 || 
               data.current.condition.code == 1189 || 
               data.current.condition.code == 1192 || 
               data.current.condition.code == 1195 || 
               data.current.condition.code == 1243 || 
               data.current.condition.code == 1246) {
        weathericon.src = "moderate_heavy_rain.png";
    } else if (data.current.condition.code == 1066 || 
               data.current.condition.code == 1114 || 
               data.current.condition.code == 1117 || 
               data.current.condition.code == 1210 || 
               data.current.condition.code == 1213 || 
               data.current.condition.code == 1216 || 
               data.current.condition.code == 1219 || 
               data.current.condition.code == 1222 || 
               data.current.condition.code == 1225 || 
               data.current.condition.code == 1255 || 
               data.current.condition.code == 1258 || 
               data.current.condition.code == 1279 || 
               data.current.condition.code == 1282) {
        weathericon.src = "snow.png";
    } else if (data.current.condition.code == 1087 || 
               data.current.condition.code == 1273 || 
               data.current.condition.code == 1276 || 
               data.current.condition.code == 1279 || 
               data.current.condition.code == 1282) {
        weathericon.src = "thunder.png";
    } else if (data.current.condition.code == 1276 || 
               data.current.condition.code == 1273) {
        weathericon.src = "thunder_rain.png";
    }
    
   
    const temp =data.current.temp_c;
    const des= data.current.condition.text;

    currentweather.querySelector("#temp").innerHTML= `${temp}<span>°C</span>`;
    currentweather.querySelector("#condition").innerText=des;
   
}
catch(error){
    console.log(error)
}
}
search.addEventListener("keyup",(e)=>{
    const city=search.value.trim();

    if(e.key == "Enter" && city){
        weatherdetails(city);
    }
});
