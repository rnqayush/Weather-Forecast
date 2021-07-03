import React, {useEffect, useRef, useState} from 'react'
import { View,Text,SafeAreaView,Image,Dimensions } from 'react-native'
import { create } from 'apisauce'
import GetLocation from 'react-native-get-location'
import ForecastList from '../components/ForecastList'
import Geocoder from 'react-native-geocoder';




const width= Dimensions.get('window').width
const height= Dimensions.get('window').height
const MainScreen=()=>{
    const [data,setData]=useState()
    const [loading,setLoading]=useState(true)
    const [locality,setLocality]=useState()

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
        
        console.log(location)
        const api = create({
            baseURL: 'https://api.github.com',
            headers: { Accept: 'application/vnd.github.v3+json' },
          })
          
        
          const apik=`https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=minutely,hourly&units=metric&appid=3b1b7954dd3c7d459e398cee98b2a1ff`

            await api.post(apik).then((res)=> set(res))




            /*** revrse geocoding */
            var NY = {
                lat: location.latitude,
                lng: location.longitude
              };
              await Geocoder.geocodePosition(NY).then(res => 
                setLocality(res[0].locality)
            )
            .catch(err => console.log(err))
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




loading?(null):(console.log(data.daily))



    

    return(
        
     
       
       loading?(
       
       
           <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

<Image source={require('../assets/loader.gif')}  style={{width:width/2,height:width/2}} />
           </View>
       ):(
                <ForecastList data={data} locality={locality}/>  
            )

      
       
       
            
          
            
       
    )
}


export default MainScreen