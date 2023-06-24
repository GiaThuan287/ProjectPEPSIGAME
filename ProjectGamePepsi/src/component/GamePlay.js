import { Image, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Modal } from '@ui-kitten/components';
import Draggable from 'react-native-draggable';
const GamePlay = (props) => {
    const { navigation } = props;
    const logout = () => {
        navigation.navigate('Login')
    }
    const back = () => {
        navigation.navigate('HomePage')
    }
    const gift = () => {
        navigation.navigate('Gift')
    }

    const [dialogDiem, setDialogDiem] = useState(false);
    return (
        <LinearGradient
            colors={['#0063A7', '#02A7F0', '#0063A7']}

            style={styles.linearGradient}>
            {/*IMAGE */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image source={require('../media/PlayScreen1/Vector1.png')} />
                <Image source={require('../media/PlayScreen1/Vector8.png')} />

            </View>

            {/* HEADER */}
            <View style={{ flexDirection: 'row', marginTop: -180, justifyContent: 'space-between', padding: 20 }}>
                <TouchableOpacity onPress={back}>
                    <Image source={require('../media/PlayScreen1/btnback.png')} />
                </TouchableOpacity>




                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>VUỐT LÊN ĐỂ CHƠI</Text>
                    <Text style={{ color: 'white' }}>Bạn còn <Text style={{ color: '#FFDD00' }}>3</Text> lượt chơi miễn phí</Text>

                </View>

                <TouchableOpacity onPress={logout}>
                    <Image style={styles.vectorlogout} source={require('../media/HomePage/logout.png')} />

                </TouchableOpacity>


            </View>
            {/* HEADER */}



            <Image style={styles.vector2} source={require('../media/PlayScreen1/Vector2.png')} />

            <Image style={styles.vector3} source={require('../media/PlayScreen1/Vector3.png')} />
            <Image style={styles.vector4} source={require('../media/PlayScreen1/Vector4.png')} />
            <Image style={styles.vector5} source={require('../media/PlayScreen1/Vector5.png')} />

            <Image style={styles.vector6} source={require('../media/PlayScreen1/Vector6.png')} />
            <Image style={styles.vector7} source={require('../media/PlayScreen1/Vector7.png')} />

            {/* <TouchableOpacity style={styles.vector8} onPress={gift}>
                <Image source={require('../media/PlayScreen1/Vector9.png')} />

            </TouchableOpacity> */}
            <Draggable

               
                x={92}
                y={599}
                maxX={92}
                minX={92}
                minY={400}
                renderSize={180}
                shouldReverse
                onDragRelease={() => navigation.navigate('Gift')}>

<Image source={require('../media/PlayScreen1/Vector9.png')} />
            </Draggable>





        </LinearGradient>
    )
}

export default GamePlay

const styles = StyleSheet.create({

    linearGradient: {
        flex: 1,
        textAlign: 'center'
    },
    vector2: {
        marginLeft: 28,
        position: 'absolute',
        marginTop: 100

    },
    vector3: {
        position: 'absolute',
        marginLeft: 355,
        marginTop: 520
    },
    vector4: {
        position: 'absolute',
        marginLeft: 340,
        marginTop: 150
    },
    vector5: {
        position: 'absolute',
        marginTop: 480

    },
    vector6: {
        position: 'absolute',
        marginLeft: 170
        , marginTop: 560,

        width: 50
        , height: 45
    },
    vector7: {
        position: 'absolute',

        marginTop: 482,
        width: "100%"
        ,
    },
    vector8: {
        position: 'absolute',
        width: '50%',
        marginLeft: 95,
        marginTop: 600
    },
})