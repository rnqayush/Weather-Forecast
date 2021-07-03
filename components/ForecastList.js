import React, {useEffect, useState} from 'react'
import { View,Text,FlatList } from 'react-native'

const ForecastList=({data})=>{



    return(

        <View>
           <View>
               <Text>
                   {data.current.temp}
               </Text>
           </View>

                 
           
        </View>
    )
}

export default ForecastList