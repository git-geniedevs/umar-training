import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Details = () => {
  return (
    <View>
     <Image source={require('../assets/jacket.jpg')}
        style={{width:"100%",height:210,alignSelf:"center",borderRadius:10}} />
        <Text style={{top:5,left:5,fontSize:18}}>Red jacket for sale</Text>
        <Text style={{top:10,left:5 ,color:"green",fontSize:18}}>$ 100</Text>
        <View style={{top:50,flexDirection:"row"}}>
        <Image source={require('../assets/jacket.jpg')}
        style={{width:50,height:50,alignSelf:"center",borderRadius:30,left:20}} />
        <Text style={{top:5,left:5,fontSize:18,left:30}}>Mosh Hamedani</Text>


        </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})