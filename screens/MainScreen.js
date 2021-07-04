import React, { useEffect, useRef, useState } from 'react'
import { View, Text, SafeAreaView, Image, Dimensions, Button } from 'react-native'
import { create } from 'apisauce'
import GetLocation from 'react-native-get-location'
import ForecastList from '../components/ForecastList'
import Geocoder from 'react-native-geocoder';
import Error from './Error'
import { connect } from 'react-redux'

import * as actions from '../redux/action/dataAction'


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const MainScreen = (props) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [locality, setLocality] = useState()
    const err = useRef(false)



    useEffect(() => {

        fetch()

        return ()=>{
            setData()
            setLoading()
            setLocality()
        }
          

    }, [])




    const fetch = () => {
        setLoading(true)
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(async location => {

                /* console.log(location) */
                const api = create({
                    baseURL: 'https://api.github.com',
                    headers: { Accept: 'application/vnd.github.v3+json' },
                })


                const apik = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=minutely,hourly&units=metric&appid=3b1b7954dd3c7d459e398cee98b2a1ff`

                await api.post(apik).then((res) => set(res)).catch(error => err.current = true)




                /*** revrse geocoding */
                var NY = {
                    lat: location.latitude,
                    lng: location.longitude
                };
                err.current = false
                await Geocoder.geocodePosition(NY).then(res =>
                    setLocality(res[0].locality)

                )
                    .catch(error => err.current = true)
            })
            .catch(error => {
                const { code, message } = error;
                err.current = true
            })


    }

    const set = (res) => {
        setData(res.data)
        setLoading(false)
        props.addData(res.data)
    }




    /* loading?(null):(console.log(data.daily)) */


    const render = () => {

        if (err.current == true) {
            return (
                <Error fetch={fetch} />

            )
        }
        else {
            return (
                <ForecastList data={data} locality={locality} />
            )
        }

    }


    return (

        loading ? (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Image source={require('../assets/loader.gif')} style={{ width: width / 2, height: width / 2 }} />
            </View>
        ) : (
            render()
        )


    )
}


const mapDispatchTOProps = (dispatch) => {
    return {
        addData: (data) => dispatch(actions.addData(data))
    }
}

export default connect(null, mapDispatchTOProps)(MainScreen)