import { Image, StyleSheet, Text, View, TextInput, Button, TouchableOpacity,ScrollView } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
import { OverflowMenu } from '@ui-kitten/components';


const DetailGift = (props) => {
    const { navigation } = props;
    const [showdoiqua, setShowdoiqua] = useState(true)
    const [showquacuatui, setShowquacuatui] = useState(true)
    const [showOTP, setShowOTP] = useState('')


    const click = () => {
        navigation.navigate('Login')
    }
    const logout = () => {
        navigation.navigate('Login')
    }
    const back = () => {
        navigation.navigate('HomePage')
        
    }
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    DetailGift()
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




                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 24 }}>Chi tiết quà tặng</Text>



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


                    {
                        showdoiqua ?

                            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setShowdoiqua(!showdoiqua)}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('../media/DetailGift/doiqua.png')} />
                                    <Image source={require('../media/DetailGift/quacuatui.png')} />
                                </View>

                                <Image style={{ backgroundColor: '#BE050C', borderRadius: 60 }} source={require('../media/Collection/Circle.png')} />
                                <Text style={styles.title2} onPress={click}>700</Text>
                                <Text style={styles.title}>Số coins hiện tại của bạn</Text>
                                
                            </TouchableOpacity>

                            : <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => setShowdoiqua(!showdoiqua)} >
                                <Image source={require('../media/DetailGift/doiqua2.png')} />
                                <Image source={require('../media/DetailGift/quacuatui2.png')} />

                            </TouchableOpacity>
                    }











                </View>

                {/* FORM THONG TIN NGUOI NHAN */}
                <Modal isVisible={isModalVisible} >
                    <View style={{ borderRadius: 10, backgroundColor: '#FCE582', width: 330, height: 600, marginLeft: 15, padding: 5 }}>

                        <TouchableOpacity onPress={handleModal}>
                            <Image style={{ position: 'absolute', marginLeft: 295 }} source={require('../media/Modal/ButtonX.png')} />
                        </TouchableOpacity>

                        <Text style={{color:'#005082',marginTop:20,fontWeight:'bold',fontSize:18,textAlign:'center'}}>THÔNG TIN NhẬN QUÀ</Text>
                        <View style={{ flexDirection: 'column',padding:10 }}>
                            <Text style={{color:'#005082',marginTop:20,fontWeight:'bold',fontSize:16}}>Quà của bạn: <Text style={{color:'#D02027',fontSize:18}}>Pepsi Bucket Hat</Text></Text> 
                            
                            
                            <Text style={styles.title111}>Họ và tên</Text>
                            <TextInput style={styles.input2} placeholder='VD : Nguyễn Văn A'></TextInput>

                            <Text style={styles.title111}>Số điện thoại</Text>
                            <TextInput style={styles.input2} placeholder='VD : 012345678'></TextInput>


                            <Text style={styles.title111}>Địa chỉ</Text>
                            <TextInput style={styles.input3} placeholder='Nhập địa chỉ của bạn' multiline={true}></TextInput>


                            <Text style={styles.title111}>Ghi chú</Text>
                            <TextInput style={styles.input3} placeholder='Nhập ghi chú nếu có' multiline={true}></TextInput>

                            <TouchableOpacity style={{marginLeft:80,marginTop:20}}>
                                <Image source={require('../media/Modal/xacnhan.png')}/>
                            </TouchableOpacity>


                        </View>


                    </View>
                </Modal>

                {/* FORM */}
                
                    {showdoiqua ?
                    // <View style={{padding:20}}>
                    <ScrollView >
                    {/* ITEM 1 */}
                    <View style={{ flexDirection:'row',justifyContent:'space-between',padding:20 }}>
                        {/* item 1.1 */}
                        <View style={{}}>
                            <Image source={require('../media/DetailGift/vector1.png')}/>
                           
                            <View style={styles.item11}>
                                

                            <Text style={styles.titleVang}>Pepso Bucket Hat</Text>
                            <Text style={styles.titletrang}>còn lại: <Text>500</Text></Text>
                            <TouchableOpacity onPress={handleModal}>
                            <Image source={require('../media/DetailGift/buttondoiqua.png')}/>

                            </TouchableOpacity>

                            </View>
                        </View>

                       

                        {/* item 1.2 */}
                        <View style={{}}>
                            <Image source={require('../media/DetailGift/vector2.png')}/>
                           
                            <View style={styles.item11}>
                                

                            <Text style={styles.titleVang}>Pepso Jacket</Text>
                            <Text style={styles.titletrang}>còn lại: <Text>10</Text></Text>
                            <Image source={require('../media/DetailGift/buttondoiqua.png')}/>

                            </View>
                        </View>

                    </View>
                    {/* ITEM 2 */}
                    <View style={{ flexDirection:'row',justifyContent:'space-between',padding:20 }}>
                         {/* item 1.1 */}
                         <View style={{}}>
                            <Image source={require('../media/DetailGift/vector3.png')}/>
                           
                            <View style={styles.item11}>
                                

                            <Text style={styles.titleVang}>Pepso Bucket Hat</Text>
                            <Text style={styles.titletrang}>còn lại: <Text>500</Text></Text>
                            <Image source={require('../media/DetailGift/buttondoiqua.png')}/>

                            </View>
                        </View>

                       

                        {/* item 1.2 */}
                        <View style={{marginLeft:10}}>
                            <Image source={require('../media/DetailGift/vector4.png')}/>
                           
                            <View style={styles.item11}>
                                

                            <Text style={styles.titleVang}>Pepso Jacket</Text>
                            <Text style={styles.titletrang}>còn lại: <Text>10</Text></Text>
                            <Image source={require('../media/DetailGift/buttondoiqua.png')}/>

                            </View>
                        </View>

                    </View>
                    </ScrollView>
                    // </View>
                    :
                    <View style={{alignItems:'center'}}>
                    <Image source={require('../media/DetailGift/null.png')}></Image>

                    </View>
                }
                
                {/* IMAGE */}
                
                <Image style={styles.vector5} source={require('../media/Vector5.png')} />

                



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
               


            </LinearGradient>

        </>
    )

}


export default DetailGift

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
    item11:{
        backgroundColor:'#C31E25',
        width:158,height:100,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        marginTop:-20,
        alignItems:'center'
    },
    titleVang:{
        color:'#FFDD00',fontSize:16,fontWeight:'bold'
    },
    titletrang:{
        color:'white'
    },title111:{
        color:'#005082',fontSize:14,fontWeight:'bold'
        ,marginTop:15
    }
    ,input2:{
        backgroundColor:'white'
        ,borderRadius:10,
        marginTop:10
    },
    input3:{
        backgroundColor:'white'
        ,borderRadius:10,
        marginTop:10,
        height:70
    }
})