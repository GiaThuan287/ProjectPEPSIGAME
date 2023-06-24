import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const QRCode = () => {
  return (
    <QRCodeScanner
    onRead={this.onSuccess}
    flashMode={RNCamera.Constants.FlashMode.torch}
    topContent={
      <Text style={styles.centerText}>
        Go to{' '}
        <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
        your computer and scan the QR code.
      </Text>
    }
    bottomContent={
      <TouchableOpacity style={styles.buttonTouchable}>
        <Text style={styles.buttonText}>OK. Got it!</Text>
      </TouchableOpacity>
    }
  />
  )
}

export default QRCode

const styles = StyleSheet.create({})