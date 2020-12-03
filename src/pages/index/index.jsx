import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Taro from '@tarojs/taro'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/loading.scss";
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { 

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  clickEvent(){
    Taro.redirectTo({
      url: '/pages/about/about'
    })
  }
  render () {
    return (
      <View className='index'>
        <Text>Hello world2!</Text>
        <AtButton type='primary'  onClick={this.clickEvent}>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle={true}>支持ooo</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle={true}>地方</AtButton>
        <AtButton loading type='primary'>按钮文案d</AtButton>
     
      </View>
    )
  }
}
