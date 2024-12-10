import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'


const Tablayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='home' options={{
            headerShown:false,
            tabBarLabel:'Home'
        }}/>
    </Tabs>
  )
}

export default Tablayout