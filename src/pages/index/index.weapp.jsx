import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Taro from '@tarojs/taro'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/loading.scss";
import './index.weapp.scss'
import  aimg from '../../static/images/a.png'
export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { 
    Taro.login({
      success: async function (res) {
        console.log(res)
        if (res.code) {
          //发起网络请求
        // let resp=  await Taro.request({
        //     url: 'https://test.com/onLogin',
        //     data: {
        //       code: res.code
        //     }
        //   })
        }
      }
    })
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
         <AtButton type='primary'  onClick={this.clickEvent}>I need Taro UI</AtButton>
        <AtButton type='secondary' circle={true}>地方</AtButton>
        <AtButton loading type='primary'>按钮文案</AtButton>
        <image src={aimg}></image>
      </View>
    )
  }
}
