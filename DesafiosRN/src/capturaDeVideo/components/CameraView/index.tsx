import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { Camera } from 'expo-camera'

import {CameraViewProps} from './props'
import style from './style'

export default function CameraView({cameraRef,isRecording,onRecord,onStopRecording}:CameraViewProps) {
  return (
    <Camera ref={cameraRef} style={style.container} >
      <View style={style.buttonContainer}>
         <TouchableOpacity onPress={
            isRecording?onStopRecording:onRecord
            }
            style={style.buttonRecord}
         >
            <Text style={style.txt}>
               {isRecording?"Stop Recording" : "start Recording"}
            </Text>
         </TouchableOpacity>
      </View>
    </Camera>
  )
}