import React from 'react'
import { View, Text } from '@tarojs/components'

import './footer.scss'

export default class Footer extends React.Component {
  render () {
    return (
      <View className='footer'>
        <View className='footer-content'>
          <Text className='todo-count'>
             我是h5
          </Text>
        </View>
      </View>
    )
  }
}