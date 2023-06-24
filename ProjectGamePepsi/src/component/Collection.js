import { Image, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";

const Collection = (props) => {
  
  const { navigation } = props;
  const [showtick, setShowtick] = useState(true)
  const [showOTP, setShowOTP] = useState('')


  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);


  const [isModalPlay, setIsModalPlay] = useState(false);

  const handleModalPlay = () => setIsModalPlay(() => !isModalPlay);

  const click = () => {
    navigation.navigate('Login')
  }
  const logout = () => {
    navigation.navigate('Login')
  }
  const back = () => {
    navigation.navigate('HomePage')
  }
  const bosutap = () => {
    navigation.navigate('DetailGift')
  }

  return (

    <>
      <LinearGradient
        colors={['#0063A7', '#02A7F0', '#0063A7']}
        style={styles.linearGradient}>

        {/* HEADER */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image style={styles.vector1} source={require('../media/Vector1.png')} />
          <Image style={styles.vector2} source={require('../media/Collection/vector1.png')} />
        </View>
        {/* HEADER */}

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20, marginTop: -150 }}>
          <TouchableOpacity onPress={back}>
            <Image source={require('../media/PlayScreen1/btnback.png')} />
          </TouchableOpacity>




          <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 24 }}>Bộ sưu tập</Text>



          <TouchableOpacity onPress={logout}>
            <Image style={styles.vectorlogout} source={require('../media/HomePage/logout.png')} />

          </TouchableOpacity>


        </View>


        {/* TITLE */}

        {/* TITLE */}

        {/* IMAGE */}
        {/* IMAGE */}

        {/* FORM */}
        <View style={{ flexDirection: 'column', alignItems: 'center', padding: 15, marginTop: 0 }}>
          <Image style={{ backgroundColor: '#BE050C', borderRadius: 60 }} source={require('../media/Collection/Circle.png')} />
          <Text style={styles.title2} onPress={click}>700</Text>
          <Text style={styles.title}>Số coins hiện tại của bạn</Text>

          <Image style={{ marginTop: 40 }} source={require('../media/Collection/Product.png')} />
          <View style={styles.textSL}>
            <Text style={styles.title3}>4</Text>
            <Text style={styles.title3}>6</Text>
            <Text style={styles.title3}>2</Text>
          </View>


          <Text style={styles.title4}>Đổi ngay bộ sưu tập <Text style={styles.title5}>AN - LỘC - PHÚC</Text>
          </Text>
          <Text style={styles.title4}>để có cơ hội nhận ngay <Text style={styles.title5}>300 coins</Text> hoặc
          </Text>
          <Text style={styles.title4}>một <Text style={styles.title5}>phần quà may mắn</Text></Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 90, marginTop: 10 }}>
            <Image source={require('../media/Collection/GiamSL.png')} />
            <Text style={{ color: 'white', textAlign: 'center' }}> 1 </Text>
            <Image source={require('../media/Collection/TangSL.png')} />

          </View>

          {/* DIALOG 1 */}
          <TouchableOpacity onPress={handleModal}>
            <Image style={{ marginTop: 40 }} source={require('../media/Collection/button.png')} />

          </TouchableOpacity>
          {/* DIALOG 1 */}
          {showtick?
               <Modal isVisible={isModalVisible} >
               <View style={{ alignItems: 'center', width: 230, height: 180, marginLeft: 65, justifyContent: 'center' }}>
                
   
                 <Image style={{}} source={require('../media/Modal/qua.png')}/>
   
                 <Text style={styles.titleModal}>Bạn chắc chắn muốn đổi </Text>
                 <Text style={styles.titleModal3}><Text style={styles.titleModal2}>1 combo</Text> hay không?</Text>
   
                 
                 <TouchableOpacity onPress={() => setShowtick(!showtick)} >
                   <Image source={require('../media/Modal/doiqua.png')} />
                 </TouchableOpacity>
   
                 <TouchableOpacity onPress={handleModal}>
                   <Image source={require('../media/Modal/Buttonclose.png')}/>
                 </TouchableOpacity>
   
               </View>
             </Modal>
              :
              <Modal isVisible={isModalVisible} >
              <View style={{ alignItems: 'center', width: 230, height: 180, marginLeft: 65, justifyContent: 'center' }}>
               
  
                <Image style={{marginLeft:-60}} source={require('../media/Modal/quamo.png')}/>
                <Image style={{marginTop:-200}} source={require('../media/Modal/mupepsi.png')}/>
  
                <Text style={styles.titleModal4}>Bạn nhận được</Text>
                <Text style={styles.titleModal2}>Pepsi Bucket Hat</Text>
  
                
              
  
                <TouchableOpacity style={{marginTop:50}} onPress={() => setShowtick(!showtick)}>
                  <Image source={require('../media/Modal/Buttonclose.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={{marginLeft:250,marginTop:-300}} onPress={bosutap}>
                  <Image source={require('../media/Modal/nextbtn.png')}/>
                </TouchableOpacity>

                
  
              </View>
            </Modal>
          }
         
          {/* DIALOG 1 */}

        
          

        </View>
        {/* FORM */}


        {/* IMAGE */}
        <Image style={styles.vector6} source={require('../media/Vector5.png')} />
        <Image style={styles.vector5} source={require('../media/Vector5.png')} />

        <Image style={styles.vector7} source={require('../media/Vector5.png')} />
        <View style={{ flexDirection: 'row', position: 'absolute', marginTop: 250 }}>
          <Image source={require('../media/Collection/vectorleft.png')} />
          <Image source={require('../media/Collection/vectorright.png')} />
        </View>



        {/* IMAGE */}

        {/* BUTTON */}
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>

        </View>
        {/* BUTTON */}

        {/* IMAGE */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {/* <Image style={styles.vector4} source={require('../media/Vector4.png')} /> */}
        </View>
        {/* IMAGE */}
        <Image style={styles.vector3} source={require('../media/Vector3.png')} />

        <Image style={styles.vector4} source={require('../media/Vector4.png')} />



      </LinearGradient>

    </>
  )

}


export default Collection

const styles = StyleSheet.create({

  textSL: {
    flexDirection: 'row',
    justifyContent: 'space-around'
    , width: 325, marginTop: 10
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

  vector3: {

    position: 'absolute',
    marginTop: 580

  },
  vector4: {
    position: 'absolute',
    marginTop: 535,
    marginLeft: 185
  },
  vector5: {
    position: 'absolute',
    marginLeft: -20,
    marginTop: 190


  },
  vector7: {
    position: 'absolute',
    marginTop: 450
  },
  vector6: {
    position: 'absolute',
    marginLeft: 355,
    marginTop: 270,

  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 30
  },
  title1: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',

  },
  title2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: -70
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
    marginTop: 10, zIndex: 10
  },
  title3: {
    color: 'white',
    fontWeight: 'bold'
  },
  title4: {
    color: 'white'
  },
  title5: {
    color: '#FFDD00',
    fontWeight: 'bold'
  },
  titleModal:{
    fontSize:18,
    color:'white',
    marginTop:20
  },
  titleModal2:{
    color:'#FFDD00',
    fontSize:18,
    fontWeight:'bold'
  },titleModal3:{
    fontSize:18,
    color:'white',
  },titleModal4:{
    fontSize:18,
    color:'white',
    marginTop:100
  }
})