import { Image, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Modal } from '@ui-kitten/components';


const GiftScreen = (props) => {
    const [randomImage, setRandomImage] =useState('');
    const {navigation}= props;
    const back = ()=>{
        navigation.navigate('GamePlay')
    }
    const [dialogDiem, setDialogDiem] = useState(false);

    const renderImage = () => {
        const Images = [
          { image: require('../media/Gift1/7up50.png') },
          { image: require('../media/Gift1/mirinda100.png') },
          { image: require('../media/Gift1/Pepsi50.png') },
          
        ];
        const randomImageIndex = Math.floor(Math.random() * Math.floor(3));
        return Images[randomImageIndex].image;
    }
    useEffect(()=>{
        setRandomImage(renderImage);
    })
    return (
        <LinearGradient
            colors={['#0063A7', '#02A7F0', '#0063A7']}

            style={styles.linearGradient}>
            {/*IMAGE */}
            <Image style={styles.vector1} source={require('../media/Gift1/vector1.png')} />
            <View style={styles.container1}>
                <Image source={require('../media/PlayScreen1/Vector1.png')} />
                <Image source={require('../media/PlayScreen1/Vector8.png')} />
            </View>


            {/* LOGOUT */}
            <TouchableOpacity onPress={back}>
                <Image style={styles.btnlogout} source={require('../media/HomePage/logout.png')} />
            </TouchableOpacity>


            {/* BODY */}

            {/* GiftImage */}
            
            <Image style={styles.pepsi50} source={require('../media/Gift1/Pepsi50.png')}/>
            {/* <Image style={styles.pepsi50} source={{uri:renderImage}}/> */}

            <View style={{alignItems:'center',marginTop:480,marginLeft:60,position:'absolute',zIndex:10}}>
            <Text style={styles.txt1}>Chúc mừng bạn đã nhận được</Text>
            <Text style={styles.txt2}>1 lon Pepsi AN <Text style={styles.txt1}>ứng với</Text> 50 coins  </Text>
            <TouchableOpacity style={{marginTop:20}}>
            <Image source={require('../media/Gift1/btnxacnhan.png')}/>
            </TouchableOpacity>
          
            </View>
            
            

            {/* IMAGE */}
            
            <Image style={styles.vector6} source={require('../media/Gift1/vector9.png')} />
            <Image style={styles.vector7} source={require('../media/Gift1/vector10.png')} />
            <Image style={styles.vector10} source={require('../media/Gift1/vector9.png')} />

            <Image style={styles.vector8} source={require('../media/Gift1/vector11.png')} />
            <Image style={styles.vector9} source={require('../media/Gift1/vector3.png')} />

            <Image style={styles.vector2} source={require('../media/HomePage/Vector10.png')} />
            <Image style={styles.Vector12} source={require('../media/HomePage/Vector12.png')} />
            <Image style={styles.vectro3} source={require('../media/Gift1/vector2.png')} />
            <Image style={styles.vectro4} source={require('../media/Gift1/vector7.png')} />
            <Image style={styles.vectro5} source={require('../media/Gift1/vector7.png')} />
           
            
            






        </LinearGradient>
    )
}

export default GiftScreen

const styles = StyleSheet.create({
    txt1:{
        fontSize:18,
        color:'white'
    } ,
    txt2:{
        fontSize:18,
        color:'#FFDD00'
        ,fontWeight:'bold'
    }
    ,
    container1:{
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    btnlogout:{
        position: 'absolute', 
        marginLeft: 350, 
        marginTop: -140 
    },
    linearGradient: {
        flex: 1,
        textAlign: 'center'
    },
    Vector12: {
        marginLeft: 105
        , marginTop: 480
    },
    vector1:{
        position: 'absolute',
        width: '80%' 
    },
    vector2:{
        position: 'absolute',
        width: '100%', 
        marginTop: 350
    },
    pepsi50:{
        marginLeft:120,
        position:'absolute',
        marginTop:50
    },
    vectro3:{
        position:'absolute',
        marginLeft:287,
        marginTop:300
    },
    vectro4:{
        position:'absolute',
        marginTop:300,
        marginLeft:20
    },
    vectro5:{
        position:'absolute',
        marginTop:560,
        marginLeft:40
    },
    vector6:{
       position:'absolute'
       ,marginLeft:310,
       marginTop:380,
       width:'5%'
    },
    vector7:{
        position:'absolute'
        ,marginLeft:370,
       marginTop:550
    },
    vector8:{
        position:'absolute'
        ,marginTop:200
    },
    vector9:{
        position:'absolute',
        marginTop:460,
        marginLeft:30
    },
    vector10:{
        position:'absolute'
        ,marginLeft:310,
        marginTop:630
    }
})