import React, {useEffect, useState} from 'react'
import { View,Text } from 'react-native'
import { create } from 'apisauce'
import GetLocation from 'react-native-get-location'
import ForecastList from '../components/ForecastList'


const MainScreen=()=>{
    const [data,setData]=useState()
    const [loading,setLoading]=useState(true)

    useEffect(()=>{

        fetch()
    
        return ;

    },[])





const fetch = ()=>{
    GetLocation.getCurrentPosition({
        enableHighAccuracy:true,
        timeout: 15000,
    })
    .then( async location => {
        console.log(location);
        const api = create({
            baseURL: 'https://api.github.com',
            headers: { Accept: 'application/vnd.github.v3+json' },
          })
        
          const apik=`https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=minutely,hourly&units=metric&appid=3b1b7954dd3c7d459e398cee98b2a1ff`

            await api.post(apik).then((res)=> set(res))
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    })
    

}

const set=(res)=>{
    setData(res.data)
    setLoading(false)
}




loading?(null):(console.log(data))



    

    return(
        <View>
            {loading?(null):(<Text>
                <ForecastList data={data}/>  
            </Text>)}
            
        </View>
    )
}


export default MainScreen