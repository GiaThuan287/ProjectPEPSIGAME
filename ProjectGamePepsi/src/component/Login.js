import { Image, StyleSheet, Text, View, TextInput, Button, TouchableOpacity,Pressable } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
const Login = (props) => {
    const { navigation } = props;
  const [showtick, setShowtick] = useState(true)
  const [showOTP, setShowOTP] = useState('')

  const click = () => {
    navigation.navigate('Register')
  }
  const otp=()=>{
    navigation.navigate('OTPRegister')
  }
  return (
    <LinearGradient
    colors={['#0063A7', '#02A7F0', '#0063A7']}
    style={styles.linearGradient}>

    {/* HEADER */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Image style={styles.vector1} source={require('../media/Vector1.png')} />
      <Image style={styles.vector2} source={require('../media/Vector2.png')} />
    </View>
    {/* HEADER */}


    {/* TITLE */}
    <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: -100 }}>
      <Text style={styles.title}>Hey, mừng bạn đến với</Text>
      <Text style={styles.title1}>Pepsi Tết</Text>
    </View>
    {/* TITLE */}

    {/* IMAGE */}
    <Image style={styles.vector5} source={require('../media/Vector5.png')} />
    {/* IMAGE */}

    {/* FORM */}
    <View style={{ flexDirection: 'column', alignItems: 'center', padding: 15 }}>
      <Text style={styles.title2}>ĐĂNG NHẬP</Text>
      
    
     
    </View>

    <View style={{flexDirection:'column',padding:15}}>
      <Text style={styles.txtCheckBox} onPress={click}>Số điện thoại</Text>
      <TextInput placeholder='Số điện thoại' onChange={() => setShowOTP(!showOTP)} style={styles.input1}></TextInput>
      </View>

      <View style={{alignItems:'center'}}>
      <Image style={{width:150,height:137}} source={require('../media/3lon1.png')}/>

      </View>
    {/* FORM */}

    {/* IMAGE */}
    <Image style={styles.vector6} source={require('../media/Vector5.png')} />

    <Image source={require('../media/Vector5.png')} />
    {/* IMAGE */}

    {/* BUTTON */}
    <View style={{ flexDirection: 'column',marginTop:520,marginLeft:85,position:'absolute' }}>
      {
        showOTP ?
          <TouchableOpacity onPress={otp}>
            <Image style={styles.btn} source={require('../media/btnOtp.png')} />
          </TouchableOpacity> :
          <TouchableOpacity  onPress={otp}>
            <Image style={styles.btn} source={require('../media/btnOTPShow.png')} />
          </TouchableOpacity>
      }



      <Text style={{ marginLeft: 96,color: 'white'}}>Hoặc</Text>
      <Pressable onPress={click} style={{zIndex:10}}><Image style={styles.btn} source={require('../media/btnRegister.png')} /></Pressable>
      <Image style={styles.vector3} source={require('../media/Vector3.png')} />
      <Image style={styles.vector4} source={require('../media/Vector4.png')} />
    </View>
    {/* BUTTON */}

    {/* IMAGE */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
     
    </View>
    {/* IMAGE */}



  </LinearGradient>
  )
}

export default Login

const styles = StyleSheet.create({
    txtCheckBox: {
        marginLeft: 4,
        color: 'white'
      },
      checkboxContainer: {
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
        margin: 8,
        marginBottom: 20,
      },
      ButtonCheckBox: {
        backgroundColor: 'white',
        width: 24,
        height: 24,
        borderRadius: 10,
      },
      container: {
        flex: 1,
    
      },
      linearGradient: {
        flex: 1
      },
      vector1: {
        width: 160,
        height: 180,
    
      },
      vector2: {
        width: 80,
        height: 200,
    
      },
      vector3: {
        marginTop: -70,
        marginLeft:-85,
       
    
    
      },
      vector4: {
        marginTop: -237,
        marginLeft:100,
      
      },
      vector5: {
        marginLeft: -20
      },
      vector6: {
        marginLeft: 355,
        marginTop: -95
      },
      title: {
        fontSize: 20,
        color: 'white'
      },
      title1: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
      },
      title2: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        marginTop: -20
      },
    
    
      input1: {
        width: "100%"
        , height: 40,
        borderRadius: 10,
        borderColor: 'black',
        backgroundColor: 'white',
        marginTop: 20
    
      },
    
      btn: {
        width: 225,
        height: 50,
        marginTop:10,
        zIndex:3,
        
      }
})