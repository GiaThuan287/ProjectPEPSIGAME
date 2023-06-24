import { Image, StyleSheet, Text, View, TextInput, Button, TouchableOpacity,ScrollView } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';


const Introduce = (props) => {
    const { navigation } = props;
    const [showtick, setShowtick] = useState(true)
    const [showOTP, setShowOTP] = useState('')

 
    const click = () => {
        navigation.navigate('Register')
    }
    return (

        <>
            <LinearGradient
                colors={['#0063A7', '#02A7F0', '#0063A7']}
                style={styles.linearGradient}>

                {/* HEADER */}
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Image style={styles.vector2} source={require('../media/Vector2.png')} />
                </View>
                {/* HEADER */}


                {/* TITLE */}
                <View style={{ flexDirection: 'column', marginTop: -150, justifyContent: 'center', margin: 20 }}>
                    <TouchableOpacity onPress={click} style={{marginTop:10,zIndex:10}}>
                    <Image style={{ position: 'absolute' }} source={require('../media/PlayScreen1/btnback.png')} />

                    </TouchableOpacity>
                    <Text style={styles.title}>Thể lệ chương trình</Text>

                </View>
                {/* TITLE */}

                {/* IMAGE */}
                <Image style={styles.vector5} source={require('../media/Vector5.png')} />
                {/* IMAGE */}

                {/* FORM */}
                <View style={{alignItems:'center'}}>

               
                <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.docs}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.{"\n"} 
                    {"\n"} 
                    Tellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue.
                    {"\n"} 
                    {"\n"} 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.
                    {"\n"} 
                    {"\n"} 


                    Tellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.
                    {"\n"} 
                    {"\n"} 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.
                    {"\n"} 
                    {"\n"} 
                    Tellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue.
                    {"\n"} 
                    {"\n"} 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.

                </Text>
                
                </ScrollView>
                </View>


                {/* FORM */}

                {/* IMAGE */}
                <Image style={styles.vector6} source={require('../media/Vector5.png')} />

                <Image style={styles.vector7} source={require('../media/Vector5.png')} />
                {/* IMAGE */}

                {/* BUTTON */}

                {/* BUTTON */}


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {/* <Image style={styles.vector4} source={require('../media/Vector4.png')} /> */}
                </View>




            </LinearGradient>

        </>
    )

}


export default Introduce

const styles = StyleSheet.create({
    docs: {
        textAlign: 'justify',
        color: 'white',
        fontSize: 12,
        width:320

    },
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

    vector2: {
        width: 80,
        height: 200,

    },
    vector3: {
        marginTop: -80,
        position: 'absolute',


    },
    vector4: {
        position: 'absolute',
        marginTop: 535,
        marginLeft: 185
    },
    vector5: {
        marginLeft: -20,
        position: 'absolute',
        marginTop:450
    },
    vector6: {
        marginLeft: 355,
        marginTop: 300,
        position: 'absolute',
    },
    vector7: {
        position: 'absolute',
        marginLeft:-28,marginTop:150
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
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
        marginTop: 10, zIndex: 10
    }
})