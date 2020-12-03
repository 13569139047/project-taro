
const path = require('path')
const config = {
  projectName: 'taro-test',
  date: '2020-12-1',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot:`dist/${process.env.TARO_ENV}`, //
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  alias: {
    '@components': path.resolve(__dirname, '..', 'src/components'),
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['taro-ui'],
    router: {
      mode: 'browser' // 或者是 'hash'
      
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },

}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    console.log("目前是开发环境："+process.env.NODE_ENV)
    return merge({}, config, require('./dev'))
  }else if(process.env.NODE_ENV==='testEnv'){
    console.log("目前是测试环境："+process.env.NODE_ENV)
    return merge({}, config, require('./test'))
  } else{
    console.log("目前是生产环境："+process.env.NODE_ENV)
    return merge({}, config, require('./prod'))
  }
  
}
