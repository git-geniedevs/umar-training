import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={{width:"95%",height:250,borderRadius:10,backgroundColor:"#fff",alignSelf:"center",top:50}}>
      <Image source={require('../assets/jacket.jpg')}
        style={{width:"100%",height:180,alignSelf:"center",borderRadius:10}} />
        <Text style={{top:5,left:5,fontSize:18}}>Red jacket for sale</Text>
        <Text style={{top:10,left:5 ,color:"green",fontSize:18}}>$ 100</Text>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:350,
        backgroundColor:"pink"
        
    }
})