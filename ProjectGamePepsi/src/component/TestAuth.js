import { Pressable, StyleSheet, Text, TextInput, View, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'

const TestAuth = () => {
    // Số điện thoại
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

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TextInput onChangeText={(value) => { setPhone(value) }} style={{ width: '100%', height: 70, color: 'white', backgroundColor: 'black', marginTop: 200 }} />
            <Pressable onPress={signInWithPhoneNumber} style={{ width: '100%', height: 70, backgroundColor: 'black', marginTop: 100 }}>
                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Gửi mã otp</Text>
            </Pressable>

            <TextInput onChangeText={(value) => setCode(value)} style={{ width: '100%', height: 70, color: 'white', backgroundColor: 'red', marginTop: 100 }} />
<Pressable onPress={confirmCode} style={{ width: '100%', height: 70, backgroundColor: 'blue', marginTop: 10 }}>
                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>confirm code</Text>
            </Pressable>
        </View>
    )
}

export default TestAuth

const styles = StyleSheet.create({})