import { Image, ImageBackground, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const WellcomeScreen = () => {
  return (
    <ImageBackground style={ styles.imgBackground } 
    resizeMode='cover' 
    source={require('../assets/bg.jpg')}>
        <Image source={require('../assets/logo.png')}
        style={{width:100,height:100,alignSelf:"center",top:10}} />
        <Text style={styles.text}>sell what you Don't Need</Text>
        <View style={{top:380}}>
            <TouchableOpacity style={styles.body} >
                <Text  style={styles.button}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.body1} >
                <Text  style={styles.button}>Register</Text>
            </TouchableOpacity>
        </View>
    
  </ImageBackground>
  )
}

export default WellcomeScreen

const styles = StyleSheet.create({
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1 
},
text:{
    fontSize:25,
    alignSelf:"center",
    color:"#fff",
    top:20
},
body:{
    width:"100%",
    height:40,
    backgroundColor:"#EF6868",
    justifyContent:"center",
    borderRadius:40

  },
  body1:{
    top:20,
    width:"100%",
    height:40,
    backgroundColor:"#68DBEF",
    justifyContent:"center",
    borderRadius:40

  },
    button:{
        color:"#fff",
        alignSelf:"center",
        fontSize:25
    }
})