import { View, Text } from 'react-native'
import React from 'react'

const Ex04 = () => {

    const alunos = ['Luo', 'Yunxi', 'Dylan','Wang']

  return (
    <View>
      {
        alunos.map((item, index) => (
            <Text key={index}>{item}</Text>
        ))
      }
    </View>
  )
}

export default Ex04