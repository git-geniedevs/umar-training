import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const LoginButton = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.body} >
                <Text  style={styles.button}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      
        justifyContent: 'center',
      },
    
  body:{
    width:"100%",
    height:40,
    backgroundColor:"#EF6868",
    justifyContent:"center",
    borderRadius:40

  },

    button:{
        color:"#fff",
        alignSelf:"center",
        fontSize:25
    }
})