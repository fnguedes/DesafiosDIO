import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'

import { Audio, Video } from 'expo-av'

import { VideoPlayerProps } from './props'
import style from './style'

export default function VideoPlayer({video, onShare, onSave, onDiscard}:VideoPlayerProps) {
  return (
    <SafeAreaView style={style.container}>
      <Video
        style={style.video}
        source={ {uri: video.uri} }
        useNativeControls
        isLooping
      />

      <View style={style.menuButton}>
        <Button title='Share' onPress={onShare}/>
        <Button title='Save' onPress={onSave}/>
        <Button title='Discard' onPress={onDiscard}/>
      </View>
    </SafeAreaView>
  )
}