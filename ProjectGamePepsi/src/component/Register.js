import { Image, StyleSheet, Text, View, TextInput, Button, TouchableOpacity,ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth'


const Register = (props) => {

  const [phone, setPhone] = useState('');

    // OTP
    const [code, setCode] = useState('');

    // Xác nhận OTP nhập đúng hay sai
    const [confirm, setConfirm] = useState(null);
    const signInWithPhoneNumber = async () => {
      // Kiểm tra xem có lấy được số điện thoại từ text input chưa
      console.log(phone, 'mobile');
      // +84 là số mã quốc gia, Việt Nam là +84
      // Lưu ý: khi nhập vào input nên bỏ số 0 ở đầu
      // Ví dụ: số điện thoại 0123456789 thì nhập vào input là 123456789
      // phoneNumber = +84123456789, vì +84 có thể coi như là đại diện cho số 0 ở Việt Nam
      const phoneNumber = '+84' + phone;
      // Kiểm tra đã ra đúng dạng chưa '+84123456789'
      console.log(phoneNumber, 'phoneNumber');
      // auth().signInWithPhoneNumber(phoneNumber) là hàm đăng ký số điện thoại lên firebase, sau đó firebase sẽ trả về mã OTP qua phương thức SMS
      // Nên xử lí bất đồng bộ async await
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      // Thông báo
      ToastAndroid.show('Otp được gửi Vui lòng xác minh...', ToastAndroid.SHORT);
      navigation.navigate('OTPRegister')
  }

  const confirmCode = async () => {
    try {
        // Kiểm tra xem có lấy được giá trị mà người dùng đã nhập vào text input chưa
        console.log(code);
        // confirm.confirm(code) là hàm kiểm tra xem người dùng đã nhập otp đúng hay sai, code là mã otp người dùng đã nhập vào input
        // Nên xử lí bất đồng bộ async await
        await confirm.confirm(code);
        ToastAndroid.show('Nhập OTP Thành công', ToastAndroid.SHORT);
    } catch (error) {
        ToastAndroid.show('Nhập OTP thất bại', ToastAndroid.SHORT);
        console.log(error);
    }
}



  const { navigation } = props;
  const [showtick, setShowtick] = useState(true)
  const [showOTP, setShowOTP] = useState('')

  const clickOTP = () => {
    navigation.navigate('OTPRegister')
  }
  const click = ()=>{
    navigation.navigate('Login')
  }
  const clickIntro = ()=>{
    navigation.navigate('Intro')
  }
  return (

    <>
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
          <Text style={styles.title2} onPress={click}>ĐĂNG KÝ</Text>
          <TextInput onChangeText={(value) => { setPhone(value) }}  keyboardType='phone-pad' placeholder='Số điện thoại' style={styles.input1} ></TextInput>
          <TextInput placeholder='Tên người dùng' style={styles.input1}></TextInput>
          <View style={styles.checkboxContainer}>
            {
              showtick ?
                <TouchableOpacity onPress={() => setShowtick(!showtick)} style={styles.ButtonCheckBox} >
                  <Text style={{ textAlign: 'center' }}>✓</Text>
                </TouchableOpacity>

                : <TouchableOpacity onPress={() => setShowtick(!showtick)} style={styles.ButtonCheckBox} >
                </TouchableOpacity>
            }


            <Text style={styles.txtCheckBox}>Tôi đã đọc và đồng ý với <Text onPress={clickIntro} style={{ color: '#FFDD00' }}>thể lệ chương trình</Text> Pepsi Tết</Text>
          </View>
        </View>
        {/* FORM */}

        {/* IMAGE */}
        <Image style={styles.vector6} source={require('../media/Vector5.png')} />

        <Image source={require('../media/Vector5.png')} />
        {/* IMAGE */}

        {/* BUTTON */}
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          {
            showOTP ?
              <TouchableOpacity onPress={signInWithPhoneNumber}>
                <Image style={styles.btn} source={require('../media/btnOtp.png')} />
              </TouchableOpacity> :
              <TouchableOpacity onPress={signInWithPhoneNumber}>
                <Image style={styles.btn} source={require('../media/btnOTPShow.png')} />
              </TouchableOpacity>
          }



          <Text style={styles.txtCheckBox}>Hoặc</Text>
          <TouchableOpacity onPress={click}><Image style={styles.btn} source={require('../media/btnLogin.png')} /></TouchableOpacity>
        </View>
        {/* BUTTON */}

        {/* IMAGE */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image style={styles.vector3} source={require('../media/Vector3.png')} />
          {/* <Image style={styles.vector4} source={require('../media/Vector4.png')} /> */}
        </View>
        {/* IMAGE */}
        <Image style={styles.vector4} source={require('../media/Vector4.png')} />



      </LinearGradient>

    </>
  )

}


export default Register

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
    marginTop: -80


  },
  vector4: {
    position:'absolute',
    marginTop:535,
    marginLeft:185
  },
  vector5: {
    marginLeft: -20
  },
  vector6: {
    marginLeft: 355,
    marginTop: -20
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
    marginTop: 10,zIndex:10
  }
})