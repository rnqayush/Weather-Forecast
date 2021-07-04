import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'


const Error=({fetch})=>{
    
    return(
        <View style={{flex:1,justifyContent:'space-evenly',alignItems:'center'}}>
            <View>
            <Text style={{fontSize:50,color:'gray'}}>Something</Text>
            <Text style={{fontSize:50,color:'gray'}}>Went wrong</Text>
            <Text style={{fontSize:50,color:'gray'}}>at our end</Text>
        </View>
        
        <TouchableOpacity
        onPress={()=>fetch()}
        style={{backgroundColor:'navy',height:45,width:100}}
        >
            <Text style={{fontSize:30,textAlign:'center',color:'white'}}>Retry</Text>
        </TouchableOpacity>
        </View>
        
    )
}


export default Error