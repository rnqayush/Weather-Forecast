import React, { useRef } from 'react'
import { View, Text, StyleSheet, Dimensions} from 'react-native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { connect } from 'react-redux'


const ForecastList = (props) => {
    var locality = props.locality
    var data = props.data
    /* console.log(locality); */

    data[0] ? (console.log(data[0].current)) : (null)




    const setDay = useRef([])
    


    var today = new Date();

    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var length = days.length
    var day = today.getDay()



    /* console.log(days[today.getDay() - 1]) */
    /* console.log(today.getDay()); */
    var c = 1
    var counter = 0
    setDay.current = []
    for (var i = day; i < length; i++) {
        if (c <= 5) {
            c++
            counter++

            setDay.current.push(days[i])


        }

    }
    for (var i = 0; i < 5 - counter; i++) {


        setDay.current.push(days[i])
    }


    console.log(setDay)


    var test = 0

    /*  console.log(5-(length-day)); */



    return (

        <>
            {data[0] ? (<View style={styles.container}>

                <View style={styles.current}>

                    <Text style={{ textAlign: 'left', fontSize: 25, fontFamily: 'Ubuntu-Regular', color: 'darkslategrey' }}>{today.getDate()} {months[today.getMonth()]} | {today.getDay() == 0 ? (<Text>{days[6]}</Text>) : (<Text>{days[today.getDay() - 1]}</Text>)} {/* {days[today.getDay()-1]} */}</Text>
                    <Text style={{ fontSize: 80, color: "darkslateblue", fontFamily: 'Ubuntu-Regular' }}>{data[0].current.temp}<Text style={{ color: 'orange', fontFamily: 'Ubuntu-Regular' }}>&deg;C</Text></Text>
                    <Text style={{ textAlignVertical: 'center', fontSize: 45, fontFamily: 'Ubuntu-Regular', color: 'darkslategrey' }}>
                        {locality}
                    </Text>
                </View>
                <View style={styles.days}>

                    {setDay.current.map((item) => {
                        test++
                        return (
                            <View key={item} style={{ borderTopColor: 'gray', borderTopWidth: 2, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', height: 65, fontFamily: 'Ubuntu-Regular' }}>
                                <Text style={{ fontSize: 25, marginLeft: 30, color: 'darkslategrey' }} >{item}</Text>
                                <Text style={{ marginRight: 30, fontSize: 25, color: "darkslateblue" }} >{data[0].daily[test].temp.day} <Text style={{ color: 'orange' }}>&deg;C</Text></Text>
                            </View>


                        )
                    })}
                </View>






            </View>) : (null)}

        </>

    )
}

const mapStateToProps = (state) => {
    const { data } = state
    return {
        data: data
    }

}


const styles = StyleSheet.create({
    current: {
        marginTop: height / 20,
        width: width,
        justifyContent: 'center',
        alignItems: 'center'

    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor:'white'
    },

})
export default connect(mapStateToProps, null)(ForecastList)